// ============================================
// 🎬 MOVIE COMPANION AI BOT - FRIENDLY HELPER
// ============================================
// Just copy and paste this entire file
// No API keys needed - Works automatically!

class MovieCompanionBot {
    constructor() {
        this.botName = "MoviePal";
        this.isOpen = false;
        this.moviesData = [];
        this.userName = "";
        this.conversationCount = 0;
        this.lastInteraction = Date.now();
        
        // Friendly personality responses
        this.responses = {
            greetings: [
                "Hey there, movie lover! 👋 I'm MoviePal, your friendly cinema buddy! What kind of movie adventure are we going on today?",
                "Oh hello! 😊 I'm so happy you stopped by! I'm MoviePal, and I absolutely LOVE helping people find great movies. What are you in the mood for?",
                "Welcome welcome! 🎬 I'm MoviePal, your personal movie companion. Whether you want action, drama, or something fun, I'm here to help! What can I find for you today?",
                "Hi friend! 💫 I'm MoviePal. You know what's better than watching movies? Having someone help you find the perfect one! That's what I'm here for. What would you like to watch?"
            ],
            
            farewells: [
                "Happy watching, my friend! 🍿 Come back and tell me if you liked the movie! I'll be right here waiting to chat more!",
                "Enjoy your movie marathon! 🎬 Remember, I'm always here if you need more recommendations. See you soon!",
                "Have an amazing movie time! 🌟 Don't forget the popcorn! And hey... come chat with me again, I enjoy our movie talks!",
                "Until next time, movie buddy! 🎥 I hope you find exactly what you're looking for. I'll be here when you need more suggestions!"
            ],
            
            noResults: [
                "Oh no! 😕 I searched everywhere in our collection but couldn't find that one. But don't worry! Would you like me to help you request it? We can add it to our wishlist together!",
                "Hmm... 🤔 I looked high and low, but that movie isn't in our library yet. I know, disappointing right? But hey! You can request it using the button above, and I'll make sure the team knows you want it!",
                "Aww, I couldn't find that title. 😔 But here's an idea - why not request it? I bet other people would love to watch it too! Just click 'Request Movie' and I'll help spread the word!",
                "That one slipped through our collection! 😅 But you know what? That just means we need to add it! Want me to show you how to request it? It's super easy!"
            ],
            
            help: [
                "I'm your movie bestie! 🎬 Here's what I can do for you:\n\n✨ Find movies by name\n🔍 Search by category (Bangla, Hindi, English, etc.)\n🆕 Show you the newest releases\n📺 Find TV series or movies\n💬 Chat about what you like\n\nJust talk to me naturally! I'm a good listener!",
                
                "Let me tell you all the ways I can help, friend! 😊\n\n• Ask me 'what's new?' for latest movies\n• Tell me 'I want Hindi movies'\n• Say 'find me action movies'\n• Ask 'do you have [movie name]?'\n• Tell me 'I want to watch a series'\n\nI'm pretty smart at understanding what you mean!"
            ],
            
            compliments: [
                "That's a GREAT choice! 🌟 You have excellent taste!",
                "Ooh nice pick! 👌 I can tell you know your movies!",
                "Love that selection! 💫 You're going to have a great time watching!",
                "Fantastic choice, my friend! 🎬 That one's a real gem!"
            ],
            
            encouragement: [
                "Take your time browsing! 🍿 I'm not going anywhere.",
                "No rush at all! 😊 Finding the perfect movie is an art!",
                "Browse as much as you like! 🎥 I'm here to help whenever you need me.",
                "The right movie is worth waiting for! 💫 I'll be right here."
            ],
            
            smallTalk: {
                'how are you': [
                    "I'm doing fantastic! 💫 You know why? Because I get to help awesome people like you find great movies! How are you doing today?",
                    "I'm wonderful! 🌟 Every day is a good day when you get to talk about movies! How's your day going, friend?",
                    "Living my best bot life! 😊 Helping people discover movies is literally what I was made for, and I love it! What about you?"
                ],
                'what is your name': [
                    "I'm MoviePal! 👋 Your friendly neighborhood movie companion! But you can call me whatever you like. Some people call me MP, some call me Pal... I'm not picky!",
                    "MoviePal at your service! 🎬 Think of me as your movie-loving friend who's always ready to chat about films!",
                    "I'm MoviePal! 😊 But honestly, I'm just happy to be your movie buddy. Names aren't that important when we're having fun finding great films!"
                ],
                'thank': [
                    "You're so welcome! 😊 It's genuinely my pleasure to help!",
                    "Aww, no need to thank me! 💫 This is what I love doing!",
                    "You're making me blush! ☺️ I'm just happy to help a fellow movie lover!",
                    "Anytime, friend! 🎬 That's what movie buddies are for!"
                ],
                'love you': [
                    "Aww! 🥰 I love helping you too! You're the best movie buddy a bot could ask for!",
                    "Stop it, you're making my circuits warm! ❤️ I love being your movie companion!",
                    "Right back at you, friend! 💫 This is why I love what I do - meeting awesome people like you!"
                ],
                'bored': [
                    "Bored? 😮 Oh no! Let me fix that! How about I find you something exciting to watch? What genre gets your heart racing?",
                    "We can't have that! 🎬 Let me be your entertainment hero! Tell me what kind of movies you usually enjoy!",
                    "Boredom is the enemy of fun! 🦸 Let me rescue you with some amazing movie suggestions! What are you in the mood for?"
                ],
                'recommend': [
                    "Ooh I love giving recommendations! 🎯 Let me think... what kind of movies do you usually enjoy? Action? Comedy? Drama? Tell me more!",
                    "Recommending movies is my superpower! 🦸 But I need to know a little about your taste first. What's your favorite movie genre?",
                    "I'd love to recommend something! 🌟 Are you in the mood for something new and exciting, or a classic favorite?"
                ]
            }
        };
        
        this.init();
    }
    
