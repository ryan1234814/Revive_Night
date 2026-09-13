/* 
  Revive Night - Main JavaScript Application Logic
  Contains Startup dataset (PRD + PDF + Reference Image), dynamic UI rendering,
  exact card structure matching attached screenshot, filters, search,
  modal views, community interactions, and canvas particle background.
*/

// Initial Startups Data (Combining PRD, PDF Document, and Reference Image)
const initialStartups = [
  {
    id: 'omniwork',
    name: 'OmniWork',
    country: 'Sweden / Global',
    sector: 'Remote Work / Collaboration',
    sectorColor: '#70a1ff',
    funding: '$6.2M',
    fundingRaw: 6200000,
    rocketScore: '8,920',
    valueProposition: "A 'virtual office' with floorplans and avatars for remote teams.",
    causeOfDeath: "Folded in 2023 as hybrid work normalized — persistent presence/video felt like surveillance and added fatigue, and it lost the 'whole office in one tool' bet against Slack/Zoom, which already bundled presence.",
    riseYear: 2020,
    fallYear: 2023,
    marketPotential: 3,
    scalePotential: 3,
    rebuildPotential: 4,
    failureCategoryTag: 'VIRTUAL FATIGUE',
    failureCategoryColor: '#2f3542',
    interestedCount: 198,
    expectedDeliverable: 'A working Slack/Teams-embedded presence prototype, one AI nudge feature, and a one-pager on why this avoids Zoom/virtual-office fatigue.'
  },
  {
    id: 'querybase',
    name: 'QueryBase',
    country: 'USA',
    sector: 'Consumer AI',
    sectorColor: '#a4b0be',
    funding: '$1.5M',
    fundingRaw: 1500000,
    rocketScore: '4,150',
    valueProposition: 'A localized question-answering platform.',
    causeOfDeath: 'Struggled to scale past a single geography/vertical and to monetize free Q&A traffic.',
    riseYear: 2021,
    fallYear: 2023,
    marketPotential: 2,
    scalePotential: 2,
    rebuildPotential: 3,
    failureCategoryTag: 'MONETIZATION & SCALE',
    failureCategoryColor: '#57606f',
    interestedCount: 87,
    expectedDeliverable: 'A working Q&A demo scoped to one legal topic in one state, proof that answers are citation-grounded, and a licensing/GTM slide aimed at legal-aid organizations.'
  },
  {
    id: 'visionarysearch',
    name: 'VisionarySearch',
    country: 'USA',
    sector: 'Consumer AI',
    sectorColor: '#a4b0be',
    funding: '$18.0M',
    fundingRaw: 18000000,
    rocketScore: '11,240',
    valueProposition: 'An AI-powered consumer platform that enabled users to discover information through alternative forms of input rather than traditional text search.',
    causeOfDeath: "Struggled to differentiate from Google Lens/Pinterest visual search and couldn't build a retention habit loop beyond novelty use.",
    riseYear: 2020,
    fallYear: 2024,
    marketPotential: 3,
    scalePotential: 2,
    rebuildPotential: 4,
    failureCategoryTag: 'NO RETENTION HABIT',
    failureCategoryColor: '#3c6382',
    interestedCount: 264,
    expectedDeliverable: 'A working snap-to-search demo in one vertical and a commerce/affiliate monetization slide.'
  },
  {
    id: 'eduspark',
    name: 'EduSpark',
    country: 'India',
    sector: 'Edtech',
    sectorColor: '#eccc68',
    funding: '$3.0M',
    fundingRaw: 3000000,
    rocketScore: '6,480',
    valueProposition: 'An extracurricular learning platform for kids (chess, dance, art, public speaking) in India.',
    causeOfDeath: 'Wound down in 2022 once schools reopened post-pandemic and demand for at-home enrichment classes collapsed while burn stayed high relative to thin revenue.',
    riseYear: 2020,
    fallYear: 2022,
    marketPotential: 3,
    scalePotential: 2,
    rebuildPotential: 3,
    failureCategoryTag: 'DEMAND COLLAPSE',
    failureCategoryColor: '#b71540',
    interestedCount: 145,
    expectedDeliverable: "A booking-plus-live-class demo, one AI feedback feature, and a school-partnership GTM slide that avoids Crejofun's pure-D2C demand collapse."
  },
  {
    id: 'omnihealth-ai',
    name: 'OmniHealth AI',
    country: 'UK / USA',
    sector: 'Healthcare',
    sectorColor: '#ff6b81',
    funding: '$630.0M',
    fundingRaw: 630000000,
    rocketScore: '22,100',
    valueProposition: 'An AI symptom-checker and virtual primary-care platform across the UK and US.',
    causeOfDeath: 'Filed for bankruptcy in 2023 after its AI triage accuracy was publicly challenged and unprofitable value-based-care contracts, especially in the US, drained cash.',
    riseYear: 2013,
    fallYear: 2023,
    marketPotential: 4,
    scalePotential: 2,
    rebuildPotential: 4,
    failureCategoryTag: 'UNPROFITABLE CONTRACTS',
    failureCategoryColor: '#801818',
    interestedCount: 512,
    expectedDeliverable: 'A symptom-intake-to-triage demo showing visible AI confidence/rationale, an accuracy-benchmark report, and a unit-economics slide for the B2B contract model.'
  },
  {
    id: 'automedi',
    name: 'Automedi',
    country: 'USA',
    sector: 'Healthcare',
    sectorColor: '#ff6b81',
    funding: '$850.0M',
    fundingRaw: 850000000,
    rocketScore: '19,800',
    valueProposition: 'A hospital back-office/revenue-cycle automation AI platform.',
    causeOfDeath: "Shut down in 2023 after failing to deliver on broad 'automate everything in healthcare' promises, while narrower point-solution competitors out-executed it on specific workflows.",
    riseYear: 2012,
    fallYear: 2023,
    marketPotential: 4,
    scalePotential: 3,
    rebuildPotential: 4,
    failureCategoryTag: 'OVER-PROMISED SCOPE',
    failureCategoryColor: '#b71540',
    interestedCount: 420,
    expectedDeliverable: 'A single-workflow demo (e.g. prior-auth automation) with a measurable time/cost-saved metric, plus an ROI-based pricing slide.'
  },
  {
    id: 'rescuermap',
    name: 'RescuerMap',
    country: 'USA',
    sector: 'Disaster Management',
    sectorColor: '#ff7f50',
    funding: '$4.5M',
    fundingRaw: 4500000,
    rocketScore: '7,310',
    valueProposition: 'A wildfire-evacuation-zone mapping and emergency response coordination platform for fire departments.',
    causeOfDeath: 'Acquired by Genasys in 2022, effectively ending its run as an independent company — a common pattern of disaster-tech being absorbed rather than scaling on its own.',
    riseYear: 2018,
    fallYear: 2022,
    marketPotential: 3,
    scalePotential: 2,
    rebuildPotential: 4,
    failureCategoryTag: 'GOVT SALES BOTTLENECK',
    failureCategoryColor: '#e67e22',
    interestedCount: 230,
    expectedDeliverable: 'A live zone-mapping and evacuation-routing demo, one AI-spread-prediction feature, and a CAD-integration/GTM slide.'
  },
  {
    id: 'quickpay',
    name: 'QuickPay',
    country: 'USA',
    sector: 'Fintech',
    sectorColor: '#2ed573',
    funding: '$124.0M',
    fundingRaw: 124000000,
    rocketScore: '18,500',
    valueProposition: 'A one-click checkout button for online stores.',
    causeOfDeath: "Shut down in 2022 after burning through funding fast with weak enterprise/merchant adoption — a checkout button alone wasn't defensible enough against Shopify's and PayPal's built-in checkout.",
    riseYear: 2019,
    fallYear: 2022,
    marketPotential: 4,
    scalePotential: 2,
    rebuildPotential: 3,
    failureCategoryTag: 'HIGH BURN / NO MOAT',
    failureCategoryColor: '#b71540',
    interestedCount: 680,
    expectedDeliverable: 'An embeddable checkout demo with a measured conversion-lift metric, one fraud-scoring feature, and a distribution-via-marketplace GTM slide.'
  },
  {
    id: 'nextgen-academy',
    name: 'NextGen Academy',
    country: 'USA',
    sector: 'Edtech',
    sectorColor: '#eccc68',
    funding: '$174.0M',
    fundingRaw: 174000000,
    rocketScore: '14,200',
    valueProposition: 'A venture-backed micro-school network aiming to reinvent K-8 education with personalized, tech-driven learning.',
    causeOfDeath: "Closed most physical schools by 2019 and pivoted to selling its software (as 'Altitude Learning') — a classic case of an expensive, hard-to-scale physical-plus-tech hybrid model.",
    riseYear: 2013,
    fallYear: 2019,
    marketPotential: 3,
    scalePotential: 2,
    rebuildPotential: 4,
    failureCategoryTag: 'PHYSICAL OVERHEAD BURN',
    failureCategoryColor: '#d35400',
    interestedCount: 310,
    expectedDeliverable: "An adaptive-lesson-path demo for one subject, one early-warning AI feature, and a SaaS-licensing GTM slide contrasting with AltSchool's real-estate-heavy model."
  }
];
// Application State
let startupsState = [...initialStartups];

