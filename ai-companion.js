// ============================================
// 🎬 MOVIEPAL - Your Friendly AI Movie Companion
// ============================================
// Perfect Layout • Hide on Chat • Above Scroll Button

class MovieCompanionBot {
    constructor() {
        this.botName = "MoviePal";
        this.isOpen = false;
        this.moviesData = [];
        this.userName = "";
        this.conversationCount = 0;
        this.lastInteraction = Date.now();
        this.isDragging = false;
        this.dragOffsetX = 0;
        this.dragOffsetY = 0;
        
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
            
            smallTalk: {
                'how are you': [
                    "I'm doing fantastic! 💫 You know why? Because I get to help awesome people like you find great movies! How are you doing today?",
                    "I'm wonderful! 🌟 Every day is a good day when you get to talk about movies! How's your day going, friend?",
                    "Living my best bot life! 😊 Helping people discover movies is literally what I was made for, and I love it! What about you?"
                ],
                'what is your name': [
                    "I'm MoviePal! 👋 Your friendly neighborhood movie companion! But you can call me whatever you like!",
                    "MoviePal at your service! 🎬 Think of me as your movie-loving friend who's always ready to chat about films!",
                    "I'm MoviePal! 😊 But honestly, I'm just happy to be your movie buddy!"
                ],
                'thank': [
                    "You're so welcome! 😊 It's genuinely my pleasure to help!",
                    "Aww, no need to thank me! 💫 This is what I love doing!",
                    "Anytime, friend! 🎬 That's what movie buddies are for!"
                ],
                'love you': [
                    "Aww! 🥰 I love helping you too! You're the best movie buddy a bot could ask for!",
                    "Stop it, you're making my circuits warm! ❤️ I love being your movie companion!",
                    "Right back at you, friend! 💫 This is why I love what I do!"
                ],
                'bored': [
                    "Bored? 😮 Oh no! Let me fix that! How about I find you something exciting to watch?",
                    "We can't have that! 🎬 Let me be your entertainment hero! Tell me what kind of movies you usually enjoy!",
                    "Boredom is the enemy of fun! 🦸 Let me rescue you with some amazing movie suggestions!"
                ],
                'recommend': [
                    "Ooh I love giving recommendations! 🎯 Let me think... what kind of movies do you usually enjoy?",
                    "Recommending movies is my superpower! 🦸 What's your favorite movie genre?",
                    "I'd love to recommend something! 🌟 Are you in the mood for something new or a classic?"
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
        this.setupDraggable();
        console.log('✅ MoviePal is ready to chat!');
    }
    
    createBotInterface() {
        const botHTML = `
            <div class="moviepal-wrapper" id="moviepalWrapper">
                <!-- Chat Window - Shown when open -->
                <div class="moviepal-chat-window" id="moviepalChatWindow" style="display: none;">
                    <!-- Header -->
                    <div class="chat-header">
                        <div class="header-left">
                            <div class="bot-avatar-large">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div class="bot-info-detailed">
                                <div class="bot-name-status">
                                    <span class="bot-name-large">${this.botName}</span>
                                    <span class="online-indicator">
                                        <span class="online-dot"></span>
                                        Online
                                    </span>
                                </div>
                                <div class="bot-description">Your Personal Movie Assistant</div>
                            </div>
                        </div>
                        <div class="header-right">
                            <button class="chat-header-btn" id="moviepalClearChat" title="Clear conversation">
                                <i class="fas fa-broom"></i>
                            </button>
                            <button class="chat-header-btn" id="moviepalClose" title="Close">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Messages Area -->
                    <div class="chat-messages" id="moviepalMessages">
                        <div class="message bot-message">
                            <div class="message-avatar-bot">
                                <i class="fas fa-robot"></i>
                            </div>
                            <div class="message-content-wrapper">
                                <div class="message-bubble bot-bubble">
                                    <div class="message-text">
                                        <span class="waving-hand">👋</span> 
                                        <strong>Hey there!</strong> I'm <strong style="color: #667eea;">MoviePal</strong>!
                                        <br><br>
                                        I'm here to help you find amazing movies and series. What would you like to watch today?
                                        <br><br>
                                        <div class="welcome-tips">
                                            <div class="tip-item">🎯 Try: <span class="tip-example">"What's new?"</span></div>
                                            <div class="tip-item">🔍 Or: <span class="tip-example">"Find Hindi movies"</span></div>
                                        </div>
                                    </div>
                                    <div class="message-time">Just now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Quick Reply Suggestions -->
                    <div class="quick-suggestions" id="moviepalQuickReplies">
                        <button class="suggestion-btn" data-query="What's new?">
                            <i class="fas fa-fire"></i> New
                        </button>
                        <button class="suggestion-btn" data-query="Hindi movies">
                            <i class="fas fa-language"></i> Hindi
                        </button>
                        <button class="suggestion-btn" data-query="Bangla movies">
                            <i class="fas fa-film"></i> Bangla
                        </button>
                        <button class="suggestion-btn" data-query="Recommend something">
                            <i class="fas fa-star"></i> Recommend
                        </button>
                        <button class="suggestion-btn" data-query="TV Series">
                            <i class="fas fa-tv"></i> Series
                        </button>
                        <button class="suggestion-btn" data-query="Help me">
                            <i class="fas fa-question-circle"></i> Help
                        </button>
                    </div>
                    
                    <!-- Input Area -->
                    <div class="chat-input-area">
                        <div class="input-wrapper">
                            <input 
                                type="text" 
                                class="chat-input" 
                                id="moviepalInput" 
                                placeholder="Type your message..."
                                autocomplete="off"
                            />
                            <button class="emoji-btn" id="moviepalEmojiBtn" title="Add emoji">
                                <i class="far fa-smile"></i>
                            </button>
                        </div>
                        <button class="send-btn" id="moviepalSend">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
                
                <!-- Beautiful Icon Button - Hidden when chat is open -->
                <div class="moviepal-icon-container" id="moviepalIconContainer">
                    <div class="moviepal-icon-glow"></div>
                    <button class="moviepal-icon-btn" id="moviepalIconBtn">
                        <div class="icon-content">
                            <i class="fas fa-film"></i>
                            <i class="fas fa-comment-dots"></i>
                        </div>
                        <span class="icon-label">AI HELP</span>
                    </button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', botHTML);
        this.addStyles();
    }
    
    addStyles() {
        const styles = `
            <style>
                /* ============================================ */
                /* MOVIEPAL - Premium AI Chat Bot Styles         */
                /* ============================================ */
                
                .moviepal-wrapper {
                    position: fixed;
                    bottom: 100px;
                    right: 30px;
                    z-index: 999;
                    font-family: 'Poppins', 'Segoe UI', sans-serif;
                }
                
                /* ============================================ */
                /* Beautiful Icon Button - Above Scroll Button   */
                /* ============================================ */
                
                .moviepal-icon-container {
                    position: relative;
                    cursor: grab;
                    user-select: none;
                    z-index: 1000;
                }
                
                .moviepal-icon-container:active {
                    cursor: grabbing;
                }
                
                .moviepal-icon-glow {
                    position: absolute;
                    width: 70px;
                    height: 70px;
                    background: radial-gradient(circle, rgba(103, 126, 234, 0.4) 0%, transparent 70%);
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    animation: pulseGlow 3s ease-in-out infinite;
                    pointer-events: none;
                }
                
                @keyframes pulseGlow {
                    0%, 100% { 
                        opacity: 0.5;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    50% { 
                        opacity: 0.8;
                        transform: translate(-50%, -50%) scale(1.15);
                    }
                }
                
                .moviepal-icon-btn {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: 3px solid rgba(255, 255, 255, 0.95);
                    width: 65px;
                    height: 65px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 8px 25px rgba(103, 126, 234, 0.5);
                    transition: all 0.3s ease;
                    position: relative;
                    animation: gentlePulse 2s ease-in-out infinite;
                }
                
                @keyframes gentlePulse {
                    0%, 100% {
                        box-shadow: 0 8px 25px rgba(103, 126, 234, 0.5);
                        transform: scale(1);
                    }
                    50% {
                        box-shadow: 0 12px 35px rgba(103, 126, 234, 0.7);
                        transform: scale(1.05);
                    }
                }
                
                .moviepal-icon-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 15px 40px rgba(103, 126, 234, 0.6);
                    animation: none;
                }
                
                .icon-content {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    margin-bottom: 2px;
                }
                
                .icon-content .fa-film {
                    font-size: 28px;
                    position: absolute;
                    opacity: 0.25;
                    transform: rotate(-15deg);
                }
                
                .icon-content .fa-comment-dots {
                    font-size: 24px;
                    position: relative;
                    z-index: 1;
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
                }
                
                .icon-label {
                    font-size: 9px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
                    background: rgba(255, 255, 255, 0.2);
                    padding: 2px 6px;
                    border-radius: 10px;
                    backdrop-filter: blur(5px);
                }
                
                /* ============================================ */
                /* Chat Window - Shows when icon is clicked     */
                /* ============================================ */
                
                .moviepal-chat-window {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 400px;
                    height: 550px;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    animation: windowPop 0.3s ease;
                    border: 2px solid #667eea;
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
                
                /* Chat Header */
                .chat-header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 15px 18px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .bot-avatar-large {
                    width: 45px;
                    height: 45px;
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 22px;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    backdrop-filter: blur(10px);
                }
                
                .bot-info-detailed {
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }
                
                .bot-name-status {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                
                .bot-name-large {
                    font-size: 16px;
                    font-weight: 700;
                }
                
                .online-indicator {
                    font-size: 10px;
                    background: rgba(74, 222, 128, 0.2);
                    padding: 2px 8px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    backdrop-filter: blur(10px);
                }
                
                .online-dot {
                    width: 6px;
                    height: 6px;
                    background: #4ade80;
                    border-radius: 50%;
                    animation: onlinePulse 1.5s ease-in-out infinite;
                }
                
                @keyframes onlinePulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                
                .bot-description {
                    font-size: 11px;
                    opacity: 0.9;
                }
                
                .header-right {
                    display: flex;
                    gap: 5px;
                }
                
                .chat-header-btn {
                    background: rgba(255, 255, 255, 0.15);
                    border: none;
                    color: white;
                    width: 34px;
                    height: 34px;
                    border-radius: 10px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                    font-size: 14px;
                    backdrop-filter: blur(10px);
                }
                
                .chat-header-btn:hover {
                    background: rgba(255, 255, 255, 0.25);
                    transform: scale(1.05);
                }
                
                /* Messages Area */
                .chat-messages {
                    flex: 1;
                    overflow-y: auto;
                    padding: 18px;
                    background: linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%);
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    max-height: calc(550px - 180px);
                }
                
                .chat-messages::-webkit-scrollbar {
                    width: 5px;
                }
                
                .chat-messages::-webkit-scrollbar-track {
                    background: transparent;
                }
                
                .chat-messages::-webkit-scrollbar-thumb {
                    background: rgba(103, 126, 234, 0.3);
                    border-radius: 10px;
                }
                
                /* Message Styles */
                .message {
                    display: flex;
                    gap: 10px;
                    animation: messageSlideIn 0.3s ease;
                }
                
                @keyframes messageSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .user-message {
                    flex-direction: row-reverse;
                }
                
                .message-avatar-bot {
                    width: 34px;
                    height: 34px;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 16px;
                    flex-shrink: 0;
                }
                
                .user-message .message-avatar-bot {
                    background: linear-gradient(135deg, #e0e0e0, #cccccc);
                    color: #666;
                }
                
                .message-content-wrapper {
                    flex: 1;
                    max-width: 80%;
                }
                
                .message-bubble {
                    padding: 12px 15px;
                    border-radius: 16px;
                    word-wrap: break-word;
                    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
                }
                
                .bot-bubble {
                    background: white;
                    color: #353B48;
                    border-top-left-radius: 4px;
                    border: 1px solid #f0f0f0;
                }
                
                .user-bubble {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border-top-right-radius: 4px;
                }
                
                .message-text {
                    font-size: 13px;
                    line-height: 1.5;
                }
                
                .waving-hand {
                    display: inline-block;
                    animation: wave 1s ease-in-out infinite;
                    font-size: 18px;
                }
                
                @keyframes wave {
                    0%, 100% { transform: rotate(0deg); }
                    25% { transform: rotate(-15deg); }
                    75% { transform: rotate(15deg); }
                }
                
                .welcome-tips {
                    margin-top: 10px;
                    padding: 10px;
                    background: linear-gradient(135deg, rgba(103, 126, 234, 0.05), rgba(118, 75, 162, 0.05));
                    border-radius: 10px;
                    border-left: 3px solid #667eea;
                }
                
                .tip-item {
                    padding: 3px 0;
                    font-size: 12px;
                    color: #555;
                }
                
                .tip-example {
                    background: rgba(103, 126, 234, 0.1);
                    padding: 2px 6px;
                    border-radius: 10px;
                    font-weight: 500;
                    color: #667eea;
                }
                
                .message-time {
                    font-size: 9px;
                    opacity: 0.5;
                    margin-top: 4px;
                    padding-left: 4px;
                }
                
                /* Movie Card in Chat */
                .movie-chat-card {
                    background: white;
                    border-radius: 12px;
                    padding: 12px;
                    margin-top: 8px;
                    border: 1px solid #e8e8e8;
                    cursor: pointer;
                    transition: all 0.3s;
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
                
                .movie-chat-card:hover {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    transform: translateX(3px);
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
                    font-weight: 700;
                    margin-bottom: 3px;
                    font-size: 14px;
                }
                
                .movie-card-details {
                    font-size: 11px;
                    opacity: 0.8;
                    margin-bottom: 3px;
                }
                
                .movie-card-category {
                    background: rgba(103, 126, 234, 0.1);
                    color: #667eea;
                    padding: 2px 8px;
                    border-radius: 10px;
                    font-size: 10px;
                    display: inline-block;
                    font-weight: 600;
                }
                
                /* Quick Suggestions */
                .quick-suggestions {
                    padding: 12px 15px;
                    background: white;
                    border-top: 1px solid #f0f0f0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }
                
                .suggestion-btn {
                    background: #f8f9ff;
                    border: 1px solid #e0e0e0;
                    color: #667eea;
                    padding: 6px 12px;
                    border-radius: 18px;
                    font-size: 11px;
                    cursor: pointer;
                    transition: all 0.3s;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }
                
                .suggestion-btn:hover {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    transform: scale(1.05);
                    border-color: transparent;
                }
                
                /* Input Area */
                .chat-input-area {
                    padding: 12px 15px;
                    background: white;
                    border-top: 1px solid #f0f0f0;
                    display: flex;
                    gap: 10px;
                    align-items: center;
                }
                
                .input-wrapper {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    background: #f8f9ff;
                    border: 2px solid #e8e8e8;
                    border-radius: 25px;
                    padding: 0 14px;
                    transition: all 0.3s;
                }
                
                .input-wrapper:focus-within {
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(103, 126, 234, 0.1);
                    background: white;
                }
                
                .chat-input {
                    flex: 1;
                    padding: 12px 0;
                    border: none;
                    background: transparent;
                    font-size: 13px;
                    outline: none;
                    font-family: 'Poppins', sans-serif;
                }
                
                .chat-input::placeholder {
                    color: #999;
                }
                
                .emoji-btn {
                    background: transparent;
                    border: none;
                    color: #999;
                    font-size: 18px;
                    cursor: pointer;
                    padding: 6px;
                    transition: all 0.3s;
                }
                
                .emoji-btn:hover {
                    color: #667eea;
                    transform: scale(1.1);
                }
                
                .send-btn {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    width: 46px;
                    height: 46px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s;
                    font-size: 18px;
                    box-shadow: 0 4px 12px rgba(103, 126, 234, 0.3);
                }
                
                .send-btn:hover {
                    transform: scale(1.1) rotate(15deg);
                    box-shadow: 0 6px 18px rgba(103, 126, 234, 0.4);
                }
                
                /* Typing Indicator */
                .typing-indicator {
                    display: flex;
                    gap: 4px;
                    padding: 4px 0;
                }
                
                .typing-dot {
                    width: 7px;
                    height: 7px;
                    background: #667eea;
                    border-radius: 50%;
                    animation: typingBounce 1.4s infinite;
                }
                
                .typing-dot:nth-child(2) { animation-delay: 0.2s; }
                .typing-dot:nth-child(3) { animation-delay: 0.4s; }
                
                @keyframes typingBounce {
                    0%, 60%, 100% { transform: translateY(0); }
                    30% { transform: translateY(-8px); }
                }
                
                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .moviepal-wrapper {
                        bottom: 90px;
                        right: 20px;
                    }
                    
                    .moviepal-chat-window {
                        width: 350px;
                        height: 500px;
                        right: -10px;
                    }
                    
                    .moviepal-icon-btn {
                        width: 58px;
                        height: 58px;
                    }
                    
                    .icon-content .fa-film {
                        font-size: 24px;
                    }
                    
                    .icon-content .fa-comment-dots {
                        font-size: 20px;
                    }
                    
                    .icon-label {
                        font-size: 8px;
                    }
                    
                    .chat-messages {
                        max-height: calc(500px - 180px);
                    }
                }
                
                @media (max-width: 400px) {
                    .moviepal-chat-window {
                        width: 300px;
                        height: 480px;
                    }
                    
                    .chat-messages {
                        max-height: calc(480px - 180px);
                    }
                }
                
                /* Ensure it's above scroll button */
                .scroll-top {
                    z-index: 998 !important;
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }
    
    setupDraggable() {
        const icon = document.getElementById('moviepalIconContainer');
        const wrapper = document.getElementById('moviepalWrapper');
        let isDragging = false;
        let startX, startY, startLeft, startTop;
        
        const onMouseMove = (e) => {
            if (!isDragging) return;
            
            e.preventDefault();
            
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            
            const newLeft = startLeft + dx;
            const newTop = startTop + dy;
            
            const maxX = window.innerWidth - icon.offsetWidth - 20;
            const maxY = window.innerHeight - icon.offsetHeight - 20;
            
            const boundedLeft = Math.max(20, Math.min(newLeft, maxX));
            const boundedTop = Math.max(20, Math.min(newTop, maxY));
            
            wrapper.style.left = boundedLeft + 'px';
            wrapper.style.top = boundedTop + 'px';
            wrapper.style.right = 'auto';
            wrapper.style.bottom = 'auto';
        };
        
        const onMouseUp = () => {
            isDragging = false;
            icon.style.cursor = 'grab';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        
        icon.addEventListener('mousedown', (e) => {
            if (e.target.closest('.moviepal-icon-btn')) {
                isDragging = true;
                icon.style.cursor = 'grabbing';
                
                const rect = wrapper.getBoundingClientRect();
                startX = e.clientX;
                startY = e.clientY;
                startLeft = rect.left;
                startTop = rect.top;
                
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            }
        });
    }
    
    async loadMoviesFromGitHub() {
        try {
            console.log('📡 Fetching movies from GitHub...');
            const response = await fetch('https://raw.githubusercontent.com/Tartilpz/Tartilpz.github.io/main/movies.json');
            
            if (!response.ok) throw new Error('Could not load movies');
            
            const data = await response.json();
            this.moviesData = data.movies;
            console.log(`✅ Loaded ${this.moviesData.length} movies successfully!`);
            
            setTimeout(() => {
                if (this.isOpen) {
                    this.addBotMessage(`By the way, we have <strong>${this.moviesData.length}</strong> awesome movies and series! 🎬`, false);
                }
            }, 2000);
            
        } catch (error) {
            console.log('⚠️ Using fallback data...');
            if (typeof allMovies !== 'undefined' && allMovies.length > 0) {
                this.moviesData = allMovies;
            } else {
                this.moviesData = [];
            }
        }
    }
    
    setupEventListeners() {
        const iconBtn = document.getElementById('moviepalIconBtn');
        const iconContainer = document.getElementById('moviepalIconContainer');
        const closeBtn = document.getElementById('moviepalClose');
        const clearBtn = document.getElementById('moviepalClearChat');
        const sendBtn = document.getElementById('moviepalSend');
        const input = document.getElementById('moviepalInput');
        const chatWindow = document.getElementById('moviepalChatWindow');
        const quickReplies = document.querySelectorAll('.suggestion-btn');
        const emojiBtn = document.getElementById('moviepalEmojiBtn');
        
        // Toggle chat - hide icon when chat opens
        iconBtn.addEventListener('click', (e) => {
            if (!this.isDragging) {
                this.isOpen = true;
                chatWindow.style.display = 'flex';
                iconContainer.style.display = 'none';
                input.focus();
                
                if (this.conversationCount === 0) {
                    setTimeout(() => {
                        this.addBotMessage("I'm so happy you're here! 💫 Feel free to ask me anything about movies!", false);
                    }, 1000);
                }
            }
            this.isDragging = false;
        });
        
        // Close chat - show icon again
        closeBtn.addEventListener('click', () => {
            this.isOpen = false;
            chatWindow.style.display = 'none';
            iconContainer.style.display = 'block';
            console.log('👋 MoviePal says: See you soon!');
        });
        
        clearBtn.addEventListener('click', () => {
            const messagesContainer = document.getElementById('moviepalMessages');
            messagesContainer.innerHTML = `
                <div class="message bot-message">
                    <div class="message-avatar-bot">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content-wrapper">
                        <div class="message-bubble bot-bubble">
                            <div class="message-text">
                                <span class="waving-hand">🔄</span> 
                                <strong>Fresh start!</strong> What can I help you find?
                            </div>
                            <div class="message-time">Just now</div>
                        </div>
                    </div>
                </div>
            `;
            this.conversationCount = 0;
        });
        
        sendBtn.addEventListener('click', () => this.handleUserInput());
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserInput();
        });
        
        emojiBtn.addEventListener('click', () => {
            const emojis = ['😊', '🎬', '🍿', '🎥', '📺', '⭐', '🔥', '💫', '🎯', '👋'];
            input.value += emojis[Math.floor(Math.random() * emojis.length)];
            input.focus();
        });
        
        quickReplies.forEach(reply => {
            reply.addEventListener('click', () => {
                const query = reply.dataset.query;
                this.addUserMessage(query);
                this.processMessage(query);
                input.value = '';
            });
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.isOpen = false;
                chatWindow.style.display = 'none';
                iconContainer.style.display = 'block';
            }
        });
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
                <div class="message-avatar-bot">
                    <i class="fas fa-user"></i>
                </div>
                <div class="message-content-wrapper">
                    <div class="message-bubble user-bubble">
                        <div class="message-text">${this.escapeHtml(message)}</div>
                        <div class="message-time">${time}</div>
                    </div>
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
                    <div class="message-avatar-bot">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content-wrapper">
                        <div class="message-bubble bot-bubble">
                            <div class="typing-indicator">
                                <div class="typing-dot"></div>
                                <div class="typing-dot"></div>
                                <div class="typing-dot"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
            this.scrollToBottom();
            
            setTimeout(() => {
                const typingElement = document.getElementById(typingId);
                if (typingElement) typingElement.remove();
                this.addBotMessageContent(message, time);
            }, 800 + Math.random() * 800);
        } else {
            this.addBotMessageContent(message, time);
        }
    }
    
    addBotMessageContent(message, time) {
        const messagesContainer = document.getElementById('moviepalMessages');
        
        const messageHTML = `
            <div class="message bot-message">
                <div class="message-avatar-bot">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content-wrapper">
                    <div class="message-bubble bot-bubble">
                        <div class="message-text">${message}</div>
                        <div class="message-time">${time}</div>
                    </div>
                </div>
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
        this.scrollToBottom();
    }
    
    processMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        const nameMatch = message.match(/my name is (\w+)|i'm (\w+)|call me (\w+)/i);
        if (nameMatch) {
            this.userName = nameMatch[1] || nameMatch[2] || nameMatch[3];
            this.addBotMessage(`Nice to meet you, <strong>${this.userName}</strong>! 🎉 What kind of movies do you enjoy?`, true);
            return;
        }
        
        if (this.isGreeting(lowerMessage)) {
            const greeting = this.userName ? 
                `Hey <strong>${this.userName}</strong>! 👋 Great to see you again! What can I help you find?` :
                this.getRandomResponse('greetings');
            this.addBotMessage(greeting, true);
            return;
        }
        
        if (this.isFarewell(lowerMessage)) {
            const farewell = this.userName ?
                `Take care, <strong>${this.userName}</strong>! 🎬 Come back soon!` :
                this.getRandomResponse('farewells');
            this.addBotMessage(farewell, true);
            return;
        }
        
        if (this.isHelpRequest(lowerMessage)) {
            this.addBotMessage(this.getRandomResponse('help'), true);
            return;
        }
        
        const smallTalkResponse = this.checkSmallTalk(lowerMessage);
        if (smallTalkResponse) {
            this.addBotMessage(smallTalkResponse, true);
            return;
        }
        
        const results = this.searchMovies(lowerMessage);
        
        if (results.length > 0) {
            const response = results.length === 1 ?
                `Ooh! I found exactly what you're looking for! 🎯 Here it is:` :
                `I found <strong>${results.length}</strong> great options! 🌟 Here are the best matches:`;
            
            this.addBotMessage(response, false);
            
            setTimeout(() => {
                this.addMovieCards(results.slice(0, 3));
                
                if (results.length > 3) {
                    setTimeout(() => {
                        this.addBotMessage(`I found ${results.length - 3} more! Try being more specific? 🎬`, false);
                    }, 800);
                } else {
                    setTimeout(() => {
                        this.addBotMessage(this.getRandomResponse('compliments'), false);
                    }, 1000);
                }
            }, 500);
            
        } else {
            this.addBotMessage(this.getRandomResponse('noResults'), true);
        }
    }
    
    addMovieCards(movies) {
        const messagesContainer = document.getElementById('moviepalMessages');
        const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        let cardsHTML = `
            <div class="message bot-message">
                <div class="message-avatar-bot">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content-wrapper">
                    <div class="message-bubble bot-bubble">
                        <div class="message-text">
        `;
        
        movies.forEach(movie => {
            const emoji = movie.contentType === 'series' ? '📺' : '🎬';
            cardsHTML += `
                <div class="movie-chat-card" onclick="window.movieBot.openMovieById(${movie.id})">
                    <div class="movie-card-emoji">${emoji}</div>
                    <div class="movie-card-info">
                        <div class="movie-card-title">${this.escapeHtml(movie.title)}</div>
                        <div class="movie-card-details">${movie.year} • ${movie.contentType === 'series' && movie.totalEpisodes ? movie.totalEpisodes + ' Ep' : 'Movie'}</div>
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
            </div>
        `;
        
        messagesContainer.insertAdjacentHTML('beforeend', cardsHTML);
        this.scrollToBottom();
    }
    
    searchMovies(query) {
        if (!this.moviesData || this.moviesData.length === 0) return [];
        
        const searchTerms = query.toLowerCase().split(' ');
        const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'];
        
        return this.moviesData.filter(movie => {
            const searchableText = `${movie.title} ${movie.category} ${movie.year} ${movie.contentType}`.toLowerCase();
            
            return searchTerms.some(term => {
                if (term.length < 2 || stopWords.includes(term)) return false;
                
                if (term === 'new' || term === 'latest') return movie.isNew;
                if (term === 'hindi') return movie.category.toLowerCase().includes('hindi');
                if (term === 'bangla' || term === 'bengali') return movie.category.toLowerCase().includes('bangla');
                if (term === 'english') return movie.category.toLowerCase().includes('english');
                if (term === 'dual' || term === 'audio') return movie.category.toLowerCase().includes('dual');
                if (term === 'series' || term === 'show' || term === 'tv') return movie.contentType === 'series';
                if (term === 'movie' || term === 'film') return movie.contentType === 'movie';
                
                return searchableText.includes(term);
            });
        }).sort((a, b) => {
            const aTitle = a.title.toLowerCase().includes(query);
            const bTitle = b.title.toLowerCase().includes(query);
            if (aTitle && !bTitle) return -1;
            if (!aTitle && bTitle) return 1;
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
        const greetings = ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'what\'s up', 'howdy'];
        return greetings.some(g => message.includes(g));
    }
    
    isFarewell(message) {
        const farewells = ['bye', 'goodbye', 'see you', 'farewell', 'thanks', 'thank you', 'bye bye', 'later', 'good night'];
        return farewells.some(f => message.includes(f));
    }
    
    isHelpRequest(message) {
        const helpWords = ['help', 'what can you do', 'how to', 'guide', 'assist', 'support', 'how do i'];
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
                document.getElementById('moviepalChatWindow').style.display = 'none';
                document.getElementById('moviepalIconContainer').style.display = 'block';
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