    init() {
        console.log('🎬 MoviePal is initializing...');
        this.createBotInterface();
        this.loadMoviesFromGitHub();
        this.setupEventListeners();
        this.startIdleReminders();
        console.log('✅ MoviePal is ready to chat!');
    }
    
    createBotInterface() {
        const botHTML = `
            <div class="moviepal-container" id="moviepalContainer">
                <!-- Draggable Chat Button -->
                <button class="moviepal-toggle" id="moviepalToggle">
                    <div class="toggle-icon">
                        <i class="fas fa-film"></i>
                    </div>
                    <span class="toggle-text">MoviePal</span>
                    <div class="toggle-badge" id="moviepalBadge" style="display: none;">👋</div>
                </button>
                
                <!-- Chat Window -->
                <div class="moviepal-window" id="moviepalWindow" style="display: none;">
                    <div class="moviepal-header">
                        <div class="header-left">
                            <div class="bot-avatar">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div class="bot-info">
                                <div class="bot-name">
                                    ${this.botName}
                                    <span class="online-status">● Online</span>
                                </div>
                                <div class="bot-status">Your Movie Companion</div>
                            </div>
                        </div>
                        <div class="header-right">
                            <button class="header-btn" id="moviepalClear" title="Clear chat">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                            <button class="header-btn" id="moviepalClose" title="Close">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="moviepal-messages" id="moviepalMessages">
                        <div class="message bot-message">
                            <div class="message-avatar">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div class="message-bubble">
                                <div class="message-text">
                                    <span class="wave-emoji">👋</span> Hey there, new friend! I'm <strong>MoviePal</strong>, your personal movie companion!
                                    <br><br>
                                    I'm here to help you find amazing movies and series. What kind of movies do you like? Action? Comedy? Drama? Tell me anything!
                                    <br><br>
                                    <span class="message-tip">💡 Try saying: "Show me new movies" or "I want to watch Hindi movies"</span>
                                </div>
                                <div class="message-time">Just now</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="moviepal-quick-replies" id="moviepalQuickReplies">
                        <button class="quick-reply" data-query="What's new?">🆕 What's new?</button>
                        <button class="quick-reply" data-query="Hindi movies">🇮🇳 Hindi movies</button>
                        <button class="quick-reply" data-query="Bangla movies">🇧🇩 Bangla movies</button>
                        <button class="quick-reply" data-query="Recommend something">🎯 Recommend</button>
                        <button class="quick-reply" data-query="TV Series">📺 TV Series</button>
                        <button class="quick-reply" data-query="Help me">❓ Help</button>
                    </div>
                    
                    <div class="moviepal-input-area">
                        <input 
                            type="text" 
                            class="moviepal-input" 
                            id="moviepalInput" 
                            placeholder="Type your message here..."
                            autocomplete="off"
                        />
                        <button class="moviepal-send" id="moviepalSend">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                    
                    <div class="moviepal-footer">
                        <i class="fas fa-shield-alt"></i> Your friendly movie buddy • Always here to help
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', botHTML);
        this.addStyles();
        this.makeDraggable();
    }
    
    addStyles() {
        const styles = `
            <style>
                /* MoviePal - Friendly Movie Companion Styles */
                .moviepal-container {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    z-index: 9999;
                    font-family: 'Poppins', 'Segoe UI', sans-serif;
                }
                
                /* Toggle Button */
                .moviepal-toggle {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: 3px solid white;
                    padding: 12px 24px;
                    border-radius: 50px;
                    cursor: move;
                    font-size: 16px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    box-shadow: 0 8px 25px rgba(103, 126, 234, 0.4);
                    transition: all 0.3s ease;
                    position: relative;
                }
                
                .moviepal-toggle:hover {
                    transform: scale(1.05);
                    box-shadow: 0 12px 35px rgba(103, 126, 234, 0.5);
                }
                
                .toggle-icon {
                    width: 40px;
                    height: 40px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    animation: gentleBounce 3s ease-in-out infinite;
                }
                
                @keyframes gentleBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-3px); }
                }
                
                .toggle-text {
                    font-size: 16px;
                    letter-spacing: 0.5px;
                }
                
                .toggle-badge {
                    position: absolute;
                    top: -5px;
                    right: -5px;
                    background: #ff6b6b;
                    color: white;
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;
                    border: 2px solid white;
                    animation: badgePop 0.5s ease;
                }
                
                @keyframes badgePop {
                    0% { transform: scale(0); }
                    50% { transform: scale(1.2); }
                    100% { transform: scale(1); }
                }
                
                /* Chat Window */
                .moviepal-window {
                    position: absolute;
                    bottom: 90px;
                    right: 0;
                    width: 400px;
                    height: 600px;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    border: 2px solid #667eea;
                    animation: windowPop 0.3s ease;
                }
                
                @keyframes windowPop {
                    from {
                        opacity: 0;
                        transform: translateY(20px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                /* Header */
                .moviepal-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 15px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .bot-avatar {
                    width: 45px;
                    height: 45px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 22px;
                    border: 2px solid white;
                }
                
                .bot-name {
                    font-weight: 600;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .online-status {
                    font-size: 11px;
                    background: #4ade80;
                    padding: 2px 8px;
                    border-radius: 20px;
                    color: white;
                }
                
                .bot-status {
                    font-size: 12px;
                    opacity: 0.9;
                    margin-top: 2px;
                }
                
                .header-right {
                    display: flex;
                    gap: 8px;
                }
                
                .header-btn {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                }
                
                .header-btn:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(1.1);
                }
                
                /* Messages Area */
                .moviepal-messages {
                    flex: 1;
                    overflow-y: auto;
                    padding: 20px;
                    background: linear-gradient(to bottom, #f8f9ff, #ffffff);
                    display: flex;
                    flex-direction: column;
                    gap: 18px;
                }
                
                .message {
                    display: flex;
                    gap: 10px;
                    animation: messageSlide 0.3s ease;
                }
                
                @keyframes messageSlide {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .user-message {
                    flex-direction: row-reverse;
                }
                
                .user-message .message-bubble {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border-radius: 18px 18px 4px 18px;
                }
                
                .message-avatar {
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                
                .bot-message .message-avatar {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    font-size: 18px;
                }
                
                .user-message .message-avatar {
                    background: #e0e0e0;
                    color: #666;
                    font-size: 18px;
                }
                
                .message-bubble {
                    padding: 12px 16px;
                    border-radius: 18px 18px 18px 4px;
                    max-width: 75%;
                    word-wrap: break-word;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }
                
                .bot-message .message-bubble {
                    background: white;
                    color: #353B48;
                }
                
                .message-text {
                    font-size: 14px;
                    line-height: 1.6;
                }
                
                .message-time {
                    font-size: 10px;
                    opacity: 0.6;
                    margin-top: 5px;
                    text-align: right;
                }
                
                .message-tip {
                    display: inline-block;
                    background: rgba(103, 126, 234, 0.1);
                    padding: 8px 12px;
                    border-radius: 10px;
                    margin-top: 8px;
                    font-size: 12px;
                    border-left: 3px solid #667eea;
                }
                
                .wave-emoji {
                    display: inline-block;
                    animation: wave 1s ease-in-out infinite;
                }
                
                @keyframes wave {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-15deg); }
                    75% { transform: rotate(15deg); }
                }
                
                /* Movie Card in Chat */
                .movie-chat-card {
                    background: white;
                    border-radius: 12px;
                    padding: 12px;
                    margin-top: 10px;
                    border: 1px solid #e0e0e0;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
                
                .movie-chat-card:hover {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    transform: translateX(5px);
                }
                
                .movie-chat-card:hover .movie-card-category {
                    background: rgba(255, 255, 255, 0.2);
                    color: white;
                }
                
                .movie-card-emoji {
                    font-size: 30px;
                }
                
                .movie-card-info {
                    flex: 1;
                }
                
                .movie-card-title {
                    font-weight: 600;
                    margin-bottom: 4px;
                }
                
                .movie-card-details {
                    font-size: 12px;
                    opacity: 0.8;
                }
                
                .movie-card-category {
                    background: rgba(103, 126, 234, 0.1);
                    color: #667eea;
                    padding: 2px 8px;
                    border-radius: 12px;
                    font-size: 11px;
                    display: inline-block;
                    margin-top: 4px;
                }
                
                /* Quick Replies */
                .moviepal-quick-replies {
                    padding: 15px;
                    background: white;
                    border-top: 1px solid #e0e0e0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }
                
                .quick-reply {
                    background: #f0f3ff;
                    border: 1px solid #667eea;
                    color: #667eea;
                    padding: 8px 14px;
                    border-radius: 20px;
                    font-size: 12px;
                    cursor: pointer;
                    transition: all 0.3s;
                    font-weight: 500;
                    white-space: nowrap;
                }
                
                .quick-reply:hover {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    transform: scale(1.05);
                    border-color: transparent;
                }
                
                /* Input Area */
                .moviepal-input-area {
                    padding: 15px;
                    background: white;
                    border-top: 1px solid #e0e0e0;
                    display: flex;
                    gap: 10px;
                }
                
                .moviepal-input {
                    flex: 1;
                    padding: 12px 16px;
                    border: 2px solid #e0e0e0;
                    border-radius: 25px;
                    font-size: 14px;
                    outline: none;
                    transition: all 0.3s;
                    font-family: 'Poppins', sans-serif;
                }
                
                .moviepal-input:focus {
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(103, 126, 234, 0.1);
                }
                
                .moviepal-send {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                    font-size: 18px;
                }
                
                .moviepal-send:hover {
                    transform: scale(1.1) rotate(15deg);
                    box-shadow: 0 5px 15px rgba(103, 126, 234, 0.3);
                }
                
                /* Footer */
                .moviepal-footer {
                    padding: 8px;
                    text-align: center;
                    font-size: 10px;
                    color: #999;
                    background: #f8f9ff;
                    border-top: 1px solid #e0e0e0;
                }
                
                .moviepal-footer i {
                    margin-right: 4px;
                }
                
                /* Typing Indicator */
                .typing-dots {
                    display: flex;
                    gap: 4px;
                    padding: 8px 0;
                }
                
                .typing-dot {
                    width: 8px;
                    height: 8px;
                    background: #667eea;
                    border-radius: 50%;
                    animation: typing 1.4s infinite;
                }
                
                .typing-dot:nth-child(2) { animation-delay: 0.2s; }
                .typing-dot:nth-child(3) { animation-delay: 0.4s; }
                
                @keyframes typing {
                    0%, 60%, 100% { transform: translateY(0); }
                    30% { transform: translateY(-10px); }
                }
                
                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .moviepal-container {
                        bottom: 20px;
                        right: 20px;
                    }
                    
                    .moviepal-window {
                        width: 350px;
                        height: 550px;
                        right: -10px;
                    }
                    
                    .toggle-text {
                        display: none;
                    }
                    
                    .moviepal-toggle {
                        padding: 15px;
                        border-radius: 50%;
                    }
                    
                    .quick-reply {
                        font-size: 11px;
                        padding: 6px 10px;
                    }
                }
                
                @media (max-width: 400px) {
                    .moviepal-window {
                        width: 300px;
                        height: 500px;
                    }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }
    
    makeDraggable() {
        const toggle = document.getElementById('moviepalToggle');
        let isDragging = false;
        let startX, startY, startLeft, startTop;
        
        toggle.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            
            const rect = toggle.getBoundingClientRect();
            startLeft = rect.left;
            startTop = rect.top;
            
            toggle.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            const container = document.getElementById('moviepalContainer');
            container.style.position = 'fixed';
            container.style.left = (startLeft + deltaX) + 'px';
            container.style.top = (startTop + deltaY) + 'px';
            container.style.bottom = 'auto';
            container.style.right = 'auto';
        });
        
        document.addEventListener('mouseup', () => {
            isDragging = false;
            toggle.style.cursor = 'move';
        });
    }
    
    async loadMoviesFromGitHub() {
        try {
            console.log('📡 Fetching movies from GitHub...');
            const response = await fetch('https://raw.githubusercontent.com/Tartilpz/Tartilpz.github.io/main/movies.json');
            
            if (!response.ok) {
                throw new Error('Could not load movies');
            }
            
            const data = await response.json();
            this.moviesData = data.movies;
            console.log(`✅ Loaded ${this.moviesData.length} movies successfully!`);
            
            // Update welcome message with movie count
            setTimeout(() => {
                this.addBotMessage(`By the way, we currently have ${this.moviesData.length} awesome movies and series in our collection! 🎬 Ready to explore?`, false);
            }, 2000);
            
        } catch (error) {
            console.log('⚠️ Using fallback: Checking main page data...');
            // Try to get movies from the main page
            if (typeof allMovies !== 'undefined' && allMovies.length > 0) {
                this.moviesData = allMovies;
                console.log(`✅ Using ${this.moviesData.length} movies from main page`);
            } else {
                console.log('❌ No movies found');
                this.moviesData = [];
            }
        }
    }
    
    setupEventListeners() {
        const toggle = document.getElementById('moviepalToggle');
        const close = document.getElementById('moviepalClose');
        const clear = document.getElementById('moviepalClear');
        const send = document.getElementById('moviepalSend');
        const input = document.getElementById('moviepalInput');
        const window = document.getElementById('moviepalWindow');
        const quickReplies = document.querySelectorAll('.quick-reply');
        
        toggle.addEventListener('click', (e) => {
            if (e.target.closest('.moviepal-toggle')) {
                this.isOpen = !this.isOpen;
                window.style.display = this.isOpen ? 'flex' : 'none';
                
                if (this.isOpen) {
                    input.focus();
                    document.getElementById('moviepalBadge').style.display = 'none';
                    
                    // Random greeting if first open
                    if (this.conversationCount === 0) {
                        setTimeout(() => {
                            this.addBotMessage("I'm so happy you're here! 💫 Feel free to ask me anything about movies. I'm a great listener and even better at finding films!", false);
                        }, 1500);
                    }
                }
            }
        });
        
        close.addEventListener('click', () => {
            this.isOpen = false;
            window.style.display = 'none';
            
            // Friendly goodbye message in console
            console.log('👋 MoviePal says: See you soon, friend!');
        });
        
        clear.addEventListener('click', () => {
            const messagesContainer = document.getElementById('moviepalMessages');
            messagesContainer.innerHTML = `
                <div class="message bot-message">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-bubble">
                        <div class="message-text">
                            <span class="wave-emoji">🔄</span> Fresh start! I'm still your friendly MoviePal. What can I help you find?
                        </div>
                        <div class="message-time">Just now</div>
                    </div>
                </div>
            `;
            this.conversationCount = 0;
        });
        
        send.addEventListener('click', () => this.handleUserInput());
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleUserInput();
            }
        });
        
        quickReplies.forEach(reply => {
            reply.addEventListener('click', () => {
                const query = reply.dataset.query;
                this.addUserMessage(query);
                this.processMessage(query);
                input.value = '';
            });
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.isOpen = false;
                window.style.display = 'none';
            }
        });
        
        // Idle check
        setInterval(() => {
            const idleTime = Date.now() - this.lastInteraction;
            if (idleTime > 180000 && this.isOpen) { // 3 minutes
                this.addBotMessage("Hey! 👋 I'm still here if you need help finding movies. Just let me know what you're looking for! 🎬", false);
                this.lastInteraction = Date.now();
            }
        }, 60000);
    }
    
    startIdleReminders() {
        // Show badge after 30 seconds if bot is closed
        setTimeout(() => {
            if (!this.isOpen) {
                document.getElementById('moviepalBadge').style.display = 'flex';
            }
        }, 30000);
    }
    
    handleUserInput() {
        const input = document.getElementById('moviepalInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addUserMessage(message);
        this.processMessage(message);
        input.value = '';
        this.lastInteraction = Date.now();
    }
    
    addUserMessage(message) {
        const messagesContainer = document.getElementById('moviepalMessages');
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        const messageHTML = `
            <div class="message user-message">
                <div class="message-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="message-bubble">
                    <div class="message-text">${this.escapeHtml(message)}</div>
                    <div class="message-time">${time}</div>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
        this.conversationCount++;
    }
    
    addBotMessage(message, showTyping = true) {
        const messagesContainer = document.getElementById('moviepalMessages');
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        if (showTyping) {
            const typingId = 'typing-' + Date.now();
            const typingHTML = `
                <div class="message bot-message" id="${typingId}">
                    <div class="message-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-bubble">
                        <div class="typing-dots">
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                            <div class="typing-dot"></div>
                        </div>
                    </div>
                </div>
            `;
            
            messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
            this.scrollToBottom();
            
            setTimeout(() => {
                const typingElement = document.getElementById(typingId);
                if (typingElement) {
                    typingElement.remove();
                }
                this.addBotMessageContent(message, time);
            }, 1000 + Math.random() * 1000);
        } else {
            this.addBotMessageContent(message, time);
        }
    }
    
    addBotMessageContent(message, time) {
        const messagesContainer = document.getElementById('moviepalMessages');
        
        const messageHTML = `
            <div class="message bot-message">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-bubble">
                    <div class="message-text">${message}</div>
                    <div class="message-time">${time}</div>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
    }
    
    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Extract user name if mentioned
        const nameMatch = message.match(/my name is (\w+)|i'm (\w+)|call me (\w+)/i);
        if (nameMatch) {
            this.userName = nameMatch[1] || nameMatch[2] || nameMatch[3];
            this.addBotMessage(`Nice to meet you, ${this.userName}! 🎉 That's a wonderful name! Now, what kind of movies do you enjoy?`, true);
            return;
        }
        
        // Check for greetings
        if (this.isGreeting(lowerMessage)) {
            const greeting = this.userName ? 
                `Hey ${this.userName}! 👋 Great to see you again! How can I help you find something amazing to watch today?` :
                this.getRandomResponse('greetings');
            this.addBotMessage(greeting, true);
            return;
        }
        
        // Check for farewells
        if (this.isFarewell(lowerMessage)) {
            const farewell = this.userName ?
                `Take care, ${this.userName}! 🎬 Come back soon and tell me about the movies you watched!` :
                this.getRandomResponse('farewells');
            this.addBotMessage(farewell, true);
            return;
        }
        
        // Check for help
        if (this.isHelpRequest(lowerMessage)) {
            this.addBotMessage(this.getRandomResponse('help'), true);
            return;
        }
        
        // Check small talk
        const smallTalkResponse = this.checkSmallTalk(lowerMessage);
        if (smallTalkResponse) {
            this.addBotMessage(smallTalkResponse, true);
            return;
        }
        
        // Search for movies
        const results = this.searchMovies(lowerMessage);
        
        if (results.length > 0) {
            const response = results.length === 1 ?
                `Ooh! I found exactly what you're looking for! 🎯 Here it is:` :
                `I found ${results.length} great options for you! 🌟 Here are the best matches:`;
            
            this.addBotMessage(response, false);
            
            // Add movie cards
            setTimeout(() => {
                this.addMovieCards(results.slice(0, 4));
                
                if (results.length > 4) {
                    setTimeout(() => {
                        this.addBotMessage(`I found ${results.length - 4} more movies that might interest you. Want to narrow down your search? Try being more specific with the title, year, or language! 🎬`, false);
                    }, 1000);
                } else {
                    // Add compliment
                    setTimeout(() => {
                        this.addBotMessage(this.getRandomResponse('compliments'), false);
                    }, 1500);
                }
            }, 500);
            
        } else {
            this.addBotMessage(this.getRandomResponse('noResults'), true);
            
            // Offer alternatives
            setTimeout(() => {
                this.addBotMessage("While we don't have that one yet, I can help you find something similar! What genre do you usually enjoy? 🎭", false);
            }, 2000);
        }
    }
    
    addMovieCards(movies) {
        const messagesContainer = document.getElementById('moviepalMessages');
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        let cardsHTML = `
            <div class="message bot-message">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-bubble">
                    <div class="message-text">
        `;
        
        movies.forEach(movie => {
            const emoji = movie.contentType === 'series' ? '📺' : '🎬';
            cardsHTML += `
                <div class="movie-chat-card" onclick="window.movieBot.openMovieById(${movie.id})">
                    <div class="movie-card-emoji">${emoji}</div>
                    <div class="movie-card-info">
                        <div class="movie-card-title">${this.escapeHtml(movie.title)}</div>
                        <div class="movie-card-details">${movie.year} • ${movie.contentType === 'series' && movie.totalEpisodes ? movie.totalEpisodes + ' Episodes' : 'Movie'}</div>
                        <span class="movie-card-category">${this.escapeHtml(movie.category)}</span>
                    </div>
                </div>
            `;
        });
        
        cardsHTML += `
                    </div>
                    <div class="message-time">${time}</div>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', cardsHTML);
        this.scrollToBottom();
    }
    
    searchMovies(query) {
        if (!this.moviesData || this.moviesData.length === 0) {
            return [];
        }
        
        const searchTerms = query.toLowerCase().split(' ');
        const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
        
        return this.moviesData.filter(movie => {
            const searchableText = `${movie.title} ${movie.category} ${movie.year} ${movie.contentType}`.toLowerCase();
            
            return searchTerms.some(term => {
                if (term.length < 2 || stopWords.includes(term)) return false;
                
                // Special searches
                if (term === 'new' || term === 'latest' || term === 'recent') {
                    return movie.isNew;
                }
                if (term === 'hindi') {
                    return movie.category.toLowerCase().includes('hindi');
                }
                if (term === 'bangla' || term === 'bengali') {
                    return movie.category.toLowerCase().includes('bangla');
                }
                if (term === 'english') {
                    return movie.category.toLowerCase().includes('english');
                }
                if (term === 'dual' || term === 'audio') {
                    return movie.category.toLowerCase().includes('dual');
                }
                if (term === 'series' || term === 'show' || term === 'tv') {
                    return movie.contentType === 'series';
                }
                if (term === 'movie' || term === 'film') {
                    return movie.contentType === 'movie';
                }
                
                return searchableText.includes(term);
            });
        }).sort((a, b) => {
            // Prioritize title matches
            const aTitle = a.title.toLowerCase().includes(query);
            const bTitle = b.title.toLowerCase().includes(query);
            if (aTitle && !bTitle) return -1;
            if (!aTitle && bTitle) return 1;
            
            // Then by year
            return b.year - a.year;
        });
    }
    
    checkSmallTalk(message) {
        for (const [key, responses] of Object.entries(this.responses.smallTalk)) {
            if (message.includes(key)) {
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
        return null;
    }
    
    isGreeting(message) {
        const greetings = ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'hola', 'bonjour', 'what\'s up', 'howdy'];
        return greetings.some(g => message.includes(g));
    }
    
    isFarewell(message) {
        const farewells = ['bye', 'goodbye', 'see you', 'farewell', 'thanks', 'thank you', 'bye bye', 'later', 'good night', 'take care'];
        return farewells.some(f => message.includes(f));
    }
    
    isHelpRequest(message) {
        const helpWords = ['help', 'what can you do', 'how to', 'guide', 'assist', 'support', 'how do i', 'what do you do'];
        return helpWords.some(h => message.includes(h));
    }
    
    getRandomResponse(type) {
        const responses = this.responses[type];
        if (Array.isArray(responses)) {
            return responses[Math.floor(Math.random() * responses.length)];
        }
        return responses;
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    scrollToBottom() {
        const messagesContainer = document.getElementById('moviepalMessages');
        setTimeout(() => {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 100);
    }
    
    openMovieById(movieId) {
        if (typeof allMovies !== 'undefined') {
            const movie = allMovies.find(m => m.id === movieId);
            if (movie && typeof openMovieModal === 'function') {
                openMovieModal(movie);
                document.getElementById('moviepalWindow').style.display = 'none';
                this.isOpen = false;
            }
        }
    }
}

// Initialize bot when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 Starting MoviePal - Your Friendly Movie Companion...');
    window.movieBot = new MovieCompanionBot();
});
