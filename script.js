// ============================================
// Urdu Learning Game - Main JavaScript File
// ============================================

// ============================================
// URDU CONTENT DATA
// ============================================

// Urdu alphabet letters with pronunciation
const urduLetters = [
    { letter: 'ا', pronunciation: 'Alif', audio: 'aleef' },
    { letter: 'ب', pronunciation: 'Bay', audio: 'baay' },
    { letter: 'پ', pronunciation: 'Pay', audio: 'paay' },
    { letter: 'ت', pronunciation: 'Tay', audio: 'tay' },
    { letter: 'ٹ', pronunciation: 'Tay (retroflex)', audio: 'tay-retroflex' },
    { letter: 'ث', pronunciation: 'Say', audio: 'say' },
    { letter: 'ج', pronunciation: 'Jeem', audio: 'jeem' },
    { letter: 'چ', pronunciation: 'Chay', audio: 'chay' },
    { letter: 'ح', pronunciation: 'Hay', audio: 'hay' },
    { letter: 'خ', pronunciation: 'Khay', audio: 'khay' },
    { letter: 'د', pronunciation: 'Dal', audio: 'dal' },
    { letter: 'ڈ', pronunciation: 'Dal (retroflex)', audio: 'dal-retroflex' },
    { letter: 'ذ', pronunciation: 'Zal', audio: 'zal' },
    { letter: 'ر', pronunciation: 'Ray', audio: 'ray' },
    { letter: 'ڑ', pronunciation: 'Ray (retroflex)', audio: 'ray-retroflex' },
    { letter: 'ز', pronunciation: 'Zay', audio: 'zay' },
    { letter: 'ژ', pronunciation: 'Zhay', audio: 'zhay' },
    { letter: 'س', pronunciation: 'Seen', audio: 'seen' },
    { letter: 'ش', pronunciation: 'Sheen', audio: 'sheen' },
    { letter: 'ص', pronunciation: 'Suad', audio: 'suad' },
    { letter: 'ض', pronunciation: 'Zuad', audio: 'zuad' },
    { letter: 'ط', pronunciation: 'Toay', audio: 'toay' },
    { letter: 'ظ', pronunciation: 'Zoay', audio: 'zoay' },
    { letter: 'ع', pronunciation: 'Ain', audio: 'ain' },
    { letter: 'غ', pronunciation: 'Ghayn', audio: 'ghayn' },
    { letter: 'ف', pronunciation: 'Fay', audio: 'fay' },
    { letter: 'ق', pronunciation: 'Qaf', audio: 'qaf' },
    { letter: 'ک', pronunciation: 'Kaf', audio: 'kaf' },
    { letter: 'گ', pronunciation: 'Gaf', audio: 'gaf' },
    { letter: 'ل', pronunciation: 'Lam', audio: 'lam' },
    { letter: 'م', pronunciation: 'Meem', audio: 'meem' },
    { letter: 'ن', pronunciation: 'Noon', audio: 'noon' },
    { letter: 'و', pronunciation: 'Wao', audio: 'wao' },
    { letter: 'ہ', pronunciation: 'Hay (do-chashmi)', audio: 'hay-do-chashmi' },
    { letter: 'ھ', pronunciation: 'Dochashmi Hay', audio: 'dochashmi-hay' },
    { letter: 'ء', pronunciation: 'Hamza', audio: 'hamza' },
    { letter: 'ی', pronunciation: 'Yay', audio: 'yay' },
    { letter: 'ے', pronunciation: 'Yay (barri)', audio: 'yay-barri' }
];

// Simple Urdu words with pronunciation and English meaning
const urduWords = [
    { word: 'سیب', pronunciation: 'Seb', meaning: 'Apple', audio: 'seb' },
    { word: 'کتاب', pronunciation: 'Kitab', meaning: 'Book', audio: 'kitab' },
    { word: 'گھر', pronunciation: 'Ghar', meaning: 'Home', audio: 'ghar' },
    { word: 'پانی', pronunciation: 'Pani', meaning: 'Water', audio: 'pani' },
    { word: 'دودھ', pronunciation: 'Doodh', meaning: 'Milk', audio: 'doodh' },
    { word: 'روٹی', pronunciation: 'Roti', meaning: 'Bread', audio: 'roti' },
    { word: 'آدمی', pronunciation: 'Aadmi', meaning: 'Man', audio: 'aadmi' },
    { word: 'عورت', pronunciation: 'Aurat', meaning: 'Woman', audio: 'aurat' },
    { word: 'بچہ', pronunciation: 'Bacha', meaning: 'Child', audio: 'bacha' },
    { word: 'کھیل', pronunciation: 'Khel', meaning: 'Game', audio: 'khel' },
    { word: 'سکول', pronunciation: 'School', meaning: 'School', audio: 'school' },
    { word: 'قلم', pronunciation: 'Qalam', meaning: 'Pen', audio: 'qalam' }
];

