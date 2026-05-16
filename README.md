# Pomodoro Timer App

A clean and simple Pomodoro Timer built with React Native and Expo. This app is designed to help students stay focused by alternating between study sprints and short breaks.

## 🚀 Features
- **Focus Timer:** 25 minutes (set to **5 minutes** for testing).
- **Break Timer:** 5 minutes (set to **1 minute** for testing).
- **Automatic Switching:** Automatically flips between Focus and Break modes when the time is up.
- **Controls:** Start, Pause, and Reset functionality.
- **Visual Feedback:** Background colors change dynamically (Red for Focus, Green for Break).
- **Notifications:** Alerts you when the timer finishes.

## 🛠️ Tech Stack
- **Framework:** [Expo](https://expo.dev/) (React Native)
- **Libraries:**
  - `expo-notifications`: For local timer alerts.
  - `react-native`: For the UI components.

## 📥 Installation & Setup

Follow these steps to get the project running locally:

### 1. Prerequisites
Ensure you have **Node.js** installed on your computer.

### 2. Clone the Repository
```bash
git clone https://github.com/ranehal/q2.git
cd q2/pomodoro-app
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Install Expo Go (Optional but Recommended)
To run the app on your phone, download the **Expo Go** app from the App Store (iOS) or Google Play Store (Android).

## 🏃 Running the App

### Start the Development Server
```bash
npx expo start
```

### How to View the App:
- **On Mobile:** Scan the QR code displayed in your terminal using the Expo Go app.
- **On Desktop:** Press `w` in the terminal to open the web version (Note: Some mobile-specific features like Notifications work best on real devices).
- **On Emulator:** Press `a` for Android Emulator or `i` for iOS Simulator.

## 🧪 Testing the Logic
- Click **Start** to begin the 5-minute Focus countdown.
- Once it hits `00:00`, a popup will appear, and it will automatically switch to the 1-minute Break timer.
- Use **Reset** at any time to return to the start of the current session.

---
*Created as part of a student coding exercise.*
