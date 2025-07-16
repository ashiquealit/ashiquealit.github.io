document.addEventListener('DOMContentLoaded', function() {
  // Citation toggle
  document.querySelectorAll('.toggle-citation').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const citation = document.getElementById(targetId);
      const isVisible = citation.style.display === 'block';
      citation.style.display = isVisible ? 'none' : 'block';
      this.textContent = isVisible ? 'Show Citation' : 'Hide Citation';
    });
  });

  // BibTeX toggle
  document.querySelectorAll('.bibtex-btn').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const bibtex = document.getElementById(targetId);
      const isVisible = bibtex.style.display === 'block';
      bibtex.style.display = isVisible ? 'none' : 'block';
      this.textContent = isVisible ? 'Show BibTeX' : 'Hide BibTeX';
    });
  });

  // Year filter
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
      const year = this.getAttribute('data-year');
      document.querySelectorAll('.publication-item').forEach(item => {
        if (year === 'all' || item.getAttribute('data-year') === year) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});