// Urdu sentences for daily life (child-friendly)
const urduSentences = [
    { sentence: 'یہ ایک گیند ہے', meaning: 'This is a ball', urduText: 'یہ ایک گیند ہے' },
    { sentence: 'یہ ایک فٹبال ہے', meaning: 'This is a football', urduText: 'یہ ایک فٹبال ہے' },
    { sentence: 'یہ ایک کتاب ہے', meaning: 'This is a book', urduText: 'یہ ایک کتاب ہے' },
    { sentence: 'علی اسکول جاتا ہے', meaning: 'Ali goes to school', urduText: 'علی اسکول جاتا ہے' },
    { sentence: 'مجھے سیب پسند ہے', meaning: 'I like apples', urduText: 'مجھے سیب پسند ہے' },
    { sentence: 'یہ میرا گھر ہے', meaning: 'This is my home', urduText: 'یہ میرا گھر ہے' },
    { sentence: 'میں پانی پیتا ہوں', meaning: 'I drink water', urduText: 'میں پانی پیتا ہوں' },
    { sentence: 'یہ ایک کرسی ہے', meaning: 'This is a chair', urduText: 'یہ ایک کرسی ہے' },
    { sentence: 'بچے کھیل رہے ہیں', meaning: 'Children are playing', urduText: 'بچے کھیل رہے ہیں' },
    { sentence: 'میں کتاب پڑھتا ہوں', meaning: 'I read a book', urduText: 'میں کتاب پڑھتا ہوں' }
];

// Syllable-based words for reading practice
const syllableWords = [
    { syllables: ['با', 'ل'], word: 'بال', meaning: 'Ball', pronunciation: 'Baal' },
    { syllables: ['کِ', 'تاب'], word: 'کتاب', meaning: 'Book', pronunciation: 'Kitab' },
    { syllables: ['سی', 'ب'], word: 'سیب', meaning: 'Apple', pronunciation: 'Seb' },
    { syllables: ['گُ', 'ل'], word: 'گل', meaning: 'Flower', pronunciation: 'Gul' },
    { syllables: ['ما', 'ما'], word: 'ماما', meaning: 'Mother', pronunciation: 'Mama' },
    { syllables: ['با', 'با'], word: 'بابا', meaning: 'Father', pronunciation: 'Baba' },
    { syllables: ['پا', 'نی'], word: 'پانی', meaning: 'Water', pronunciation: 'Pani' },
    { syllables: ['گھ', 'ر'], word: 'گھر', meaning: 'Home', pronunciation: 'Ghar' },
    { syllables: ['کھ', 'یل'], word: 'کھیل', meaning: 'Game', pronunciation: 'Khel' },
    { syllables: ['ق', 'لم'], word: 'قلم', meaning: 'Pen', pronunciation: 'Qalam' }
];

// ============================================
// GLOBAL VARIABLES
// ============================================

let currentReadIndex = 0;
let currentReadType = 'letters'; // 'letters' or 'words'
let currentWriteIndex = 0;
let currentSpeakIndex = 0;
let currentSentenceIndex = 0;
let currentSyllableIndex = 0;
let gameScore = 0;
let currentQuestion = 0;
let gameQuestions = [];
let isDrawing = false;
let recognition = null;
let urduFemaleVoice = null; // Store the best Urdu female voice

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize tab navigation
    setupTabs();
    
    // Find and store the best Urdu female voice
    findUrduFemaleVoice();
    
    // Initialize Read Mode
    setupReadMode();
    
    // Initialize Alphabet Grid Mode
    setupAlphabetMode();
    
    // Initialize Sentences Mode
    setupSentencesMode();
    
    // Initialize Syllables Mode
    setupSyllablesMode();
    
    // Initialize Write Mode
    setupWriteMode();
    
    // Initialize Speak Mode
    setupSpeakMode();
    
    // Initialize Game Mode
    setupGameMode();
    
    // Check for Web Speech API support
    checkSpeechAPI();
}

// ============================================
// URDU VOICE SELECTION
// ============================================

/**
 * Find and store the best available Urdu female voice
 * This function searches for Urdu voices and prefers female voices
 */
function findUrduFemaleVoice() {
    const findVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        
        if (voices.length === 0) return;
        
        // Priority: ur-PK female > ur-IN female > ur-PK any > ur-IN any > any Urdu
        const urduVoices = voices.filter(voice => 
            voice.lang.includes('ur') || 
            voice.lang.includes('UR') ||
            voice.lang.includes('ur-PK') ||
            voice.lang.includes('ur-IN')
        );
        
        if (urduVoices.length === 0) {
            console.log('No Urdu voices found. Using default voice.');
            return;
        }
        
        // Try to find female voice (check name for common female indicators)
        const femaleKeywords = ['female', 'woman', 'girl', 'ladies', 'feminine'];
        let femaleVoice = urduVoices.find(voice => 
            femaleKeywords.some(keyword => 
                voice.name.toLowerCase().includes(keyword)
            )
        );
        
        // If no explicit female voice, prefer voices with higher pitch (typically female)
        if (!femaleVoice && urduVoices.length > 0) {
            // Use first Urdu voice (browsers often list female voices first)
            femaleVoice = urduVoices[0];
        }
        
        urduFemaleVoice = femaleVoice || urduVoices[0];
        console.log('Selected Urdu voice:', urduFemaleVoice ? urduFemaleVoice.name : 'None');
    };
    
    // Try immediately
    findVoice();
    
    // Try when voices are loaded
    if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = findVoice;
        setTimeout(findVoice, 1000);
    }
}

