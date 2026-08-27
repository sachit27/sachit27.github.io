/**
 * Publications Module for Academic Personal Website
 * Features: Search, Tag Filtering
 */

let publicationsData = [];
let activeFilter = 'all';
let searchQuery = '';

const defaultPublications = [
  {
    "id": "mahajan2026provenance",
    "title": "Participatory provenance as representational auditing for AI-mediated public consultation",
    "authors": [
      "Sachit Mahajan"
    ],
    "venue": "arXiv preprint arXiv:2604.20711",
    "year": 2026,
    "selected": true,
    "tags": [
      "AI for Environment",
      "Value Sensitive Design (VSD)",
      "Citizen Science",
      "Environmental Monitoring",
      "Preprint"
    ]
  },
  {
    "id": "hausladen2026beyond",
    "title": "Beyond the Townhall: Spatial Anchoring and LLM Agents for Scalable Participatory Urban Planning",
    "authors": [
      "Carina I Hausladen",
      "Javier Argota S\u00e1nchez-Vaquerizo",
      "Michael Siebenmann",
      "Arthur Capozzi",
      "Sachit Mahajan",
      "Dirk Helbing"
    ],
    "venue": "arXiv preprint arXiv:2604.16348",
    "year": 2026,
    "selected": true,
    "tags": [
      "AI for Environment",
      "Citizen Science",
      "Urban Resilience",
      "Environmental Monitoring",
      "Preprint"
    ]
  },
  {
    "title": "Not your mean green: beyond averages in mapping socio-spatial inequities in urban greenery for smart cities (*Equal contribution)",
    "authors": [
      "Jenny Martinez*",
      "Javier Argota S\u00e1nchez-Vaquerizo",
      "Sachit Mahajan*"
    ],
    "venue": "EPJ Data Science",
    "year": 2026,
    "tags": [
      "Urban Resilience",
      "NBS",
      "GIS"
    ],
    "id": "pub_0",
    "selected": false
  },
  {
    "title": "Revisiting big data optimism: risks of data-driven black box algorithms for society",
    "authors": [
      "Sachit Mahajan",
      "Dirk Helbing"
    ],
    "venue": "Ethics and Information Technology",
    "year": 2026,
    "tags": [
      "AI for Environment",
      "VSD"
    ],
    "id": "pub_1",
    "selected": false
  },
  {
    "title": "Urban resilience through adaptive multifutures and nature-based solutions",
    "authors": [
      "Sachit Mahajan"
    ],
    "venue": "npj Urban Sustainability",
    "year": 2025,
    "tags": [
      "Urban Resilience",
      "NBS"
    ],
    "id": "pub_2",
    "selected": true
  },
  {
    "title": "Dynamic calibration of low-cost PM 2.5 sensors Using trust-based consensus mechanisms",
    "authors": [
      "Sachit Mahajan",
      "Dirk Helbing"
    ],
    "venue": "npj Climate and Atmospheric Science",
    "year": 2025,
    "tags": [
      "Environmental Monitoring",
      "AI for Environment"
    ],
    "id": "pub_3",
    "selected": true
  },
  {
    "title": "Co-Designing AI Systems with Value-Sensitive Citizen Science",
    "authors": [
      "Sachit Mahajan",
      "Dirk Helbing"
    ],
    "venue": "AI & Society",
    "year": 2025,
    "tags": [
      "AI for Environment",
      "VSD"
    ],
    "id": "pub_4",
    "selected": true
  },
  {
    "title": "The democratization dilemma: When everyone is an expert, who do we trust?",
    "authors": [
      "Sachit Mahajan"
    ],
    "venue": "Humanities and Social Sciences Communications",
    "year": 2025,
    "tags": [
      "Citizens"
    ],
    "id": "pub_5",
    "selected": false
  },
  {
    "title": "Co-creating the future: participatory cities and digital governance",
    "authors": [
      "Dirk Helbing",
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "Philosophical Transactions A",
    "year": 2024,
    "tags": [
      "Citizens"
    ],
    "id": "pub_6",
    "selected": false
  },
  {
    "title": "Democratizing air: A co-created citizen science approach to indoor air quality monitoring",
    "authors": [
      "Sachit Mahajan",
      "Rosy Mondardini",
      "Dirk Helbing"
    ],
    "venue": "Sustainable Cities and Society",
    "year": 2024,
    "tags": [
      "Environmental Monitoring",
      "Citizens"
    ],
    "id": "pub_7",
    "selected": false
  },
  {
    "title": "Global comparison of urban bike-sharing accessibility across 40 cities",
    "authors": [
      "Sachit Mahajan",
      "Javier Argota S\u00e1nchez-Vaquerizo"
    ],
    "venue": "Scientific Reports",
    "year": 2024,
    "tags": [
      "Urban Resilience",
      "GIS"
    ],
    "id": "pub_8",
    "selected": false
  },
  {
    "title": "Navigating the Cohesion-Diversity Tradeoff: Understanding the Role of Facilitators in Co-Creation Using ABM",
    "authors": [
      "Sachit Mahajan"
    ],
    "venue": "Philosophical Transactions of the Royal Society A",
    "year": 2024,
    "tags": [
      "AI for Environment"
    ],
    "id": "pub_9",
    "selected": false
  },
  {
    "title": "Human digital twins unlocking Society 5.0? Approaches, emerging risks and disruptions",
    "authors": [
      "Catarina Fontes",
      "Dino Carpentras",
      "Sachit Mahajan"
    ],
    "venue": "Ethics and Information Technology",
    "year": 2024,
    "tags": [
      "AI for Environment"
    ],
    "id": "pub_10",
    "selected": false
  },
  {
    "title": "greenR: An open-source framework for quantifying urban greenness",
    "authors": [
      "Sachit Mahajan"
    ],
    "venue": "Ecological Indicators",
    "year": 2024,
    "tags": [
      "Urban Resilience",
      "NBS",
      "GIS"
    ],
    "id": "pub_11",
    "selected": true
  },
  {
    "title": "Practicalities of community-led continuous water quality monitoring: lessons from Taiwan and UK pilots",
    "authors": [
      "Eleanor Starkey",
      "Amy Jones",
      "Susana Ochoa-Rodriguez",
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "Frontiers in Environmental Science",
    "year": 2024,
    "tags": [
      "Environmental Monitoring",
      "Citizens"
    ],
    "id": "pub_12",
    "selected": false
  },
  {
    "title": "A virtual reality experiment to study pedestrian perception of future street scenarios",
    "authors": [
      "Javier Argota S\u00e1nchez-Vaquerizo",
      "Carina I. Hausladen",
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "Scientific Reports",
    "year": 2024,
    "tags": [
      "Urban Resilience"
    ],
    "id": "pub_13",
    "selected": false
  },
  {
    "title": "The Executioner Paradox: understanding self-referential dilemma in computational systems",
    "authors": [
      "Sachit Mahajan"
    ],
    "venue": "AI & Society",
    "year": 2024,
    "tags": [
      "VSD"
    ],
    "id": "pub_14",
    "selected": false
  },
  {
    "title": "Smart Cities and Access to Nature: A framework for evaluating green recreation space accessibility",
    "authors": [
      "Jenny Martinez",
      "Sachit Mahajan"
    ],
    "venue": "IEEE Access",
    "year": 2023,
    "tags": [
      "Urban Resilience",
      "NBS"
    ],
    "id": "pub_15",
    "selected": false
  },
  {
    "title": "Democracy by Design: Perspectives for digitally assisted, participatory upgrades of society",
    "authors": [
      "Dirk Helbing",
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "Journal of Computational Science",
    "year": 2023,
    "tags": [
      "Citizens",
      "VSD"
    ],
    "id": "pub_16",
    "selected": false
  },
  {
    "title": "Data Marketplaces: A Solution for Personal Data Control and Ownership?",
    "authors": [
      "Sachit Mahajan"
    ],
    "venue": "Sustainability",
    "year": 2022,
    "tags": [
      "VSD"
    ],
    "id": "pub_17",
    "selected": false
  },
  {
    "title": "Design and development of an open-source framework for citizen-centric environmental monitoring and data analysis",
    "authors": [
      "Sachit Mahajan"
    ],
    "venue": "Scientific Reports",
    "year": 2022,
    "tags": [
      "Environmental Monitoring"
    ],
    "id": "pub_18",
    "selected": false
  },
  {
    "title": "Participatory resilience: Surviving, recovering and improving together",
    "authors": [
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "Sustainable Cities and Society",
    "year": 2022,
    "tags": [
      "Urban Resilience"
    ],
    "id": "pub_19",
    "selected": false
  },
  {
    "title": "Translating citizen-generated air quality data into evidence for shaping policy",
    "authors": [
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "Humanities and Social Sciences Communications",
    "year": 2022,
    "tags": [
      "Environmental Monitoring",
      "Citizens"
    ],
    "id": "pub_20",
    "selected": false
  },
  {
    "title": "Vayu: An Open-Source Toolbox for Visualization and Analysis of Crowd-Sourced Sensor Data",
    "authors": [
      "Sachit Mahajan"
    ],
    "venue": "Sensors",
    "year": 2021,
    "tags": [
      "Environmental Monitoring"
    ],
    "id": "pub_21",
    "selected": false
  },
  {
    "title": "Ethics of smart cities: Towards value-sensitive design and co-evolving city life",
    "authors": [
      "Dirk Helbing",
      "et al.",
      "Sachit Mahajan"
    ],
    "venue": "Sustainability",
    "year": 2021,
    "tags": [
      "VSD"
    ],
    "id": "pub_22",
    "selected": false
  },
  {
    "title": "Water, water, but not everywhere: analysis of shrinking water bodies using open access satellite data",
    "authors": [
      "Sachit Mahajan",
      "Jenny Martinez"
    ],
    "venue": "International Journal of Sustainable Development & World Ecology",
    "year": 2021,
    "tags": [
      "Environmental Monitoring",
      "GIS"
    ],
    "id": "pub_23",
    "selected": false
  },
  {
    "title": "From Do-It-Yourself (DIY) to Do-It-Together (DIT): Reflections on designing a citizen-driven air quality monitoring framework in Taiwan",
    "authors": [
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "Sustainable Cities and Society",
    "year": 2021,
    "tags": [
      "Environmental Monitoring"
    ],
    "id": "pub_24",
    "selected": false
  },
  {
    "title": "AirKit: A Citizen-Sensing Toolkit for Monitoring Air Quality",
    "authors": [
      "Sachit Mahajan",
      "Jennifer Gabrys",
      "Joanne Armitage"
    ],
    "venue": "Sensors",
    "year": 2021,
    "tags": [
      "Environmental Monitoring"
    ],
    "id": "pub_25",
    "selected": false
  },
  {
    "title": "Evaluation of low-cost sensors for quantitative personal exposure monitoring",
    "authors": [
      "Sachit Mahajan",
      "Prashant Kumar"
    ],
    "venue": "Sustainable Cities and Society",
    "year": 2020,
    "tags": [
      "Environmental Monitoring"
    ],
    "id": "pub_26",
    "selected": false
  },
  {
    "title": "A citizen science approach for enhancing public understanding of air pollution",
    "authors": [
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "Sustainable Cities and Society",
    "year": 2020,
    "tags": [
      "Citizens"
    ],
    "id": "pub_27",
    "selected": false
  },
  {
    "title": "Why Is Short-Time PM2.5 Forecast Difficult? The Effects of Sudden Events",
    "authors": [
      "Nai-Cih Liou",
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "IEEE Access",
    "year": 2019,
    "tags": [
      "Environmental Monitoring"
    ],
    "id": "pub_28",
    "selected": false
  },
  {
    "title": "CAR: The clean air routing algorithm for path navigation with minimal PM2.5 exposure on the move",
    "authors": [
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "IEEE Access",
    "year": 2019,
    "tags": [
      "Urban Resilience"
    ],
    "id": "pub_29",
    "selected": false
  },
  {
    "title": "Short-term PM2.5 forecasting using exponential smoothing method: A comparative analysis",
    "authors": [
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "Sensors",
    "year": 2018,
    "tags": [
      "Environmental Monitoring"
    ],
    "id": "pub_30",
    "selected": false
  },
  {
    "title": "Improving the accuracy and efficiency of PM2.5 forecast service using cluster-based hybrid neural network model",
    "authors": [
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "IEEE Access",
    "year": 2018,
    "tags": [
      "AI for Environment",
      "Environmental Monitoring"
    ],
    "id": "pub_31",
    "selected": false
  },
  {
    "title": "ADF: An anomaly detection framework for large-scale PM2.5 sensing systems",
    "authors": [
      "Ling-Jyh Chen",
      "et al.",
      "Sachit Mahajan"
    ],
    "venue": "IEEE Internet of Things Journal",
    "year": 2017,
    "tags": [
      "Environmental Monitoring"
    ],
    "id": "pub_32",
    "selected": false
  },
  {
    "title": "Democratizing Urban Mobility Through an Open-Source, Multi-Criteria Route Recommendation System",
    "authors": [
      "Alexander Eggerth",
      "Javier Argota S\u00e1nchez-Vaquerizo",
      "Dirk Helbing",
      "Sachit Mahajan"
    ],
    "venue": "ACM RecSys",
    "year": 2024,
    "tags": [
      "Urban Resilience"
    ],
    "id": "pub_33",
    "selected": false
  },
  {
    "title": "Token-incentivized participatory sensing with DePIN",
    "authors": [
      "M. Chiu",
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "CfC St. Moritz Academic Research Track",
    "year": 2024,
    "tags": [
      "Environmental Monitoring"
    ],
    "id": "pub_34",
    "selected": false
  },
  {
    "title": "Green infrastructure and air quality: impacts from research in open road environments",
    "authors": [
      "E.Y. Barwise",
      "et al.",
      "Sachit Mahajan"
    ],
    "venue": "iSCAPE Project Final Event",
    "year": 2019,
    "tags": [
      "NBS",
      "Urban Resilience"
    ],
    "id": "pub_35",
    "selected": false
  },
  {
    "title": "Internet of environmental things: A human centered approach",
    "authors": [
      "Sachit Mahajan"
    ],
    "venue": "MobiSys '18 Ph.D. Forum",
    "year": 2018,
    "tags": [
      "Environmental Monitoring"
    ],
    "id": "pub_36",
    "selected": false
  },
  {
    "title": "A machine learning based PM2.5 forecasting framework using IoT",
    "authors": [
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "Int. Conf. on IoT as a Service, Springer",
    "year": 2017,
    "tags": [
      "AI for Environment"
    ],
    "id": "pub_37",
    "selected": false
  },
  {
    "title": "Opportunistic PM2.5 Sensing: A Feasibility Study",
    "authors": [
      "Sachit Mahajan",
      "et al."
    ],
    "venue": "IEEE GLOBECOM",
    "year": 2017,
    "tags": [
      "Environmental Monitoring"
    ],
    "id": "pub_38",
    "selected": false
  }
];

function renderPublications() {
  const container = document.getElementById("publications-list");
  if (!container) return;

  const query = searchQuery.toLowerCase();
  
  let filtered = publicationsData.filter(pub => {
    // 1. Tag filtering
    if (activeFilter !== 'all') {
      if (!pub.tags || !pub.tags.includes(activeFilter)) return false;
    }
    
    // 2. Search query
    if (query) {
      const matchTitle = pub.title.toLowerCase().includes(query);
      const matchAuthors = pub.authors.join(" ").toLowerCase().includes(query);
      const matchYear = pub.year.toString().includes(query);
      if (!matchTitle && !matchAuthors && !matchYear) return false;
    }
    
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state">No publications found matching your criteria.</div>`;
    return;
  }
  
  // Separate into preprints and published
  const isPreprint = (pub) => {
    const v = (pub.venue || "").toLowerCase();
    return v.includes("preprint") || v.includes("arxiv") || v.includes("ssrn");
  };
  
  const preprints = filtered.filter(isPreprint);
  const published = filtered.filter(p => !isPreprint(p));
  
  let html = "";
  
  const renderCard = (pub) => {
    const authorsHtml = pub.authors.map(author => {
      if (author.includes("Sachit Mahajan") || author.includes("Mahajan, S") || author.includes("Mahajan, Sachit")) {
        return `<strong>${escapeHtml(author)}</strong>`;
      }
      return escapeHtml(author);
    }).join(", ");
    
    return `
      <div class="pub-card" style="margin-bottom: 1.25rem;">
        <h3 class="pub-title">${escapeHtml(pub.title)}</h3>
        <div class="pub-authors">${authorsHtml}</div>
        <div class="pub-meta">
          <span class="pub-venue">${escapeHtml(pub.venue)}</span> • 
          <span class="pub-year">${pub.year}</span>
        </div>
        <div class="pub-tags" style="margin-top: 0.75rem;">
          ${(pub.tags || []).map(tag => `<span class="pub-badge">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </div>
    `;
  };
  
  if (published.length > 0) {
    if (activeFilter === 'all' && preprints.length > 0) {
      html += `<h3 style="margin-bottom:1.5rem; margin-top:0.5rem;">Peer-Reviewed Publications</h3>`;
    }
    html += published.map(renderCard).join("");
  }
  
  if (preprints.length > 0) {
    html += `<h3 style="margin-bottom:1.5rem; margin-top:2.5rem; padding-top:1.5rem; border-top: 1px solid var(--border-color);">Preprints & Under Review</h3>`;
    html += preprints.map(renderCard).join("");
  }

  container.innerHTML = html;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function initPublications() {
  try {
    const res = await fetch("./data/publications.json");
    if (res.ok) {
      publicationsData = await res.json();
    } else {
      publicationsData = defaultPublications;
    }
  } catch (e) {
    console.warn("Using fallback publications data", e);
    publicationsData = defaultPublications;
  }

  // Setup search listener
  const searchInput = document.getElementById("pub-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderPublications();
    });
  }

  // Setup tag filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter") || "all";
      renderPublications();
    });
  });

  renderPublications();
}
