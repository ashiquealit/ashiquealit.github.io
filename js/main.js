document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const sidebar = document.querySelector('.sidebar');
  if (hamburger && navMenu && sidebar) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      sidebar.classList.toggle('active');
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

  // Navigation Scroll Effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
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

  // Navigation Scroll Effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});
