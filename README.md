# Voice-Controlled Web Assistant

A simple web-based voice assistant that can listen to your commands and perform actions like opening websites or searching Google. Built using JavaScript, Web Speech API, and Speech Synthesis API.

# Features

Voice Commands: Control your browser using your voice.

Open Websites: Quickly open YouTube, Facebook, Instagram, GitHub, etc.

Google Search: Automatically search for any query on Google.

Voice Feedback: Assistant responds with speech to confirm actions.

Interactive Button: Click the button to start listening, shows status while listening.

#Demo

Click the button, say a command like "open YouTube", and watch the assistant respond!

[Live Demo➡️](http://127.0.0.1:5500/ChatBot/index.html)

# How It Works

## 1) Speech Recognition:
Uses webkitSpeechRecognition or SpeechRecognition to listen to your voice.

## 2) Command Handling:
Converts spoken text into commands using handlecommands() function.

### 3) Recognizes commands like:

"open youtube"

"open facebook"

"open instagram"

"open github"

### If command doesn’t match predefined actions, performs a Google search.

## 3) Speech Feedback:
Uses SpeechSynthesisUtterance to respond to the user with voice.

# Screesshort:
<img width="900" height="625" alt="Screenshot 2025-09-18 011223" src="https://github.com/user-attachments/assets/ddf441ad-230a-43b3-884a-733b5af36b22" />
