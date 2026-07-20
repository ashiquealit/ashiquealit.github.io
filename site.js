/* Portfolio site — implemented from "Portfolio Site.dc.html" (Claude Design).
   Vanilla JS single-page app with hash routing. No build step. */
(function () {
  'use strict';

  /* ---------------- Data ---------------- */

  var P = 'https://ashiquealit.github.io/';
  var EMAIL = 'ashique.thuppilikkat@mail.utoronto.ca';

  var projects = [
    { num: '01', key: true, tag: 'CSCW · HCI', img: 'auto-rickshaw driver, city street', imgSrc: 'images/driver.jpg', match: ['Labour Resistance', 'Worker Resistance & Digital Labour Platforms', 'Environmental Hazards & Digital Labour'],
      title: 'Technology & Labour Resistance',
      card: 'Digital tools in worker organisation against algorithmic management.',
      lede: 'Investigating the role of digital tools in worker organization and resistance against algorithmic management.',
      overview: 'This research stream investigates the dual role of technology as a tool for both managerial control and worker empowerment. My work focuses on how workers on digital labour platforms navigate algorithmic management, surveillance, and precarious conditions. I explore the innovative ways workers and traditional unions are adopting and adapting digital tools — from secure messaging apps to social media — to organize, build solidarity, and launch collective actions for better pay, rights, and working conditions. A key focus is understanding how to design technologies that genuinely support and amplify worker-led resistance.',
      threads: [
        { t: 'Unions & Digital Labour Platforms', sub: 'unions', d: 'Analyses how workers on location-based digital labour platforms and their unions use technology to organise and mobilise resistance.' },
        { t: 'Environmental Hazards & Digital Labour', sub: 'environment', d: 'Examines how environmental hazards and climate change intersect with work on digital labour platforms, focusing on the disproportionate impacts of risks such as pollution and extreme weather on gig workers.' }],
      writings: [
        { t: 'Generative Politics and Labour Markets: Unions and Collective Life in a City in Crisis', v: 'CHI ’25' },
        { t: 'Union Makes Us Strong: Space, Technology, and On-Demand Ride-Sourcing Digital Labour Platforms', v: 'PACM HCI 8, CSCW2' },
        { t: 'Gendered Labour’s Positions of Vulnerabilities in Digital Labour Platforms and Strategies of Resistance', v: 'Gender & Development 30(3)' },
        { t: 'Transversal Unionism: Resisting and Navigating a Neoliberal City', v: 'Migrant Labour in the Gig Economy (Springer, 2025)' }] },
    { num: '02', tag: 'DIASPORA', img: 'protestors, social movement', imgSrc: 'images/socialmovement.jpg', match: ['Social Movements', 'Belarus'],
      title: 'Technology & Social Movements',
      card: 'How technology is used by and against movements & diasporas.',
      lede: 'Examining how technology is used by and against social movements, focusing on diasporic communities.',
      overview: 'This area of my research examines the complex relationship between digital technologies and contemporary social movements. I investigate how activists leverage ICTs for mobilization, coordination, and narrative-building, particularly within diasporic communities that rely on technology to maintain connections and organize across borders. Concurrently, I analyze how state and non-state actors deploy digital propaganda, surveillance, and misinformation to suppress dissent and delegitimize protests. My work in this stream spans case studies from Belarus, Hong Kong, and India, offering a comparative perspective on the global challenges facing digital activism.',
      threads: [
        { t: 'Belarus', d: 'Focuses on the role of ICTs in organizing and sustaining the diasporic social movement community following pro-democracy protests.' },
        { t: 'India', d: 'Examines the use of digital propaganda by the far-right to counter and delegitimize social protests and mobilizations.' },
        { t: 'Hong Kong', d: 'Investigates the use of decentralized digital tools and strategies by protestors to coordinate and evade state surveillance.' }],
      writings: [
        { t: 'Risk, Technology, and Resistance: The Hong Kong Diaspora Amid Transnational Repression', v: 'PACM HCI 10, no. 2' },
        { t: 'Dissent, Distance, Dilemmas: ICTs and the Belarusian Diasporic Social Movement Community', v: 'PACM HCI 9, CSCW288' },
        { t: 'Far-right Hindu nationalists are using digital propaganda to delegitimize India’s wrestler protests', v: 'The Conversation, 2023' },
        { t: 'Supporting Social Movements Through HCI and Design', v: 'CHI EA ’23' }] },
    { num: '03', tag: 'CASTE · TECH', img: 'activists, caste-equality protest', imgSrc: 'images/casteproject.jpg', match: ['Caste'],
      title: 'Critical Caste Studies',
      card: 'Caste hierarchies in digital space — and tech that challenges them.',
      lede: 'Analyzing the reproduction of caste hierarchies in digital spaces and potentials for technology to challenge them.',
      overview: 'This research brings a critical caste studies lens to the field of technology and social computing, examining how caste-based graded hierarchies and caste-pride are reproduced, amplified, and sometimes challenged in digital spaces. It examines how caste-privileged groups construct and sustain their narratives on platforms such as YouTube, and how caste relations are embedded within the gig economy. A central goal is to develop new methodological approaches within HCI and CSCW to recognize and address caste in technology design, ensuring that digital futures are not built on centuries-old structures of oppression.',
      threads: [
        { t: 'Critical Caste and Technology Studies', d: 'Develops and adapts research methods to study and surface the logic of caste operating within the digital economy, platforms and online communities.' },
        { t: 'Caste and Education Policy', d: 'Examines how educational policies and access to education are shaped by caste-based graded hierarchy, particularly in the context of state responses and the digital divide.' }],
      writings: [
        { t: '“Studying Up” through Digital Ethnography: The Case of Conservative Caste Enclaves', v: 'CHI ’26' },
        { t: 'Entrenching Caste and Withdrawing State: An Analysis of Modi’s Education Policies', v: 'Education or Exclusion? (LeftWord Books, 2022)' }] },
    { num: '04', tag: 'COOPERATIVES', img: 'worker in a banana market', imgSrc: 'images/coopmarket.jpg', match: ['Solidarity', 'Cooperative'],
      title: 'Solidarity Economies',
      card: 'Cooperative models & digital tools for social solidarity.',
      lede: 'Exploring cooperative models and digital tools that foster economic and social solidarity.',
      overview: 'This research explores alternatives to the extractive logics of platform capitalism by centring solidarity economies. It examines historical and contemporary cooperative movements from the majority world — such as those in Kerala, India — to draw insights for designing worker-owned and democratically governed digital platforms. Drawing from alternative economic traditions rooted in equity, collective ownership, and participatory governance, the project reimagines socio-technical practices and labour relations to build more just digital ecosystems for workers.',
      threads: [
        { t: 'Digital Solidarity Economies', d: 'Examines the potential of digital solidarity economies as alternatives to traditional, venture-capital-funded digital labour platforms.' },
        { t: 'Cooperative Movements', d: 'Draws on historical case studies, such as the cooperative movement in Kerala, to inform the design and governance of contemporary digital solidarity economies.' }],
      writings: [
        { t: 'Kudumbashree’s Lunch Bell project and digital solidarity economy in Kerala, India', v: 'Internet Policy Review 15(1)' },
        { t: 'Short History of Cooperative Movement in Northern Malabar, Kerala', v: 'Economic and Political Weekly 59(31)' },
        { t: 'Lessons from Workers Governing Technologies', v: 'Creative Labour Critical Futures, 2026' }] }
  ];

  /* Sub-project pages of Technology & Labour Resistance (projects[0]).
     matchAny keys are checked against every tag of an item (not just the first). */
  var SUBS = {
    unions: {
      key: 'unions', parent: 0, tag: 'UNIONS · PLATFORM LABOUR',
      title: 'Unions & Digital Labour Platforms',
      imgSrc: 'images/driver.jpg', img: 'auto-rickshaw driver, city street',
      lede: 'How workers on location-based platforms and their unions use technology to organise and mobilise resistance.',
      overview: 'This sub-project analyses how workers on location-based digital labour platforms — auto-rickshaw and app-cab drivers, delivery riders and other gig workers — and their unions use technology to organise and mobilise resistance. It follows how traditional trade unions adapt digital tools, from secure messaging apps to social media, to build solidarity, launch collective actions, and negotiate for better pay, rights, and working conditions under algorithmic management.',
      matchAny: ['Unions, Worker Resistance & Digital Labour Platforms'],
      sibling: 'environment'
    },
    environment: {
      key: 'environment', parent: 0, tag: 'CLIMATE · GIG WORK',
      title: 'Environmental Hazards & Digital Labour',
      imgSrc: 'images/environment.jpg', img: 'street market scene, gig work in the city',
      lede: 'How environmental hazards and climate change intersect with platform work — and the disproportionate risks gig workers carry.',
      overview: 'This sub-project examines how environmental hazards and climate change intersect with work on digital labour platforms, focusing on the disproportionate impacts of risks such as air pollution and extreme weather on gig workers. Alongside the scholarship, the project works directly with worker communities: I have conducted two health camps for gig workers — one in Delhi and one in Kolkata.',
      matchAny: ['Environmental Hazards & Digital Labour'],
      sibling: 'unions',
      fieldwork: {
        note: 'Free health camps for gig workers affected by high air pollution in New Delhi (28 November 2024) and the Kolkata heatwave (21 May 2026).',
        camps: [
          { t: 'Health Camp — Delhi', d: 'Health camp organised for platform gig workers in Delhi.', imgSrc: 'images/healthcamp-delhi-1.jpg', imgs: ['images/healthcamp-delhi-1.jpg','images/healthcamp-delhi-2.jpg','images/healthcamp-delhi-3.jpg','images/healthcamp-delhi-4.jpg'] },
          { t: 'Health Camp — Kolkata', d: 'Health camp organised for platform gig workers in Kolkata.', imgSrc: 'images/healthcamp-kolkata-1.jpg', imgs: ['images/healthcamp-kolkata-1.jpg','images/healthcamp-kolkata-2.jpg','images/healthcamp-kolkata-3.jpg','images/healthcamp-kolkata-4.jpg'] }
        ]
      }
    }
  };

  var writingAcademic = [
    { group: 'Journal Articles', items: [
      { t: 'Kei, Noah, Ashique Ali Thuppilikkat, Hiu-Fung Chung, and Priyank Chandra. 2026. “Risk, Technology, and Resistance: The Hong Kong Diaspora Amid Transnational Repression.”', v: 'Proceedings of the ACM on Human-Computer Interaction 10, no. 2: 1–26.', links: [{ l: 'DOI', h: 'https://doi.org/10.1145/3788070' }], tags: ['Technology & Social Movements', 'Hong Kong'],
        bib: '@article{kei2026risk, title={Risk, Technology, and Resistance: The Hong Kong Diaspora Amid Transnational Repression}, author={Kei, Noah and Thuppilikkat, Ashique Ali and Chung, Hiu-Fung and Chandra, Priyank}, journal={Proceedings of the ACM on Human-Computer Interaction}, volume={10}, number={2}, pages={1--26}, year={2026}, publisher={ACM New York, NY}}',
        cite: 'Kei, Noah, Ashique Ali Thuppilikkat, Hiu-Fung Chung, and Priyank Chandra. 2026. “Risk, Technology, and Resistance: The Hong Kong Diaspora Amid Transnational Repression.” Proceedings of the ACM on Human-Computer Interaction 10, no. 2: 1–26. https://doi.org/10.1145/3788070.' },
      { t: 'Thuppilikkat, Ashique Ali, Aakash Solanki, and Priyank Chandra. 2026. ““Studying Up” through Digital Ethnography: The Case of Conservative Caste Enclaves.”', v: 'In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI ’26).', links: [{ l: 'PDF', h: P + 'publications/thuppilikkat-2026-studyingup.pdf' }, { l: 'DOI', h: 'https://doi.org/10.1145/3772318.3791530' }], tags: ['Critical Caste & Technology Studies'],
        bib: '@inproceedings{thuppilikkat2026studying,\n  title = {“Studying Up” through Digital Ethnography: The Case of Conservative Caste Enclaves},\n  author = {Thuppilikkat, Ashique Ali and Solanki, Aakash and Chandra, Priyank},\n  year = {2026},\n  booktitle = {Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI ’26)},\n  pages = {1--18},\n  doi = {10.1145/3772318.3791530},\n  publisher = {ACM},\n  address = {New York, NY, USA},\n  location = {Barcelona, Spain}\n}',
        cite: 'Thuppilikkat, Ashique Ali, Aakash Solanki, and Priyank Chandra. 2026. ““Studying Up” through Digital Ethnography: The Case of Conservative Caste Enclaves.” In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI ’26), April 13–17, 2026, Barcelona, Spain. ACM, New York, NY, USA, 18 pages. https://doi.org/10.1145/3772318.3791530' },
      { t: 'Thuppilikkat, Ashique Ali, Chandra, Priyank, & Filal, Fibin. 2026. "Kudumbashree’s Lunch Bell project and digital solidarity economy in Kerala, India."', v: 'Internet Policy Review, 15(1).', links: [{ l: 'PDF', h: P + 'publications/Thuppilikkat-2026-kudumbashree.pdf' }, { l: 'DOI', h: 'https://doi.org/10.14763/2026.1.2071' }], tags: ['Digital Solidarity Economies'],
        bib: "@article{thuppilikkat2026kudumbashree, title = {Kudumbashree's Lunch Bell project and digital solidarity economy in Kerala, India}, author = {Thuppilikkat, Ashique Ali and Chandra, Priyank and Filal, Fibin}, year = {2026}, journal = {Internet Policy Review}, volume = {15}, number = {1}, doi = {10.14763/2026.1.2071}}",
        cite: "Thuppilikkat, Ashique Ali, Chandra, Priyank, & Filal, Fibin. (2026). Kudumbashree's Lunch Bell project and digital solidarity economy in Kerala, India. Internet Policy Review, 15(1). https://doi.org/10.14763/2026.1.2071" },
      { t: 'Thuppilikkat, Ashique Ali, Janna Akimova, and Priyank Chandra. 2025. “Dissent, Distance, Dilemmas: ICTs and the Belarusian Diasporic Social Movement Community.”', v: 'Proceedings of the ACM on Human-Computer Interaction 9, no. 7, Article CSCW288.', links: [{ l: 'PDF', h: P + 'publications/thuppilikkat-2025-belarus.pdf' }, { l: 'DOI', h: 'https://doi.org/10.1145/3757469' }], tags: ['Technology & Social Movements', 'Belarus'],
        bib: '@article{thuppilikkat2025dissent, title={Dissent, Distance, Dilemmas: ICTs and the Belarusian Diasporic Social Movement Community}, author={Thuppilikkat, Ashique Ali and Akimova, Janna and Chandra, Priyank}, journal={Proc. ACM Hum.-Comput. Interact.}, volume={9}, number={7}, year={2025}, doi={10.1145/3757469}}',
        cite: 'Thuppilikkat, Ashique Ali, Janna Akimova, and Priyank Chandra. 2025. “Dissent, Distance, Dilemmas: ICTs and the Belarusian Diasporic Social Movement Community.” Proceedings of the ACM on Human-Computer Interaction 9, no. 7: CSCW288. https://doi.org/10.1145/3757469' },
      { t: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, Noopur Raval, and Priyank Chandra. 2025. “Generative Politics and Labour Markets: Unions and Collective Life in a City in Crisis.”', v: "In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25).", links: [{ l: 'PDF', h: P + 'publications/thuppilikkat-2025-generative.pdf' }, { l: 'DOI', h: 'https://doi.org/10.1145/3706598.3713266' }], tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'],
        bib: '@article{thuppilikkat2025generative, title = {Generative Politics and Labour Markets: Unions and Collective Life in a City in Crisis}, author = {Thuppilikkat, Ashique Ali and Dhar, Dipsita and Raval, Noopur and Chandra, Priyank}, year = {2025}, journal = {Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems}, pages = {1--18}, url = {https://dl.acm.org/doi/full/10.1145/3706598.3713266}}',
        cite: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, Noopur Raval, and Priyank Chandra. 2025. “Generative Politics and Labour Markets: Unions and Collective Life in a City in Crisis.” In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI ’25). https://doi.org/10.1145/3706598.3713266.' },
      { t: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, and Priyank Chandra. 2024. “Union Makes Us Strong: Space, Technology, and On-Demand Ride-Sourcing Digital Labour Platforms.”', v: 'Proceedings of the ACM on Human-Computer Interaction 8, no. CSCW2, Article 463.', links: [{ l: 'PDF', h: P + 'publications/thuppilikkat-2024-union.pdf' }, { l: 'DOI', h: 'https://doi.org/10.1145/3687002' }], tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'],
        bib: '@article{thuppilikkat2024union, title = {Union Makes Us Strong: Space, Technology, and On-Demand Ridesourcing Digital Labour Platforms}, author = {Thuppilikkat, Ashique Ali and Dhar, Dipsita and Chandra, Priyank}, year = {2024}, journal = {Proceedings of the ACM on Human-Computer Interaction}, volume = {8}, number = {CSCW2}, pages = {1--36}, url = {https://dl.acm.org/doi/abs/10.1145/3687002}}',
        cite: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, and Priyank Chandra. 2024. “Union Makes Us Strong: Space, Technology, and On-Demand Ride-Sourcing Digital Labour Platforms.” Proceedings of the ACM on Human-Computer Interaction 8, no. CSCW2: 463. https://doi.org/10.1145/3687002.' },
      { t: 'Thuppilikkat, Ashique Ali. 2024. “Short History of Cooperative Movement in Northern Malabar, Kerala.”', v: 'Economic and Political Weekly 59, no. 31: 47-52.', links: [{ l: 'PDF', h: P + 'publications/thuppilikkat-2024-cooperative.pdf' }], tags: ['Solidarity Economies'],
        bib: '@article{thuppilikkat2024cooperative, title = {A Short History of the Cooperative Movement in Northern Malabar, Kerala}, author = {Thuppilikkat, Ashique Ali}, year = {2024}, journal = {Economic and Political Weekly}, volume = {59}, number = {31}, pages = {47--52}, url = {https://www.epw.in/journal/2024/31/special-articles/short-history-cooperative-movement-northern.html}}',
        cite: 'Thuppilikkat, Ashique Ali. 2024. “Short History of Cooperative Movement in Northern Malabar, Kerala.” Economic and Political Weekly 59, no. 31: 47–52. https://www.epw.in/journal/2024/31/special-articles/short-history-cooperative-movement-northern.html.' },
      { t: 'Dhar, Dipsita, and Ashique Ali Thuppilikkat. 2022. “Gendered Labour’s Positions of Vulnerabilities in Digital Labour Platforms and Strategies of Resistance: A Case Study of Women Workers’ Struggle in Urban Company, New Delhi.”', v: 'Gender & Development 30, no. 3: 667–86.', links: [{ l: 'PDF', h: P + 'publications/dhar-2022-gendered.pdf' }, { l: 'DOI', h: 'https://doi.org/10.1080/13552074.2022.2127574' }], tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'],
        bib: '@article{dhar2022gendered, title = {Gendered Labour’s Positions of Vulnerabilities in Digital Labour Platforms and Strategies of Resistance: A Case Study of Women Workers’ Struggle in Urban Company, New Delhi}, author = {Dhar, Dipsita and Thuppilikkat, Ashique Ali}, year = {2022}, journal = {Gender & Development}, volume = {30}, number = {3}, pages = {667--686}, url = {https://www.tandfonline.com/doi/full/10.1080/13552074.2022.2127574}}',
        cite: 'Dhar, Dipsita, and Ashique Ali Thuppilikkat. 2022. “Gendered Labour’s Positions of Vulnerabilities in Digital Labour Platforms and Strategies of Resistance: A Case Study of Women Workers’ Struggle in Urban Company, New Delhi.” Gender & Development 30, no. 3: 667–86. https://doi.org/10.1080/13552074.2022.2127574.' }
    ] },
    { group: 'Book Chapters', items: [
      { t: 'Dhar, Dipsita, Ashique Ali Thuppilikkat, and Soham Bhattacharya. 2025. “Transversal Unionism: Resisting and Navigating a Neoliberal City Through Identity and Labour Power.”', v: 'In Migrant Labour in the Gig Economy: The Intersection of Migrant Labor, Platform Capitalism, and Resistance, edited by Francesco Della Puppa, Dipsita Dhar, and Nicola Monttagna, 231–261. Springer.', links: [{ l: 'PDF', h: P + 'publications/Thuppilikkat-2025-Transversal.pdf' }, { l: 'DOI', h: 'https://doi.org/10.1007/978-3-031-91262-7_9' }], tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'],
        bib: '@incollection{dhar2025transversal, title={Transversal Unionism: Resisting and Navigating a Neoliberal City Through Identity and Labour Power}, author={Dhar, Dipsita and Thuppilikkat, Ashique Ali and Bhattacharya, Soham}, booktitle={Migrant Labour in the Gig Economy: The Intersection of Migrant Labor, Platform Capitalism, and Resistance}, pages={231--261}, year={2025}, publisher={Springer}, doi={10.1007/978-3-031-91262-7_9}}',
        cite: 'Dhar, Dipsita, Ashique Ali Thuppilikkat, and Soham Bhattacharya. 2025. “Transversal Unionism: Resisting and Navigating a Neoliberal City Through Identity and Labour Power.” In Migrant Labour in the Gig Economy: The Intersection of Migrant Labor, Platform Capitalism, and Resistance, edited by Francesco Della Puppa, Dipsita Dhar, and Nicola Monttagna, 231–261. Springer. https://doi.org/10.1007/978-3-031-91262-7_9' },
      { t: 'Sanu, V.P., and Ashique Ali Thuppilikkat. 2022. “Entrenching Caste and Withdrawing State: An Analysis of Modi’s Education Policies.”', v: 'In Education or Exclusion? The Plight of Indian Students, edited by Dipsita Dhar and Nitheesh Narayanan, 144-55. New Delhi: LeftWord Books.', links: [{ l: 'PDF', h: P + 'publications/sanu-2022-entrenching.pdf' }], tags: ['Critical Caste Studies', 'Caste and Education Policy'],
        bib: '@incollection{sanu2022entrenching, title = {Entrenching Caste and Withdrawing State: An Analysis of Modi’s Education Policies}, author = {Sanu, V.P. and Thuppilikkat, Ashique Ali}, year = {2022}, booktitle = {Education or Exclusion? The Plight of Indian Students}, editor = {Dhar, Dipsita and Narayanan, Nitheesh}, pages = {144--155}, publisher = {LeftWord Books}, address = {New Delhi}}',
        cite: 'Sanu, V.P., and Ashique Ali Thuppilikkat. 2022. “Entrenching Caste and Withdrawing State: An Analysis of Modi’s Education Policies.” In Education or Exclusion? The Plight of Indian Students, edited by Dipsita Dhar and Nitheesh Narayanan, 144–55. New Delhi: LeftWord Books.' }
    ] },
    { group: 'Peer-Reviewed SIGs / Workshops', items: [
      { t: 'Petterson, Adrian, Benedetta Lusi, Cristina Bosco, Ashique Ali Thuppilikkat, Anupriya Tuli, Catherine Wieczorek, Robert Soden, Emily Tseng, and Priyank Chandra. 2025. “Conducting Research in Oppressive Settings.”', v: "Workshop at the 2025 ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW '25).", links: [{ l: 'Link', h: 'https://programs.sigchi.org/cscw/2025/program/content/212068' }], tags: ['Research Methods', 'Technology & Social Movements'],
        bib: "@inproceedings{petterson2025conducting, title={Conducting Research in Oppressive Settings}, author={Petterson, Adrian and Lusi, Benedetta and Bosco, Cristina and Thuppilikkat, Ashique Ali and Tuli, Anupriya and Wieczorek, Catherine and Soden, Robert and Tseng, Emily and Chandra, Priyank}, booktitle={Workshop at the 2025 ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW '25)}, year={2025}}",
        cite: "Petterson, Adrian, Benedetta Lusi, Cristina Bosco, Ashique Ali Thuppilikkat, Anupriya Tuli, Catherine Wieczorek, Robert Soden, Emily Tseng, and Priyank Chandra. 2025. “Conducting Research in Oppressive Settings.” Workshop at the 2025 ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW '25)." },
      { t: 'Thuppilikkat, Ashique Ali, Hiu-Fung Chung, Kaushar Mahetaji, Anubha Singh, Nussara Tieanklin, Isabella Jaimes Rodriguez, Jen Liu, Noopur Raval, and Priyank Chandra. 2025. “(Re) working for Sustainable Futures: Climate Change and Platform Economies.”', v: 'In Proceedings of the ACM SIGCAS/SIGCHI Conference on Computing and Sustainable Societies, 848-852.', links: [{ l: 'PDF', h: P + 'publications/Thuppilikkat-2025-(Re)working.pdf' }], tags: ['Environmental Hazards & Digital Labour'],
        bib: '@inproceedings{thuppilikkat2025reworking, title={(Re) working for Sustainable Futures: Climate Change and Platform Economies}, author={Thuppilikkat, Ashique Ali and Chung, Hiu-Fung and Mahetaji, Kaushar and Singh, Anubha and Tieanklin, Nussara and Rodriguez, Isabella Jaimes and Liu, Jen and Raval, Noopur and Chandra, Priyank}, booktitle={Proceedings of the ACM SIGCAS/SIGCHI Conference on Computing and Sustainable Societies}, pages={848--852}, year={2025}}',
        cite: 'Thuppilikkat, Ashique Ali, Hiu-Fung Chung, Kaushar Mahetaji, Anubha Singh, Nussara Tieanklin, Isabella Jaimes Rodriguez, Jen Liu, Noopur Raval, and Priyank Chandra. 2025. “(Re) working for Sustainable Futures: Climate Change and Platform Economies.” In Proceedings of the ACM SIGCAS/SIGCHI Conference on Computing and Sustainable Societies, 848–52. New York, NY, USA: Association for Computing Machinery.' },
      { t: 'Fernandes, Kim, Rahaf Alharbi, Cella Sum, Vaishnav Kameswaran, Franchesca Spektor, Ashique Ali Thuppilikkat, Adrian Petterson, Megh Marathe, Foad Hamidi, and Priyank Chandra. 2024. “Organizing for More Just and Inclusive Futures: A Community Discussion.”', v: "In Companion Publication of the 2024 Conference on Computer-Supported Cooperative Work and Social Computing (CSCW Companion '24), Article 364, 689–692.", links: [{ l: 'PDF', h: P + 'publications/fernandes-2024-organizing.pdf' }], tags: ['Technology & Social Movements'],
        bib: '@inproceedings{fernandes2024organizing, title={Organizing for More Just and Inclusive Futures: A Community Discussion}, author={Fernandes, Kim and Alharbi, Rahaf and Sum, Cella and Kameswaran, Vaishnav and Spektor, Franchesca and Thuppilikkat, Ashique Ali and Petterson, Adrian and Marathe, Megh and Hamidi, Foad and Chandra, Priyank}, booktitle={Companion Publication of the 2024 Conference on Computer-Supported Cooperative Work and Social Computing}, pages={689--692}, year={2024}}',
        cite: "Fernandes, Kim, Rahaf Alharbi, Cella Sum, Vaishnav Kameswaran, Franchesca Spektor, Ashique Ali Thuppilikkat, Adrian Petterson, Megh Marathe, Foad Hamidi, and Priyank Chandra. 2024. “Organizing for More Just and Inclusive Futures: A Community Discussion.” In Companion Publication of the 2024 Conference on Computer-Supported Cooperative Work and Social Computing (CSCW Companion '24), 689–92. New York, NY, USA: Association for Computing Machinery." },
      { t: 'Petterson, Adrian, Ashique Ali Thuppilikkat, Paridhi Gupta, Shamika Klassen, Margaret C. Jack, Jun Liu, and Priyank Chandra. 2023. “Supporting Social Movements Through HCI and Design.”', v: "Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems (CHI EA '23), Article 364, 1–5.", links: [{ l: 'PDF', h: P + 'publications/petterson-2023-supporting.pdf' }], tags: ['Technology & Social Movements'],
        bib: '@inproceedings{petterson2023supporting, title={Supporting Social Movements Through HCI and Design}, author={Petterson, Adrian and Thuppilikkat, Ashique Ali and Gupta, Paridhi and Klassen, Shamika and Jack, Margaret C. and Liu, Jun and Chandra, Priyank}, booktitle={Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems}, pages={1--5}, year={2023}}',
        cite: "Petterson, Adrian, Ashique Ali Thuppilikkat, Paridhi Gupta, Shamika Klassen, Margaret C. Jack, Jun Liu, and Priyank Chandra. 2023. “Supporting Social Movements Through HCI and Design.” In Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems (CHI EA '23), 1–5. New York, NY, USA: Association for Computing Machinery." }
    ] }
  ];

  var writingPublic = [
    { group: 'Blogs', items: [
      { t: 'Thuppilikkat, Ashique Ali. 2026. “Lessons from Workers Governing Technologies.”', v: 'Creative Labour Critical Futures.', links: [{ l: 'Link', h: 'https://creativelabourcriticalfutures.ca/blog/lessons-from-workers-governing-technologies/' }], tags: ['Digital Solidarity Economies', 'Unions'],
        bib: '@misc{thuppilikkat2026lessons, title = {Lessons from Workers Governing Technologies}, author = {Thuppilikkat, Ashique Ali}, year = {2026}, howpublished = {Creative Labour Critical Futures}, note = {Blog post}, url = {https://creativelabourcriticalfutures.ca/blog/lessons-from-workers-governing-technologies/}}',
        cite: 'Thuppilikkat, Ashique Ali. 2026. “Lessons from Workers Governing Technologies.” Creative Labour Critical Futures. https://creativelabourcriticalfutures.ca/blog/lessons-from-workers-governing-technologies/.' }
    ] },
    { group: 'Comic Strip', items: [
      { t: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, Kadambari K. B., and Priyank Chandra. 2024. “Riding through the smog: A ‘roznamcha’ of ride-sourcing bike taxis.”', v: 'School of Cities, University of Toronto.', links: [{ l: 'Link', h: 'https://fair.work/en/fw/blog/riding-throughthe-smog-a-roznamcha-of-ride-sourcing-bike-taxis/' }], tags: ['Technology and Labour Resistance', 'Environmental Hazards & Digital Labour'],
        bib: "@misc{thuppilikkat2024riding, title = {Riding through the Smog: A 'Roznamcha' of Ride-Sourcing Bike Taxis}, author = {Thuppilikkat, Ashique Ali and Dhar, Dipsita and K. B., Kadambari and Chandra, Priyank}, year = {2024}, howpublished = {School of Cities, University of Toronto}, note = {Comic strip}, url = {https://fair.work/en/fw/blog/riding-throughthe-smog-a-roznamcha-of-ride-sourcing-bike-taxis/}}",
        cite: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, Kadambari K. B., and Priyank Chandra. 2024. “Riding through the Smog: A ‘Roznamcha’ of Ride-Sourcing Bike Taxis.” School of Cities, University of Toronto. https://fair.work/en/fw/blog/riding-throughthe-smog-a-roznamcha-of-ride-sourcing-bike-taxis/.' }
    ] },
    { group: 'English Articles', items: [
      { t: 'Narayanan, Nitheesh, and Thuppilikkat, Ashique Ali. 2025. “Kerala Dinesh Beedi Workers’ Central Cooperative Society.”', v: 'Tricontinental: Institute for Social Research.', links: [{ l: 'Link', h: 'https://thetricontinental.org/study-kerala-cooperatives/#toc-section-5' }], tags: ['Solidarity Economies', 'India'],
        bib: "@misc{narayanan2025kerala, title = {Kerala Dinesh Beedi Workers' Central Cooperative Society}, author = {Narayanan, Nitheesh and Thuppilikkat, Ashique Ali}, year = {2025}, howpublished = {Tricontinental: Institute for Social Research}, url = {https://thetricontinental.org/study-kerala-cooperatives/#toc-section-5}}",
        cite: 'Narayanan, Nitheesh, and Ashique Ali Thuppilikkat. 2025. “Kerala Dinesh Beedi Workers’ Central Cooperative Society.” Tricontinental: Institute for Social Research. https://thetricontinental.org/study-kerala-cooperatives/#toc-section-5.' },
      { t: 'Thuppilikkat, Ashique Ali. 2023. “Far-right Hindu nationalists are using digital propaganda to delegitimize India’s wrestler protests.”', v: 'The Conversation.', links: [{ l: 'Link', h: 'https://theconversation.com/far-right-hindu-nationalists-are-using-digital-propaganda-to-delegitimize-indias-wrestler-protests-206747' }], tags: ['Technology & Social Movements', 'India'],
        bib: "@misc{thuppilikkat2023farright, title = {Far-Right Hindu Nationalists Are Using Digital Propaganda to Delegitimize India's Wrestler Protests}, author = {Thuppilikkat, Ashique Ali}, year = {2023}, howpublished = {The Conversation}, url = {https://theconversation.com/far-right-hindu-nationalists-are-using-digital-propaganda-to-delegitimize-indias-wrestler-protests-206747}}",
        cite: 'Thuppilikkat, Ashique Ali. 2023. “Far-Right Hindu Nationalists Are Using Digital Propaganda to Delegitimize India’s Wrestler Protests.” The Conversation. https://theconversation.com/far-right-hindu-nationalists-are-using-digital-propaganda-to-delegitimize-indias-wrestler-protests-206747.' },
      { t: 'Thuppilikkat, Ashique Ali, and Angshuman Sharma. 2021. “Kerala’s Communists Are Showing India a Path Out of Poverty.”', v: 'Jacobin.', links: [{ l: 'Link', h: 'https://jacobin.com/2021/11/kerala-india-communist-party-farmers-cooperatives-bds-wayanad' }], tags: ['Solidarity Economies', 'India'],
        bib: "@misc{thuppilikkat2021kerala, title = {Kerala's Communists Are Showing India a Path Out of Poverty}, author = {Thuppilikkat, Ashique Ali and Sharma, Angshuman}, year = {2021}, howpublished = {Jacobin}, url = {https://jacobin.com/2021/11/kerala-india-communist-party-farmers-cooperatives-bds-wayanad}}",
        cite: 'Thuppilikkat, Ashique Ali, and Angshuman Sharma. 2021. “Kerala’s Communists Are Showing India a Path Out of Poverty.” Jacobin. https://jacobin.com/2021/11/kerala-india-communist-party-farmers-cooperatives-bds-wayanad.' },
      { t: 'Thuppilikkat, Ashique Ali. 2021. “The Indian Farmers’ Movement Has Shattered Narendra Modi’s Strongman Image.”', v: 'Jacobin.', links: [{ l: 'Link', h: 'https://jacobin.com/2021/11/indian-farmers-movement-neoliberal-farm-bills-modi-bjp' }], tags: ['Technology & Social Movements', 'India'],
        bib: "@misc{thuppilikkat2021farmers, title = {The Indian Farmers' Movement Has Shattered Narendra Modi's Strongman Image}, author = {Thuppilikkat, Ashique Ali}, year = {2021}, howpublished = {Jacobin}, url = {https://jacobin.com/2021/11/indian-farmers-movement-neoliberal-farm-bills-modi-bjp}}",
        cite: 'Thuppilikkat, Ashique Ali. 2021. “The Indian Farmers’ Movement Has Shattered Narendra Modi’s Strongman Image.” Jacobin. https://jacobin.com/2021/11/indian-farmers-movement-neoliberal-farm-bills-modi-bjp.' },
      { t: 'Thuppilikkat, Ashique Ali. 2019. “Breaking barriers: Women enter Sabarimala hours after Women’s Wall.”', v: 'Indian Cultural Forum.', links: [{ l: 'Link', h: 'https://indianculturalforum.in/2019/01/02/women-enter-sabarimala-hours-after-womens-wall/' }], tags: ['Technology & Social Movements', 'India'],
        bib: "@misc{thuppilikkat2019breaking, title = {Breaking Barriers: Women Enter Sabarimala Hours after Women's Wall}, author = {Thuppilikkat, Ashique Ali}, year = {2019}, howpublished = {Indian Cultural Forum}, url = {https://indianculturalforum.in/2019/01/02/women-enter-sabarimala-hours-after-womens-wall/}}",
        cite: 'Thuppilikkat, Ashique Ali. 2019. “Breaking Barriers: Women Enter Sabarimala Hours after Women’s Wall.” Indian Cultural Forum. https://indianculturalforum.in/2019/01/02/women-enter-sabarimala-hours-after-womens-wall/.' }
    ] },
    { group: 'Malayalam Articles', items: [
      { t: 'Thuppilikkat, Ashique Ali, and Arun Kumar P.K. 2020. “Techno-nationalism and Chinese Cyber Dominance.”', v: 'Deshabhimani Weekly 13, no. 51: 6-11.', links: [], tags: [],
        bib: '@article{thuppilikkat2020techno, title = {Techno-Nationalism and Chinese Cyber Dominance}, author = {Thuppilikkat, Ashique Ali and Arun Kumar, P. K.}, year = {2020}, journal = {Deshabhimani Weekly}, volume = {13}, number = {51}, pages = {6--11}}',
        cite: 'Thuppilikkat, Ashique Ali, and P. K. Arun Kumar. 2020. “Techno-Nationalism and Chinese Cyber Dominance.” Deshabhimani Weekly 13, no. 51: 6–11.' },
      { t: 'Thuppilikkat, Ashique Ali, and Arun Kumar P.K. 2019. “Ours is a struggle for survival.”', v: 'Kalakaumudi Weekly, 44 (35), 16-19.', links: [], tags: [],
        bib: '@article{thuppilikkat2019struggle, title = {Ours Is a Struggle for Survival}, author = {Thuppilikkat, Ashique Ali and Arun Kumar, P. K.}, year = {2019}, journal = {Kalakaumudi Weekly}, volume = {44}, number = {35}, pages = {16--19}}',
        cite: 'Thuppilikkat, Ashique Ali, and P. K. Arun Kumar. 2019. “Ours Is a Struggle for Survival.” Kalakaumudi Weekly 44, no. 35: 16–19.' }
    ] }
  ];

  var talks = [
    { group: 'Conference Presentations', items: [
      { t: 'Thuppilikkat, Ashique Ali, and Zuri Wilson. "Race, Caste, and Frameworks of Resistance in Critical Computing Research."', v: 'Panel presented at the Critical Computing Gathering (online), June 24, 2026.', tags: ['Critical Caste Studies in Social Computing'] },
      { t: 'Thuppilikkat, Ashique Ali, Aditya Nayak, Aditi Vashistha, Amy Xiao, Lubna Razaq, and Maggie Jack. "Nodes of (Dis)empowerment: Limits to Agency in Infrastructures."', v: 'Panel presented at the Critical Computing Gathering (online), June 24, 2026.', tags: ['Critical Caste Studies in Social Computing', 'Technology and Labour Resistance', 'Methods'] },
      { t: 'Thuppilikkat, Ashique Ali, and Priyank Chandra. "Women, Platforms, and State Power: The Lunch Bell Project and Digital Solidarity Economies in Kerala."', v: 'Paper presented at the International Network on Digital Labour-8 (INDL) conference, Bologna, Italy, September 10-12, 2025.', tags: ['Digital Solidarity Economy'] },
      { t: 'Chung, Hiu-Fung, Ashique Ali Thuppilikkat, and Kaushar Mahetaji. "Delivering “Broken Promises” to Save the Planet: Climate Crisis, Breakdowns and Socio-Ecological Infrastructure in Platform Capitalism."', v: 'Paper presented at the International Network on Digital Labour-8 (INDL) conference, Bologna, Italy, September 10-12, 2025.', tags: ['Technology and Labour Resistance', 'Environmental Hazards & Digital Labour'] },
      { t: 'Dhar, Dipsita, and Ashique Ali Thuppilikkat. "From Riders to Influencers: Exploring the Gigfluencer Phenomenon in Ridesourcing DLPs."', v: 'Paper presented at the International Network on Digital Labour-8 (INDL) conference, Bologna, Italy, September 10-12, 2025.', tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'] },
      { t: 'Thuppilikkat, Ashique Ali, Aditya Nayak, and Aditi Vashistha. "Delivering Inequality: Caste and Labour in Location-based Digital Labour Platforms."', v: 'Paper presented at 4s 2025, Seattle, United States of America, September 03-06, 2025.', tags: ['Critical Caste Studies in Social Computing', 'Technology and Labour Resistance'] },
      { t: 'Thuppilikkat, Ashique Ali. "Traditional Trade Unions in Transition: Confronting the Gig Economy."', v: 'Paper presented at the Workshop on Labour in the Global South and from a Global South Lens, University of Toronto Scarborough, Canada, April 02, 2025.', tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'] },
      { t: 'Thuppilikkat, Ashique Ali. "Big Tech and Worker Alternatives."', v: 'Paper presented at Cyber-Marx @25: reflecting on 25 years of impact, Centre for Culture and Technology, University of Toronto, Canada, February 28, 2025.', tags: ['Digital Solidarity Economy'] },
      { t: 'Thuppilikkat, Ashique Ali, and Priyank Chandra. "Nudging away from protests and unions?: Exploring Dynamics of Power, Agency and Resistance in Online Communities of Auto-rickshaw drivers in On-demand Ridesourcing Digital Labour Platforms."', v: 'Paper presented at the International Network on Digital Labour-7 (INDL) conference, Santiago, Chile, October 28-30, 2024.', tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'] },
      { t: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, and Priyank Chandra. "Tech-mediated Resistance and Traditional Trade Union: A Case Study of Kolkata App Cab Ola Uber Union, West Bengal."', v: 'Paper presented at the BSA Work, Employment and Society Conference, Glasgow, Scotland, September 13-15, 2023.', tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'] },
      { t: 'Thuppilikkat, Ashique Ali, Dipsita Dhar, and Priyank Chandra. "Union Makes us Strong: Experiences of Traditional Trade Union Organizing in Ride Sharing Digital Labour Platforms in Kolkata, West Bengal."', v: 'Paper presented at the BSA Work, Employment and Society Conference, Glasgow, Scotland, September 13-15, 2023.', tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'] },
      { t: 'Dhar, Dipsita, and Ashique Ali Thuppilikkat. "Gendered Vulnerabilities in Platform Capitalism and the Strategies of Women’s Resistance: A case study from India."', v: 'Paper presented at the BSA Work, Employment and Society Conference, Glasgow, Scotland, September 13-15, 2023.', tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'] },
      { t: 'Dhar, Dipsita, and Ashique Ali Thuppilikkat. "The Survival Strategy among the Malayali Diaspora in Malta: Negotiating through the Gig Economy."', v: 'Paper presented at the Second Athens Historical Materialism Conference, Panteion University, Athens, Greece, April 20-23, 2023.', tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'] },
      { t: 'Dhar, Dipsita, and Ashique Ali Thuppilikkat. "Understanding Gig Economy & Socially Reproductive Labour: A Case Study from India."', v: 'Paper presented at the 41st International Labour Process Conference (ILPC), Glasgow, Scotland, April 12-14, 2023.', tags: ['Technology and Labour Resistance', 'Unions, Worker Resistance & Digital Labour Platforms'] },
      { t: 'Thuppilikkat, Ashique Ali. "Understanding Digital Caste Publics: Examining YouTube Vlogging amongst the Brahmin-Savarnas in Kerala."', v: 'Paper presented at the Eastern Sociological Society, Baltimore, MD, USA, February 23-26, 2023.', tags: ['Critical Caste Studies in Social Computing', 'Methods'] },
      { t: 'Thuppilikkat, Ashique Ali. "Caste Inequalities and State Responses in the Education Sector: Marginalising Dalit Students’ Access to Education during the Covid-19 Pandemic in India."', v: 'Paper presented at Dublin City University’s 5th Annual South Asia Conference, Dublin, Ireland, April 26-29, 2022.', tags: ['Critical Caste Studies', 'Caste and Education Policy'] },
      { t: 'Gupta, Paridhi, Ashique Ali Thuppilikkat, Cagdas Dedeoglu and Priyank Chandra. "Mediated Activism: Clicks for Justice and Freedom."', v: 'Panel presentation at the International Federation of Information Processing (IFIP) 9.4, Lima, Peru, May 25-27, 2022.', tags: ['Technology & Social Movements'] },
      { t: 'Thuppilikkat, Ashique Ali. "Combating Crisis: Lessons from the Cooperative Movement in North Malabar, Kerala."', v: 'Paper presented at the Centre for South Asian Studies Graduate Symposium 2023, University of Toronto, Canada, April 20-21, 2023.', tags: ['Solidarity Economy'] },
      { t: 'Thuppilikkat, Ashique Ali. "Democracy In the Age of Social Networking Sites."', v: 'Paper presented at Democracy and Public Institutions in India: Crisis and Opportunity?, Ambedkar University, New Delhi, India, March 29, 2019.', tags: ['Technology & Social Movements'] },
      { t: 'Thuppilikkat, Ashique Ali. "The Political Economy of a Successful Cooperative Movement: A Kerala Experience."', v: 'Paper presented at YSI Asia Convening, Hanoi, Vietnam, August 12-15, 2019.', tags: ['Solidarity Economy'] }
    ] },
    { group: 'Invited Talks', items: [
      { t: '"Unions and Gig Work."', v: "Invited talk for Graduate Course on 'Information Technology and Globalization', Institute of Communication and Culture, University of Toronto Mississauga. March 03, 2026.", tags: [] },
      { t: '"Infrastructures of platforms."', v: 'Invited talk for School of Cities, University of Toronto, Canada, November 12, 2025.', links: [{ l: 'Event Page', h: 'https://schoolofcities.utoronto.ca/event/social-infrastructures-of-platforms/' }], tags: [] },
      { t: '"Unions and Gig Economy."', v: "Invited talk for 'Labour and Media' course, York University, Canada, February 07, 2025.", tags: [] },
      { t: '"Transport Infrastructures."', v: "Invited talk for 'Platform Politics and Power' course, Faculty of Information, University of Toronto, October 16, 2024.", tags: [] },
      { t: '"Digital Labour Platforms: A Study of Workplace Resistance and Unionization."', v: 'Invited talk at Mahatma Gandhi University, Kerala, India, April 04, 2024.', tags: [] },
      { t: '"Caste in Canada: Discrimination and Resistance."', v: 'Invited talk for the Department of History, University of Toronto, Canada, November 15, 2023.', tags: [] }
    ] },
    { group: 'PhD Workshops', items: [
      { t: 'Platforms Without Borders.', v: 'Organized by Dr James Muldoon (University of Exeter), Denise Kasparian (University of Buenos Aires), Andrea Pollio (Polytechnic of Turin), Lin Zhang (University of New Hampshire), Marc Steinberg (Concordia University) and Rafael Grohmann (University of Toronto). Space4, London. March 15-16, 2025.', tags: [] },
      { t: 'PhD Workshop with Dorothy Kidd.', v: 'Institute of Communication, Culture, Information and Technology. February 27, 2025.', tags: [] }
    ] }
  ];

  var artifacts = [
    { icon: '▦', cat: 'Dashboard', title: 'Heat Exposure Dashboard & Air Quality Map of Kolkata', desc: 'Interactive dashboard exploring worker heat exposure patterns and a map of PM2.5 air-quality readings across WBPCB monitoring stations in Kolkata.', tags: ['Dashboard', 'Map', 'Climate', 'Air Quality'], href: 'https://kolkatacivicdata.github.io/' },
    { icon: '▤', cat: 'Election Monitor', title: 'SAFAR Election Monitor — West Bengal', desc: 'Civic platform tracking and monitoring electoral data and developments across West Bengal.', tags: ['Election Monitor', 'West Bengal', 'Civic Data'], href: 'https://safarelectionmonitor-westbengal.github.io' }
  ];

  var teaching = [
    { dept: 'Faculty of Information', campus: 'University of Toronto, St. George', courses: [{ n: 'ICT, Designs & Marginality', term: 'Fall 2023, Fall 2024' }, { n: 'Information Experience', term: 'Fall 2023' }, { n: 'Accessibility and Inclusive Design', term: 'Winter 2023' }, { n: 'Information Management in Organizations: Models and Platforms', term: 'Winter 2026' }] },
    { dept: 'Institute of Communication, Culture, Information & Technology (ICCIT)', campus: 'University of Toronto Mississauga', courses: [{ n: 'Technology and City', term: 'Fall 2023' }, { n: 'Rhetoric and Media', term: 'Winter 2023, Summer 2023, Summer 2025' }] },
    { dept: 'Department of Arts, Culture and Media', campus: 'University of Toronto Scarborough', courses: [{ n: 'Platforms and Cultural Production', term: 'Summer 2025' }] }
  ];

  var newsAll = [
    { kind: 'NEW ARTICLE', text: '“Risk, Technology, and Resistance: The Hong Kong Diaspora Amid Transnational Repression” — published in Proceedings of the ACM on Human-Computer Interaction (CSCW).', date: '2026' },
    { kind: 'PANEL', text: 'Presented the panel “Race, Caste, and Frameworks of Resistance in Critical Computing Research” (with Zuri Wilson) at the Critical Computing Gathering (online).', date: 'JUN 2026' },
    { kind: 'PANEL', text: 'Presented the panel “Nodes of (Dis)empowerment: Limits to Agency in Infrastructures” (with Amy Xiao, Lubna Razaq, Maggie Jack, Aditya Nayak, and Aditi Vashistha) at the Critical Computing Gathering (online).', date: 'JUN 2026' },
    { kind: 'NEW ARTICLE', text: '“Studying Up” through Digital Ethnography: The Case of Conservative Caste Enclaves — published in CHI 2026.', date: '2026' },
    { kind: 'NEW ARTICLE', text: 'Kudumbashree’s Lunch Bell project and digital solidarity economy in Kerala, India — published in Internet Policy Review.', date: 'FEB 2026' },
    { kind: 'AWARD', text: 'Lawson Climate and Sustainability Student Research Award.', date: 'DEC 2025' },
    { kind: 'INVITED TALK', text: 'Delivered talk on “Infrastructures of Platforms” at the School of Cities, University of Toronto.', date: 'NOV 2025' },
    { kind: 'BOOK CHAPTER', text: 'Published “Transversal Unionism” in the Springer book Migrant Labour in the Gig Economy.', date: '2025' },
    { kind: 'PUBLISHED', text: 'Published “Dissent, Distance, Dilemmas: ICTs and the Belarusian Diasporic Social Movement Community” in CSCW ’25. The paper also received the CSCW 2025 Diversity, Equity, and Inclusion (DEI) Award.', date: '2025' },
    { kind: 'FELLOWSHIP', text: 'Awarded the Connaught PhDs for Public Impact Fellowship at the University of Toronto for 2025-26.', date: '2025' },
    { kind: 'AWARD', text: 'Received the Sustainable Development Goal (SDG) UofT Graduate Student Award for research impact.', date: '2024' },
    { kind: 'PUBLISHED', text: 'Published “Generative Politics and Labour Markets” in the CHI 2025 conference proceedings.', date: '2025' },
    { kind: 'PAPER ACCEPTED', text: 'Paper accepted to the Historical Materialism Conference at SOAS University, London (November 6–9, 2025).', date: '2025' },
    { kind: 'PAPER ACCEPTED', text: 'Paper accepted to INDL 8 in Bologna, Italy (September 10–12, 2025).', date: '2025' }
  ];

  var fullAwards = [
    { t: 'Lawson Climate and Sustainability Student Research Award', y: '2026' },
    { t: 'Florence Partridge Scholarship', y: '2025-26' },
    { t: 'Connaught PhDs for Public Impact Fellowship', y: '2025-26' },
    { t: 'EDI Student Initiative Fund', y: '2025-26' },
    { t: "University of Toronto Graduate Students' Union Bursary", y: '2025-26' },
    { t: 'Sustainable Development Goal (SDG) UofT Graduate Student Award', y: '2024-25' },
    { t: 'Gary Marsden Travel Awards', y: '2024-25' },
    { t: 'PhD Fellowship, SSHRC Institutional Grant, Canada', y: '2024-25' },
    { t: 'Graduate Fellow, School of Cities, University of Toronto', y: '2023-24' },
    { t: 'PhD Fellowship, SSHRC Institutional Grant, Canada', y: '2023-24' },
    { t: 'SGS Conference Grant', y: '2023' },
    { t: 'Travel Bursary, British Sociology Association', y: '2023' },
    { t: 'National Fellowship for Other Backward Classes, Govt. of India', y: '2020-22' }
  ];

  var profActivities = [
    { h: 'Research Assistant', items: [{ t: 'Workers Governing Technologies (May 2025 – March 2026)', href: 'https://creativelabourcriticalfutures.ca/blog/workers-governing-technologies-workshop/' }] },
    { h: 'Working Groups', items: [{ t: 'Theories and Praxis of Digital Labour, Jackman Humanities Institute (2024–2026)', href: 'https://www.humanities.utoronto.ca/programs-research/research/working-groups/theories-and-praxis-digital-labour-fault-lines-digital' }, { t: 'Digital Labour and Data Subjectivities, University of Toronto (2023–24)' }, { t: 'Critical Computing Group, University of Toronto (2022–present)' }] },
    { h: 'Other Affiliations', items: [{ t: 'Jamhoor — South Asian Labour Magazine', href: 'https://www.jamhoor.org/' }, { t: 'Forum for Anti-Caste Activism at University of Toronto' }] }
  ];

  var streams = ['Computer-Supported Cooperative Work', 'Human-Computer Interaction', 'Digital Labour & Platform Studies'];
  var education = [
    { deg: 'M.Phil, Political Science', place: 'Jawaharlal Nehru University' },
    { deg: 'MA, Political Science', place: 'Jawaharlal Nehru University' },
    { deg: 'BA (H), Political Science', place: 'Ramjas College, University of Delhi' }
  ];
  var affil = ['STREET Lab', 'SAFAR', 'Critical Computing Group, UofT', 'Jamhoor — South Asian Labour Magazine', 'Forum for Anti-Caste Activism, UofT'];

  var REFS = { academic: writingAcademic, public: writingPublic };

  /* ---------------- State & helpers ---------------- */

  var state = { page: 'home', proj: 0, subKey: 'environment', wTab: 'academic', tTab: 0, tagFilter: '', wQuery: '', artQuery: '', artFilter: 'all', secOpen: {} };
  var appEl = document.getElementById('app');
  var pageEl = document.getElementById('page');
  var toastEl = document.getElementById('toast');
  var toastT = null;
  var navKey = null;
  var pendingScroll = null;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function pad(n) { return String(n).padStart(2, '0'); }

  function flashToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }

  function copyText(text, label) {
    var done = function () { flashToast(label + ' copied to clipboard'); };
    var fail = function () { flashToast('Failed to copy'); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(function () { legacyCopy(text, done, fail); });
    } else { legacyCopy(text, done, fail); }
  }
  function legacyCopy(text, done, fail) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.left = '-9999px';
      document.body.appendChild(ta); ta.focus(); ta.select();
      var ok = document.execCommand('copy'); document.body.removeChild(ta);
      ok ? done() : fail();
    } catch (e) { fail(); }
  }

  function scrollToEl(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var top = el.getBoundingClientRect().top - appEl.getBoundingClientRect().top + appEl.scrollTop - 104;
    appEl.scrollTop = top;
  }

  /* ---------------- Routing ---------------- */

  var ROUTES = { '': 'home', 'about': 'about', 'research': 'work', 'writing': 'writing', 'talks': 'talks', 'teaching': 'teaching', 'artifacts': 'artifacts', 'news': 'news' };
  var HASHES = { home: '#/', about: '#/about', work: '#/research', writing: '#/writing', talks: '#/talks', teaching: '#/teaching', artifacts: '#/artifacts', news: '#/news' };

  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '').replace(/\/$/, '');
    var m = h.match(/^project\/(\d+)$/);
    if (m) { return { page: 'project', proj: Math.min(projects.length - 1, Math.max(0, +m[1] - 1)), subKey: state.subKey }; }
    var ms = h.match(/^research\/([a-z-]+)$/);
    if (ms && SUBS[ms[1]]) { return { page: 'sub', proj: state.proj, subKey: ms[1] }; }
    return { page: ROUTES[h] || 'home', proj: state.proj, subKey: state.subKey };
  }
  function go(page, arg) {
    var target = page === 'project' ? '#/project/' + (arg + 1) : page === 'sub' ? '#/research/' + arg : HASHES[page];
    if (location.hash === target || (target === '#/' && location.hash === '')) { render(); }
    else location.hash = target;
  }
  window.addEventListener('hashchange', function () {
    var r = parseHash();
    var changed = r.page !== state.page || r.proj !== state.proj || r.subKey !== state.subKey;
    state.page = r.page; state.proj = r.proj; state.subKey = r.subKey;
    if (changed) { state.tagFilter = ''; state.wQuery = ''; }
    render();
  });

  /* ---------------- Shared fragments ---------------- */

  function linksHTML(links) {
    return (links || []).map(function (ln) {
      return '<a class="act" href="' + esc(ln.h) + '" target="_blank" rel="noopener">' + esc(ln.l) + '</a>';
    }).join('');
  }
  function copyBtnsHTML(list, g, i) {
    return '<span class="sep">|</span><button class="act" data-act="copy" data-kind="bib" data-list="' + list + '" data-g="' + g + '" data-i="' + i + '">BibTeX</button>' +
      '<span class="sep">|</span><button class="act" data-act="copy" data-kind="cite" data-list="' + list + '" data-g="' + g + '" data-i="' + i + '">Cite</button>';
  }
  function tagBtnsHTML(tags) {
    return (tags || []).map(function (t) {
      var on = t === state.tagFilter ? ' on' : '';
      return '<button class="tagsm tagbtn' + on + '" data-act="tag" data-tag="' + esc(t) + '">' + esc(t) + '</button>';
    }).join('');
  }
  function filterbarHTML() {
    if (!state.tagFilter) return '';
    return '<div class="filterbar"><span class="mono" style="font-size:12px;color:#cfcfc9">Filtered by tag</span>' +
      '<span class="tagsm" style="border-color:var(--accent);color:#fff">' + esc(state.tagFilter) + '</span>' +
      '<button class="filterclr" data-act="cleartag">Clear ✕</button></div>';
  }
  function newsRowHTML(n, max, compact) {
    return '<div class="newsrow fx ac jb gap16"' + (compact ? ' style="padding:15px 0"' : '') + '><div style="max-width:' + max + 'px">' +
      '<div class="mono faint" style="font-size:11px">' + esc(n.kind) + '</div>' +
      '<div class="cv hl" style="font-size:' + (compact ? 16 : 17) + 'px;margin-top:6px;line-height:1.35">' + esc(n.text) + '</div></div>' +
      '<div class="mono faint nowrap" style="font-size:12px">' + esc(n.date) + '</div></div>';
  }

  /* ---------------- Pages ---------------- */

  function homeHTML() {
    var cards = projects.map(function (p, i) {
      return '<div class="tilt tcard scard" data-tilt data-act="proj" data-i="' + i + '"><div class="shine"></div>' +
        '<div class="scimg"><span class="scnum">' + p.num + '</span>' + (p.key ? '<span class="scnum sckey">KEY PROJECT</span>' : '') +
        '<img src="' + esc(p.imgSrc) + '" alt="' + esc(p.img) + '" loading="lazy" decoding="async"></div>' +
        '<div class="scbody"><div class="disp" style="font-size:23px;font-weight:600;color:#f6f6f1;line-height:1.12">' + esc(p.title) + '</div>' +
        '<div class="cv muted" style="font-size:13.5px;margin-top:8px;line-height:1.5">' + esc(p.card) + '</div></div></div>';
    }).join('');
    var news = newsAll.slice(0, 4).map(function (n) { return newsRowHTML(n, 740, true); }).join('');
    return '<div class="pagefade">' +
      '<div class="wrap rgrid hero-grid pagetop" style="grid-template-columns:1.3fr .82fr;gap:54px;align-items:center">' +
      '<div class="fadeup"><div class="mono kick herokick" style="white-space:nowrap">PHD CANDIDATE · UNIVERSITY OF TORONTO · STREET LAB</div>' +
      '<h1 class="disp hero-h" style="font-size:80px;font-weight:700;line-height:.96;margin:24px 0 0;color:#f6f6f1">Ashique Ali<br>Thuppilikkat</h1>' +
      '<div class="cv hero-sub" style="font-size:24px;color:#c9c9c2;margin-top:26px;max-width:560px;line-height:1.4">Socio-technical designs for <span class="hl" style="font-weight:700">resistance</span> — building worker power in the platformized city.</div>' +
      '<div class="fx ac gap10" style="margin-top:34px"><button class="cta" style="height:46px;padding:0 24px;font-size:14px" data-act="nav" data-to="work">View research</button>' +
      '<button class="ghost" style="height:46px;padding:0 24px;font-size:14px" data-act="nav" data-to="about">About me</button></div></div>' +
      '<div class="fadeup herowrap"><img src="images/profile.jpg" alt="Ashique Ali Thuppilikkat" class="heroimg" fetchpriority="high" decoding="async"></div>' +
      '</div>' +
      '<div class="wrap secgap">' +
      '<div class="fx ac jb" style="margin-bottom:8px"><div class="mono faint" style="letter-spacing:.2em;font-size:11px">LATEST NEWS</div>' +
      '<button class="back" data-act="nav" data-to="news">Archive →</button></div>' + news +
      '</div>' +
      '<div class="wrap secgap">' +
      '<div class="fx ac jb" style="margin-bottom:26px"><div class="mono faint" style="letter-spacing:.2em;font-size:11px">CURRENT RESEARCH</div>' +
      '<button class="back" data-act="proj" data-i="0">Part of Technology &amp; Labour Resistance →</button></div>' +
      '<div class="feature" data-act="sub" data-key="environment">' +
      '<div class="fmain tilt" data-tilt>' +
      '<img src="images/environment.jpg" alt="gig work in the city" loading="lazy" decoding="async">' +
      '<div class="fgrad"></div><div class="shine"></div>' +
      '<div class="ftop fx ac fw gap8"><span class="chip featchip">CURRENT RESEARCH</span><span class="mono" style="font-size:11px;color:#d7d7d1;letter-spacing:.1em">01 · TECHNOLOGY &amp; LABOUR RESISTANCE</span></div>' +
      '<div class="fbody">' +
      '<div class="disp feath" style="font-size:34px;font-weight:700;color:#f6f6f1;line-height:1.05;max-width:520px">Environmental Hazards &amp; Digital Labour</div>' +
      '<div class="cv" style="font-size:15px;color:#c9c9c2;margin-top:12px;line-height:1.5;max-width:520px">How pollution, heat and extreme weather reshape gig work — research, a comic strip, and health camps with workers in Delhi and Kolkata.</div>' +
      '<div class="fx fw gap8" style="margin-top:16px"><span class="tagsm">CONFERENCE PAPER · 2025</span><span class="tagsm">COMIC STRIP</span><span class="tagsm">2 HEALTH CAMPS</span></div>' +
      '<div class="back" style="margin-top:18px;color:#fff">Explore the project →</div>' +
      '</div></div>' +
      '<div class="fside">' +
      '<div class="ftile"><img src="images/healthcamp-delhi.jpg" alt="Health camp for gig workers, Delhi" loading="lazy" decoding="async"><div class="fgrad"></div><div class="fcap">HEALTH CAMP · DELHI</div></div>' +
      '<div class="ftile"><img src="images/healthcamp-kolkata.jpg" alt="Health camp for gig workers, Kolkata" loading="lazy" decoding="async"><div class="fgrad"></div><div class="fcap">HEALTH CAMP · KOLKATA</div></div>' +
      '</div></div>' +
      '</div>' +
      '<div class="wrap secgap">' +
      '<div class="fx ac jb" style="margin-bottom:26px"><div class="mono faint" style="letter-spacing:.2em;font-size:11px">RESEARCH STRANDS</div>' +
      '<button class="back" data-act="nav" data-to="work">All four projects →</button></div>' +
      '<div class="grid rgrid" style="grid-template-columns:1fr 1fr;gap:20px">' + cards + '</div>' +
      '</div>' +
      '<div class="foot secgap" id="site-contact"><div class="wrap" style="padding-top:64px;padding-bottom:48px">' +
      '<div class="fx jb fw" style="gap:40px">' +
      '<div><div class="disp footh" style="font-size:40px;font-weight:700;color:#f5f5f0;max-width:520px;line-height:1.02">Let’s talk technology &amp; resistance.</div>' +
      '<div class="fx ac gap10" style="margin-top:24px"><button class="cta" style="height:44px;padding:0 22px" data-act="mailto">Email me</button>' +
      '<button class="ghost" style="height:44px;padding:0 22px" data-act="nav" data-to="about">Read about me</button></div></div>' +
      '<div class="mono muted" style="font-size:13px;line-height:2"><div class="hl">ashique.thuppilikkat@<br>mail.utoronto.ca</div>' +
      '<div style="margin-top:14px">Faculty of Information<br>University of Toronto</div>' +
      '<div class="fx gap8" style="margin-top:18px">' +
      '<a class="chip" href="https://scholar.google.com/citations?user=T4XvPfgAAAAJ&amp;hl=en" target="_blank" rel="noopener" style="text-decoration:none;color:inherit">Google Scholar</a>' +
      '<a class="chip" href="https://orcid.org/0000-0002-9760-6847" target="_blank" rel="noopener" style="text-decoration:none;color:inherit">ORCID</a>' +
      '<a class="chip" href="https://bsky.app/profile/ashiquealit.bsky.social" target="_blank" rel="noopener" style="text-decoration:none;color:inherit">Bluesky</a></div></div>' +
      '</div>' +
      '<div class="rule" style="margin-top:48px"></div>' +
      '<div class="fx ac jb mono faint footmeta" style="font-size:11px;margin-top:20px"><span>© 2026 ASHIQUE ALI THUPPILIKKAT</span><span>SOCIO-TECHNICAL DESIGNS FOR RESISTANCE</span></div>' +
      '</div></div>' +
      '</div>';
  }

  function workHTML() {
    var cards = projects.map(function (p, i) {
      return '<div class="tilt tcard" data-tilt style="padding:30px;min-height:300px;display:flex;flex-direction:column" data-act="proj" data-i="' + i + '"><div class="shine"></div>' +
        '<div class="thumb" style="height:148px;border-radius:12px;margin-bottom:22px;overflow:hidden"><img src="' + esc(p.imgSrc) + '" alt="' + esc(p.img) + '" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block"></div>' +
        '<div class="fx ac jb"><span class="mono faint" style="font-size:12px">' + p.num + '</span>' + (p.key ? '<span class="chipsm featchip" style="border:1px solid rgba(141,147,242,.5);border-radius:999px;padding:4px 11px;font-size:10.5px;font-family:\'IBM Plex Mono\',monospace;letter-spacing:.06em">KEY PROJECT</span>' : '') + '</div>' +
        '<div class="disp" style="font-size:28px;font-weight:600;color:#f4f4ef;margin-top:14px;line-height:1.08">' + esc(p.title) + '</div>' +
        '<div class="cv muted" style="font-size:14px;margin-top:12px;line-height:1.5">' + esc(p.lede) + '</div>' +
        '<div class="back" style="margin-top:auto;padding-top:18px;color:#e7e7e1">View project →</div></div>';
    }).join('');
    return '<div class="pagefade"><div class="wrap pagetop pagebot">' +
      '<div class="mono kick fadeup">RESEARCH</div>' +
      '<h1 class="disp fadeup bigh" style="font-size:64px;font-weight:700;color:#f6f6f1;margin:18px 0 0;line-height:1">Four strands<br>of inquiry</h1>' +
      '<div class="cv muted fadeup" style="font-size:18px;max-width:560px;margin-top:20px;line-height:1.5">Worker resistance, social movements, caste, and solidarity economies — studied through CSCW, HCI and digital ethnography.</div>' +
      '<div class="fx gap8" style="margin-top:28px"><span class="chip">CSCW</span><span class="chip">HCI</span><span class="chip">Digital Labour</span><span class="chip">Platform Studies</span></div>' +
      '<div class="grid rgrid" style="grid-template-columns:1fr 1fr;gap:22px;margin-top:48px">' + cards + '</div>' +
      '</div></div>';
  }

  function aboutHTML() {
    var streamRows = streams.map(function (s) { return '<div class="cv hl" style="font-size:16px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.07)">' + esc(s) + '</div>'; }).join('');
    var eduRows = education.map(function (e) {
      return '<div style="padding:9px 0;border-bottom:1px solid rgba(255,255,255,.07)"><div class="cv hl" style="font-size:15px">' + esc(e.deg) + '</div><div class="mono faint" style="font-size:11px;margin-top:3px">' + esc(e.place) + '</div></div>';
    }).join('');
    var affilRows = affil.map(function (a) { return '<div class="cv hl" style="font-size:15px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.07)">' + esc(a) + '</div>'; }).join('');
    var awardRows = fullAwards.map(function (aw) {
      return '<div class="newsrow fx ac jb gap16" style="padding:14px 0"><div class="cv hl" style="font-size:15px">' + esc(aw.t) + '</div><div class="mono faint nowrap" style="font-size:12px">' + esc(aw.y) + '</div></div>';
    }).join('');
    var actCols = profActivities.map(function (pa) {
      var items = pa.items.map(function (pi) {
        var inner = pi.href
          ? '<a class="cv linkin" href="' + esc(pi.href) + '" target="_blank" rel="noopener" style="font-size:14px;line-height:1.4">' + esc(pi.t) + '</a>'
          : '<span class="cv" style="font-size:14px;color:#cdcdc6;line-height:1.4">' + esc(pi.t) + '</span>';
        return '<div style="padding:9px 0;border-bottom:1px solid rgba(255,255,255,.07)">' + inner + '</div>';
      }).join('');
      return '<div><div class="disp hl" style="font-size:16px;font-weight:600">' + esc(pa.h) + '</div><div style="margin-top:10px">' + items + '</div></div>';
    }).join('');
    return '<div class="pagefade"><div class="wrap pagetop pagebot">' +
      '<div class="jumpnav" style="background:linear-gradient(180deg,rgba(8,8,10,.94),rgba(8,8,10,.7));backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:12px;padding:9px 11px;border:1px solid rgba(255,255,255,.08)">' +
      '<button class="jbtn" data-act="jump" data-id="ab-overview">Overview</button>' +
      '<button class="jbtn" data-act="jump" data-id="ab-research">Research &amp; Education</button>' +
      '<button class="jbtn" data-act="jump" data-id="ab-awards">Grants &amp; Awards</button>' +
      '<button class="jbtn" data-act="jump" data-id="ab-activities">Activities</button></div>' +
      '<div id="ab-overview"><div class="fadeup"><div class="mono kick">ABOUT</div>' +
      '<h1 class="disp bigh" style="font-size:54px;font-weight:700;color:#f6f6f1;margin:16px 0 0;line-height:1.02">Ashique Ali<br>Thuppilikkat</h1>' +
      '<div class="cv" style="font-size:18px;color:#cdcdc6;margin-top:24px;line-height:1.6;max-width:560px">PhD candidate at the Faculty of Information, University of Toronto, and a researcher at STREET Lab. My work focuses on the role of technology in worker resistance and unionisation amidst the platformization of urban life — how digital tools can help unions and workers on location-based labour platforms organise against algorithmic management and environmental hazards.</div>' +
      '<div class="cv muted" style="font-size:16px;margin-top:18px;line-height:1.6;max-width:560px">Recipient of the 2025–26 Connaught PhDs for Public Impact Fellowship and the 2024 SDGs@UofT Student Award; a former School of Cities Graduate Fellow; and co-founder of SAFAR, a research-action centre in West Bengal, India.</div>' +
      '<div class="fx ac fw gap10" style="margin-top:26px"><button class="cta" style="height:44px;padding:0 22px" data-act="copyemail">Email me</button>' +
      '<a class="iconbtn fx ac jc" href="https://scholar.google.com/citations?user=T4XvPfgAAAAJ&amp;hl=en" target="_blank" rel="noopener" aria-label="Google Scholar"><svg viewBox="0 0 24 24"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9 12 9s-5.548 2.249-6.758 4.769zM12 10c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"></path></svg></a>' +
      '<a class="iconbtn fx ac jc" href="https://orcid.org/0000-0002-9760-6847" target="_blank" rel="noopener" aria-label="ORCID"><i class="fa-brands fa-orcid"></i></a>' +
      '<a class="iconbtn fx ac jc" href="https://bsky.app/profile/ashiquealit.bsky.social" target="_blank" rel="noopener" aria-label="Bluesky"><i class="fa-brands fa-bluesky"></i></a>' +
      '<a class="iconbtn fx ac jc" href="https://www.linkedin.com/in/ashique-ali-t-3b693789/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a></div>' +
      '</div></div>' +
      '<div class="rule" style="margin-top:64px"></div>' +
      '<div id="ab-research" class="grid rgrid" style="grid-template-columns:1fr 1fr 1fr;gap:28px;margin-top:40px">' +
      '<div><div class="mono faint" style="font-size:11px;letter-spacing:.16em">RESEARCH STREAMS</div><div style="margin-top:16px">' + streamRows + '</div>' +
      '<div class="mono faint" style="font-size:11px;letter-spacing:.16em;margin-top:26px">RESEARCH ADVISOR</div><div style="margin-top:12px"><a class="cv linkin" href="https://www.priyankc.com/" target="_blank" rel="noopener" style="font-size:16px">Priyank Chandra</a></div>' +
      '<div class="mono faint" style="font-size:11px;letter-spacing:.16em;margin-top:26px">DISSERTATION COMMITTEE</div><div style="margin-top:12px"><div class="cv hl" style="font-size:16px;padding:5px 0">Rafael Grohmann</div><div class="cv hl" style="font-size:16px;padding:5px 0">Vera Khovanskaya</div></div></div>' +
      '<div><div class="mono faint" style="font-size:11px;letter-spacing:.16em">EDUCATION</div><div style="margin-top:16px">' + eduRows + '</div></div>' +
      '<div><div class="mono faint" style="font-size:11px;letter-spacing:.16em">AFFILIATIONS</div><div style="margin-top:16px">' + affilRows + '</div></div>' +
      '</div>' +
      '<div class="rule" style="margin-top:48px"></div>' +
      '<div id="ab-awards" style="margin-top:40px"><div class="mono faint" style="font-size:11px;letter-spacing:.16em;margin-bottom:8px">GRANTS &amp; AWARDS</div>' + awardRows + '</div>' +
      '<div class="rule" style="margin-top:48px"></div>' +
      '<div id="ab-activities" class="mono faint" style="font-size:11px;letter-spacing:.16em;margin-top:40px;margin-bottom:18px">PROFESSIONAL ACTIVITIES</div>' +
      '<div class="grid rgrid" style="grid-template-columns:1fr 1fr 1fr;gap:28px">' + actCols + '</div>' +
      '</div></div>';
  }

  function matchesProj(proj, it) {
    var first = (it.tags || [])[0] || '';
    return (proj.match || []).some(function (k) { return first.indexOf(k) !== -1; });
  }
  function relatedGroups(proj, source) {
    var out = [];
    source.forEach(function (g, gi) {
      var items = [];
      g.items.forEach(function (it, ii) {
        if (matchesProj(proj, it)) items.push({ it: it, gi: gi, ii: ii });
      });
      if (items.length) out.push({ group: g.group, items: items });
    });
    return out;
  }
  function countItems(groups) { return groups.reduce(function (a, g) { return a + g.items.length; }, 0); }

  function relListHTML(groups, listName) {
    return groups.map(function (g) {
      var rows = g.items.map(function (e, i) {
        var it = e.it;
        var actions = '';
        if (listName) {
          var links = linksHTML(it.links);
          var bib = it.bib ? copyBtnsHTML(listName, e.gi, e.ii) : '';
          actions = '<div class="fx ac fw gap10" style="margin-top:8px">' + links + bib + '</div>';
        } else if ((it.links || []).length) {
          actions = '<div class="fx ac fw gap10" style="margin-top:8px">' + linksHTML(it.links) + '</div>';
        }
        return '<div class="relrow"><div class="relnum">' + pad(i + 1) + '</div>' +
          '<div class="relt cv">' + esc(it.t) + '</div><div class="relv cv">' + esc(it.v) + '</div>' + actions + '</div>';
      }).join('');
      return '<div class="relgrp">' + esc(g.group) + '</div>' + rows;
    }).join('');
  }

  function accordionHTML(key, title, groups, listName) {
    var open = !!state.secOpen[state.proj + ':' + key];
    return '<button class="acc' + (open ? ' on' : '') + '" data-act="sec" data-key="' + key + '">' +
      '<span class="acctitle">' + title + '</span>' +
      '<span class="accmeta">' + pad(countItems(groups)) + '<span class="accsign">+</span></span></button>' +
      (open ? '<div class="accbody">' + relListHTML(groups, listName) + '</div>' : '');
  }

  function projectHTML() {
    var p = projects[state.proj];
    var threads = p.threads.map(function (t) {
      var act = t.sub ? ' data-act="sub" data-key="' + t.sub + '"' : '';
      return '<div class="tilt tcard" data-tilt' + act + ' style="' + (t.sub ? '' : 'cursor:default;') + 'padding:22px;min-height:160px;display:flex;flex-direction:column"><div class="shine"></div>' +
        '<div class="disp hl" style="font-size:18px;font-weight:600">' + esc(t.t) + '</div>' +
        '<div class="cv muted" style="font-size:13.5px;margin-top:10px;line-height:1.5">' + esc(t.d) + '</div>' +
        (t.sub ? '<div class="back" style="margin-top:auto;padding-top:14px;color:#e7e7e1">Visit project page →</div>' : '') +
        '</div>';
    }).join('');
    var pubs = p.writings.map(function (w) {
      return '<div class="linkrow"><div class="cv hl" style="font-size:15px;line-height:1.35">' + esc(w.t) + '</div>' +
        '<div class="mono faint" style="font-size:11px;margin-top:5px">' + esc(w.v) + '</div></div>';
    }).join('');
    var relPubs = relatedGroups(p, writingAcademic);
    var relPublic = relatedGroups(p, writingPublic);
    var relTalks = relatedGroups(p, talks);
    var related = '';
    if (relPubs.length + relPublic.length + relTalks.length > 0) {
      related = '<div class="rule" style="margin-top:64px"></div>' +
        '<div class="mono faint" style="font-size:11px;letter-spacing:.16em;margin-top:40px;margin-bottom:4px">EXPLORE ALL RELATED WORK</div>' +
        (relPubs.length ? accordionHTML('pubs', 'Publications', relPubs, 'academic') : '') +
        (relTalks.length ? accordionHTML('talks', 'Talks &amp; Presentations', relTalks, null) : '') +
        (relPublic.length ? accordionHTML('public', 'Public Scholarship', relPublic, 'public') : '');
    }
    var nextI = (state.proj + 1) % projects.length;
    return '<div class="pagefade"><div class="wrap pagetop pagebot">' +
      '<button class="back" data-act="nav" data-to="work">← Research</button>' +
      '<div class="fadeup" style="margin-top:26px"><div class="fx ac fw gap16"><span class="mono faint" style="font-size:14px">' + p.num + '</span><span class="chip">' + esc(p.tag) + '</span>' + (p.key ? '<span class="chip featchip">KEY PROJECT</span>' : '') + '</div>' +
      '<h1 class="disp bigh" style="font-size:58px;font-weight:700;color:#f6f6f1;margin:18px 0 0;line-height:1.02;max-width:840px">' + esc(p.title) + '</h1>' +
      '<div class="cv" style="font-size:21px;color:#cdcdc6;margin-top:22px;line-height:1.5;max-width:680px">' + esc(p.lede) + '</div></div>' +
      '<div class="thumb pthumb" style="border-radius:18px;margin-top:40px;position:relative;overflow:hidden"><img src="' + esc(p.imgSrc) + '" alt="' + esc(p.img) + '" style="width:100%;height:100%;object-fit:cover;display:block"></div>' +
      '<div class="grid rgrid" style="grid-template-columns:2fr 1fr;gap:48px;margin-top:56px;align-items:start">' +
      '<div><div class="mono faint" style="font-size:11px;letter-spacing:.16em">OVERVIEW</div>' +
      '<div class="cv" style="font-size:18px;color:#d3d3cc;margin-top:16px;line-height:1.65">' + esc(p.overview) + '</div>' +
      '<div class="mono faint" style="font-size:11px;letter-spacing:.16em;margin-top:48px;margin-bottom:20px">SUB-PROJECTS</div>' +
      '<div class="grid rgrid" style="grid-template-columns:1fr 1fr;gap:16px">' + threads + '</div></div>' +
      '<div><div class="mono faint" style="font-size:11px;letter-spacing:.16em">SELECTED PUBLICATIONS</div><div style="margin-top:8px">' + pubs + '</div></div>' +
      '</div>' + related +
      '<div class="rule" style="margin-top:72px"></div>' +
      '<div class="fx ac jb fw gap16" style="margin-top:32px"><div><div class="mono faint" style="font-size:11px">NEXT PROJECT</div>' +
      '<div class="disp hl" style="font-size:28px;font-weight:600;margin-top:6px">' + esc(projects[nextI].title) + '</div></div>' +
      '<button class="cta" style="height:46px;padding:0 24px" data-act="proj" data-i="' + nextI + '">Next →</button></div>' +
      '</div></div>';
  }

  function relatedGroupsAny(matchTags, source) {
    var out = [];
    source.forEach(function (g, gi) {
      var items = [];
      g.items.forEach(function (it, ii) {
        var hit = (it.tags || []).some(function (t) {
          return matchTags.some(function (k) { return t.indexOf(k) !== -1; });
        });
        if (hit) items.push({ it: it, gi: gi, ii: ii });
      });
      if (items.length) out.push({ group: g.group, items: items });
    });
    return out;
  }

  function subHTML() {
    var s = SUBS[state.subKey];
    var parent = projects[s.parent];
    var relPubs = relatedGroupsAny(s.matchAny, writingAcademic);
    var relPublic = relatedGroupsAny(s.matchAny, writingPublic);
    var relTalks = relatedGroupsAny(s.matchAny, talks);
    var sec = function (title, groups, listName) {
      if (!groups.length) return '';
      return '<div class="mono faint" style="font-size:11px;letter-spacing:.16em;margin-top:48px">' + title + '</div>' +
        '<div style="margin-top:2px">' + relListHTML(groups, listName) + '</div>';
    };
    var fieldwork = '';
    if (s.fieldwork) {
      var campCards = s.fieldwork.camps.map(function (c) {
        return '<div class="tcard" style="cursor:default;overflow:hidden;padding:0">' +
          '<div style="height:200px;overflow:hidden"><img src="' + esc(c.imgSrc) + '" alt="' + esc(c.t) + '" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block"></div>' +
          '<div style="padding:18px 20px 22px"><div class="disp hl" style="font-size:17px;font-weight:600">' + esc(c.t) + '</div>' +
          '<div class="cv muted" style="font-size:13.5px;margin-top:8px;line-height:1.5">' + esc(c.d) + '</div></div></div>';
      }).join('');
      fieldwork = '<div class="mono faint" style="font-size:11px;letter-spacing:.16em;margin-top:48px">COMMUNITY ENGAGEMENT · HEALTH CAMPS</div>' +
        '<div class="cv" style="font-size:16px;color:#cdcdc6;margin-top:14px;line-height:1.55;max-width:620px">' + esc(s.fieldwork.note) + '</div>' +
        '<div class="grid rgrid" style="grid-template-columns:1fr 1fr;gap:18px;margin-top:22px">' + campCards + '</div>';
    }
    var sib = SUBS[s.sibling];
    return '<div class="pagefade"><div class="wrap pagetop pagebot">' +
      '<button class="back" data-act="proj" data-i="' + s.parent + '">← ' + esc(parent.title) + '</button>' +
      '<div class="fadeup" style="margin-top:26px"><div class="fx ac fw gap16"><span class="mono faint" style="font-size:14px">' + parent.num + '</span><span class="chip">' + esc(s.tag) + '</span><span class="chip featchip">CURRENT RESEARCH</span></div>' +
      '<h1 class="disp bigh" style="font-size:54px;font-weight:700;color:#f6f6f1;margin:18px 0 0;line-height:1.02;max-width:840px">' + esc(s.title) + '</h1>' +
      '<div class="cv" style="font-size:20px;color:#cdcdc6;margin-top:20px;line-height:1.5;max-width:680px">' + esc(s.lede) + '</div></div>' +
      '<div class="thumb pthumb" style="border-radius:18px;margin-top:40px;position:relative;overflow:hidden"><img src="' + esc(s.imgSrc) + '" alt="' + esc(s.img) + '" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block"></div>' +
      '<div style="max-width:760px"><div class="mono faint" style="font-size:11px;letter-spacing:.16em;margin-top:48px">OVERVIEW</div>' +
      '<div class="cv" style="font-size:17px;color:#d3d3cc;margin-top:14px;line-height:1.65">' + esc(s.overview) + '</div>' +
      fieldwork +
      sec('PUBLICATIONS', relPubs, 'academic') +
      sec('PUBLIC SCHOLARSHIP', relPublic, 'public') +
      sec('TALKS &amp; PRESENTATIONS', relTalks, null) +
      '</div>' +
      '<div class="rule" style="margin-top:64px"></div>' +
      '<div class="fx ac jb fw gap16" style="margin-top:30px"><div><div class="mono faint" style="font-size:11px">ALSO IN THIS PROJECT</div>' +
      '<div class="disp hl" style="font-size:26px;font-weight:600;margin-top:6px">' + esc(sib.title) + '</div></div>' +
      '<button class="cta" style="height:44px;padding:0 22px" data-act="sub" data-key="' + sib.key + '">Visit →</button></div>' +
      '</div></div>';
  }

  function writingListHTML() {
    var source = state.wTab === 'academic' ? writingAcademic : writingPublic;
    var listName = state.wTab === 'academic' ? 'academic' : 'public';
    var wq = state.wQuery.trim().toLowerCase();
    var tf = state.tagFilter;
    var out = '';
    var shown = 0;
    source.forEach(function (g, gi) {
      var rows = '';
      var count = 0;
      g.items.forEach(function (it, ii) {
        if (tf && (it.tags || []).indexOf(tf) === -1) return;
        if (wq && (it.t + ' ' + it.v + ' ' + (it.tags || []).join(' ')).toLowerCase().indexOf(wq) === -1) return;
        count++;
        var links = linksHTML(it.links);
        var bib = it.bib ? copyBtnsHTML(listName, gi, ii) : '';
        var tagRow = (it.tags || []).length ? '<div class="fx fw gap8" style="margin-top:12px">' + tagBtnsHTML(it.tags) + '</div>' : '';
        rows += '<div class="pubrow"><div class="pubnum">' + pad(ii + 1) + '</div>' +
          '<div class="pubt cv">' + esc(it.t) + '</div><div class="pubv cv">' + esc(it.v) + '</div>' +
          '<div class="fx ac fw gap10" style="margin-top:12px">' + links + bib + '</div>' + tagRow + '</div>';
      });
      if (count > 0) {
        shown++;
        out += '<div class="grouphd" style="margin-top:40px;margin-bottom:4px"><span>' + esc(g.group) + '</span><span class="gcount">' + pad(count) + '</span></div>' + rows;
      }
    });
    if (shown === 0) out += '<div class="cv muted" style="text-align:center;padding:60px 0;font-size:15px">No writing matches this tag in this section. Try the other tab or clear the filter.</div>';
    return filterbarHTML() + out;
  }

  function writingHTML() {
    var total = writingAcademic.concat(writingPublic).reduce(function (a, g) { return a + g.items.length; }, 0);
    return '<div class="pagefade"><div class="wrap pagetop pagebot">' +
      '<div class="mono kick fadeup">WRITING <span class="kcount">· ' + total + ' ENTRIES</span></div>' +
      '<h1 class="disp fadeup bigh" style="font-size:56px;font-weight:700;color:#f6f6f1;margin:16px 0 0;line-height:1.02">Selected writing</h1>' +
      '<div class="cv muted fadeup" style="font-size:17px;max-width:580px;margin-top:18px;line-height:1.5">Peer-reviewed scholarship and public writing from my research projects. Copy a formatted citation or BibTeX entry from any item — or click a tag to filter.</div>' +
      '<input class="search" id="wsearch" style="margin-top:26px;max-width:560px" placeholder="Search by title, venue, or tag…" value="' + esc(state.wQuery) + '">' +
      '<div class="tabbar fx" style="margin-top:28px">' +
      '<button class="tab' + (state.wTab === 'academic' ? ' on' : '') + '" data-act="wtab" data-tab="academic">Academic Scholarship</button>' +
      '<button class="tab' + (state.wTab === 'public' ? ' on' : '') + '" data-act="wtab" data-tab="public">Public Scholarship</button>' +
      '</div><div id="wlist">' + writingListHTML() + '</div>' +
      '</div></div>';
  }

  function talkListHTML() {
    var tf = state.tagFilter;
    var rows = '';
    var count = 0;
    talks[state.tTab].items.forEach(function (it, ii) {
      if (tf && (it.tags || []).indexOf(tf) === -1) return;
      count++;
      var links = (it.links || []).length ? '<div class="fx gap10" style="margin-top:10px">' + linksHTML(it.links) + '</div>' : '';
      var tagRow = (it.tags || []).length ? '<div class="fx fw gap8" style="margin-top:12px">' + tagBtnsHTML(it.tags) + '</div>' : '';
      rows += '<div class="pubrow"><div class="pubnum">' + pad(ii + 1) + '</div>' +
        '<div class="pubt cv">' + esc(it.t) + '</div><div class="pubv cv">' + esc(it.v) + '</div>' + links + tagRow + '</div>';
    });
    if (count === 0) rows += '<div class="cv muted" style="text-align:center;padding:60px 0;font-size:15px">No talks in this category match this tag. Try another tab or clear the filter.</div>';
    return filterbarHTML() + '<div style="margin-top:8px">' + rows + '</div>';
  }

  function talksHTML() {
    var total = talks.reduce(function (a, g) { return a + g.items.length; }, 0);
    var tabs = talks.map(function (g, i) {
      return '<button class="tab' + (i === state.tTab ? ' on' : '') + '" data-act="ttab" data-i="' + i + '">' + esc(g.group) + '</button>';
    }).join('');
    return '<div class="pagefade"><div class="wrap pagetop pagebot">' +
      '<div class="mono kick fadeup">TALKS <span class="kcount">· ' + total + ' TALKS</span></div>' +
      '<h1 class="disp fadeup bigh" style="font-size:56px;font-weight:700;color:#f6f6f1;margin:16px 0 0;line-height:1.02">Talks &amp; workshops</h1>' +
      '<div class="cv muted fadeup" style="font-size:17px;max-width:580px;margin-top:18px;line-height:1.5">Conference papers, invited talks and doctoral workshops&nbsp;</div>' +
      '<div class="tabbar fx fw" style="margin-top:34px">' + tabs + '</div>' +
      '<div id="tlist">' + talkListHTML() + '</div>' +
      '</div></div>';
  }

  function teachingHTML() {
    var total = teaching.reduce(function (a, t) { return a + t.courses.length; }, 0);
    var boxes = teaching.map(function (td, i) {
      var rows = td.courses.map(function (c) {
        return '<div class="courserow"><div class="cv hl" style="font-size:14px;line-height:1.3">' + esc(c.n) + '</div>' +
          '<div class="mono faint" style="font-size:11px;margin-top:3px">' + esc(c.term) + '</div></div>';
      }).join('');
      return '<div class="coursebox"><div class="fx ac jb" style="margin-bottom:14px">' +
        '<span class="disp" style="font-size:30px;font-weight:700;color:#4d4d55;letter-spacing:-.02em">' + pad(i + 1) + '</span>' +
        '<span class="gcount">' + pad(td.courses.length) + ' COURSES</span></div>' +
        '<div class="disp hl" style="font-size:17px;font-weight:600;line-height:1.2">' + esc(td.dept) + '</div>' +
        '<div class="mono faint" style="font-size:11px;margin-top:6px">' + esc(td.campus) + '</div>' +
        '<div style="margin-top:14px">' + rows + '</div></div>';
    }).join('');
    return '<div class="pagefade"><div class="wrap pagetop pagebot">' +
      '<div class="mono kick fadeup">TEACHING <span class="kcount">· ' + total + ' COURSES</span></div>' +
      '<h1 class="disp fadeup bigh" style="font-size:56px;font-weight:700;color:#f6f6f1;margin:16px 0 0;line-height:1.02">Teaching assistantships</h1>' +
      '<div class="cv muted fadeup" style="font-size:17px;max-width:580px;margin-top:18px;line-height:1.5">A summary of teaching assistantship roles across departments at the University of Toronto.</div>' +
      '<div class="grid rgrid" style="grid-template-columns:1fr 1fr 1fr;gap:20px;margin-top:40px">' + boxes + '</div>' +
      '</div></div>';
  }

  function artListHTML() {
    var q = state.artQuery.trim().toLowerCase();
    var af = state.artFilter;
    var filtered = artifacts.filter(function (a) {
      return (af === 'all' || a.cat === af) && (q === '' || (a.title + ' ' + a.desc + ' ' + a.tags.join(' ')).toLowerCase().indexOf(q) !== -1);
    });
    var cards = filtered.map(function (a) {
      var tags = a.tags.map(function (t) { return '<span class="tagsm">' + esc(t) + '</span>'; }).join('');
      return '<a class="acard" href="' + esc(a.href) + '" target="_blank" rel="noopener">' +
        '<div class="athumb"><span>' + a.icon + '</span></div>' +
        '<div class="disp" style="font-size:21px;font-weight:600;color:#f4f4ef;margin-top:18px;line-height:1.15">' + esc(a.title) + '</div>' +
        '<div class="cv muted" style="font-size:14px;margin-top:10px;line-height:1.5">' + esc(a.desc) + '</div>' +
        '<div class="fx fw gap8" style="margin-top:16px">' + tags + '</div>' +
        '<div class="act" style="margin-top:18px">View artifact →</div></a>';
    }).join('');
    var empty = filtered.length === 0 ? '<div class="cv muted" style="text-align:center;padding:60px 0;font-size:15px">No artifacts match your search. Try a different keyword or category.</div>' : '';
    return '<div class="grid rgrid" style="grid-template-columns:1fr 1fr;gap:20px;margin-top:30px">' + cards + '</div>' + empty;
  }

  function artChipsHTML() {
    return [['all', 'All'], ['Dashboard', 'Dashboard'], ['Map', 'Interactive Map'], ['Election Monitor', 'Election Monitor']].map(function (c) {
      return '<button class="fchip' + (state.artFilter === c[0] ? ' on' : '') + '" data-act="afilter" data-f="' + esc(c[0]) + '">' + esc(c[1]) + '</button>';
    }).join('');
  }

  function artifactsHTML() {
    return '<div class="pagefade"><div class="wrap pagetop pagebot">' +
      '<div class="mono kick fadeup">STREET LAB · SAFAR FOUNDATION <span class="kcount">· ' + artifacts.length + ' TOOLS</span></div>' +
      '<h1 class="disp fadeup bigh" style="font-size:56px;font-weight:700;color:#f6f6f1;margin:16px 0 0;line-height:1.02">Artifacts</h1>' +
      '<div class="cv muted fadeup" style="font-size:17px;max-width:580px;margin-top:18px;line-height:1.5">Datasets, dashboards and civic tools built through STREET Lab and SAFAR Foundation initiatives.</div>' +
      '<input class="search" id="asearch" style="margin-top:30px;max-width:560px" placeholder="Search artifacts by title, description, or tag…" value="' + esc(state.artQuery) + '">' +
      '<div class="fx fw gap8" id="achips" style="margin-top:16px">' + artChipsHTML() + '</div>' +
      '<div id="alist">' + artListHTML() + '</div>' +
      '</div></div>';
  }

  function newsHTML() {
    var rows = newsAll.slice(4).map(function (n) { return newsRowHTML(n, 820); }).join('');
    return '<div class="pagefade"><div class="wrap pagetop pagebot">' +
      '<button class="back" data-act="nav" data-to="home">← Home</button>' +
      '<h1 class="disp fadeup" style="font-size:56px;font-weight:700;color:#f6f6f1;margin:22px 0 0;line-height:1.02">News archive</h1>' +
      '<div style="margin-top:30px">' + rows + '</div>' +
      '</div></div>';
  }

  /* ---------------- Render ---------------- */

  var PAGES = { home: homeHTML, work: workHTML, about: aboutHTML, project: projectHTML, sub: subHTML, writing: writingHTML, talks: talksHTML, teaching: teachingHTML, artifacts: artifactsHTML, news: newsHTML };
  var TITLES = { home: 'PhD Candidate, University of Toronto', work: 'Research', about: 'About', project: 'Research', writing: 'Writing', talks: 'Talks', teaching: 'Teaching', artifacts: 'Artifacts', news: 'News' };

  var burgerEl = document.getElementById('navburger');
  var dropEl = document.getElementById('navdrop');
  function closeMenu() {
    dropEl.classList.remove('open');
    burgerEl.classList.remove('open');
    burgerEl.setAttribute('aria-expanded', 'false');
  }
  function toggleMenu() {
    var open = !dropEl.classList.contains('open');
    dropEl.classList.toggle('open', open);
    burgerEl.classList.toggle('open', open);
    burgerEl.setAttribute('aria-expanded', String(open));
    burgerEl.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  function render() {
    closeMenu();
    pageEl.innerHTML = PAGES[state.page]();
    var activeNl = (state.page === 'project' || state.page === 'sub') ? 'work' : state.page;
    document.querySelectorAll('[data-nl]').forEach(function (el) {
      el.classList.toggle('on', activeNl === el.dataset.nl);
    });
    document.title = 'Ashique Ali Thuppilikkat — ' + (state.page === 'project' ? projects[state.proj].title : state.page === 'sub' ? SUBS[state.subKey].title : TITLES[state.page]);
    var key = state.page + ':' + state.proj + ':' + state.subKey;
    if (navKey !== key) { navKey = key; appEl.scrollTop = 0; }
    if (pendingScroll) {
      var id = pendingScroll; pendingScroll = null;
      setTimeout(function () { scrollToEl(id); }, 60);
    }
  }

  /* ---------------- Events ---------------- */

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-act]');
    if (dropEl.classList.contains('open') && (!el || el.dataset.act !== 'menu') && !e.target.closest('#navdrop')) closeMenu();
    if (!el) return;
    var d = el.dataset;
    switch (d.act) {
      case 'menu': toggleMenu(); break;
      case 'nav': closeMenu(); go(d.to); break;
      case 'proj': go('project', +d.i); break;
      case 'sub': go('sub', d.key); break;
      case 'contact':
        if (state.page === 'home') scrollToEl('site-contact');
        else { pendingScroll = 'site-contact'; go('home'); }
        break;
      case 'mailto': location.href = 'mailto:' + EMAIL; break;
      case 'copyemail': copyText(EMAIL, 'Email address'); break;
      case 'jump': scrollToEl(d.id); break;
      case 'wtab':
        state.wTab = d.tab; state.tagFilter = '';
        render();
        break;
      case 'ttab':
        state.tTab = +d.i; state.tagFilter = '';
        render();
        break;
      case 'tag':
        state.tagFilter = state.tagFilter === d.tag ? '' : d.tag;
        if (state.page === 'writing') document.getElementById('wlist').innerHTML = writingListHTML();
        else if (state.page === 'talks') document.getElementById('tlist').innerHTML = talkListHTML();
        break;
      case 'cleartag':
        state.tagFilter = '';
        if (state.page === 'writing') document.getElementById('wlist').innerHTML = writingListHTML();
        else if (state.page === 'talks') document.getElementById('tlist').innerHTML = talkListHTML();
        break;
      case 'afilter':
        state.artFilter = d.f;
        document.getElementById('achips').innerHTML = artChipsHTML();
        document.getElementById('alist').innerHTML = artListHTML();
        break;
      case 'sec':
        var k = state.proj + ':' + d.key;
        state.secOpen[k] = !state.secOpen[k];
        render();
        break;
      case 'copy':
        var item = REFS[d.list][+d.g].items[+d.i];
        copyText(d.kind === 'bib' ? item.bib : item.cite, d.kind === 'bib' ? 'BibTeX' : 'Citation');
        break;
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  document.addEventListener('input', function (e) {
    if (e.target.id === 'wsearch') {
      state.wQuery = e.target.value;
      document.getElementById('wlist').innerHTML = writingListHTML();
    } else if (e.target.id === 'asearch') {
      state.artQuery = e.target.value;
      document.getElementById('alist').innerHTML = artListHTML();
    }
  });

  /* Card tilt + cursor shine */
  if (!reducedMotion) {
    var lastCard = null;
    document.addEventListener('mousemove', function (e) {
      var card = e.target.closest && e.target.closest('[data-tilt]');
      if (lastCard && lastCard !== card) {
        lastCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      }
      lastCard = card;
      if (!card) return;
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5;
      var py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = 'perspective(1000px) rotateY(' + (px * 4) + 'deg) rotateX(' + (-py * 4) + 'deg) translateY(-5px) translateZ(4px)';
      card.style.setProperty('--mx', (px + 0.5) * 100 + '%');
      card.style.setProperty('--my', (py + 0.5) * 100 + '%');
    });

    /* Background glow parallax */
    var bg = document.getElementById('bg');
    document.addEventListener('mousemove', function (e) {
      var px = e.clientX / window.innerWidth - 0.5;
      var py = e.clientY / window.innerHeight - 0.5;
      bg.querySelectorAll('[data-depth]').forEach(function (l) {
        var depth = parseFloat(l.dataset.depth) || 1;
        l.style.transform = 'translate(' + (-px * depth * 22) + 'px, ' + (-py * depth * 22) + 'px)';
      });
    });
  }

  /* ---------------- Init ---------------- */

  var r = parseHash();
  state.page = r.page; state.proj = r.proj;
  render();

  /* ---------------- Photo sliders + comic thumbnail (appended enhancement) ---------------- */
  (function () {
    var CAMP_IMGS = {
      'Health Camp — Delhi': ['images/healthcamp-delhi-1.jpg','images/healthcamp-delhi-2.jpg','images/healthcamp-delhi-3.jpg','images/healthcamp-delhi-4.jpg'],
      'Health Camp — Kolkata': ['images/healthcamp-kolkata-1.jpg','images/healthcamp-kolkata-2.jpg','images/healthcamp-kolkata-3.jpg','images/healthcamp-kolkata-4.jpg']
    };
    var COMIC_IMG = 'images/comic-roznamcha.jpg';

    function buildSlider(imgWrap, imgs, label) {
      if (!imgWrap || imgWrap.getAttribute('data-slider') === '1' || imgs.length < 1) return;
      imgWrap.setAttribute('data-slider', '1');
      imgWrap.style.position = 'relative';
      var track = document.createElement('div');
      track.style.cssText = 'display:flex;height:100%;transition:transform .45s cubic-bezier(.22,.61,.36,1)';
      imgs.forEach(function (src, i) {
        var im = document.createElement('img');
        im.src = src; im.alt = label + ' photo ' + (i + 1); im.loading = 'lazy';
        im.style.cssText = 'min-width:100%;width:100%;height:100%;object-fit:cover;display:block;flex:0 0 100%';
        track.appendChild(im);
      });
      imgWrap.innerHTML = '';
      imgWrap.appendChild(track);
      var idx = 0, n = imgs.length;
      function svg(d){return '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="'+d+'"></polyline></svg>';}
      function mkArrow(cls, side, poly){
        var b = document.createElement('button');
        b.className = cls; b.setAttribute('aria-label', cls);
        b.style.cssText = 'position:absolute;top:50%;'+side+':8px;transform:translateY(-50%);width:34px;height:34px;border:none;border-radius:50%;background:rgba(0,0,0,.45);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s,background .2s;z-index:3';
        b.innerHTML = svg(poly);
        return b;
      }
      var dotsWrap = document.createElement('div');
      dotsWrap.style.cssText = 'position:absolute;bottom:8px;left:0;right:0;display:flex;gap:6px;justify-content:center;z-index:3';
      var dots = imgs.map(function (_, i) {
        var d = document.createElement('button');
        d.setAttribute('aria-label', 'Go to photo ' + (i + 1));
        d.style.cssText = 'width:7px;height:7px;padding:0;border:none;border-radius:50%;cursor:pointer;transition:background .2s,transform .2s;background:' + (i === 0 ? '#fff' : 'rgba(255,255,255,.45)');
        d.addEventListener('click', function () { go(i); });
        dotsWrap.appendChild(d);
        return d;
      });
      function render() {
        track.style.transform = 'translateX(-' + (idx * 100) + '%)';
        dots.forEach(function (d, i) { d.style.background = i === idx ? '#fff' : 'rgba(255,255,255,.45)'; d.style.transform = i === idx ? 'scale(1.25)' : 'none'; });
      }
      function go(i) { idx = (i + n) % n; render(); }
      if (n > 1) {
        var prev = mkArrow('Previous photo', 'left', '15 18 9 12 15 6');
        var next = mkArrow('Next photo', 'right', '9 18 15 12 9 6');
        prev.addEventListener('click', function () { go(idx - 1); });
        next.addEventListener('click', function () { go(idx + 1); });
        imgWrap.appendChild(prev); imgWrap.appendChild(next);
        imgWrap.addEventListener('mouseenter', function () { prev.style.opacity = 1; next.style.opacity = 1; });
        imgWrap.addEventListener('mouseleave', function () { prev.style.opacity = 0; next.style.opacity = 0; });
      }
      imgWrap.appendChild(dotsWrap);
    }

    function enhance() {
      // Health camp sliders: find each card by its caption title
      document.querySelectorAll('.tcard').forEach(function (card) {
        var title = (card.textContent || '').trim();
        Object.keys(CAMP_IMGS).forEach(function (name) {
          if (title.indexOf(name) === 0 || title.indexOf(name) > -1) {
            var img = card.querySelector('img');
            if (img && !img.closest('[data-slider="1"]')) {
              var wrap = img.parentElement;
              buildSlider(wrap, CAMP_IMGS[name], name);
            }
          }
        });
      });
      // Comic thumbnail: find the roznamcha publication row
      var rows = document.querySelectorAll('.relrow');
      rows.forEach(function (row) {
        if ((row.textContent || '').indexOf('roznamcha') > -1 && !row.querySelector('.comic-thumb')) {
          var relt = row.querySelector('.relt');
          var link = row.querySelector('a.act, a[href]');
          var a = document.createElement('a');
          a.href = link ? link.href : '#';
          a.target = '_blank'; a.rel = 'noopener';
          var im = document.createElement('img');
          im.className = 'comic-thumb';
          im.src = COMIC_IMG;
          im.alt = 'Comic strip thumbnail — Riding through the smog: A roznamcha of ride-sourcing bike taxis';
          im.style.cssText = 'display:block;width:100%;max-width:260px;height:auto;border-radius:8px;margin:8px 0 12px;box-shadow:0 2px 10px rgba(0,0,0,.35);background:#fff';
          a.appendChild(im);
          if (relt) relt.insertAdjacentElement('afterend', a); else row.appendChild(a);
        }
      });
      // Org logos for STREET Lab and SAFAR affiliation entries
      var LOGOS = [
        { match: 'STREET Lab', src: 'images/Streetlab-logo.png', alt: 'STREET Lab logo' },
        { match: 'SAFAR', src: 'images/safar-logo.jpg', alt: 'SAFAR logo' }
      ];
      LOGOS.forEach(function (lg) {
        document.querySelectorAll('.cv.hl').forEach(function (el) {
          if ((el.textContent || '').trim() === lg.match && !el.querySelector('.org-logo')) {
            el.style.display = 'flex';
            el.style.alignItems = 'center';
            el.style.gap = '10px';
            var im = document.createElement('img');
            im.className = 'org-logo';
            im.src = lg.src; im.alt = lg.alt; im.loading = 'lazy';
            im.style.cssText = 'height:22px;width:auto;object-fit:contain;border-radius:3px;background:#fff;flex:0 0 auto';
            el.insertBefore(im, el.firstChild);
          }
        });
      });
    }

    var app = document.getElementById('app') || document.body;
    var obs = new MutationObserver(function () { enhance(); });
    obs.observe(app, { childList: true, subtree: true });
    if (document.readyState !== 'loading') setTimeout(enhance, 0);
    else document.addEventListener('DOMContentLoaded', enhance);
  })();

})();
