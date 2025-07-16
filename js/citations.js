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
});