/**
 * Speak Urdu text with natural, polite female voice
 * @param {string} text - Urdu text to speak
 * @param {object} options - Options for speech (rate, pitch, volume)
 * @returns {Promise} - Promise that resolves when speech starts
 */
function speakUrdu(text, options = {}) {
    return new Promise((resolve, reject) => {
        if (!('speechSynthesis' in window)) {
            console.warn('Speech synthesis not supported');
            reject(new Error('Speech synthesis not supported'));
            return;
        }
        
        // Cancel any ongoing speech
        window.speechSynthesis.cancel();
        
        // Wait for voices to be available
        const speakWithVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            
            if (voices.length === 0) {
                // Voices not loaded yet, wait a bit
                setTimeout(speakWithVoice, 100);
                return;
            }
            
            const utterance = new SpeechSynthesisUtterance(text);
            
            // Use Urdu language
            utterance.lang = urduFemaleVoice ? urduFemaleVoice.lang : 'ur-PK';
            
            // Set voice if available
            if (urduFemaleVoice) {
                utterance.voice = urduFemaleVoice;
            } else {
                // Fallback: try to find any Urdu voice
                const urduVoice = voices.find(voice => 
                    voice.lang.includes('ur') || 
                    voice.lang.includes('UR')
                );
                if (urduVoice) {
                    utterance.voice = urduVoice;
                    utterance.lang = urduVoice.lang;
                }
            }
            
            // Polite, soft settings for children
            utterance.rate = options.rate || 0.75; // Slower for clarity
            utterance.pitch = options.pitch || 1.0; // Medium pitch (natural)
            utterance.volume = options.volume || 0.9; // Calm volume
            
            utterance.onstart = () => {
                resolve();
            };
            
            utterance.onerror = (error) => {
                console.error('Speech synthesis error:', error);
                reject(error);
            };
            
            window.speechSynthesis.speak(utterance);
        };
        
        // Try to speak immediately
        speakWithVoice();
        
        // Also listen for voices loaded event
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = () => {
                if (window.speechSynthesis.speaking === false) {
                    speakWithVoice();
                }
            };
        }
    });
}

// ============================================
// TAB NAVIGATION
// ============================================

function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const modes = document.querySelectorAll('.mode');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetMode = btn.getAttribute('data-mode');
            
            // Remove active class from all tabs and modes
            tabButtons.forEach(b => b.classList.remove('active'));
            modes.forEach(m => m.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding mode
            btn.classList.add('active');
            document.getElementById(`${targetMode}-mode`).classList.add('active');
            
            // Reset game if switching to game mode
            if (targetMode === 'game' && gameQuestions.length === 0) {
                startNewGame();
            }
        });
    });
}

// ============================================
// READ MODE
// ============================================

function setupReadMode() {
    const urduText = document.getElementById('urdu-text');
    const pronunciation = document.getElementById('pronunciation');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const playAudioBtn = document.getElementById('play-audio-btn');
    const typeButtons = document.querySelectorAll('[data-type]');
    
    // Display initial content
    updateReadDisplay();
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        if (currentReadType === 'letters') {
            currentReadIndex = (currentReadIndex - 1 + urduLetters.length) % urduLetters.length;
        } else {
            currentReadIndex = (currentReadIndex - 1 + urduWords.length) % urduWords.length;
        }
        updateReadDisplay();
    });
    
    // Next button
    nextBtn.addEventListener('click', () => {
        if (currentReadType === 'letters') {
            currentReadIndex = (currentReadIndex + 1) % urduLetters.length;
        } else {
            currentReadIndex = (currentReadIndex + 1) % urduWords.length;
        }
        updateReadDisplay();
    });
    
    // Play audio button
    playAudioBtn.addEventListener('click', () => {
        playPronunciation();
    });
    
    // Click on Urdu text to play audio
    urduText.addEventListener('click', () => {
        playPronunciation();
    });
    
    // Type selector buttons (Letters/Words)
    typeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            typeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentReadType = btn.getAttribute('data-type');
            currentReadIndex = 0;
            updateReadDisplay();
        });
    });
}

function updateReadDisplay() {
    const urduText = document.getElementById('urdu-text');
    const pronunciation = document.getElementById('pronunciation');
    
    if (currentReadType === 'letters') {
        const letter = urduLetters[currentReadIndex];
        urduText.textContent = letter.letter;
        pronunciation.textContent = letter.pronunciation;
    } else {
        const word = urduWords[currentReadIndex];
        urduText.textContent = word.word;
        pronunciation.textContent = `${word.pronunciation} (${word.meaning})`;
    }
}

