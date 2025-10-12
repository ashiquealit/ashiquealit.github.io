document.addEventListener('DOMContentLoaded', () => {
    // --- Page Navigation & Active Link Styling ---
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('header nav a');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
    
    // --- Mobile Menu ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinksMobile = mobileMenu.querySelectorAll('a');

    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // --- About Section Toggle ---
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const aboutSection = document.getElementById('about');
    const aboutNavLink = document.querySelector('a[href="#about"]');
    const aboutNavLinkMobile = document.querySelector('#mobile-menu a[href="#about"]');

    learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isHidden = aboutSection.classList.toggle('hidden');
        learnMoreBtn.textContent = isHidden ? 'Learn More About Me' : 'Hide Details';
        if (!isHidden) {
            setTimeout(() => {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    });

    const handleAboutLinkClick = (e) => {
        e.preventDefault();
        aboutSection.classList.remove('hidden');
        learnMoreBtn.textContent = 'Hide Details';
        setTimeout(() => {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    aboutNavLink.addEventListener('click', handleAboutLinkClick);
    aboutNavLinkMobile.addEventListener('click', handleAboutLinkClick);


    // --- News Page Functionality ---
    const viewAllNewsBtn = document.getElementById('view-all-news-btn');
    const newsPage = document.getElementById('news-page');
    const closeNewsBtn = document.getElementById('close-news-btn');
    const newsPreviewContainer = document.getElementById('news-preview');
    const fullNewsListContainer = document.getElementById('full-news-list');
    
    if (newsPreviewContainer) {
        const allNewsItems = Array.from(newsPreviewContainer.children);

        allNewsItems.forEach((item, index) => {
            if (index >= 3) { item.classList.add('hidden'); } 
            else { item.classList.remove('hidden'); }
        });

        if (fullNewsListContainer) {
            fullNewsListContainer.innerHTML = '';
            allNewsItems.forEach(item => {
                const clone = item.cloneNode(true);
                clone.classList.remove('hidden');
                fullNewsListContainer.appendChild(clone);
            });
        }
    }
    
    if (viewAllNewsBtn) {
        viewAllNewsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            newsPage.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        });
    }
    
    if(closeNewsBtn) {
        closeNewsBtn.addEventListener('click', () => {
            newsPage.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
    }


    // --- BibTeX & Cite Copy Functionality ---
    function setupCopyButtons(container) {
        container.querySelectorAll('.bibtex-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const bibtexData = this.closest('li').querySelector('.bibtex-data').textContent;
                navigator.clipboard.writeText(bibtexData).then(() => {
                    this.textContent = 'Copied!';
                    setTimeout(() => { this.textContent = 'BibTeX'; }, 2000);
                }).catch(err => console.error('Failed to copy: ', err));
            });
        });

         container.querySelectorAll('.cite-btn').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const citeData = this.closest('li').querySelector('.cite-data').textContent;
                navigator.clipboard.writeText(citeData).then(() => {
                    this.textContent = 'Copied!';
                    setTimeout(() => { this.textContent = 'Cite'; }, 2000);
                }).catch(err => console.error('Failed to copy: ', err));
            });
        });
    }
    
    setupCopyButtons(document);


    // --- Generic Tab Functionality ---
    function setupTabs(tabSelector, contentSelector, container) {
        const scope = container || document;
        const tabs = scope.querySelectorAll(tabSelector);
        const contents = scope.querySelectorAll(contentSelector);

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => {
                    t.classList.remove('active-tab');
                    t.classList.add('text-gray-500', 'border-transparent', 'hover:text-gray-700', 'hover:border-gray-300');
                });
                tab.classList.add('active-tab');
                tab.classList.remove('text-gray-500', 'border-transparent');
                
                const targetId = tab.dataset.target;
                contents.forEach(content => {
                    content.classList.toggle('hidden', content.id !== targetId);
                });
            });
        });
    }

    setupTabs('.writing-tab', '.writing-content');
    setupTabs('.talks-tab', '.talks-content');


    // --- Research Modal Functionality ---
    const modal = document.getElementById('research-modal');
    const modalContent = document.getElementById('modal-content');
    const allWorkItems = document.querySelectorAll('#writing li, #talks li');

    document.querySelectorAll('.modal-open').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectTag = this.getAttribute('data-project');
            const subprojects = this.getAttribute('data-subprojects');

            modalContent.innerHTML = `<h2 class="text-2xl font-bold font-serif mb-6">${projectTag}</h2>`;
            
            let itemsContainer;
            let tabNavContainer = null;

            if (subprojects) {
                const subprojectList = ['All', ...subprojects.split(';')];
                tabNavContainer = document.createElement('div');
                tabNavContainer.className = 'mb-6 border-b border-gray-200';
                const nav = document.createElement('nav');
                nav.className = '-mb-px flex space-x-6 overflow-x-auto';
                nav.setAttribute('aria-label', 'Tabs');

                subprojectList.forEach((sub, index) => {
                    const tabButton = document.createElement('button');
                    tabButton.className = 'tab-button subproject-tab whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm';
                    if (index === 0) {
                        tabButton.classList.add('active-tab');
                    } else {
                        tabButton.classList.add('text-gray-500', 'border-transparent', 'hover:text-gray-700', 'hover:border-gray-300');
                    }
                    tabButton.dataset.subproject = sub;
                    tabButton.textContent = sub;
                    nav.appendChild(tabButton);
                });
                tabNavContainer.appendChild(nav);
                modalContent.appendChild(tabNavContainer);
            }
            
            itemsContainer = document.createElement('div');
            itemsContainer.className = 'space-y-8 modal-items-container';
            modalContent.appendChild(itemsContainer);
            
            const categories = {
                'Academic Publications': [], 'Public Scholarship': [], 'Conference Presentations': [], 'Invited Talks': [], 'Workshop Organising': []
            };

            allWorkItems.forEach(item => {
                const itemTags = item.getAttribute('data-tags');
                if (itemTags && itemTags.includes(projectTag)) {
                     const clone = item.cloneNode(true);
                     clone.style.display = 'block';
                     const writingSection = item.closest('#writing');
                     const talksSection = item.closest('#talks');
                     if (writingSection) {
                         if(item.closest('#academic-scholarship')) categories['Academic Publications'].push(clone);
                         else if(item.closest('#public-scholarship')) categories['Public Scholarship'].push(clone);
                     } else if (talksSection) {
                         if(item.closest('#conference-presentations')) categories['Conference Presentations'].push(clone);
                         else if(item.closest('#invited-talks')) categories['Invited Talks'].push(clone);
                         else if(item.closest('#workshop-organising')) categories['Workshop Organising'].push(clone);
                     }
                }
            });

            itemsContainer.innerHTML = ''; // Clear previous content
            let foundItems = false;
            for (const [categoryTitle, items] of Object.entries(categories)) {
                if (items.length > 0) {
                    foundItems = true;
                    const categoryContainer = document.createElement('div');
                    const titleEl = document.createElement('h4');
                    titleEl.className = 'text-lg font-semibold font-serif text-gray-700 mb-4';
                    titleEl.textContent = categoryTitle;
                    
                    const listEl = document.createElement('ul');
                    listEl.className = 'item-list';
                    items.forEach(item => listEl.appendChild(item));
                    
                    categoryContainer.appendChild(titleEl);
                    categoryContainer.appendChild(listEl);
                    itemsContainer.appendChild(categoryContainer);
                }
            }

            if (!foundItems) {
                itemsContainer.innerHTML = '<p>No related work found for this project tag.</p>';
            }

            if (tabNavContainer) {
                 tabNavContainer.querySelector('nav').addEventListener('click', (ev) => {
                    if (ev.target.classList.contains('subproject-tab')) {
                        tabNavContainer.querySelectorAll('.subproject-tab').forEach(t => {
                            t.classList.remove('active-tab');
                            t.classList.add('text-gray-500', 'border-transparent');
                        });
                        ev.target.classList.add('active-tab');
                        ev.target.classList.remove('text-gray-500', 'border-transparent');
                        
                        const filterTag = ev.target.dataset.subproject;
                        const allModalItems = itemsContainer.querySelectorAll('li');
                        
                        allModalItems.forEach(item => {
                            const itemTags = item.dataset.tags || '';
                            item.style.display = (filterTag === 'All' || itemTags.includes(filterTag)) ? 'block' : 'none';
                        });
                    }
                });
            }
            
            setupCopyButtons(itemsContainer);
            toggleModal();
        });
    });

    document.querySelector('.modal-overlay').addEventListener('click', toggleModal);
    document.querySelector('.modal-close').addEventListener('click', toggleModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
            toggleModal();
        }
    });

    function toggleModal() {
        const body = document.querySelector('body');
        modal.classList.toggle('opacity-0');
        modal.classList.toggle('pointer-events-none');
        body.classList.toggle('modal-active');
    }
});

