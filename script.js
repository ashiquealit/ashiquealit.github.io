// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });


    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

  // In script.js
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const year = button.textContent;
        document.querySelectorAll('.publication-item').forEach(item => {
            const itemYear = item.querySelector('.pub-date').textContent;
            item.style.display = (year === 'All' || itemYear === year) ? 'flex' : 'none';
        });
    });
});

<script>
function copyChicagoCitation(citation) {
    navigator.clipboard.writeText(citation);
    alert('Chicago citation copied to clipboard!');
}

function copyBibtex(bibtex) {
    navigator.clipboard.writeText(bibtex);
    alert('BibTeX entry copied to clipboard!');
}
</script>
