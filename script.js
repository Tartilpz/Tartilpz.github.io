// UPDATED Movie Data - With Hall Print property for some movies
const allMovies = [
    // NEW MOVIE 1: The Big Fake - 2026, Dual Audio (Hall Print)
    {
        id: 1,
        title: "The Big Fake",
        poster: "https://m.media-amazon.com/images/M/MV5BYzk1MmRiODctMGFkMy00MTlmLTgyZjQtYTc1MWUyZjU5MTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: true, // Hall Print enabled
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/3cb89078223da96" }
        ]
    },
    // NEW MOVIE 2: People We Meet on Vacation - 2026, Dual Audio (Not Hall Print)
    {
        id: 2,
        title: "People We Meet on Vacation",
        poster: "https://m.media-amazon.com/images/M/MV5BMDIxZTEzZmUtZDI4OC00MWI4LWIwZTgtYTBkY2UxMGY1NTZkXkEyXkFqcGc@._V1_.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: false, // No Hall Print
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/9ac6d9b0296095c" }
        ]
    },
    {
        id: 3,
        title: "Tiffin Box",
        poster: "https://i.imgbd.org/poster_47l81770738064.jpg",
        category: "Bangla",
        year: 2026,
        isNew: true,
        isHallPrint: true, // Hall Print enabled
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/0d4316fce64a6f8" }
        ]
    },
    {
        id: 4,
        title: "Kirtaner Por Kirtan",
        poster: "https://i.imgbd.org/poster_h2em1769253620.jpg",
        category: "Bangla",
        year: 2026,
        isNew: true,
        isHallPrint: false, // No Hall Print
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/444d0d80732e1ee" }
        ]
    },
    {
        id: 5,
        title: "Tu Meri Main Tera Main Tera Tu Meri",
        poster: "https://image.tmdb.org/t/p/original/tNDMdkJQ8BJnV7Uavyft141xgWb.jpg",
        category: "Hindi",
        year: 2025,
        isNew: true,
        isHallPrint: true, // Hall Print enabled
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/92c3e539d050855" }
        ]
    },
    {
        id: 6,
        title: "Dhurandhar",
        poster: "https://i.imgbd.org/poster_rk071769895648.jpg",
        category: "Hindi",
        year: 2025,
        isNew: true,
        isHallPrint: false, // No Hall Print
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/883202ae084a2c2" }
        ]
    },
    {
        id: 7,
        title: "David",
        poster: "https://i.imgbd.org/poster_h9yd1769520494.jpg",
        category: "Anime",
        year: 2025,
        isNew: true,
        isHallPrint: true, // Hall Print enabled
        downloads: [
            { quality: "720p", url: "https://mcloud.guru/7b90ae516a66e24" }
        ]
    },
    {
        id: 8,
        title: "Baahubali: The Epic",
        poster: "https://image.tmdb.org/t/p/original/Aws14d781jOIKYKJ7lS2Y3fBCHu.jpg",
        category: "Hindi",
        year: 2025,
        isNew: false,
        isHallPrint: false, // No Hall Print
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/2b1a3737cf8dbf7" }
        ]
    },
    {
        id: 9,
        title: "Wonder Man [S1]",
        poster: "https://image.tmdb.org/t/p/w300/6yy9nQlFt2l6UVWzrfhszFCaZ5C.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: true, // Hall Print enabled
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/58b587d622a7418" }
        ]
    },
    {
        id: 10,
        title: "Omanush",
        poster: "https://i.imgbd.org/poster_iv1g1768843522.jpg",
        category: "Bangla",
        year: 2026,
        isNew: true,
        isHallPrint: false, // No Hall Print
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/a04ad103d159785" }
        ]
    },
    {
        id: 11,
        title: "MCOCA",
        poster: "https://i.imgbd.org/poster_ttjn1769023660.jpg",
        category: "Hindi",
        year: 2026,
        isNew: true,
        isHallPrint: true, // Hall Print enabled
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/45f7239b0864360" }
        ]
    },
    {
        id: 12,
        title: "From the Ashes: The Pit",
        poster: "https://image.tmdb.org/t/p/original/9jpq7YSNIwY4Wua15QM0lmGp3zn.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: false, // No Hall Print
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/339cbdc0429ecba" }
        ]
    }
];