// Initialize DOM Events and Render
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  populateFilterDropdowns();
  renderStartupsGrid();
  setupEventListeners();
});

// Populate Sector Filter Dropdown dynamically
function populateFilterDropdowns() {
  const sectorSelect = document.getElementById('sectorFilter');
  const sectors = Array.from(new Set(startupsState.map(s => s.sector))).sort();

  sectors.forEach(sec => {
    const opt = document.createElement('option');
    opt.value = sec;
    opt.textContent = sec;
    sectorSelect.appendChild(opt);
  });
}

// Render Startup Cards Matching EXACT IMAGE SPECIFICATION
function renderStartupsGrid() {
  const grid = document.getElementById('startupsGrid');
  const noResults = document.getElementById('noResultsState');

  const sectorVal = document.getElementById('sectorFilter').value;
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

  let filtered = startupsState.filter(item => {
    // Sector match
    const matchesSector = sectorVal === 'all' || item.sector === sectorVal;

    // Search match (name, sector, country, value proposition, cause of death, failure tag)
    const searchableFields = [
      item.name,
      item.sector,
      item.country,
      item.valueProposition,
      item.causeOfDeath,
      item.failureCategoryTag
    ];
    const matchesSearch = !searchTerm || searchableFields.some(field =>
      field && field.toLowerCase().includes(searchTerm)
    );

    return matchesSector && matchesSearch;
  });

  grid.innerHTML = '';

  if (filtered.length === 0) {
    noResults.classList.remove('hidden');
    return;
  } else {
    noResults.classList.add('hidden');
  }

  filtered.forEach(item => {
    const cardEl = document.createElement('div');
    cardEl.className = 'startup-card-container';
    cardEl.style.setProperty('--sector-color', item.sectorColor || '#ffa502');

    // Create Potential Bar Block Meters (4 blocks max per meter)
    const renderMeterBlocks = (score, colorClass) => {
      let blocksHtml = '';
      for (let i = 1; i <= 4; i++) {
        const active = i <= score ? colorClass : '';
        blocksHtml += `<div class="meter-block ${active}"></div>`;
      }
      return blocksHtml;
    };

    cardEl.innerHTML = `
      <!-- Sector Header Strip -->
      <div class="card-header-strip">
        <span>${item.sector}</span>
      </div>

      <!-- Main Title Block -->
      <div class="card-main-block">
        <div class="card-title-row">
          <div>
            <h3 class="card-title">${item.name}</h3>
            <div class="card-country">${item.country}</div>
          </div>
        </div>
      </div>

      <!-- Card Body Content -->
      <div class="card-body-block">
        <div>
          <div class="card-section-label">THE VALUE PROPOSITION</div>
          <div class="card-section-text">${item.valueProposition}</div>
        </div>

        <div class="dotted-divider"></div>

        <div>
          <div class="card-section-label">CAUSE OF DEATH</div>
          <div class="card-section-text">${item.causeOfDeath}</div>
        </div>

        <!-- Removed potential meters -->
      </div>

      <!-- Card Actions -->
      <div class="card-action-bar">
        <button class="btn-card-primary" onclick="openStartupModal('${item.id}')">
          Revive Details
        </button>
      </div>
    `;

    grid.appendChild(cardEl);
  });
}

