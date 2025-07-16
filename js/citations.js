document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('publications-container');
  const checkboxes = document.querySelectorAll('.filter-category');
  const sortYear = document.createElement('select');
  sortYear.id = 'sort-year';
  sortYear.innerHTML = `
    <option value="desc">Sort by Year (Newest First)</option>
    <option value="asc">Sort by Year (Oldest First)</option>
  `;
  document.querySelector('.filter-section').prepend(sortYear);

  function updatePublications() {
    const selectedCategories = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    const sortOrder = sortYear.value;

    // Group publications by year
    const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => 
      sortOrder === 'asc' ? a - b : b - a);
    container.innerHTML = '';

    years.forEach(year => {
      const yearPublications = publications.filter(pub => 
        pub.year === year && selectedCategories.includes(pub.category));
      if (yearPublications.length > 0) {
        const yearSection = document.createElement('div');
        yearSection.className = 'subcategory';
        yearSection.innerHTML = `<h3>${year}</h3>`;
        yearPublications.forEach(pub => {
          yearSection.innerHTML += pub.html;
        });
        container.appendChild(yearSection);
      }
    });

    // Re-attach citation toggle listeners
    document.querySelectorAll('.toggle-citation').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const citation = document.getElementById(targetId);
        citation.style.display = citation.style.display === 'none' ? 'block' : 'none';
        button.textContent = citation.style.display === 'none' ? 'Show Citation' : 'Hide Citation';
      });
    });
  }

  sortYear.addEventListener('change', updatePublications);
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updatePublications);
  });

  updatePublications();
});