// Sort movies by ID in descending order (highest ID first)
const sortedMovies = [...allMovies].sort((a, b) => b.id - a.id);

// DOM Elements
const movieGrid = document.getElementById('movieGrid');
const pagination = document.getElementById('pagination');
const movieModal = document.getElementById('movieModal');
const closeModal = document.getElementById('closeModal');
const modalMovieTitle = document.getElementById('modalMovieTitle');
const modalMoviePoster = document.getElementById('modalMoviePoster');
const modalMovieInfo = document.getElementById('modalMovieInfo');
const downloadOptions = document.getElementById('downloadOptions');
const modalHallPrintBadge = document.getElementById('modalHallPrintBadge');
const onlyNewBtn = document.getElementById('onlyNewBtn');
const requestMovieBtn = document.getElementById('requestMovieBtn');
const requestModal = document.getElementById('requestModal');
const closeRequestModal = document.getElementById('closeRequestModal');
const requestMovieForm = document.getElementById('requestMovieForm');
const navItems = document.querySelectorAll('.nav-item');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const moviesTitle = document.getElementById('moviesTitle');
const noResults = document.getElementById('noResults');

// Form validation elements
const titleError = document.getElementById('titleError');
const yearError = document.getElementById('yearError');

// Global variables
let currentPage = 1;
let moviesPerPage = 10;
let currentMovies = [...sortedMovies];
let onlyNewActive = false;
let currentCategory = "HOME";
let isSearching = false;
let searchTerm = "";

// Function to create movie card HTML - Now includes Hall Print badge
function createMovieCard(movie) {
    // Add Hall Print badge HTML if movie has isHallPrint = true
    const hallPrintBadge = movie.isHallPrint ? '<div class="hall-print-badge">Hall Print</div>' : '';
    
    return `
        <div class="movie-card" data-id="${movie.id}">
            <div class="movie-poster-container">
                <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
                ${hallPrintBadge}
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-year">Year: ${movie.year}</div>
                <div class="movie-category">${movie.category}</div>
            </div>
        </div>
    `;
}

// Function to display movies with pagination
function displayMovies() {
    // Calculate start and end indices for current page
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const moviesToShow = currentMovies.slice(startIndex, endIndex);
    
    // Clear and display movies
    movieGrid.innerHTML = '';
    
    if (moviesToShow.length === 0) {
        // Show no results message
        movieGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        // Show movies
        movieGrid.style.display = 'grid';
        noResults.style.display = 'none';
        
        moviesToShow.forEach(movie => {
            movieGrid.innerHTML += createMovieCard(movie);
        });
        
        // Add event listeners to movie cards
        const movieCards = movieGrid.querySelectorAll('.movie-card');
        movieCards.forEach(card => {
            card.addEventListener('click', function() {
                const movieId = parseInt(this.getAttribute('data-id'));
                const movie = allMovies.find(m => m.id === movieId);
                if (movie) {
                    openMovieModal(movie);
                }
            });
        });
    }
    
    // Update pagination
    updatePagination();
}

// Function to update pagination buttons
function updatePagination() {
    const totalPages = Math.ceil(currentMovies.length / moviesPerPage);
    
    // Clear pagination
    pagination.innerHTML = '';
    
    // Only show pagination if there are multiple pages
    if (totalPages > 1) {
        // Previous button
        if (currentPage > 1) {
            pagination.innerHTML += `<div class="page-btn" data-page="${currentPage - 1}">Previous</div>`;
        }
        
        // Page buttons
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                pagination.innerHTML += `<div class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</div>`;
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                pagination.innerHTML += `<div class="page-btn">...</div>`;
            }
        }
        
        // Next button
        if (currentPage < totalPages) {
            pagination.innerHTML += `<div class="page-btn" data-page="${currentPage + 1}">Next</div>`;
        }
        
        // Add event listeners to pagination buttons
        const pageBtns = pagination.querySelectorAll('.page-btn[data-page]');
        pageBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                currentPage = parseInt(this.getAttribute('data-page'));
                displayMovies();
                // Scroll to top of movies section smoothly
                document.querySelector('.movie-grid').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }
}

