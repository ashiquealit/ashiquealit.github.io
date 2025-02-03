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
                const itemYear = item.querySelector('.pub-date').textContent.trim();
                item.style.display = (year === 'All' || itemYear === year) ? '' : 'none';
            });
        });
    });
});

// Citation Copy Functions
function copyChicagoCitation(citation) {
    navigator.clipboard.writeText(citation)
        .then(() => alert('Chicago citation copied to clipboard!'))
        .catch(err => console.error('Failed to copy citation:', err));
}

function copyBibtex(bibtex) {
    navigator.clipboard.writeText(bibtex)
        .then(() => alert('BibTeX entry copied to clipboard!'))
        .catch(err => console.error('Failed to copy BibTeX:', err));
}
