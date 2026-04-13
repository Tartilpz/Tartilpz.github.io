// Movie Data - Now with 16 movies (8 per page)
const allMovies = [
    {
        id: 16,
        title: "The Red Line",
        poster: "https://image.tmdb.org/t/p/w300/q3ROA6OqVA9rWSsC2DzdkPQvxWW.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/7030cf62c546f80" }
        ]
    },
    {
        id: 15,
        title: "Jana Nayagan - Hindi Not Available",
        poster: "https://m.media-amazon.com/images/M/MV5BNDc0NTEzMjYtOWExZS00M2EwLTk5MzgtOTMxYTg3NmMxZmMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        category: "Tamil",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/8e3a7070f7e40b6" }
        ]
    },
    {
        id: 14,
        title: "Killer Whale",
        poster: "https://image.tmdb.org/t/p/original/a7T82M3neKPDyttHaJkbBIqQpwv.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/19cc9aae6933dea" }
        ]
    },
    {
        id: 13,
        title: "Beneath the Storm",
        poster: "https://i.imgbd.org/poster_zo8k1775827864.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/f64783e75e97175" }
        ]
    },
    {
        id: 12,
        title: "Project Hail Mary",
        poster: "https://image.tmdb.org/t/p/original/gK2Qp7XywbzdIFNSPavEWlqw1DA.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/e9127a33291dfc6" }
        ]
    },
    {
        id: 11,
        title: "Crime 101",
        poster: "https://i.imgbd.org/poster_l94h1772560631.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/ab7672d149e9c45" }
        ]
    },
    {
        id: 10,
        title: "The Truce",
        poster: "https://image.tmdb.org/t/p/w300/gk3VVTTRWVhuAVpuxJrGKCKBat5.jpg",
        category: "Dual Audio",
        year: 2025,
        isNew: true,
        isHallPrint: false,
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/e0151ea9276bedd" }
        ]
    },
    {
        id: 9,
        title: "The Carpenter's Son",
        poster: "https://image.tmdb.org/t/p/original/2Q44ofC6V9k6vJFToFwpwX86YUn.jpg",
        category: "Dual Audio",
        year: 2025,
        isNew: true,
        isHallPrint: false,
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/fe4746a6d1335dd" }
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
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/6d84a486cce65d9" }
        ]
    },
    {
        id: 7,
        title: "Made in Korea",
        poster: "https://m.media-amazon.com/images/M/MV5BMDc5ZmMxZDgtYjVhOC00NjA2LTllMTYtYTQzZGZlNDM5NDIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        category: "Hindi Dubbed",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/2e7016037bf7d4e" }
        ]
    },
    {
        id: 6,
        title: "O'Romeo",
        poster: "https://image.tmdb.org/t/p/original/2raQOPxWxnY30x4gwg93O2eOblR.jpg",
        category: "Hindi",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/2127d6a37134044" }
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
        contentType: "series",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/58b587d622a7418" }
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
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/444d0d80732e1ee" }
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
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/0d4316fce64a6f8" }
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
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/9ac6d9b0296095c" }
        ]
    },
    {
        id: 1,
        title: "The Big Fake",
        poster: "https://m.media-amazon.com/images/M/MV5BYzk1MmRiODctMGFkMy00MTlmLTgyZjQtYTc1MWUyZjU5MTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        category: "Dual Audio",
        year: 2026,
        isNew: true,
        isHallPrint: false,
        contentType: "movie",
        downloads: [
            { quality: "1080p", url: "https://mcloud.guru/3cb89078223da96" }
        ]
    }
];

// Sort movies by ID in descending order (already sorted, but keeping for safety)
const sortedMovies = [...allMovies].sort((a, b) => b.id - a.id);

// DOM Elements
const mainContent = document.getElementById('mainContent');
const movieGrid = document.getElementById('movieGrid');
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
const movieLoadingSpinner = document.getElementById('movieLoadingSpinner');

// Pagination elements
const daPagination = document.getElementById('daPagination');
const paginationList = daPagination.querySelector('ul');
const paginationItems = daPagination.querySelectorAll('li:not(.arrow)');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const activePill = document.getElementById('activePill');

// Form validation elements
const titleError = document.getElementById('titleError');
const yearError = document.getElementById('yearError');

// Global variables
let currentPage = 1;
const moviesPerPage = 8; // 8 movies per page
let currentMovies = [...sortedMovies];
let onlyNewActive = false;
let currentCategory = "HOME";
let isSearching = false;
let searchTerm = "";
let searchTimeout;