// Function to filter movies by category
function filterByCategory(category) {
    currentCategory = category;
    currentPage = 1;
    isSearching = false;
    searchTerm = "";
    searchInput.value = "";
    
    // Update title
    moviesTitle.innerHTML = '<i class="fas fa-film"></i> RECENTLY RELEASED MOVIES';
    
    if (category === "HOME") {
        currentMovies = [...sortedMovies];
    } else {
        currentMovies = sortedMovies.filter(movie => 
            movie.category.toUpperCase().includes(category) || 
            (category === "ALL MOVIES" && !movie.category.includes("Web Series")) ||
            (category === "ALL WEB SERIES" && movie.category.includes("Web Series")) ||
            (category === "ANIME" && movie.category === "Anime")
        );
    }
    
    // Apply "Only New" filter if active
    if (onlyNewActive) {
        currentMovies = currentMovies.filter(movie => movie.isNew);
    }
    
    displayMovies();
}

// Function to perform search
function performSearch(searchTerm) {
    currentPage = 1;
    isSearching = true;
    searchTerm = searchTerm.toLowerCase().trim();
    
    // Update title
    moviesTitle.innerHTML = `<i class="fas fa-search"></i> SEARCH RESULTS FOR: "${searchTerm}"`;
    
    if (!searchTerm) {
        // If search is empty, show all movies
        filterByCategory(currentCategory);
        return;
    }
    
    // Search in all movies (title, category, year)
    currentMovies = sortedMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.category.toLowerCase().includes(searchTerm) ||
        movie.year.toString().includes(searchTerm)
    );
    
    // Apply "Only New" filter if active
    if (onlyNewActive) {
        currentMovies = currentMovies.filter(movie => movie.isNew);
    }
    
    displayMovies();
}

// Function to toggle "Only New" filter
function toggleOnlyNew() {
    onlyNewActive = !onlyNewActive;
    
    if (onlyNewActive) {
        onlyNewBtn.innerHTML = '<i class="fas fa-star"></i> Showing New Only';
        onlyNewBtn.style.backgroundColor = "var(--primary)";
        onlyNewBtn.style.borderColor = "var(--primary)";
        currentMovies = sortedMovies.filter(movie => movie.isNew);
    } else {
        onlyNewBtn.innerHTML = '<i class="fas fa-star"></i> Only New';
        onlyNewBtn.style.backgroundColor = "var(--card-bg)";
        onlyNewBtn.style.borderColor = "#444";
        
        // Reapply current filter (search or category)
        if (isSearching && searchTerm) {
            performSearch(searchTerm);
        } else {
            filterByCategory(currentCategory);
        }
        return;
    }
    
    // If searching, apply search filter
    if (isSearching && searchTerm) {
        currentMovies = currentMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.category.toLowerCase().includes(searchTerm) ||
            movie.year.toString().includes(searchTerm)
        );
    }
    // If filtering by category other than HOME, apply both filters
    else if (currentCategory !== "HOME") {
        currentMovies = currentMovies.filter(movie => 
            movie.category.toUpperCase().includes(currentCategory) ||
            (currentCategory === "ALL MOVIES" && !movie.category.includes("Web Series")) ||
            (currentCategory === "ALL WEB SERIES" && movie.category.includes("Web Series"))
        );
    }
    
    currentPage = 1;
    displayMovies();
}

