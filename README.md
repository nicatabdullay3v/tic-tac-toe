🎮 React Tic-Tac-Toe Game

Description:
A simple Tic-Tac-Toe game built with React. Players can take turns, view a log of moves, and restart the game after it ends. The game tracks player moves, disables already-selected squares, and announces the winner or a draw.

📝 Features

Interactive game board with clickable squares.

Move log displaying each player's turn and the square they selected.

Game over screen showing the winner or draw.

Rematch button to restart the game.

Built with React functional components and props for modularity.

🛠️ Components

GameBoard

Displays a grid of squares.

Disabled buttons for already-selected squares.

Calls onSelectSquare(row, col) when a square is clicked.

Log

Shows a list of all turns.

Each turn displays the player and the selected square coordinates.

GameOver

Displays the winner or a draw message.

Contains a "rematch" button to restart the game.

📦 Installation
# Clone the repo
git clone https://github.com/yourusername/react-tic-tac-toe.git

# Navigate to project folder
cd react-tic-tac-toe

# Install dependencies
npm install

# Start the development server
npm run dev

🖥️ Usage

Click on empty squares to place your symbol (X or O).

View the move log below the board to track turns.

When the game ends, check who won or if it’s a draw.

Click Rematch to restart the game at any time.

⚡ Tech Stack

React

JavaScript (ES6+)

CSS (optional styling)
