# 🌟 Urdu Learning Game for Kids

A simple, colorful, and interactive web-based educational game designed to help children aged 4-8 learn Urdu in a fun and engaging way.

## 🎮 Features

### 📖 Read Mode
- Display Urdu letters and words in large, easy-to-read fonts
- Show pronunciation in English
- Click to hear pronunciation using Web Speech API
- Navigate through letters and words with Previous/Next buttons
- Switch between learning letters and words

### ✏️ Write Mode
- Practice tracing Urdu letters
- Draw on canvas using mouse or touch (mobile-friendly)
- Clear button to start over
- New Letter button to practice different letters

### 🎤 Speak Mode
- Display Urdu words with pronunciation
- Use microphone button to speak the word
- Voice recognition compares your pronunciation
- Get instant feedback: ✅ "Good Job!" or ❌ "Try Again"
- Automatically advances to next word on correct answer

### 🎯 Game Mode
- Multiple-choice quiz format
- Show Urdu letter or word
- Select the correct answer from 4 options
- Track score throughout the game
- Fun animations and feedback
- Results screen at the end

## 🚀 How to Use

1. **Open the Game**
   - Simply open `index.html` in a modern web browser (Chrome, Edge, Firefox, Safari)
   - No installation or server required!

2. **Read Mode**
   - Click the "📖 Read" tab
   - Use Previous/Next buttons to navigate
   - Click the Urdu text or "Play Sound" button to hear pronunciation
   - Switch between "Letters" and "Words" modes

3. **Write Mode**
   - Click the "✏️ Write" tab
   - Use your mouse or finger (on touchscreen) to trace the letter
   - Click "Clear" to erase and try again
   - Click "New Letter" to practice a different letter

4. **Speak Mode**
   - Click the "🎤 Speak" tab
   - Read the Urdu word shown
   - Click the microphone button
   - Speak the word clearly
   - Get feedback on your pronunciation
   - **Note:** Works best in Chrome or Edge browsers

5. **Game Mode**
   - Click the "🎮 Game" tab
   - Answer 5 multiple-choice questions
   - Click on the correct answer
   - See your score at the end
   - Click "Play Again" to start a new game

## 💻 Technical Details

### Tech Stack
- **HTML5** - Structure
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6+)** - All functionality
- **Web Speech API** - Text-to-speech and voice recognition
- **HTML5 Canvas** - Drawing functionality

### Browser Compatibility
- ✅ Chrome (recommended for voice recognition)
- ✅ Edge (recommended for voice recognition)
- ✅ Firefox (voice recognition may have limited support)
- ✅ Safari (voice recognition may have limited support)

### Mobile Support
- Fully responsive design
- Touch-friendly interface
- Large buttons and text
- Works on tablets and smartphones

## 📝 Content

### Urdu Alphabet
The game includes 38 Urdu letters (ا ب پ ت...) with English pronunciations.

### Urdu Words
Currently includes 12 simple words:
- سیب (Seb - Apple)
- کتاب (Kitab - Book)
- گھر (Ghar - Home)
- پانی (Pani - Water)
- دودھ (Doodh - Milk)
- روٹی (Roti - Bread)
- آدمی (Aadmi - Man)
- عورت (Aurat - Woman)
- بچہ (Bacha - Child)
- کھیل (Khel - Game)
- سکول (School - School)
- قلم (Qalam - Pen)

## 🔧 Extending the Game

### Adding More Words
Edit the `urduWords` array in `script.js`:

```javascript
const urduWords = [
    { word: 'سیب', pronunciation: 'Seb', meaning: 'Apple', audio: 'seb' },
    // Add more words here...
    { word: 'نیا_لفظ', pronunciation: 'Pronunciation', meaning: 'Meaning', audio: 'audio-id' }
];
```

### Adding More Letters
Edit the `urduLetters` array in `script.js`:

```javascript
const urduLetters = [
    { letter: 'ا', pronunciation: 'Alif', audio: 'alif' },
    // Add more letters here...
];
```

## 🎨 Design Features

- **Colorful Gradient Background** - Animated, child-friendly colors
- **Large Fonts** - Easy to read for young children
- **Emoji Icons** - Visual feedback and fun elements
- **Smooth Animations** - Bounce, shake, and fade effects
- **Mobile Responsive** - Adapts to different screen sizes
- **Touch-Friendly** - Large buttons and touch targets

## 📋 Requirements

- Modern web browser (Chrome recommended)
- No internet connection required (works offline)
- No backend or database needed
- No login or registration

## 🛡️ Child Safety

- No external links
- No data collection
- No advertisements
- Works completely offline
- Safe and educational content

## 📄 License

This is a simple educational project. Feel free to use, modify, and share!

## 🙏 Credits

Built with ❤️ for children learning Urdu.

---

**Enjoy learning Urdu! 🌟**

