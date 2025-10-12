document.addEventListener('DOMContentLoaded', () => {
    // --- SINGLE SOURCE OF TRUTH ---
    // All publications, talks, and workshops are stored here.
    // To add a new item, just add a new object to this array.
    const allMyWork = [
        // ===================================
        // ==     ACADEMIC SCHOLARSHIP      ==
        // ===================================
        {
            type: 'Journal Article',
            category: 'Academic Scholarship',
            authors: 'Thuppilikkat, Ashique Ali, Janna Akimova, and Priyank Chandra.',
            year: 2025,
            title: 'Dissent, Distance, Dilemmas: ICTs and the Belarusian Diasporic Social Movement Community.',
            publication: 'Proceedings of the ACM on Human-Computer Interaction 9, no. 7, Article CSCW288.',
            pdf: '#', // Add PDF link when available
            tags: ['Technology & Social Movements', 'Belarus'],
            bibtex: `@article{thuppilikkat2025dissent, title={Dissent, Distance, Dilemmas: ICTs and the Belarusian Diasporic Social Movement Community}, author={Thuppilikkat, Ashique Ali and Akimova, Janna and Chandra, Priyank}, journal={Proc. ACM Hum.-Comput. Interact.}, volume={9}, number={7}, year={2025}}`,
            citation: `Thuppilikkat, Ashique Ali, Janna Akimova, and Priyank Chandra. 2025. “Dissent, Distance, Dilemmas: ICTs and the Belarusian Diasporic Social Movement Community.” *Proceedings of the ACM on Human-Computer Interaction* 9, no. 7: CSCW288.`
        },
        {
            type: 'Conference Paper',
            category: 'Academic Scholarship',
            authors: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, Noopur Raval, and Priyank Chandra.',
            year: 2025,
            title: 'Generative Politics and Labour Markets: Unions and Collective Life in a City in Crisis.',
            publication: "In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25).",
            pdf: 'https://doi.org/10.1145/3706598.3713266',
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'],
            bibtex: `@article{thuppilikkat2025generative, title = {Generative Politics and Labour Markets: Unions and Collective Life in a City in Crisis}, author = {Thuppilikkat, Ashique Ali and Dhar, Dipsita and Raval, Noopur and Chandra, Priyank}, year = {2025}, journal = {Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems}, pages = {1--18}, url = {https://dl.acm.org/doi/full/10.1145/3706598.3713266}}`,
            citation: `Thuppilikkat, Ashique Ali, Dipsita Dhar, Noopur Raval, and Priyank Chandra. 2025. “Generative Politics and Labour Markets: Unions and Collective Life in a City in Crisis.” In *Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25)*. https://doi.org/10.1145/3706598.3713266.`
        },
        {
            type: 'Journal Article',
            category: 'Academic Scholarship',
            authors: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, and Priyank Chandra.',
            year: 2024,
            title: 'Union Makes Us Strong: Space, Technology, and On-Demand Ride-Sourcing Digital Labour Platforms.',
            publication: 'Proceedings of the ACM on Human-Computer Interaction 8, no. CSCW2, Article 463.',
            pdf: 'https://doi.org/10.1145/3687002',
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'],
            bibtex: `@article{thuppilikkat2024union, title = {Union Makes Us Strong: Space, Technology, and On-Demand Ridesourcing Digital Labour Platforms}, author = {Thuppilikkat, Ashique Ali and Dhar, Dipsita and Chandra, Priyank}, year = {2024}, journal = {Proceedings of the ACM on Human-Computer Interaction}, volume = {8}, number = {CSCW2}, pages = {1--36}, url = {https://dl.acm.org/doi/abs/10.1145/3687002}}`,
            citation: `Thuppilikkat, Ashique Ali, Dipsita Dhar, and Priyank Chandra. 2024. “Union Makes Us Strong: Space, Technology, and On-Demand Ride-Sourcing Digital Labour Platforms.” *Proceedings of the ACM on Human-Computer Interaction* 8, no. CSCW2: 463. https://doi.org/10.1145/3687002.`
        },
        {
            type: 'Journal Article',
            category: 'Academic Scholarship',
            authors: 'Thuppilikkat, Ashique Ali.',
            year: 2024,
            title: 'Short History of Cooperative Movement in Northern Malabar, Kerala.',
            publication: 'Economic and Political Weekly 59, no. 31: 47-52.',
            pdf: 'https://www.epw.in/journal/2024/31/special-articles/short-history-cooperative-movement-northern.html',
            tags: ['Solidarity Economy'],
            bibtex: `@article{thuppilikkat2024cooperative, title = {A Short History of the Cooperative Movement in Northern Malabar, Kerala}, author = {Thuppilikkat, Ashique Ali}, year = {2024}, journal = {Economic and Political Weekly}, volume = {59}, number = {31}, pages = {47--52}, url = {https://www.epw.in/journal/2024/31/special-articles/short-history-cooperative-movement-northern.html}}`,
            citation: `Thuppilikkat, Ashique Ali. 2024. “Short History of Cooperative Movement in Northern Malabar, Kerala.” *Economic and Political Weekly* 59, no. 31: 47–52. https://www.epw.in/journal/2024/31/special-articles/short-history-cooperative-movement-northern.html.`
        },
        {
            type: 'Journal Article',
            category: 'Academic Scholarship',
            authors: 'Dhar, Dipsita, and Ashique Ali Thuppilikkat.',
            year: 2022,
            title: 'Gendered Labour’s Positions of Vulnerabilities in Digital Labour Platforms and Strategies of Resistance: A Case Study of Women Workers’ Struggle in Urban Company, New Delhi.',
            publication: 'Gender & Development 30, no. 3: 667–86.',
            pdf: 'https://doi.org/10.1080/13552074.2022.2127574',
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'],
            bibtex: `@article{dhar2022gendered, title = {Gendered Labour’s Positions of Vulnerabilities in Digital Labour Platforms and Strategies of Resistance: A Case Study of Women Workers’ Struggle in Urban Company, New Delhi}, author = {Dhar, Dipsita and Thuppilikkat, Ashique Ali}, year = {2022}, journal = {Gender & Development}, volume = {30}, number = {3}, pages = {667--686}, url = {https://www.tandfonline.com/doi/full/10.1080/13552074.2022.2127574}}`,
            citation: `Dhar, Dipsita, and Ashique Ali Thuppilikkat. 2022. “Gendered Labour’s Positions of Vulnerabilities in Digital Labour Platforms and Strategies of Resistance: A Case Study of Women Workers’ Struggle in Urban Company, New Delhi.” *Gender & Development* 30, no. 3: 667–86. https://doi.org/10.1080/13552074.2022.2127574.`
        },
        {
            type: 'Book Chapter',
            category: 'Academic Scholarship',
            authors: 'Dhar, Dipsita, Ashique Ali Thuppilikkat, and Soham Battacharya.',
            year: 2025,
            title: 'Transversal Unionism: Resisting and Navigating a neo liberal city through identity and labour power.',
            publication: 'In *Migrant Labour in the Gig Economy: The intersection of labour digitization, platform capitalism, and migration, and resistance*, edited by Francesco Della Puppa, Dipsita Dhar, and Nicola Monttagna. London: Palgrave.',
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'],
            bibtex: `@incollection{dhar2025transversal, title = {Transversal Unionism: Resisting and Navigating a Neoliberal City through Identity and Labour Power}, author = {Dhar, Dipsita and Thuppilikkat, Ashique Ali and Battacharya, Soham}, year = {2025}, booktitle = {Migrant Labour in the Gig Economy: The Intersection of Labour Digitization, Platform Capitalism, and Migration, and Resistance}, editor = {Della Puppa, Francesco and Dhar, Dipsita and Monttagna, Nicola}, publisher = {Palgrave}, address = {London}}`,
            citation: `Dhar, Dipsita, Ashique Ali Thuppilikkat, and Soham Battacharya. 2025. “Transversal Unionism: Resisting and Navigating a Neoliberal City through Identity and Labour Power.” In *Migrant Labour in the Gig Economy: The Intersection of Labour Digitization, Platform Capitalism, and Migration, and Resistance*, edited by Francesco Della Puppa, Dipsita Dhar, and Nicola Monttagna. London: Palgrave.`
        },
        // ===================================
        // ==      PUBLIC SCHOLARSHIP       ==
        // ===================================
        {
            type: 'Comic Strip',
            category: 'Public Scholarship',
            authors: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, Kadambari K. B., and Priyank Chandra.',
            year: 2024,
            title: 'Riding through the smog: A ‘roznamcha’ of ride-sourcing bike taxis.',
            publication: 'School of Cities, University of Toronto.',
            link: 'https://fair.work/en/fw/blog/riding-throughthe-smog-a-roznamcha-of-ride-sourcing-bike-taxis/',
            tags: ['Technology, Design & Labour Resistance', 'Environmental Hazards & Digital Labour'],
        },
        {
            type: 'Book Chapter',
            category: 'Public Scholarship',
            authors: 'Sanu, V.P., and Ashique Ali Thuppilikkat.',
            year: 2022,
            title: 'Entrenching Caste and Withdrawing State: An Analysis of Modi’s Education Policies.',
            publication: 'In *Education or Exclusion? The Plight of Indian Students*, edited by Dipsita Dhar and Nitheesh Narayanan, 144-55. New Delhi: LeftWord Books.',
            tags: [],
            bibtex: `@incollection{sanu2022entrenching, title = {Entrenching Caste and Withdrawing State: An Analysis of Modi’s Education Policies}, author = {Sanu, V.P. and Thuppilikkat, Ashique Ali}, year = {2022}, booktitle = {Education or Exclusion? The Plight of Indian Students}, editor = {Dhar, Dipsita and Narayanan, Nitheesh}, pages = {144--155}, publisher = {LeftWord Books}, address = {New Delhi}}`,
            citation: `Sanu, V.P., and Ashique Ali Thuppilikkat. 2022. “Entrenching Caste and Withdrawing State: An Analysis of Modi’s Education Policies.” In *Education or Exclusion? The Plight of Indian Students*, edited by Dipsita Dhar and Nitheesh Narayanan, 144–55. New Delhi: LeftWord Books.`
        },
        {
            type: 'Article',
            category: 'Public Scholarship',
            authors: 'Thuppilikkat, Ashique Ali.',
            year: 2023,
            title: 'Far-right Hindu nationalists are using digital propaganda to delegitimize India’s wrestler protests.',
            publication: 'The Conversation.',
            link: 'https://theconversation.com/far-right-hindu-nationalists-are-using-digital-propaganda-to-delegitimize-indias-wrestler-protests-206747',
            tags: ['Technology & Social Movements', 'India'],
        },
        {
            type: 'Article',
            category: 'Public Scholarship',
            authors: 'Thuppilikkat, Ashique Ali.',
            year: 2021,
            title: 'The Indian Farmers’ Movement Has Shattered Narendra Modi’s Strongman Image.',
            publication: 'Jacobin.',
            link: 'https://jacobin.com/2021/11/indian-farmers-movement-neoliberal-farm-bills-modi-bjp',
            tags: ['Technology & Social Movements', 'India'],
        },
        {
            type: 'Article',
            category: 'Public Scholarship',
            authors: 'Thuppilikkat, Ashique Ali, and Angshuman Sharma.',
            year: 2021,
            title: 'Kerala’s Communists Are Showing India a Path Out of Poverty.',
            publication: 'Jacobin.',
            link: 'https://jacobin.com/2021/11/kerala-india-communist-party-farmers-cooperatives-bds-wayanad',
            tags: ['Solidarity Economy'],
        },
        {
            type: 'Article',
            category: 'Public Scholarship',
            authors: 'Thuppilikkat, Ashique Ali.',
            year: 2019,
            title: 'Breaking barriers: Women enter Sabarimala hours after Women’s Wall.',
            publication: 'Indian Cultural Forum.',
            link: 'https://indianculturalforum.in/2019/01/02/women-enter-sabarimala-hours-after-womens-wall/',
            tags: ['Technology & Social Movements', 'India'],
        },
        {
            type: 'Malayalam Article',
            category: 'Public Scholarship',
            authors: 'Thuppilikkat, Ashique Ali, and Arun Kumar P.K.',
            year: 2020,
            title: 'Techno-nationalism and Chinese Cyber Dominance.',
            publication: 'Deshabhimani Weekly 13, no. 51: 6-11.',
            tags: [],
        },
        {
            type: 'Malayalam Article',
            category: 'Public Scholarship',
            authors: 'Thuppilikkat, Ashique Ali, and Arun Kumar P.K.',
            year: 2019,
            title: 'Ours is a struggle for survival.',
            publication: 'Kalakaumudi Weekly 44, no. 35: 16-19.',
            tags: [],
        },
        // ===================================
        // == CONFERENCE PRESENTATIONS      ==
        // ===================================
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Thuppilikkat, Ashique Ali, and Priyank Chandra.',
            title: "Women, Platforms, and State Power: The Lunch Bell Project and Digital Solidarity Economies in Kerala.",
            publication: "Paper presented at the International Network on Digital Labour-8 (INDL) conference, Bologna, Italy, September 10-12, 2025.",
            tags: ['Solidarity Economy']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Chung, Hiu-Fung, Ashique Ali Thuppilikkat, and Kaushar Mahetaji.',
            title: "Delivering ``Broken Promises'' to Save the Planet: Climate Crisis, Breakdowns and Socio-Ecological Infrastructure in Platform Capitalism.",
            publication: "Paper presented at the International Network on Digital Labour-8 (INDL) conference, Bologna, Italy, September 10-12, 2025.",
            tags: ['Technology, Design & Labour Resistance', 'Environmental Hazards & Digital Labour']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Dhar, Dipsita, and Ashique Ali Thuppilikkat.',
            title: "From Riders to Influencers: Exploring the Gigfluencer Phenomenon in Ridesourcing DLPs.",
            publication: "Paper presented at the International Network on Digital Labour-8 (INDL) conference, Bologna, Italy, September 10-12, 2025.",
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Thuppilikkat, Ashique Ali, Aditya Nayak, and Aditi Vashistha.',
            title: "Delivering Inequality: Caste and Labour in Location-based Digital Labour Platforms.",
            publication: "Paper presented at 4s 2025, Seattle, United States of America, September 03-06, 2025.",
            tags: ['Critical Caste Studies in Social Computing', 'Technology, Design & Labour Resistance', 'Methods', 'Unions, Worker Resistance & Digital Labour Platforms']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Thuppilikkat, Ashique Ali.',
            title: "Traditional Trade Unions in Transition: Confronting the Gig Economy.",
            publication: "Paper presented at the Workshop on Labour in the Global South and from a Global South Lens, University of Toronto Scarborough, Canada, April 02, 2025.",
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Thuppilikkat, Ashique Ali.',
            title: "Big Tech and Worker Alternatives.",
            publication: "Paper presented at Cyber-Marx @25: reflecting on 25 years of impact, Centre for Culture and Technology, University of Toronto, Canada, February 28, 2025.",
            tags: ['Solidarity Economy']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Thuppilikkat, Ashique Ali, and Priyank Chandra.',
            title: "Nudging away from protests and unions?: Exploring Dynamics of Power, Agency and Resistance in Online Communities of Auto-rickshaw drivers in On-demand Ridesourcing Digital Labour Platforms.",
            publication: "Paper presented at the International Network on Digital Labour-7 (INDL) conference, Santiago, Chile, October 28-30, 2024.",
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, and Priyank Chandra.',
            title: "Tech-mediated Resistance and Traditional Trade Union: A Case Study of Kolkata App Cab Ola Uber Union, West Bengal.",
            publication: "Paper presented at the BSA Work, Employment and Society Conference, Glasgow, Scotland, September 13-15, 2023.",
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, and Priyank Chandra.',
            title: "Union Makes us Strong: Experiences of Traditional Trade Union Organizing in Ride Sharing Digital Labour Platforms in Kolkata, West Bengal.",
            publication: "Paper presented at the BSA Work, Employment and Society Conference, Glasgow, Scotland, September 13-15, 2023.",
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Dhar, Dipsita, and Ashique Ali Thuppilikkat.',
            title: "Gendered Vulnerabilities in Platform Capitalism and the Strategies of Women's Resistance: A case study from India.",
            publication: "Paper presented at the BSA Work, Employment and Society Conference, Glasgow, Scotland, September 13-15, 2023.",
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Dhar, Dipsita, and Ashique Ali Thuppilikkat.',
            title: "The Survival Strategy among the Malayali Diaspora in Malta: Negotiating through the Gig Economy.",
            publication: "Paper presented at the Second Athens Historical Materialism Conference, Panteion University, Athens, Greece, April 20-23, 2023.",
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Dhar, Dipsita, and Ashique Ali Thuppilikkat.',
            title: "Understanding Gig Economy & Socially Reproductive Labour: A Case Study from India.",
            publication: "Paper presented at the 41st International Labour Process Conference (ILPC), Glasgow, Scotland, April 12-14, 2023.",
            tags: ['Technology, Design & Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Thuppilikkat, Ashique Ali.',
            title: "Understanding Digital Caste Publics: Examining YouTube Vlogging amongst the Brahmin-Savarnas in Kerala.",
            publication: "Paper presented at the Eastern Sociological Society, Baltimore, MD, USA, February 23-26, 2023.",
            tags: ['Critical Caste Studies in Social Computing', 'Methods']
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Thuppilikkat, Ashique Ali.',
            title: "Caste Inequalities and State Responses in the Education Sector: Marginalising Dalit Students’ Access to Education during the Covid-19 Pandemic in India.",
            publication: "Paper presented at Dublin City University’s 5th Annual South Asia Conference, Dublin, Ireland, April 26-29, 2022.",
            tags: []
        },
        {
            type: 'Conference Presentation',
            category: 'Conference Presentations',
            authors: 'Gupta, Paridhi, Ashique Ali Thuppilikkat, Cagdas Dedeoglu and Priyank Chandra.',
            title: "Mediated Activism: Clicks for Justice and Freedom.",
            publication: "Panel presentation at the International Federation of Information Processing (IFIP) 9.4, Lima, Peru, May 25-27, 2022.",
            tags: []
        },
        // ===================================
        // ==        INVITED TALKS          ==
        // ===================================
        {
            type: 'Invited Talk',
            category: 'Invited Talks',
            title: "Unions and Gig Economy.",
            publication: "Invited talk for 'Labour and Media' course, York University, Canada, February 07, 2025.",
            tags: [],
        },
        {
            type: 'Invited Talk',
            category: 'Invited Talks',
            title: "Transport Infrastructures.",
            publication: "Invited talk for 'Platform Politics and Power' course, Faculty of Information, University of Toronto, October 16, 2024.",
            tags: [],
        },
        {
            type: 'Invited Talk',
            category: 'Invited Talks',
            title: "Digital Labour Platforms: A Study of Workplace Resistance and Unionization.",
            publication: "Invited talk at Mahatma Gandhi University, Kerala, India, April 04, 2024.",
            tags: [],
        },
        {
            type: 'Invited Talk',
            category: 'Invited Talks',
            title: "Caste in Canada: Discrimination and Resistance.",
            publication: "Invited talk for the Department of History, University of Toronto, Canada, November 15, 2023.",
            tags: [],
        },
        // ===================================
        // ==      WORKSHOP ORGANIZING      ==
        // ===================================
        {
            type: 'Workshop Organizing',
            category: 'Workshop Organizing',
            authors: 'Thuppilikkat, Ashique Ali, et al.',
            year: 2025,
            title: '(Re) working for Sustainable Futures: Climate Change and Platform Economies.',
            publication: 'In *Proceedings of the ACM SIGCAS/SIGCHI Conference on Computing and Sustainable Societies*.',
            pdf: 'https://doi.org/10.1145/3715335.3737685',
            tags: ['Technology, Design & Labour Resistance', 'Environmental Hazards & Digital Labour'],
            bibtex: `@inproceedings{thuppilikkat2025re, title={(Re) working for Sustainable Futures: Climate Change and Platform Economies}, author={Thuppilikkat, Ashique Ali and Chung, Hiu-Fung and Mahetaji, Kaushar and Singh, Anubha and Tieanklin, Nussara and Rodriguez, Isabella Jaimes and Liu, Jen and Raval, Noopur and Chandra, Priyank}, booktitle={Proceedings of the ACM SIGCAS/SIGCHI Conference on Computing and Sustainable Societies}, pages={848--852}, year={2025}}`,
            citation: `Thuppilikkat, Ashique Ali, Hiu-Fung Chung, Kaushar Mahetaji, Anubha Singh, Nussara Tieanklin, Isabella Jaimes Rodriguez, Jen Liu, Noopur Raval, and Priyank Chandra. 2025. “(Re) working for Sustainable Futures: Climate Change and Platform Economies.” In *Proceedings of the ACM SIGCAS/SIGCHI Conference on Computing and Sustainable Societies*, 848-852. https://doi.org/10.1145/3715335.3737685.`
        },
        {
            type: 'Workshop Organizing',
            category: 'Workshop Organizing',
            authors: 'Fernandes, Kim, et al.',
            year: 2024,
            title: 'Organizing for More Just and Inclusive Futures: A Community Discussion.',
            publication: 'In *Companion Publication of the 2024 Conference on Computer-Supported Cooperative Work and Social Computing*.',
            pdf: 'https://doi.org/10.1145/3678884.3687143',
            tags: ['Technology & Social Movements'],
            bibtex: `@inproceedings{fernandes2024organizing, title = {Organizing for More Just and Inclusive Futures: A Community Discussion}, author = {Fernandes, Kim and Alharbi, Rahaf and Sum, Cella and Kameswaran, Vaishnav and Spektor, Franchesca and Thuppilikkat, Ashique Ali and Petterson, Adrian and Marathe, Megh and Hamidi, Foad and Chandra, Priyank}, year = {2024}, booktitle = {Companion Publication of the 2024 Conference on Computer-Supported Cooperative Work and Social Computing}, pages = {689--692}, url = {https://dl.acm.org/doi/pdf/10.1145/3678884.3687143}}`,
            citation: `Fernandes, Kim, Rahaf Alharbi, Cella Sum, Vaishnav Kameswaran, Franchesca Spektor, Ashique Ali Thuppilikkat, Adrian Petterson, Megh Marathe, Foad Hamidi, and Priyank Chandra. 2024. “Organizing for More Just and Inclusive Futures: A Community Discussion.” In *Companion Publication of the 2024 Conference on Computer-Supported Cooperative Work and Social Computing*, 689–92. New York, NY: Association for Computing Machinery. https://doi.org/10.1145/3678884.3687143.`
        },
        {
            type: 'Workshop Organizing',
            category: 'Workshop Organizing',
            authors: 'Petterson, Adrian, et al.',
            year: 2023,
            title: 'Supporting Social Movements Through HCI and Design.',
            publication: 'In *Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems*.',
            pdf: 'https://doi.org/10.1145/3544549.3573812',
            tags: ['Technology & Social Movements'],
            bibtex: `@inproceedings{petterson2023supporting, title = {Supporting Social Movements through HCI and Design}, author = {Petterson, Adrian and Thuppilikkat, Ashique Ali and Gupta, Paridhi and Klassen, Shamika and Jack, Margaret C. and Liu, Jun and Chandra, Priyank}, year = {2023}, booktitle = {Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems}, pages = {1--5}, url = {https://dl.acm.org/doi/full/10.1145/3544549.3573812}}`,
            citation: `Petterson, Adrian, Ashique Ali Thuppilikkat, Paridhi Gupta, Shamika Klassen, Margaret C. Jack, Jun Liu, and Priyank Chandra. 2023. “Supporting Social Movements Through HCI and Design.” In *Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems*, Article 364, 1–5. New York, NY: Association for Computing Machinery. https://doi.org/10.1145/3544549.3573812.`
        },
    ];

    // --- RENDERING FUNCTIONS ---
    
    /**
     * Creates an HTML list item for a single work object.
     * @param {object} item - The work item from the allMyWork array.
     * @returns {HTMLLIElement} - The generated <li> element.
     */
    function createWorkListItem(item) {
        const li = document.createElement('li');
        li.setAttribute('data-tags', item.tags.join(','));

        let authors = item.authors || '';
        let year = item.year ? `${item.year}.` : '';
        let title = item.title ? `“${item.title}”` : '';

        let linksHTML = '';
        if (item.pdf) linksHTML += `<a href="${item.pdf}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">[PDF]</a>`;
        if (item.link) linksHTML += `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">[Link]</a>`;
        if (item.bibtex) linksHTML += `${linksHTML ? ' | ' : ''}<a href="#" class="text-blue-600 hover:underline bibtex-btn">BibTeX</a>`;
        if (item.citation) linksHTML += `${linksHTML ? ' | ' : ''}<a href="#" class="text-blue-600 hover:underline cite-btn">Cite</a>`;
        
        const tagsHTML = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        li.innerHTML = `
            <p class="font-semibold">${authors} ${year} ${title}</p>
            <p class="italic text-gray-600">${item.publication}</p>
            ${linksHTML ? `<div class="mt-2">${linksHTML}</div>` : ''}
            <div class="bibtex-data hidden">${item.bibtex || ''}</div>
            <div class="cite-data hidden">${item.citation || ''}</div>
            ${tagsHTML ? `<div class="tags-container mt-1">${tagsHTML}</div>` : ''}
        `;
        return li;
    }

    /**
     * Populates the main page sections with content from the allMyWork array.
     */
    function initializePageContent() {
        const containers = {
            'Academic Scholarship': document.querySelector('#academic-scholarship .item-list'),
            'Public Scholarship': document.querySelector('#public-scholarship .item-list'),
            'Conference Presentations': document.querySelector('#conference-presentations .item-list'),
            'Invited Talks': document.querySelector('#invited-talks .item-list'),
            'Workshop Organizing': document.querySelector('#workshop-organising .item-list'),
        };
        // Clear any placeholder content
        Object.values(containers).forEach(c => { if(c) c.innerHTML = ''; });

        allMyWork.forEach(item => {
            const container = containers[item.category];
            if (container) {
                container.appendChild(createWorkListItem(item));
            }
        });

        // After all dynamic content is added, set up copy buttons
        setupCopyButtons(document.body);
    }
    
    // --- INITIALIZATION ---
    initializePageContent();
    
    // --- Page Navigation & Active Link Styling ---
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('header nav a');
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
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
    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // --- About Section Toggle ---
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const aboutSection = document.getElementById('about');
    const aboutNavLink = document.querySelector('a[href="#about"]');
    const aboutNavLinkMobile = document.querySelector('#mobile-menu a[href="#about"]');

    const showAboutSection = (e) => {
        e.preventDefault();
        aboutSection.classList.remove('hidden');
        learnMoreBtn.textContent = 'Hide Details';
        setTimeout(() => aboutSection.scrollIntoView({ behavior: 'smooth' }), 100);
    };

    learnMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const isHidden = aboutSection.classList.toggle('hidden');
        learnMoreBtn.textContent = isHidden ? 'Learn More About Me' : 'Hide Details';
        if (!isHidden) {
            setTimeout(() => aboutSection.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    });
    aboutNavLink.addEventListener('click', showAboutSection);
    aboutNavLinkMobile.addEventListener('click', showAboutSection);

    // --- News Page Functionality ---
    const viewAllNewsBtn = document.getElementById('view-all-news-btn');
    const newsPage = document.getElementById('news-page');
    const closeNewsBtn = document.getElementById('close-news-btn');
    const newsPreviewContainer = document.getElementById('news-preview');
    const fullNewsListContainer = document.getElementById('full-news-list');
    
    if (viewAllNewsBtn) {
        const allNewsItems = Array.from(newsPreviewContainer.children);
        allNewsItems.forEach((item, index) => {
            if (index >= 3) item.classList.add('hidden');
            const clone = item.cloneNode(true);
            clone.classList.remove('hidden');
            fullNewsListContainer.appendChild(clone);
        });

        viewAllNewsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            newsPage.classList.remove('hidden');
            document.body.classList.add('modal-active');
        });

        closeNewsBtn.addEventListener('click', () => {
            newsPage.classList.add('hidden');
            document.body.classList.remove('modal-active');
        });
    }

    // --- BibTeX & Cite Copy Functionality ---
    function setupCopyButtons(container) {
        container.querySelectorAll('.bibtex-btn').forEach(button => {
            button.onclick = function(e) {
                e.preventDefault();
                const bibtexData = this.closest('li').querySelector('.bibtex-data').textContent;
                navigator.clipboard.writeText(bibtexData).then(() => {
                    this.textContent = 'Copied!';
                    setTimeout(() => { this.textContent = 'BibTeX'; }, 2000);
                });
            };
        });

        container.querySelectorAll('.cite-btn').forEach(button => {
            button.onclick = function(e) {
                e.preventDefault();
                const citeData = this.closest('li').querySelector('.cite-data').textContent;
                navigator.clipboard.writeText(citeData).then(() => {
                    this.textContent = 'Copied!';
                    setTimeout(() => { this.textContent = 'Cite'; }, 2000);
                });
            };
        });
    }

    // --- Generic Tab Functionality ---
    function setupTabs(tabSelector, contentSelector, container) {
        const scope = container || document;
        const tabs = scope.querySelectorAll(tabSelector);
        const contents = scope.querySelectorAll(contentSelector);
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active-tab'));
                tab.classList.add('active-tab');
                const targetId = tab.dataset.target;
                contents.forEach(content => content.classList.toggle('hidden', content.id !== targetId));
            });
        });
    }
    setupTabs('.writing-tab', '.writing-content');
    setupTabs('.talks-tab', '.talks-content');

    // --- Research Modal Functionality ---
    const modal = document.getElementById('research-modal');
    const modalContent = document.getElementById('modal-content');

    document.querySelectorAll('.modal-open').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectTag = this.getAttribute('data-project');
            const subprojects = this.getAttribute('data-subprojects');
            const relatedWork = allMyWork.filter(item => item.tags.includes(projectTag));
            
            const categories = relatedWork.reduce((acc, item) => {
                (acc[item.category] = acc[item.category] || []).push(item);
                return acc;
            }, {});

            let contentHTML = `<h2 class="text-2xl font-bold font-serif mb-6">${projectTag}</h2>`;
            if (subprojects) {
                const subprojectList = ['All', ...subprojects.split(';')];
                contentHTML += `<div class="mb-6 border-b border-gray-200"><nav class="-mb-px flex space-x-6 overflow-x-auto">`;
                subprojectList.forEach((sub, index) => {
                    contentHTML += `<button class="subproject-tab whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm ${index === 0 ? 'active-tab' : 'text-gray-500 border-transparent'}" data-subproject="${sub}">${sub}</button>`;
                });
                contentHTML += `</nav></div>`;
            }

            contentHTML += '<div class="space-y-8 modal-items-container">';
            if (relatedWork.length === 0) {
                contentHTML += '<p>No related work found for this project.</p>';
            } else {
                 const categoryOrder = ['Academic Scholarship', 'Public Scholarship', 'Conference Presentations', 'Invited Talks', 'Workshop Organizing'];
                 for (const title of categoryOrder) {
                     if (categories[title]) {
                         contentHTML += `<div><h4 class="text-lg font-semibold font-serif text-gray-700 mb-4">${title}</h4><ul class="item-list">`;
                         categories[title].forEach(item => {
                            // Directly create the li element to append later
                         });
                         contentHTML += `</ul></div>`;
                     }
                 }
            }
            contentHTML += '</div>';
            modalContent.innerHTML = contentHTML;

            // Now append the actual LI elements
            const categoryOrder = ['Academic Scholarship', 'Public Scholarship', 'Conference Presentations', 'Invited Talks', 'Workshop Organizing'];
            for (const title of categoryOrder) {
                if (categories[title]) {
                    const listEl = Array.from(modalContent.querySelectorAll('h4')).find(h4 => h4.textContent === title).nextElementSibling;
                    categories[title].forEach(item => listEl.appendChild(createWorkListItem(item)));
                }
            }
            
            setupCopyButtons(modalContent);
            if (subprojects) setupModalSubprojectFilter();
            toggleModal();
        });
    });
    
    function setupModalSubprojectFilter() {
        const tabs = modalContent.querySelectorAll('.subproject-tab');
        const allModalItems = modalContent.querySelectorAll('.modal-items-container li');
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                tabs.forEach(t => t.classList.remove('active-tab'));
                e.target.classList.add('active-tab');
                const filterTag = e.target.dataset.subproject;
                allModalItems.forEach(item => {
                    const itemTags = item.dataset.tags || '';
                    const parentDiv = item.closest('div');
                    item.style.display = (filterTag === 'All' || itemTags.includes(filterTag)) ? '' : 'none';
                });
            });
        });
    }

    // --- ACCESSIBLE MODAL & FOCUS TRAP ---
    function toggleModal() {
        modal.classList.toggle('opacity-0');
        modal.classList.toggle('pointer-events-none');
        document.body.classList.toggle('modal-active');

        if (document.body.classList.contains('modal-active')) {
            modal.addEventListener('keydown', trapFocus);
            const focusable = modal.querySelectorAll('button, [href]');
            if (focusable.length) focusable[0].focus();
        } else {
            modal.removeEventListener('keydown', trapFocus);
        }
    }

    function trapFocus(e) {
        if (e.key !== 'Tab') return;
        const focusableElements = Array.from(modal.querySelectorAll('button, [href]'));
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }

    document.querySelector('.modal-overlay').addEventListener('click', toggleModal);
    document.querySelector('.modal-close').addEventListener('click', toggleModal);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && document.body.classList.contains('modal-active') && !newsPage.classList.contains('hidden')) {
            newsPage.classList.add('hidden');
            document.body.classList.remove('modal-active');
        } else if (e.key === 'Escape' && document.body.classList.contains('modal-active')) {
            toggleModal();
        }
    });
});