// Increment "I'm Interested" Counter
function incrementInterest(event, id) {
  event.stopPropagation();
  const startup = startupsState.find(s => s.id === id);
  if (startup) {
    startup.interestedCount++;
    renderStartupsGrid();
  }
}

// Reset Filters
function resetFilters() {
  document.getElementById('sectorFilter').value = 'all';

  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (searchInput) searchInput.value = '';
  if (clearSearchBtn) clearSearchBtn.classList.add('hidden');

  renderStartupsGrid();
}

// Startup Detail Modal Popup
function openStartupModal(id) {
  const startup = startupsState.find(s => s.id === id);
  if (!startup) return;

  const modalBody = document.getElementById('modalBody');

  modalBody.innerHTML = `
    <div class="modal-header-badge" style="background-color: ${startup.sectorColor}; color: #000;">
      ${startup.sector} &bull; ${startup.country}
    </div>
    <h2 class="modal-title">${startup.name}</h2>
    <p class="modal-subtitle">Raised ${startup.funding} &bull; Active ${startup.riseYear} - ${startup.fallYear}</p>

    <div class="modal-section" style="border-color: rgba(0, 184, 148, 0.4);">
      <h4 style="color: var(--accent-green);"><i class="fa-solid fa-hammer"></i> Recommended Revival Deliverable</h4>
      <p style="color: #ffffff; font-size: 1rem; line-height: 1.6;">${startup.expectedDeliverable}</p>
    </div>
  `;

  document.getElementById('startupModal').classList.add('active');
}

