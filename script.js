// Movie Data
const allMovies = [
    {
        id: 1,
        title: "The Big Fake",
        poster: "https://m.media-amazon.com/images/M/MV5BYzk1MmRiODctMGFkMy00MTlmLTgyZjQtYTc1MWUyZjU5MTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/3cb89078223da96" }
        ]
    },
    {
        id: 2,
        title: "People We Meet on Vacation",
        poster: "https://m.media-amazon.com/images/M/MV5BMDIxZTEzZmUtZDI4OC00MWI4LWIwZTgtYTBkY2UxMGY1NTZkXkEyXkFqcGc@._V1_.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: false,
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
        isHallPrint: false,
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
        isHallPrint: false,
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/444d0d80732e1ee" }
        ]
    },
    {
        id: 5,
        title: "Wonder Man [S1]",
        poster: "https://image.tmdb.org/t/p/w300/6yy9nQlFt2l6UVWzrfhszFCaZ5C.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/58b587d622a7418" }
        ]
    },
    {
        id: 6,
        title: "O'Romeo",
        poster: "https://image.tmdb.org/t/p/original/2raQOPxWxnY30x4gwg93O2eOblR.jpg",
        category: "Hindi",
        year: 2026,
        isNew: true,
        isHallPrint: true,
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/37e3dcf511054cd" }
        ]
    },
    {
        id: 7,
        title: "Made in Korea (2026)",
        poster: "https://m.media-amazon.com/images/M/MV5BMDc5ZmMxZDgtYjVhOC00NjA2LTllMTYtYTQzZGZlNDM5NDIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        category: "Hindi Dubbed",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/2e7016037bf7d4e" }
        ]
    },
    {
        id: 8,
        title: "Funky",
        poster: "https://i.imgbd.org/poster_mb4t1773340699.jpg",
        category: "Hindi Dubbed",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/6d84a486cce65d9" }
        ]
    }
];

// Sort movies by ID in descending order
const sortedMovies = [...allMovies].sort((a, b) => b.id - a.id);

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const mainContent = document.getElementById('mainContent');
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
const searchResultsAnnouncer = document.getElementById('searchResultsAnnouncer');
const movieLoadingSpinner = document.getElementById('movieLoadingSpinner');

// Form validation elements
const titleError = document.getElementById('titleError');
const yearError = document.getElementById('yearError');

// Global variables
let currentPage = 1;
const moviesPerPage = 10;
let currentMovies = [...sortedMovies];
let onlyNewActive = false;
let currentCategory = "HOME";
let isSearching = false;
let searchTerm = "";
let searchTimeout;

// Handle loading screen
window.addEventListener('load', function() {
    // Show loading screen for 5 seconds
    setTimeout(function() {
        loadingScreen.classList.add('fade-out');
        
        // After fade out animation, hide loading screen and show main content
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.style.overflow = 'auto';
            
            // Initialize the page after content is shown
            init();
        }, 800); // Match this with CSS transition time
    }, 5000); // 5 seconds loading
});

// Function to handle image errors
function handleImageError(img) {
    img.src = 'https://via.placeholder.com/300x450?text=Poster+Not+Available';
    img.onerror = null;
}

// Make function globally available
window.handleImageError = handleImageError;

// Function to sanitize URL
function sanitizeUrl(url) {
    try {
        const parsed = new URL(url);
        return parsed.protocol === 'https:' ? url : '#';
    } catch {
        return '#';
    }
}

