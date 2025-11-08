// Module data
const modules = [
    // Dungeons category
    {
        id: 1,
        name: "Leap Menu",
        category: "dungeons",
        description: "Provides a custom menu for managing leap abilities in dungeons.",
        features: [
            "Customizable leap settings",
            "Quick access to leap abilities",
            "Cooldown tracking"
        ],
        stats: {
            usage: "High",
            rating: 4.5
        }
    },
    {
        id: 2,
        name: "Custom Terminals GUI",
        category: "dungeons",
        description: "Enhances the terminal interface in dungeons with additional information and better visuals.",
        features: [
            "Improved terminal visuals",
            "Additional information display",
            "Faster interaction"
        ],
        stats: {
            usage: "Medium",
            rating: 4.2
        }
    },
    {
        id: 3,
        name: "AutoSell",
        category: "dungeons",
        description: "Automatically sells unwanted items during dungeon runs.",
        features: [
            "Configurable sell rules",
            "Real-time item valuation",
            "Safety measures to prevent accidental sales"
        ],
        stats: {
            usage: "High",
            rating: 4.7
        }
    },
    {
        id: 4,
        name: "Find Correct Livid",
        category: "dungeons",
        description: "Helps identify the correct Livid in the Livid Horror puzzle.",
        features: [
            "Visual highlighting of correct Livid",
            "Audio cues",
            "Works in all difficulty modes"
        ],
        stats: {
            usage: "Medium",
            rating: 4.0
        }
    },
    {
        id: 5,
        name: "Goldor Start Timer",
        category: "dungeons",
        description: "Times the start of Goldor boss fights for optimal preparation.",
        features: [
            "Precise timing",
            "Visual countdown",
            "Auto-reset for multiple attempts"
        ],
        stats: {
            usage: "Low",
            rating: 3.8
        }
    },
    {
        id: 6,
        name: "Healer Wish Alert",
        category: "dungeons",
        description: "Alerts when a Healer's Wish is available in dungeons.",
        features: [
            "Visual and audio alerts",
            "Range indicator",
            "Party-wide notifications"
        ],
        stats: {
            usage: "Medium",
            rating: 4.3
        }
    },
    {
        id: 7,
        name: "Invincible Timer",
        category: "dungeons",
        description: "Tracks invincibility frames during boss fights.",
        features: [
            "Visual timer display",
            "Color-coded duration indicators",
            "Customizable alert thresholds"
        ],
        stats: {
            usage: "High",
            rating: 4.6
        }
    },
    {
        id: 8,
        name: "Key Highlighter",
        category: "dungeons",
        description: "Highlights keys and chests in dungeons.",
        features: [
            "Color-coded key highlighting",
            "Chest location tracking",
            "Distance indicators"
        ],
        stats: {
            usage: "High",
            rating: 4.8
        }
    },
    {
        id: 9,
        name: "Leap Announce",
        category: "dungeons",
        description: "Announces leap usage to party members.",
        features: [
            "Customizable messages",
            "Cooldown tracking",
            "Role-based announcements"
        ],
        stats: {
            usage: "Medium",
            rating: 3.9
        }
    },
    {
        id: 10,
        name: "Phase 3 Tick Timer",
        category: "dungeons",
        description: "Tracks ticks during Phase 3 of boss fights.",
        features: [
            "Precise tick counting",
            "Visual rhythm indicators",
            "Customizable alerts"
        ],
        stats: {
            usage: "Low",
            rating: 4.1
        }
    },
    {
        id: 11,
        name: "Salvageable Item Highlighter",
        category: "dungeons",
        description: "Highlights items that can be salvaged for materials.",
        features: [
            "Rarity-based highlighting",
            "Salvage value display",
            "Auto-loot options"
        ],
        stats: {
            usage: "Medium",
            rating: 4.0
        }
    },
    {
        id: 12,
        name: "Secret Click Highlight",
        category: "dungeons",
        description: "Highlights secret clickable objects in dungeons.",
        features: [
            "Visual highlighting",
            "Distance indicators",
            "Secret type identification"
        ],
        stats: {
            usage: "Low",
            rating: 3.7
        }
    },
    {
        id: 13,
        name: "Star Mob Highlighter",
        category: "dungeons",
        description: "Highlights star mobs in dungeons for prioritization.",
        features: [
            "Color-coded highlighting",
            "Health bar display",
            "Distance tracking"
        ],
        stats: {
            usage: "High",
            rating: 4.5
        }
    },
    {
        id: 14,
        name: "Watcher Clear",
        category: "dungeons",
        description: "Helps with the Watcher puzzle in dungeons.",
        features: [
            "Pattern recognition",
            "Sequence display",
            "Timing assistance"
        ],
        stats: {
            usage: "Medium",
            rating: 4.2
        }
    },
    
    // Fishing category
    {
        id: 15,
        name: "Auto Fish",
        category: "fishing",
        description: "Automatically catches fish for you, saving time and effort.",
        features: [
            "AFK fishing support",
            "Customizable cast distance",
            "Treasure chest detection",
            "Auto-loot functionality"
        ],
        stats: {
            usage: "Very High",
            rating: 4.9
        }
    },
    
    // Kuudra category
    {
        id: 16,
        name: "Kuudra Direction",
        category: "kuudra",
        description: "Shows the direction of Kuudra during fights.",
        features: [
            "3D direction indicator",
            "Distance tracking",
            "Phase-specific information"
        ],
        stats: {
            usage: "High",
            rating: 4.7
        }
    },
    {
        id: 17,
        name: "Kuudra Hitbox",
        category: "kuudra",
        description: "Displays the hitbox of Kuudra for easier targeting.",
        features: [
            "Visual hitbox overlay",
            "Weak point highlighting",
            "Damage feedback"
        ],
        stats: {
            usage: "Medium",
            rating: 4.3
        }
    },
    {
        id: 18,
        name: "Kuudra Health",
        category: "kuudra",
        description: "Shows the health of Kuudra during fights.",
        features: [
            "Precise health percentage",
            "Phase transition alerts",
            "Damage per second tracking"
        ],
        stats: {
            usage: "High",
            rating: 4.6
        }
    },
    {
        id: 19,
        name: "Dyname Pearl Lineup",
        category: "kuudra",
        description: "Helps line up dynamite pearls for optimal damage.",
        features: [
            "Trajectory prediction",
            "Optimal angle indicator",
            "Distance markers"
        ],
        stats: {
            usage: "Medium",
            rating: 4.2
        }
    },
    {
        id: 20,
        name: "Build Piles",
        category: "kuudra",
        description: "Assists with building piles during Kuudra fights.",
        features: [
            "Optimal placement guide",
            "Material counter",
            "Build speed multiplier"
        ],
        stats: {
            usage: "Medium",
            rating: 4.1
        }
    },
    {
        id: 21,
        name: "Fresh Message",
        category: "kuudra",
        description: "Alerts when Kuudra becomes vulnerable to fresh damage.",
        features: [
            "Visual and audio alerts",
            "Duration timer",
            "Damage multiplier display"
        ],
        stats: {
            usage: "High",
            rating: 4.5
        }
    },
    {
        id: 22,
        name: "Block Useless Perk",
        category: "kuudra",
        description: "Blocks useless perks from appearing during Kuudra fights.",
        features: [
            "Customizable perk filtering",
            "Perk priority system",
            "Perk recommendation"
        ],
        stats: {
            usage: "Medium",
            rating: 4.0
        }
    },
    {
        id: 23,
        name: "Chest Open Notification",
        category: "kuudra",
        description: "Notifies when chests are opened during Kuudra fights.",
        features: [
            "Real-time notifications",
            "Chest type identification",
            "Loot quality assessment"
        ],
        stats: {
            usage: "Low",
            rating: 3.8
        }
    },
    {
        id: 24,
        name: "Pearl Cancel",
        category: "kuudra",
        description: "Allows canceling pearl throws during Kuudra fights.",
        features: [
            "Quick cancel hotkey",
            "Pearl trajectory visualization",
            "Cancel confirmation"
        ],
        stats: {
            usage: "Medium",
            rating: 4.2
        }
    },
    {
        id: 25,
        name: "Poison Arrow Tracker",
        category: "kuudra",
        description: "Tracks poison arrows during Kuudra fights.",
        features: [
            "Arrow trajectory prediction",
            "Impact point highlighting",
            "Dodge recommendation"
        ],
        stats: {
            usage: "High",
            rating: 4.4
        }
    },
    {
        id: 26,
        name: "Auto Refill Pearl",
        category: "kuudra",
        description: "Automatically refills pearls from the ender chest during Kuudra fights.",
        features: [
            "Customizable refill threshold",
            "Pearl type detection",
            "Refill notification"
        ],
        stats: {
            usage: "High",
            rating: 4.6
        }
    },
    
    // Render category
    {
        id: 27,
        name: "Hide Lightning",
        category: "render",
        description: "Hides lightning effects to improve visibility.",
        features: [
            "Toggle lightning rendering",
            "Partial or full lightning hiding",
            "Performance optimization"
        ],
        stats: {
            usage: "Medium",
            rating: 4.0
        }
    },
    {
        id: 28,
        name: "Hide Useless Message",
        category: "render",
        description: "Filters out useless chat messages to reduce clutter.",
        features: [
            "Customizable message filters",
            "Keyword-based filtering",
            "Message log for review"
        ],
        stats: {
            usage: "High",
            rating: 4.3
        }
    },
    {
        id: 29,
        name: "Custom Cape",
        category: "render",
        description: "Adds custom capes to your character.",
        features: [
            "Multiple cape designs",
            "Cape animation",
            "Player-specific cape settings"
        ],
        stats: {
            usage: "Low",
            rating: 3.9
        }
    },
    {
        id: 30,
        name: "Dark Mode",
        category: "render",
        description: "Applies a dark mode to the game interface.",
        features: [
            "Customizable darkness level",
            "Night vision enhancement",
            "Performance optimization"
        ],
        stats: {
            usage: "High",
            rating: 4.7
        }
    },
    {
        id: 31,
        name: "Etherwarp Overlay",
        category: "render",
        description: "Adds an overlay for Etherwarp ability usage.",
        features: [
            "Ability cooldown display",
            "Range indicator",
            "Target selection assistance"
        ],
        stats: {
            usage: "Medium",
            rating: 4.1
        }
    },
    {
        id: 32,
        name: "Full Bright",
        category: "render",
        description: "Increases brightness in dark areas without gamma changes.",
        features: [
            "Customizable brightness levels",
            "Area-specific brightness control",
            "Performance optimization"
        ],
        stats: {
            usage: "High",
            rating: 4.5
        }
    },
    {
        id: 33,
        name: "Name Tag",
        category: "render",
        description: "Enhances player name tags with additional information.",
        features: [
            "Health display",
            "Class identification",
            "Friend/foe highlighting"
        ],
        stats: {
            usage: "Medium",
            rating: 4.2
        }
    },
    {
        id: 34,
        name: "No Debuff",
        category: "render",
        description: "Removes visual debuff effects while maintaining functionality.",
        features: [
            "Selective debuff hiding",
            "Debuff duration display",
            "Performance optimization"
        ],
        stats: {
            usage: "Medium",
            rating: 4.0
        }
    },
    {
        id: 35,
        name: "No Hurt Cam",
        category: "render",
        description: "Disables the hurt camera effect when taking damage.",
        features: [
            "Smooth camera during combat",
            "Damage feedback alternatives",
            "Customizable intensity"
        ],
        stats: {
            usage: "High",
            rating: 4.4
        }
    },
    {
        id: 36,
        name: "Player ESP",
        category: "render",
        description: "Shows player positions through walls.",
        features: [
            "Color-coded player indicators",
            "Distance tracking",
            "Class-specific icons"
        ],
        stats: {
            usage: "Very High",
            rating: 4.8
        }
    },
    {
        id: 37,
        name: "Miniboss Highlighter",
        category: "render",
        description: "Highlights minibosses in the game world.",
        features: [
            "Visual highlighting",
            "Health bar display",
            "Distance tracking"
        ],
        stats: {
            usage: "Medium",
            rating: 4.3
        }
    },
    
    // SkyBlock category
    {
        id: 38,
        name: "Fast Hot Key",
        category: "skyblock",
        description: "Provides quick access to frequently used items and abilities.",
        features: [
            "Customizable hotkeys",
            "Context-sensitive actions",
            "Macro support"
        ],
        stats: {
            usage: "High",
            rating: 4.6
        }
    },
    {
        id: 39,
        name: "Storage Overview",
        category: "skyblock",
        description: "Shows an overview of your storage contents.",
        features: [
            "Item category filtering",
            "Quantity tracking",
            "Quick access to storage"
        ],
        stats: {
            usage: "Medium",
            rating: 4.2
        }
    },
    {
        id: 40,
        name: "Auto Experiment",
        category: "skyblock",
        description: "Automates the experimentation process on items.",
        features: [
            "Optimal experiment selection",
            "Experiment cost calculation",
            "Result prediction"
        ],
        stats: {
            usage: "Medium",
            rating: 4.1
        }
    },
    {
        id: 41,
        name: "Auto Sprint",
        category: "skyblock",
        description: "Automatically sprints when moving forward.",
        features: [
            "Intelligent sprint activation",
            "Stamina management",
            "Combat-specific behavior"
        ],
        stats: {
            usage: "Very High",
            rating: 4.7
        }
    },
    {
        id: 42,
        name: "Chat Commands",
        category: "skyblock",
        description: "Adds custom chat commands for various functions.",
        features: [
            "Custom command creation",
            "Macro support",
            "Command aliases"
        ],
        stats: {
            usage: "Medium",
            rating: 4.0
        }
    },
    {
        id: 43,
        name: "Flux Flare Timer",
        category: "skyblock",
        description: "Tracks the cooldown of Flux Flare ability.",
        features: [
            "Visual timer display",
            "Ready notification",
            "Usage history"
        ],
        stats: {
            usage: "Low",
            rating: 3.8
        }
    },
    {
        id: 44,
        name: "Mark Location",
        category: "skyblock",
        description: "Allows marking locations on the map.",
        features: [
            "Customizable markers",
            "Location notes",
            "Waypoint navigation"
        ],
        stats: {
            usage: "Medium",
            rating: 4.3
        }
    },
    {
        id: 45,
        name: "Search Bar",
        category: "skyblock",
        description: "Adds a search bar to various in-game menus.",
        features: [
            "Quick item search",
            "Category filtering",
            "Recent searches history"
        ],
        stats: {
            usage: "High",
            rating: 4.5
        }
    },
    {
        id: 46,
        name: "Super Pairs",
        category: "skyblock",
        description: "Assists with the Super Pairs minigame.",
        features: [
            "Card pairing suggestions",
            "Game state tracking",
            "Score optimization"
        ],
        stats: {
            usage: "Low",
            rating: 3.9
        }
    },
    {
        id: 47,
        name: "Waypoint Grabber",
        category: "skyblock",
        description: "Grabs waypoints from various sources.",
        features: [
            "Map waypoint extraction",
            "Shareable waypoint codes",
            "Waypoint organization"
        ],
        stats: {
            usage: "Medium",
            rating: 4.1
        }
    }
];