function expressRevivalInterest(name) {
  alert(`Awesome! You have been added to the Revival Interest Team for ${name}. Our hackathon team matching bot will connect you with fellow interested builders on Discord!`);
}

// Setup General Event Listeners
function setupEventListeners() {
  // Filter Listeners
  document.getElementById('sectorFilter').addEventListener('change', renderStartupsGrid);

  // Search Listeners
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      if (clearSearchBtn) clearSearchBtn.classList.toggle('hidden', searchInput.value.trim().length === 0);
      renderStartupsGrid();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        clearSearchBtn.classList.add('hidden');
        renderStartupsGrid();
        searchInput.focus();
      }
    });
  }

  // Modal Closures
  document.getElementById('modalCloseBtn').addEventListener('click', () => {
    document.getElementById('startupModal').classList.remove('active');
  });

  document.getElementById('authModalCloseBtn').addEventListener('click', () => {
    document.getElementById('authModal').classList.remove('active');
  });

  const googleAuthBtn = document.getElementById('googleAuthBtn');
  if (googleAuthBtn) {
    googleAuthBtn.addEventListener('click', () => {
      document.getElementById('authModal').classList.add('active');
    });
  }
}

function simulateGoogleLogin() {
  alert('Successfully signed in with Google!');
  document.getElementById('authModal').classList.remove('active');
  document.getElementById('googleAuthBtn').innerHTML = '<i class="fa-solid fa-user"></i> <span>My Profile</span>';
}

/* Background Particle Canvas Animation */
function initParticleCanvas() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 71, 87, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}