function playPronunciation() {
    // Check if speech synthesis is available
    if (!('speechSynthesis' in window)) {
        alert('آواز دستیاب نہیں ہے، براہ کرم دوبارہ کوشش کریں\nAudio not available, please try again');
        return;
    }
    
    const playBtn = document.getElementById('play-audio-btn');
    const originalText = playBtn.textContent;
    
    // Show loading state
    playBtn.disabled = true;
    playBtn.textContent = '⏳ Loading...';
    
    let textToSpeak = '';
    
    if (currentReadType === 'letters') {
        // For letters, speak the Urdu letter itself with polite encouragement
        const letter = urduLetters[currentReadIndex];
        textToSpeak = `بچے، یہ ${letter.letter} ہے`;
    } else {
        // For words, speak the Urdu word
        const word = urduWords[currentReadIndex];
        textToSpeak = word.word;
    }
    
    // Use Urdu female voice with Promise
    speakUrdu(textToSpeak, { rate: 0.75, pitch: 1.0, volume: 0.9 })
        .then(() => {
            playBtn.disabled = false;
            playBtn.textContent = originalText;
        })
        .catch((error) => {
            console.error('Audio playback error:', error);
            alert('آواز دستیاب نہیں ہے، براہ کرم دوبارہ کوشش کریں\nAudio not available, please try again');
            playBtn.disabled = false;
            playBtn.textContent = originalText;
        });
}

// Load voices when available - ensure it runs on page load
if ('speechSynthesis' in window) {
    // Trigger voice loading
    const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        console.log('Voices loaded:', voices.length);
    };
    
    // Try multiple times to ensure voices are loaded
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    
    // Also try after a delay
    setTimeout(loadVoices, 1000);
}

// ============================================
// ALPHABET GRID MODE
// ============================================

function setupAlphabetMode() {
    const alphabetGrid = document.getElementById('alphabet-grid');
    
    // Create alphabet grid layout
    // Group letters into rows for better display
    const alphabetRows = [
        ['ا', 'ب', 'پ', 'ت', 'ٹ', 'ث', 'ج', 'چ', 'ح', 'خ'],
        ['د', 'ڈ', 'ذ', 'ر', 'ڑ', 'ز', 'ژ', 'س', 'ش'],
        ['ص', 'ض', 'ط', 'ظ', 'ع', 'غ'],
        ['ف', 'ق', 'ک', 'گ', 'ل', 'م'],
        ['ن', 'ں', 'و', 'ہ', 'ء', 'ی', 'ے']
    ];
    
    // Clear grid
    alphabetGrid.innerHTML = '';
    
    // Create buttons for each letter
    alphabetRows.forEach(row => {
        row.forEach(letter => {
            const letterData = urduLetters.find(l => l.letter === letter);
            if (letterData) {
                const btn = document.createElement('button');
                btn.className = 'alphabet-btn';
                btn.textContent = letter;
                btn.setAttribute('data-letter', letter);
                btn.setAttribute('title', letterData.pronunciation);
                
                // Add click event to play pronunciation
                btn.addEventListener('click', () => {
                    // Remove highlight from all buttons
                    document.querySelectorAll('.alphabet-btn').forEach(b => {
                        b.classList.remove('highlighted');
                    });
                    
                    // Highlight clicked button
                    btn.classList.add('highlighted');
                    
                    // Speak the letter with polite Urdu
                    speakUrdu(`بچے، یہ ${letter} ہے`, { rate: 0.75, pitch: 1.0, volume: 0.9 });
                });
                
                alphabetGrid.appendChild(btn);
            }
        });
    });
}

// ============================================
// SENTENCES MODE
// ============================================

function setupSentencesMode() {
    const sentenceUrdu = document.getElementById('sentence-urdu');
    const sentenceMeaning = document.getElementById('sentence-meaning');
    const prevBtn = document.getElementById('sentence-prev-btn');
    const nextBtn = document.getElementById('sentence-next-btn');
    const playBtn = document.getElementById('sentence-play-btn');
    
    // Display initial sentence
    updateSentenceDisplay();
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        currentSentenceIndex = (currentSentenceIndex - 1 + urduSentences.length) % urduSentences.length;
        updateSentenceDisplay();
    });
    
    // Next button
    nextBtn.addEventListener('click', () => {
        currentSentenceIndex = (currentSentenceIndex + 1) % urduSentences.length;
        updateSentenceDisplay();
    });
    
    // Play button
    playBtn.addEventListener('click', () => {
        playSentence();
    });
    
    // Click on sentence to play
    sentenceUrdu.addEventListener('click', () => {
        playSentence();
    });
}

function updateSentenceDisplay() {
    const sentence = urduSentences[currentSentenceIndex];
    document.getElementById('sentence-urdu').textContent = sentence.sentence;
    document.getElementById('sentence-meaning').textContent = sentence.meaning;
}