// Function to open movie modal - Now includes Hall Print badge
function openMovieModal(movie) {
    modalMovieTitle.textContent = movie.title;
    modalMoviePoster.src = movie.poster;
    modalMoviePoster.alt = movie.title;
    
    // Show or hide Hall Print badge in modal
    if (movie.isHallPrint) {
        modalHallPrintBadge.style.display = 'block';
    } else {
        modalHallPrintBadge.style.display = 'none';
    }
    
    // Set movie info with year
    modalMovieInfo.innerHTML = `
        <p><strong>Title:</strong> ${movie.title}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Category:</strong> ${movie.category}</p>
        ${movie.isNew ? '<p><strong>Status:</strong> <span style="color: #28a745;">New Release</span></p>' : ''}
        ${movie.isHallPrint ? '<p><strong>Print Type:</strong> <span style="color: #ffd700;">Hall Print</span></p>' : ''}
    `;
    
    // Set download options - ONLY 1080p
    downloadOptions.innerHTML = '';
    
    // Show only 1080p download option
    const downloadQuality = movie.downloads && movie.downloads.length > 0 
        ? movie.downloads[0] 
        : { quality: "1080p", url: "#" };
    
    downloadOptions.innerHTML = `
        <div class="download-option">
            <h4>${downloadQuality.quality} Quality</h4>
            <p>High quality download with excellent audio and video</p>
            <a href="${downloadQuality.url}" class="download-btn" target="_blank">
                <i class="fas fa-download"></i> Download ${downloadQuality.quality}
            </a>
        </div>
    `;
    
    // Show modal
    movieModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Function to validate request form
function validateRequestForm() {
    let isValid = true;
    
    // Reset error messages
    titleError.style.display = 'none';
    yearError.style.display = 'none';
    
    const title = document.getElementById('requestTitle').value.trim();
    const year = document.getElementById('requestYear').value;
    
    // Validate title
    if (!title) {
        titleError.style.display = 'block';
        isValid = false;
    }
    
    // Validate year
    const yearNum = parseInt(year);
    if (!year || yearNum < 1900 || yearNum > 2026) {
        yearError.style.display = 'block';
        isValid = false;
    }
    
    return isValid;
}

// Function to handle movie request
function handleMovieRequest(formData) {
    alert(`Thank you for your request!\n\nMovie: ${formData.title}\nYear: ${formData.year}\n\nWe'll try to add this movie to our collection soon.`);
    
    // Reset form
    requestMovieForm.reset();
    
    // Close modal
    requestModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Function to show/hide scroll to top button
function toggleScrollTopButton() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

// Event Listeners
closeModal.addEventListener('click', function() {
    movieModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

closeRequestModal.addEventListener('click', function() {
    requestModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === movieModal) {
        movieModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (event.target === requestModal) {
        requestModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Only New button event
onlyNewBtn.addEventListener('click', toggleOnlyNew);

// Request Movie button event
requestMovieBtn.addEventListener('click', function() {
    requestModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

// Request Movie form submission
requestMovieForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateRequestForm()) {
        return;
    }
    
    const formData = {
        title: document.getElementById('requestTitle').value,
        year: document.getElementById('requestYear').value,
        details: document.getElementById('requestDetails').value
    };
    
    handleMovieRequest(formData);
});

// Navigation click events
navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active class to clicked
        this.classList.add('active');
        
        // Filter movies based on category
        const category = this.textContent.toUpperCase();
        filterByCategory(category);
    });
});

// Search button click event
searchBtn.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // Remove active class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        // Perform search
        performSearch(searchTerm);
    }
});

// Search input enter key event
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Perform search
            performSearch(searchTerm);
        }
    }
});

// Scroll to top button event
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Listen for scroll events
window.addEventListener('scroll', toggleScrollTopButton);

// Initialize the page
function init() {
    filterByCategory("HOME");
    toggleScrollTopButton();
}

// Run initialization when page loads
document.addEventListener('DOMContentLoaded', init);