// DOM Elements
const modulesContainer = document.getElementById('modules-container');
const searchInput = document.getElementById('search-input');
const categoryButtons = document.querySelectorAll('.category-btn');
const noResults = document.getElementById('no-results');
const pagination = document.getElementById('pagination');

// Pagination settings
const itemsPerPage = 12;
let currentPage = 1;
let filteredModules = [...modules];

// Function to render modules
function renderModules(modulesToRender, page = 1) {
    // Clear container
    modulesContainer.innerHTML = '';
    
    // Calculate pagination
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedModules = modulesToRender.slice(startIndex, endIndex);
    
    // Check if no results
    if (modulesToRender.length === 0) {
        noResults.style.display = 'block';
        pagination.style.display = 'none';
        return;
    } else {
        noResults.style.display = 'none';
        pagination.style.display = 'flex';
    }
    
    // Create and append module cards
    paginatedModules.forEach(module => {
        const moduleCard = document.createElement('div');
        moduleCard.className = 'module-card animate-fadeIn';
        moduleCard.setAttribute('data-category', module.category);
        
        // Determine category class and name
        const categoryClass = `category-${module.category}`;
        const categoryName = module.category.charAt(0).toUpperCase() + module.category.slice(1);
        
        // Build module card HTML
        moduleCard.innerHTML = `
            <div class="module-card-header">
                <span class="module-category ${categoryClass}">${categoryName}</span>
                <h3>${module.name}</h3>
            </div>
            <div class="module-card-body">
                <p class="module-description">${module.description}</p>
                <ul class="module-features">
                    ${module.features.map(feature => `
                        <li><i class="fas fa-check"></i>${feature}</li>
                    `).join('')}
                </ul>
            </div>
            <div class="module-card-footer">
                <div class="module-stats">
                    <div class="module-stat">
                        <i class="fas fa-fire"></i>
                        <span>${module.stats.usage} Usage</span>
                    </div>
                    <div class="module-stat">
                        <i class="fas fa-star"></i>
                        <span>${module.stats.rating}</span>
                    </div>
                </div>
                <button class="btn btn-secondary" onclick="showModuleDetails(${module.id})">
                    <i class="fas fa-info-circle"></i>
                </button>
            </div>
        `;
        
        modulesContainer.appendChild(moduleCard);
    });
    
    // Render pagination
    renderPagination(modulesToRender.length, page);
}