function playSentence() {
    const sentence = urduSentences[currentSentenceIndex];
    const playBtn = document.getElementById('sentence-play-btn');
    const originalText = playBtn.textContent;
    
    playBtn.disabled = true;
    playBtn.textContent = '⏳ Loading...';
    
    // Speak with polite encouragement
    speakUrdu(`بچے، غور سے سنیں: ${sentence.sentence}`, { rate: 0.7, pitch: 1.0, volume: 0.9 })
        .then(() => {
            playBtn.disabled = false;
            playBtn.textContent = originalText;
        })
        .catch((error) => {
            console.error('Audio playback error:', error);
            alert('آواز دستیاب نہیں ہے، براہ کرم دوبارہ کوشش کریں\nAudio not available, please try again');
            playBtn.disabled = false;
            playBtn.textContent = originalText;
        });
}

// ============================================
// SYLLABLES MODE
// ============================================

function setupSyllablesMode() {
    const syllableParts = document.getElementById('syllable-parts');
    const syllableWord = document.getElementById('syllable-word');
    const syllableMeaning = document.getElementById('syllable-meaning');
    const prevBtn = document.getElementById('syllable-prev-btn');
    const nextBtn = document.getElementById('syllable-next-btn');
    const playBtn = document.getElementById('syllable-play-btn');
    
    // Display initial syllable word
    updateSyllableDisplay();
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        currentSyllableIndex = (currentSyllableIndex - 1 + syllableWords.length) % syllableWords.length;
        updateSyllableDisplay();
    });
    
    // Next button
    nextBtn.addEventListener('click', () => {
        currentSyllableIndex = (currentSyllableIndex + 1) % syllableWords.length;
        updateSyllableDisplay();
    });
    
    // Play button
    playBtn.addEventListener('click', () => {
        playSyllable();
    });
    
    // Click on syllable parts to play
    syllableParts.addEventListener('click', () => {
        playSyllable();
    });
}

function updateSyllableDisplay() {
    const syllableData = syllableWords[currentSyllableIndex];
    // Display syllables with visual spacing
    document.getElementById('syllable-parts').textContent = syllableData.syllables.join(' + ');
    document.getElementById('syllable-word').textContent = syllableData.word;
    document.getElementById('syllable-meaning').textContent = syllableData.meaning;
}

function playSyllable() {
    const syllableData = syllableWords[currentSyllableIndex];
    const playBtn = document.getElementById('syllable-play-btn');
    const originalText = playBtn.textContent;
    
    playBtn.disabled = true;
    playBtn.textContent = '⏳ Loading...';
    
    // First speak each syllable slowly, then the full word
    let delay = 0;
    let promiseChain = Promise.resolve();
    
    // Speak each syllable sequentially
    syllableData.syllables.forEach((syllable) => {
        promiseChain = promiseChain.then(() => {
            return speakUrdu(syllable, { rate: 0.6, pitch: 1.0, volume: 0.9 });
        }).then(() => {
            return new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms between syllables
        });
    });
    
    // Then speak the full word after syllables
    promiseChain = promiseChain.then(() => {
        return speakUrdu(`شاباش! یہ ${syllableData.word} ہے`, { rate: 0.75, pitch: 1.0, volume: 0.9 });
    }).then(() => {
        playBtn.disabled = false;
        playBtn.textContent = originalText;
    }).catch((error) => {
        console.error('Audio playback error:', error);
        alert('آواز دستیاب نہیں ہے، براہ کرم دوبارہ کوشش کریں\nAudio not available, please try again');
        playBtn.disabled = false;
        playBtn.textContent = originalText;
    });
}

// ============================================
// WRITE MODE
// ============================================

function setupWriteMode() {
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    const clearBtn = document.getElementById('clear-btn');
    const newLetterBtn = document.getElementById('new-letter-btn');
    
    // Set canvas drawing properties
    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Display initial letter
    updateWriteDisplay();
    
    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Touch events for mobile
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', stopDrawing);
    
    // Clear button
    clearBtn.addEventListener('click', () => {
        clearCanvas(ctx, canvas);
    });
    
    // New letter button
    newLetterBtn.addEventListener('click', () => {
        currentWriteIndex = (currentWriteIndex + 1) % urduLetters.length;
        updateWriteDisplay();
        clearCanvas(ctx, canvas);
    });
}

function updateWriteDisplay() {
    const targetLetter = document.getElementById('target-letter');
    targetLetter.textContent = urduLetters[currentWriteIndex].letter;
}

function startDrawing(e) {
    isDrawing = true;
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if (!isDrawing) return;
    
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
}

