const publications = [
  {
    id: 'pub1',
    type: 'article-journal',
    author: [
      { family: 'Thuppilikkat', given: 'Ashique Ali' },
      { family: 'Dhar', given: 'Dipsita' },
      { family: 'Chandra', given: 'Priyank' }
    ],
    title: 'Union Makes Us Strong: Space, Technology, and On-Demand Ridesourcing Digital Labour Platforms',
    'container-title': 'Proceedings of the ACM on Human-Computer Interaction',
    volume: '8',
    issue: 'CSCW2',
    page: '1-36',
    issued: { 'date-parts': [[2024]] },
    DOI: '[DOI or URL]'
  },
  {
    id: 'pub2',
    type: 'paper-conference',
    author: [
      { family: 'Thuppilikkat', given: 'Ashique Ali' },
      { family: 'Dhar', given: 'Dipsita' },
      { family: 'Raval', given: 'Noopur' },
      { family: 'Chandra', given: 'Priyank' }
    ],
    title: 'Generative Politics and Labour Markets: Unions and Collective Life in a City in Crisis',
    'container-title': 'Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems',
    page: '1-18',
    issued: { 'date-parts': [[2025]] },
    DOI: '[DOI or URL]'
  },
  {
    id: 'pub3',
    type: 'article-journal',
    author: [{ family: 'Thuppilikkat', given: 'Ashique Ali' }],
    title: 'A Short History of the Cooperative Movement in Northern Malabar, Kerala',
    'container-title': 'Economic and Political Weekly',
    volume: '59',
    issue: '31',
    page: '47-52',
    issued: { 'date-parts': [[2024]] },
    DOI: '[DOI or URL]'
  },
  {
    id: 'pub4',
    type: 'article-journal',
    author: [
      { family: 'Dhar', given: 'Dipsita' },
      { family: 'Thuppilikkat', given: 'Ashique Ali' }
    ],
    title: 'Gendered labour’s positions of vulnerabilities in digital labour platforms and strategies of resistance: a case study of women workers’ struggle in Urban Company, New Delhi',
    'container-title': 'Gender & Development',
    volume: '30',
    issue: '3',
    page: '667-686',
    issued: { 'date-parts': [[2022]] },
    DOI: '[DOI or URL]'
  },
  {
    id: 'abs1',
    type: 'paper-conference',
    author: [
      { family: 'Petterson', given: 'Adrian' },
      { family: 'Thuppilikkat', given: 'Ashique Ali' },
      { family: 'Gupta', given: 'Paridhi' },
      { family: 'Klassen', given: 'Shamika' },
      { family: 'Jack', given: 'Margaret C.' },
      { family: 'Liu', given: 'Jun' },
      { family: 'Chandra', given: 'Priyank' }
    ],
    title: 'Supporting social movements through HCI and design',
    'container-title': 'Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems',
    page: '1-5',
    issued: { 'date-parts': [[2023]] },
    DOI: '[DOI or URL]'
  },
  {
    id: 'abs2',
    type: 'paper-conference',
    author: [
      { family: 'Fernandes', given: 'Kim' },
      { family: 'Alharbi', given: 'Rahaf' },
      { family: 'Sum', given: 'Cella' },
      { family: 'Kameswaran', given: 'Vaishnav' },
      { family: 'Spektor', given: 'Franchesca' },
      { family: 'Thuppilikkat', given: 'Ashique Ali' },
      { family: 'Petterson', given: 'Adrian' },
      { family: 'Marathe', given: 'Megh' },
      { family: 'Hamidi', given: 'Foad' },
      { family: 'Chandra', given: 'Priyank' }
    ],
    title: 'Organizing for More Just and Inclusive Futures: A Community Discussion',
    'container-title': 'Companion Publication of the 2024 Conference on Computer-Supported Cooperative Work and Social Computing',
    page: '689-692',
    issued: { 'date-parts': [[2024]] },
    DOI: '[DOI or URL]'
  }
];

// Initialize Citation.js
const Cite = require('citation-js');

// Generate citations
function showCitation(id, format) {
  const publication = publications.find(pub => pub.id === id);
  if (!publication) return;

  const cite = new Cite(publication);
  const outputDiv = document.getElementById(`citation-${id}`);
  if (format === 'apa') {
    outputDiv.innerHTML = cite.format('bibliography', { format: 'html', template: 'apa' });
  } else if (format === 'mla') {
    outputDiv.innerHTML = cite.format('bibliography', { format: 'html', template: 'mla' });
  } else if (format === 'chicago') {
    outputDiv.innerHTML = cite.format('bibliography', { format: 'html', template: 'chicago-author-date' });
  } else {
    outputDiv.innerHTML = '';
  }

  // Add copy button
  if (format) {
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy Citation';
    copyButton.onclick = () => copyCitation(cite.format('bibliography', { format: 'text', template: format }));
    outputDiv.appendChild(copyButton);
  }
}

// Copy citation
function copyCitation(citation) {
  navigator.clipboard.writeText(citation)
    .then(() => alert('Citation copied to clipboard!'))
    .catch(err => console.error('Failed to copy citation:', err));
}

// Download BibTeX
function downloadBibTeX(id) {
  const publication = publications.find(pub => pub.id === id);
  if (!publication) return;

  const cite = new Cite(publication);
  const bibtex = cite.format('bibtex');
  const blob = new Blob([bibtex], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${id}.bib`;
  a.click();
  URL.revokeObjectURL(url);
}