// Function to render pagination
function renderPagination(totalItems, currentPage) {
    // Clear pagination
    pagination.innerHTML = '';
    
    // Calculate total pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // Create previous button
    const prevButton = document.createElement('button');
    prevButton.className = `pagination-btn ${currentPage === 1 ? 'disabled' : ''}`;
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderModules(filteredModules, currentPage);
            window.scrollTo({ top: modulesContainer.offsetTop - 100, behavior: 'smooth' });
        }
    });
    pagination.appendChild(prevButton);
    
    // Create page buttons
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            renderModules(filteredModules, currentPage);
            window.scrollTo({ top: modulesContainer.offsetTop - 100, behavior: 'smooth' });
        });
        pagination.appendChild(pageButton);
    }
    
    // Create next button
    const nextButton = document.createElement('button');
    nextButton.className = `pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`;
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderModules(filteredModules, currentPage);
            window.scrollTo({ top: modulesContainer.offsetTop - 100, behavior: 'smooth' });
        }
    });
    pagination.appendChild(nextButton);
}

// Function to filter modules
function filterModules(searchTerm = '', category = 'all') {
    return modules.filter(module => {
        const matchesSearch = module.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             module.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             module.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
        
        const matchesCategory = category === 'all' || module.category === category;
        
        return matchesSearch && matchesCategory;
    });
}

// Function to handle search
function handleSearch() {
    const searchTerm = searchInput.value.trim();
    const activeCategory = document.querySelector('.category-btn.active').dataset.category;
    
    filteredModules = filterModules(searchTerm, activeCategory);
    currentPage = 1;
    renderModules(filteredModules, currentPage);
}

// Function to handle category change
function handleCategoryChange() {
    categoryButtons.forEach(button => {
        button.classList.remove('active');
    });
    this.classList.add('active');
    
    const searchTerm = searchInput.value.trim();
    const activeCategory = this.dataset.category;
    
    filteredModules = filterModules(searchTerm, activeCategory);
    currentPage = 1;
    renderModules(filteredModules, currentPage);
}

// Function to show module details (placeholder for now)
function showModuleDetails(moduleId) {
    const module = modules.find(m => m.id === moduleId);
    alert(`Module Details: ${module.name}\n\nThis feature will show detailed information about the module in the future.`);
}

// Event listeners
searchInput.addEventListener('input', handleSearch);
categoryButtons.forEach(button => {
    button.addEventListener('click', handleCategoryChange);
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderModules(modules, currentPage);
    
    // Add animation to search section
    const searchSection = document.querySelector('.search-section');
    searchSection.classList.add('animate-fadeIn');
});