function handleTouchMove(e) {
    e.preventDefault();
    if (!isDrawing) return;
    
    const touch = e.touches[0];
    const canvas = document.getElementById('drawing-canvas');
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ============================================
// SPEAK MODE
// ============================================

function setupSpeakMode() {
    const micBtn = document.getElementById('mic-btn');
    const newWordBtn = document.getElementById('new-word-btn');
    const speakAgainBtn = document.getElementById('speak-again-btn');
    const testAudioBtn = document.getElementById('test-audio-btn');
    const feedback = document.getElementById('speak-feedback');
    
    // Display initial word
    updateSpeakDisplay();
    
    // Test Audio button
    testAudioBtn.addEventListener('click', () => {
        testAudioPlayback();
    });
    
    // Request microphone permission on first interaction
    micBtn.addEventListener('click', () => {
        // Request permission first (this helps with browser permissions)
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then((stream) => {
                    // Permission granted, stop the stream (we don't need it, just needed permission)
                    stream.getTracks().forEach(track => track.stop());
                    // Start recognition
                    startVoiceRecognition();
                })
                .catch((error) => {
                    console.error('Microphone permission error:', error);
                    
                    let errorMsg = '';
                    if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
                        errorMsg = '❌ Microphone permission denied. <br><br>' +
                                  '📋 <strong>How to fix:</strong><br>' +
                                  '1. Click the 🔒 lock icon in your browser\'s address bar<br>' +
                                  '2. Find "Microphone" and set it to "Allow"<br>' +
                                  '3. Refresh this page and try again<br><br>' +
                                  '💡 <strong>Tip:</strong> If using file:///, try opening via http://localhost instead';
                    } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
                        errorMsg = '❌ No microphone found. Please connect a microphone and try again.';
                    } else {
                        errorMsg = '❌ Error accessing microphone: ' + error.message + '. Please check your browser settings.';
                    }
                    
                    feedback.innerHTML = errorMsg;
                    feedback.className = 'feedback error';
                    
                    // Still try to start recognition (some browsers don't need getUserMedia)
                    // But only if it's not a permission error
                    if (error.name !== 'NotAllowedError' && error.name !== 'PermissionDeniedError') {
                        startVoiceRecognition();
                    }
                });
        } else {
            // Fallback for browsers without getUserMedia
            startVoiceRecognition();
        }
    });
    
    // Speak Again button (shown after incorrect attempt)
    speakAgainBtn.addEventListener('click', () => {
        speakAgainBtn.style.display = 'none';
        startVoiceRecognition();
    });
    
    // New word button
    newWordBtn.addEventListener('click', () => {
        currentSpeakIndex = (currentSpeakIndex + 1) % urduWords.length;
        updateSpeakDisplay();
        clearFeedback();
        speakAgainBtn.style.display = 'none';
    });
}

/**
 * Test audio playback to verify voices are working
 */
function testAudioPlayback() {
    const feedback = document.getElementById('speak-feedback');
    const testBtn = document.getElementById('test-audio-btn');
    
    feedback.innerHTML = '🔊 Testing audio...';
    feedback.className = 'feedback';
    testBtn.disabled = true;
    
    speakUrdu('بچے، غور سے سنیں', { rate: 0.75, pitch: 1.0, volume: 0.9 })
        .then(() => {
            feedback.innerHTML = '✅ آواز کام کر رہی ہے! Audio is working! 🎉';
            feedback.className = 'feedback success';
            testBtn.disabled = false;
        })
        .catch((error) => {
            feedback.innerHTML = '❌ آواز دستیاب نہیں ہے، براہ کرم دوبارہ کوشش کریں<br>Audio not available, please try again';
            feedback.className = 'feedback error';
            testBtn.disabled = false;
            console.error('Audio test failed:', error);
        });
}

function updateSpeakDisplay() {
    const wordToSpeak = document.getElementById('word-to-speak');
    const wordPronunciation = document.getElementById('word-pronunciation');
    const word = urduWords[currentSpeakIndex];
    
    wordToSpeak.textContent = word.word;
    wordPronunciation.textContent = `${word.pronunciation} (${word.meaning})`;
}

function checkSpeechAPI() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        const feedback = document.getElementById('speak-feedback');
        feedback.innerHTML = '⚠️ Voice recognition not supported in your browser. Please use Chrome or Edge.';
        feedback.className = 'feedback error';
    }
}

/**
 * Normalize text for comparison (remove extra spaces, lowercase)
 */
function normalizeText(text) {
    return text.trim().toLowerCase().replace(/\s+/g, ' ');
}

/**
 * Check if spoken text matches expected (with flexible matching)
 */
function checkMatch(spokenText, expectedPronunciation, expectedWord) {
    const spoken = normalizeText(spokenText);
    const expectedPron = normalizeText(expectedPronunciation);
    const expectedWordLower = normalizeText(expectedWord);
    
    // Exact match
    if (spoken === expectedPron || spoken === expectedWordLower) {
        return true;
    }
    
    // Contains match
    if (spoken.includes(expectedPron) || expectedPron.includes(spoken)) {
        return true;
    }
    
    // Word-by-word match (for multi-word pronunciations)
    const spokenWords = spoken.split(' ');
    const expectedWords = expectedPron.split(' ');
    
    // Check if all expected words are present in spoken text
    let matchedWords = 0;
    for (const expectedWord of expectedWords) {
        for (const spokenWord of spokenWords) {
            if (spokenWord === expectedWord || 
                spokenWord.includes(expectedWord) || 
                expectedWord.includes(spokenWord)) {
                matchedWords++;
                break;
            }
        }
    }
    
    // If most words match (at least 70%), consider it correct
    return matchedWords >= Math.ceil(expectedWords.length * 0.7);
}

function startVoiceRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert('Voice recognition is not supported in your browser. Please use Chrome or Edge.');
        return;
    }
    
    // Stop any existing recognition
    if (recognition) {
        recognition.stop();
    }
    
    recognition = new SpeechRecognition();
    
    // Use English for better recognition (since pronunciation is in English)
    // This works better than Urdu recognition which has limited support
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 3; // Get multiple possible matches
    
    const micBtn = document.getElementById('mic-btn');
    const micText = micBtn.querySelector('.mic-text');
    const feedback = document.getElementById('speak-feedback');
    const speakAgainBtn = document.getElementById('speak-again-btn');
    
    micText.textContent = 'Listening...';
    micBtn.disabled = true;
    speakAgainBtn.style.display = 'none';
    feedback.innerHTML = '🎤 Listening... Speak clearly!';
    feedback.className = 'feedback';
    
    recognition.onstart = () => {
        console.log('Voice recognition started');
        feedback.innerHTML = '🎤 Listening... Speak clearly!';
        feedback.className = 'feedback';
    };
    
    recognition.onresult = (event) => {
        // Show checking state
        feedback.innerHTML = '🔍 Checking...';
        feedback.className = 'feedback';
        
        // Small delay before checking (makes it feel more natural)
        setTimeout(() => {
            // Get the best result and alternatives
            const result = event.results[0];
            const spokenText = result[0].transcript.trim();
            const alternatives = [];
            
            // Collect all alternatives
            for (let i = 0; i < result.length; i++) {
                alternatives.push(result[i].transcript.trim());
            }
            
            const expectedWord = urduWords[currentSpeakIndex].word;
            const expectedPronunciation = urduWords[currentSpeakIndex].pronunciation;
            
            // Check all alternatives for a match
            let isMatch = false;
            for (const alt of alternatives) {
                if (checkMatch(alt, expectedPronunciation, expectedWord)) {
                    isMatch = true;
                    break;
                }
            }
            
            // Show feedback based on result
            showSpeakFeedback(isMatch, spokenText);
            
            micText.textContent = 'Click to Speak';
            micBtn.disabled = false;
        }, 500); // 500ms delay before feedback
    };
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        
        let errorMsg = '❌ Error: ';
        if (event.error === 'no-speech') {
            errorMsg = '❌ No speech detected. Please try again and speak clearly.';
        } else if (event.error === 'audio-capture') {
            errorMsg = '❌ No microphone found. Please check your microphone.';
        } else if (event.error === 'not-allowed') {
            errorMsg = '❌ Microphone permission denied. Please allow microphone access.';
        } else {
            errorMsg += event.error + '. Please try again.';
        }
        
        feedback.innerHTML = errorMsg;
        feedback.className = 'feedback error';
        
        micText.textContent = 'Click to Speak';
        micBtn.disabled = false;
        speakAgainBtn.style.display = 'none';
    };
    
    recognition.onend = () => {
        // Don't reset button here - let the result handler do it
    };
    
    try {
        recognition.start();
    } catch (error) {
        console.error('Error starting recognition:', error);
        feedback.innerHTML = '❌ Could not start voice recognition. Please try again.';
        feedback.className = 'feedback error';
        micText.textContent = 'Click to Speak';
        micBtn.disabled = false;
        speakAgainBtn.style.display = 'none';
    }
}

function showSpeakFeedback(isCorrect, spokenText = '') {
    const feedback = document.getElementById('speak-feedback');
    const speakAgainBtn = document.getElementById('speak-again-btn');
    const micBtn = document.getElementById('mic-btn');
    
    if (isCorrect) {
        // ✅ CORRECT - Celebrate and move to next word
        feedback.innerHTML = '✅ شاباش! بہت اچھا! 👏';
        feedback.className = 'feedback success';
        
        // Speak Urdu encouragement
        speakUrdu('شاباش! بہت اچھا!', { rate: 0.75, pitch: 1.0, volume: 0.9 });
        
        // Hide speak again button
        speakAgainBtn.style.display = 'none';
        
        // Auto-advance after 2.5 seconds (gives time to hear celebration)
        setTimeout(() => {
            currentSpeakIndex = (currentSpeakIndex + 1) % urduWords.length;
            updateSpeakDisplay();
            clearFeedback();
        }, 2500);
    } else {
        // ❌ INCORRECT - Show encouraging message, play correct pronunciation, wait for button
        const word = urduWords[currentSpeakIndex];
        
        // Step 1: Show encouraging message
        feedback.innerHTML = '😊 کوئی بات نہیں! دوبارہ سنیں اور پھر کوشش کریں';
        feedback.className = 'feedback error';
        
        // Step 2: Play correct pronunciation first (teach before asking to repeat)
        setTimeout(() => {
            speakUrdu(`یہ ${word.word} ہے`, { rate: 0.75, pitch: 1.0, volume: 0.9 })
                .then(() => {
                    // After pronunciation plays, show speak again button
                    setTimeout(() => {
                        feedback.innerHTML = '😊 دوبارہ کوشش کریں! آپ کر سکتے ہیں! 💪';
                        speakAgainBtn.style.display = 'inline-block';
                    }, 500);
                })
                .catch(() => {
                    // If audio fails, still show button
                    feedback.innerHTML = '😊 دوبارہ کوشش کریں! آپ کر سکتے ہیں! 💪';
                    speakAgainBtn.style.display = 'inline-block';
                });
        }, 800);
        
        // Keep microphone button disabled until they press "Speak Again"
        micBtn.disabled = true;
    }
}

