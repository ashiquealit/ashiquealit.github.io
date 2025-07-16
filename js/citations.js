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

  function updatePublications() {
    // Get selected categories
    const selectedCategories = Array.from(filterCategories)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    // Get sort order
    const sortOrder = sortYear.value;

    // Collect and sort publications
    const publicationArray = Array.from(publications);
    publicationArray.sort((a, b) => {
      const yearA = parseInt(a.getAttribute('data-year'));
      const yearB = parseInt(b.getAttribute('data-year'));
      return sortOrder === 'asc' ? yearA - yearB : yearB - yearA;
    });

    // Clear current display
    subcategories.forEach(subcategory => {
      subcategory.querySelectorAll('.publication-item').forEach(item => {
        item.remove();
      });
    });

    // Group publications by category
    const categoryGroups = {
      'peer-reviewed': document.querySelector('.subcategory:nth-child(1)'),
      'extended-abstracts': document.querySelector('.subcategory:nth-child(2)'),
      'book-chapters': document.querySelector('.subcategory:nth-child(3)'),
      'public-facing': document.querySelector('.subcategory:nth-child(4)')
    };

    // Show/hide subcategories and append sorted publications
    publicationArray.forEach(pub => {
      const category = pub.getAttribute('data-category');
      if (selectedCategories.includes(category)) {
        categoryGroups[category].appendChild(pub);
        categoryGroups[category].style.display = 'block';
      } else {
        pub.remove();
      }
    });

    // Hide empty subcategories
    Object.values(categoryGroups).forEach(subcategory => {
      if (!subcategory.querySelector('.publication-item')) {
        subcategory.style.display = 'none';
      }
    });
  }

  // Event listeners for sorting and filtering
  sortYear.addEventListener('change', updatePublications);
  filterCategories.forEach(checkbox => {
    checkbox.addEventListener('change', updatePublications);
  });

  // Initial update
  updatePublications();
});