// Function to create movie card HTML
function createMovieCard(movie) {
    const hallPrintBadge = movie.isHallPrint ? '<div class="hall-print-badge">Hall Print</div>' : '';
    const sanitizedPoster = sanitizeUrl(movie.poster);
    
    return `
        <div class="movie-card" data-id="${movie.id}">
            <div class="movie-poster-container">
                <img src="${sanitizedPoster}" alt="${movie.title.replace(/"/g, '&quot;')}" class="movie-poster" loading="lazy" onerror="handleImageError(this)">
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

// Function to show loading state
function showMovieLoading() {
    movieGrid.style.display = 'none';
    movieLoadingSpinner.style.display = 'block';
    noResults.style.display = 'none';
}

// Function to hide loading state
function hideMovieLoading() {
    movieLoadingSpinner.style.display = 'none';
    movieGrid.style.display = 'grid';
}

// Function to display movies with pagination
function displayMovies() {
    showMovieLoading();
    
    // Simulate loading for better UX
    setTimeout(() => {
        const startIndex = (currentPage - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const moviesToShow = currentMovies.slice(startIndex, endIndex);
        
        movieGrid.innerHTML = '';
        
        if (moviesToShow.length === 0) {
            movieGrid.style.display = 'none';
            noResults.style.display = 'block';
            hideMovieLoading();
        } else {
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
            
            hideMovieLoading();
        }
        
        // Update pagination
        updatePagination();
        
        // Announce search results for screen readers
        if (searchResultsAnnouncer) {
            searchResultsAnnouncer.textContent = `${currentMovies.length} movies found`;
        }
    }, 300);
}

// Function to update pagination buttons
function updatePagination() {
    const totalPages = Math.ceil(currentMovies.length / moviesPerPage);
    
    pagination.innerHTML = '';
    
    if (totalPages > 1) {
        if (currentPage > 1) {
            pagination.innerHTML += `<div class="page-btn" data-page="${currentPage - 1}">Previous</div>`;
        }
        
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                pagination.innerHTML += `<div class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</div>`;
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                pagination.innerHTML += `<div class="page-btn">...</div>`;
            }
        }
        
        if (currentPage < totalPages) {
            pagination.innerHTML += `<div class="page-btn" data-page="${currentPage + 1}">Next</div>`;
        }
        
        const pageBtns = pagination.querySelectorAll('.page-btn[data-page]');
        pageBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                currentPage = parseInt(this.getAttribute('data-page'));
                displayMovies();
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
    
    moviesTitle.innerHTML = '<i class="fas fa-film"></i> RECENTLY RELEASED MOVIES';
    
    if (category === "HOME") {
        currentMovies = [...sortedMovies];
    } else {
        currentMovies = sortedMovies.filter(movie => 
            movie.category.toUpperCase().includes(category)
        );
    }
    
    if (onlyNewActive) {
        currentMovies = currentMovies.filter(movie => movie.isNew);
    }
    
    displayMovies();
}

// Function to perform search with debounce
function performSearch(searchTerm) {
    currentPage = 1;
    isSearching = true;
    const searchQuery = searchTerm.toLowerCase().trim();
    
    moviesTitle.innerHTML = `<i class="fas fa-search"></i> SEARCH RESULTS FOR: "${searchQuery}"`;
    
    if (!searchQuery) {
        filterByCategory(currentCategory);
        return;
    }
    
    currentMovies = sortedMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery) ||
        movie.category.toLowerCase().includes(searchQuery) ||
        movie.year.toString().includes(searchQuery)
    );
    
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
        
        if (isSearching && searchTerm) {
            performSearch(searchTerm);
        } else {
            filterByCategory(currentCategory);
        }
        return;
    }
    
    if (isSearching && searchTerm) {
        currentMovies = currentMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchTerm) ||
            movie.category.toLowerCase().includes(searchTerm) ||
            movie.year.toString().includes(searchTerm)
        );
    } else if (currentCategory !== "HOME") {
        currentMovies = currentMovies.filter(movie => 
            movie.category.toUpperCase().includes(currentCategory)
        );
    }
    
    currentPage = 1;
    displayMovies();
}

// Function to open movie modal
function openMovieModal(movie) {
    modalMovieTitle.textContent = movie.title;
    modalMoviePoster.src = sanitizeUrl(movie.poster);
    modalMoviePoster.alt = movie.title;
    
    modalHallPrintBadge.style.display = movie.isHallPrint ? 'block' : 'none';
    
    modalMovieInfo.innerHTML = `
        <p><strong>Title:</strong> ${movie.title}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Category:</strong> ${movie.category}</p>
        ${movie.isNew ? '<p><strong>Status:</strong> <span style="color: #28a745;">New Release</span></p>' : ''}
        ${movie.isHallPrint ? '<p><strong>Print Type:</strong> <span style="color: #ffd700;">Hall Print</span></p>' : ''}
    `;
    
    downloadOptions.innerHTML = '';
    
    if (movie.downloads && movie.downloads.length > 0) {
        const downloadQuality = movie.downloads[0];
        const sanitizedUrl = sanitizeUrl(downloadQuality.url);
        
        downloadOptions.innerHTML = `
            <div class="download-option">
                <h4>${downloadQuality.quality} Quality</h4>
                <p>High quality download with excellent audio and video</p>
                <a href="${sanitizedUrl}" class="download-btn" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-download"></i> Download ${downloadQuality.quality}
                </a>
            </div>
        `;
    }
    
    movieModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    movieModal.setAttribute('aria-hidden', 'false');
}

// Function to validate request form
function validateRequestForm() {
    let isValid = true;
    
    titleError.style.display = 'none';
    yearError.style.display = 'none';
    
    const title = document.getElementById('requestTitle').value.trim();
    const year = document.getElementById('requestYear').value;
    
    if (!title) {
        titleError.style.display = 'block';
        isValid = false;
    }
    
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
    
    requestMovieForm.reset();
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
    movieModal.setAttribute('aria-hidden', 'true');
});

closeRequestModal.addEventListener('click', function() {
    requestModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(event) {
    if (event.target === movieModal) {
        movieModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        movieModal.setAttribute('aria-hidden', 'true');
    }
    if (event.target === requestModal) {
        requestModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

onlyNewBtn.addEventListener('click', toggleOnlyNew);

requestMovieBtn.addEventListener('click', function() {
    requestModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

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

navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.textContent.toUpperCase();
        filterByCategory(category);
    });
});

// Debounced search
searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    const searchValue = this.value.trim();
    
    if (searchValue.length >= 2 || searchValue.length === 0) {
        searchTimeout = setTimeout(() => {
            if (searchValue.length >= 2) {
                navItems.forEach(nav => nav.classList.remove('active'));
                performSearch(searchValue);
            } else if (searchValue.length === 0) {
                navItems.forEach(nav => nav.classList.remove('active'));
                document.querySelector('.nav-item.home').classList.add('active');
                filterByCategory("HOME");
            }
        }, 300);
    }
});

searchBtn.addEventListener('click', function() {
    const searchValue = searchInput.value.trim();
    if (searchValue.length >= 2) {
        navItems.forEach(nav => nav.classList.remove('active'));
        performSearch(searchValue);
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', toggleScrollTopButton);

// Initialize the page
function init() {
    filterByCategory("HOME");
    toggleScrollTopButton();
}

// Note: init() is called after loading screen fade out