function clearFeedback() {
    const feedback = document.getElementById('speak-feedback');
    feedback.innerHTML = '';
    feedback.className = 'feedback';
}

// ============================================
// GAME MODE
// ============================================

function setupGameMode() {
    const restartBtn = document.getElementById('restart-game-btn');
    
    restartBtn.addEventListener('click', () => {
        startNewGame();
    });
    
    // Start initial game
    startNewGame();
}

function startNewGame() {
    gameScore = 0;
    currentQuestion = 0;
    gameQuestions = [];
    
    // Generate 5 random questions
    const availableWords = [...urduWords];
    for (let i = 0; i < 5 && availableWords.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * availableWords.length);
        const word = availableWords.splice(randomIndex, 1)[0];
        
        // Generate 3 wrong options
        const wrongOptions = [];
        const remainingWords = urduWords.filter(w => w.word !== word.word);
        for (let j = 0; j < 3 && remainingWords.length > 0; j++) {
            const wrongIndex = Math.floor(Math.random() * remainingWords.length);
            wrongOptions.push(remainingWords.splice(wrongIndex, 1)[0].word);
        }
        
        // Create question with 4 options (1 correct + 3 wrong)
        const options = [word.word, ...wrongOptions];
        // Shuffle options
        for (let k = options.length - 1; k > 0; k--) {
            const j = Math.floor(Math.random() * (k + 1));
            [options[k], options[j]] = [options[j], options[k]];
        }
        
        gameQuestions.push({
            word: word.word,
            pronunciation: word.pronunciation,
            options: options
        });
    }
    
    displayQuestion();
    updateScore();
}

function displayQuestion() {
    if (currentQuestion >= gameQuestions.length) {
        showGameResults();
        return;
    }
    
    const question = gameQuestions[currentQuestion];
    const questionDisplay = document.getElementById('question-display');
    const questionNum = document.getElementById('question-num');
    const totalQuestions = document.getElementById('total-questions');
    const optionsContainer = document.getElementById('options-container');
    const gameFeedback = document.getElementById('game-feedback');
    
    questionDisplay.textContent = question.word;
    questionNum.textContent = currentQuestion + 1;
    totalQuestions.textContent = gameQuestions.length;
    gameFeedback.innerHTML = '';
    gameFeedback.className = 'game-feedback';
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkAnswer(option === question.word, btn, question.options));
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(isCorrect, clickedBtn, allOptions) {
    const options = document.querySelectorAll('.option-btn');
    const gameFeedback = document.getElementById('game-feedback');
    
    // Disable all buttons
    options.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    });
    
    if (isCorrect) {
        clickedBtn.classList.add('correct');
        gameScore++;
        gameFeedback.innerHTML = '✅ Correct! Great job! 🎉';
        gameFeedback.className = 'game-feedback success';
        updateScore();
    } else {
        clickedBtn.classList.add('wrong');
        // Highlight correct answer
        options.forEach(btn => {
            if (btn.textContent === gameQuestions[currentQuestion].word) {
                btn.classList.add('correct');
            }
        });
        gameFeedback.innerHTML = '❌ Wrong! Try again next time! 💪';
        gameFeedback.className = 'game-feedback error';
    }
    
    // Move to next question after 2 seconds
    setTimeout(() => {
        currentQuestion++;
        displayQuestion();
    }, 2000);
}

function updateScore() {
    document.getElementById('score').textContent = gameScore;
}

function showGameResults() {
    const questionDisplay = document.getElementById('question-display');
    const optionsContainer = document.getElementById('options-container');
    const gameFeedback = document.getElementById('game-feedback');
    const questionNum = document.getElementById('question-num');
    
    questionDisplay.textContent = '🎊';
    questionNum.textContent = gameQuestions.length;
    optionsContainer.innerHTML = '';
    
    const percentage = Math.round((gameScore / gameQuestions.length) * 100);
    let message = '';
    
    if (percentage === 100) {
        message = `🎉 Perfect Score! ${gameScore}/${gameQuestions.length} - You're amazing! 🌟`;
    } else if (percentage >= 80) {
        message = `🎊 Excellent! ${gameScore}/${gameQuestions.length} - Great work! 👏`;
    } else if (percentage >= 60) {
        message = `👍 Good Job! ${gameScore}/${gameQuestions.length} - Keep practicing! 💪`;
    } else {
        message = `💪 Nice Try! ${gameScore}/${gameQuestions.length} - Practice makes perfect! 🌟`;
    }
    
    gameFeedback.innerHTML = message;
    gameFeedback.className = 'game-feedback success';
}