// Function to handle image errors
function handleImageError(img) {
    img.src = 'https://via.placeholder.com/300x450?text=Poster+Not+Available';
    img.onerror = null;
}
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
    const contentTypeBadge = movie.contentType === 'movie' 
        ? '<div class="content-type-badge movie-badge">Movie</div>' 
        : '<div class="content-type-badge series-badge">Series</div>';
    const sanitizedPoster = sanitizeUrl(movie.poster);
    
    return `
        <div class="movie-card" data-id="${movie.id}">
            <div class="movie-poster-container">
                <img src="${sanitizedPoster}" alt="${movie.title.replace(/"/g, '&quot;')}" class="movie-poster" loading="lazy" onerror="handleImageError(this)">
                ${hallPrintBadge}
                ${contentTypeBadge}
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

// Function to update pagination UI
function updatePaginationUI() {
    const totalPages = Math.ceil(currentMovies.length / moviesPerPage);
    
    // Show/hide pagination based on number of pages
    if (totalPages <= 1) {
        daPagination.style.display = 'none';
        return;
    } else {
        daPagination.style.display = 'block';
    }
    
    // Update page numbers
    const pageItems = Array.from(paginationItems);
    pageItems.forEach((item, index) => {
        const pageNum = index + 1;
        if (pageNum <= totalPages) {
            item.style.display = 'inline-block';
            item.textContent = pageNum;
            item.setAttribute('data-page', pageNum);
            
            if (pageNum === currentPage) {
                item.classList.add('current');
            } else {
                item.classList.remove('current');
            }
        } else {
            item.style.display = 'none';
        }
    });
    
    // Update active pill position
    const currentPageElement = Array.from(paginationItems).find(
        item => parseInt(item.getAttribute('data-page')) === currentPage
    );
    
    if (currentPageElement) {
        activePill.style.left = currentPageElement.offsetLeft + 'px';
    }
    
    // Enable/disable prev/next buttons
    if (currentPage === 1) {
        prevPageBtn.style.opacity = '0.5';
        prevPageBtn.style.pointerEvents = 'none';
    } else {
        prevPageBtn.style.opacity = '1';
        prevPageBtn.style.pointerEvents = 'auto';
    }
    
    if (currentPage === totalPages) {
        nextPageBtn.style.opacity = '0.5';
        nextPageBtn.style.pointerEvents = 'none';
    } else {
        nextPageBtn.style.opacity = '1';
        nextPageBtn.style.pointerEvents = 'auto';
    }
}

// Function to display movies with pagination
function displayMovies() {
    showMovieLoading();
    
    setTimeout(() => {
        const startIndex = (currentPage - 1) * moviesPerPage;
        const endIndex = startIndex + moviesPerPage;
        const moviesToShow = currentMovies.slice(startIndex, endIndex);
        
        movieGrid.innerHTML = '';
        
        if (moviesToShow.length === 0) {
            movieGrid.style.display = 'none';
            noResults.style.display = 'block';
            daPagination.style.display = 'none';
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
            
            // Update pagination
            updatePaginationUI();
        }
        
        hideMovieLoading();
    }, 300);
}

// Function to go to specific page
function goToPage(page) {
    const totalPages = Math.ceil(currentMovies.length / moviesPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        displayMovies();
        document.querySelector('.movie-grid').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
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
        onlyNewBtn.style.color = "white";
        currentMovies = sortedMovies.filter(movie => movie.isNew);
    } else {
        onlyNewBtn.innerHTML = '<i class="fas fa-star"></i> Only New';
        onlyNewBtn.style.backgroundColor = "white";
        onlyNewBtn.style.borderColor = "var(--border-light)";
        onlyNewBtn.style.color = "var(--text-dark)";
        
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
        <p><strong>Type:</strong> ${movie.contentType === 'movie' ? 'Movie' : 'TV Series'}</p>
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
});

closeRequestModal.addEventListener('click', function() {
    requestModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

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

// Pagination event listeners
paginationItems.forEach(item => {
    item.addEventListener('click', function(e) {
        if (!this.classList.contains('arrow')) {
            const page = parseInt(this.getAttribute('data-page'));
            if (!isNaN(page) && page !== currentPage) {
                goToPage(page);
            }
        }
    });
});

prevPageBtn.addEventListener('click', function() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
});

nextPageBtn.addEventListener('click', function() {
    const totalPages = Math.ceil(currentMovies.length / moviesPerPage);
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
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
    
    // Initial pagination setup
    setTimeout(() => {
        updatePaginationUI();
    }, 500);
}

// Start the app
init();
