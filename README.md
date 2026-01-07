# 🎲 Pig Game

A simple, interactive two-player dice game built to master DOM manipulation and game logic flow in JavaScript.

## 📸 Preview
<img width="1918" height="871" alt="image" src="https://github.com/user-attachments/assets/94a3ec86-6f4b-4cc5-b370-c4c5de6f4a30" />

## 🚀 Live Demo
[View Live Site](https://omar14352465.github.io/YOUR-REPO-NAME/)

## 🕹️ Game Rules
1. **Roll the Dice**: Players take turns rolling a single die.
2. **Don't Roll a 1**:
   - If you roll a **2 - 6**: The number is added to your *current* round score.
   - If you roll a **1**: You lose all your current points, and your turn ends immediately!
3. **Hold**: If you are happy with your current points, click **Hold** to lock them into your *total* score. It then becomes the other player's turn.
4. **Win**: The first player to reach **100 points** wins the game.

## 🛠️ Built With
- **HTML5**: Game structure and layout.
- **CSS3**: Styling, including the "Active Player" visual effects.
- **JavaScript (ES6+)**: Game logic, state management, and DOM updates.

## 🌟 Key Features
- **Visual Feedback**: The background color changes to indicate whose turn it is.
- **Dice Visualization**: The dice image updates dynamically based on the random roll.
- **Winner State**: Special dark theme styles are applied when a player wins.
- **New Game**: A reset button to clear all scores and start over without reloading the page.

## 🧠 What I Learned
- **DOM Manipulation**: efficiently selecting elements (`getElementById` vs `querySelector`) and changing images (`src` attribute).
- **Class Manipulation**: Using `.classList.toggle()` to switch the visual `active` class between players.
- **State Management**: Using variables to track the internal state of the game (`scores`, `currentScore`, `activePlayer`, `playing`).
- **Game Logic**: Implementing "Fail Fast" conditions (rolling a 1) and "Win" conditions (score >= 100).

---
*This project is part of The Complete JavaScript Course by Jonas Schmedtmann.*
