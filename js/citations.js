document.addEventListener('DOMContentLoaded', () => {
  // Citation toggle functionality
  const toggleButtons = document.querySelectorAll('.toggle-citation');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const citation = document.getElementById(targetId);
      citation.style.display = citation.style.display === 'none' ? 'block' : 'none';
      button.textContent = citation.style.display === 'none' ? 'Show Citation' : 'Hide Citation';
    });
  });

  // Sorting and filtering
  const publications = document.querySelectorAll('.publication-item');
  const sortYear = document.getElementById('sort-year');
  const filterCategories = document.querySelectorAll('.filter-category');
  const subcategories = document.querySelectorAll('.subcategory');

  // Store original publication order for reference
  const publicationArray = Array.from(publications);
  const categoryGroups = {
    'peer-reviewed': document.querySelector('.subcategory:nth-child(1)'),
    'extended-abstracts': document.querySelector('.subcategory:nth-child(2)'),
    'book-chapters': document.querySelector('.subcategory:nth-child(3)'),
    'public-facing': document.querySelector('.subcategory:nth-child(4)')
  };

  function updatePublications() {
    // Get selected categories
    const selectedCategories = Array.from(filterCategories)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    // Get sort order
    const sortOrder = sortYear.value;

    // Clear current display
    subcategories.forEach(subcategory => {
      subcategory.querySelectorAll('.publication-item').forEach(item => item.remove());
      subcategory.style.display = 'none'; // Hide all subcategories initially
    });

    // Sort publications
    const sortedPublications = [...publicationArray].sort((a, b) => {
      const yearA = parseInt(a.getAttribute('data-year'));
      const yearB = parseInt(b.getAttribute('data-year'));
      return sortOrder === 'asc' ? yearA - yearB : yearB - yearA;
    });

    // Append publications to their respective categories if selected
    sortedPublications.forEach(pub => {
      const category = pub.getAttribute('data-category');
      if (selectedCategories.includes(category)) {
        categoryGroups[category].appendChild(pub.cloneNode(true));
        categoryGroups[category].style.display = 'block'; // Show subcategory if it has publications
      }
    });

    // Re-attach citation toggle listeners to newly appended publications
    const newToggleButtons = document.querySelectorAll('.toggle-citation');
    newToggleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const citation = document.getElementById(targetId);
        citation.style.display = citation.style.display === 'none' ? 'block' : 'none';
        button.textContent = citation.style.display === 'none' ? 'Show Citation' : 'Hide Citation';
      });
    });
  }

  // Event listeners for sorting and filtering
  sortYear.addEventListener('change', updatePublications);
  filterCategories.forEach(checkbox => {
    checkbox.addEventListener('change', updatePublications);
  });

  // Initial update to show all publications
  updatePublications();
});
