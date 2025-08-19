# 🎮 React Tic-Tac-Toe Game

A simple **Tic-Tac-Toe game** built with **React**. Players take turns, see a log of moves, and can restart the game. Tracks player moves, disables used squares, and announces the winner or a draw.

---

## ✨ Features

- 🟦 Interactive game board with clickable squares  
- 📜 Move log showing each player's turn and selected square  
- 🏆 Game over screen displaying the winner or a draw  
- 🔄 Rematch button to restart the game  
- ⚛️ Built with React functional components  

---

## 🧩 Components

**GameBoard**  
- 🟩 Displays a grid of squares  
- ❌ Disabled buttons for already-selected squares  
- 👉 Calls `onSelectSquare(row, col)` on click  

**Log**  
- 📝 Shows a list of all turns  
- 🕹️ Displays the player and selected square coordinates  

**GameOver**  
- 🏁 Shows winner or draw  
- 🔁 Includes a "Rematch" button to restart  

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/react-tic-tac-toe.git

# Navigate to project folder
cd react-tic-tac-toe

# Install dependencies
npm install

# Start the app
npm start
