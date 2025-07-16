document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Publication Filter
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      const year = button.textContent.trim();
      document.querySelectorAll('.publication-item').forEach(item => {
        const itemYear = item.getAttribute('data-year');
        item.style.display = (year === 'All' || itemYear === year) ? '' : 'none';
      });
    });
  });

  // Collapsible Sections
  document.querySelectorAll('.collapsible h2').forEach(header => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  });
});
