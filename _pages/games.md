---
layout: default
title: Games
permalink: /games
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mindful Puzzles - Mental Health Support</title>


    <style>
        .title{
          margin-top: 30px;
        }
    </style>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 50px 0 0 0; /* Added top padding to make room for the banner */
            text-align: center;
        }

        header {
            background-color: #3B82F6;
            color: white;
            padding: 20px;
            position: relative;
            z-index: 10;
            margin-top: -50px; /* Adjust this if needed to fine-tune the header positioning */
        }

        .content {
            padding: 30px 15px;
            max-width: 800px;
            margin: auto;
        }

        h2 {
            margin-bottom: 10px;
        }

        .puzzle-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        .puzzle-box {
            display: grid;
            grid-template-columns: repeat(9, 50px);
            grid-template-rows: repeat(9, 50px);
            gap: 5px;
            margin-bottom: 20px;
            justify-content: center;
        }

        .puzzle-box input {
            width: 45px;
            height: 45px;
            text-align: center;
            font-size: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .puzzle-box input:focus {
            outline: none;
            border-color: #3B82F6;
        }

        .btn {
            padding: 10px 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 20px;
        }

        .btn:hover {
            background-color: #45a049;
        }

        .instructions {
            font-size: 16px;
            margin-top: 20px;
        }

        .tic-tac-toe {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-template-rows: repeat(3, 100px);
            gap: 5px;
            justify-content: center;
            margin-top: 30px;
        }

        .tic-tac-toe button {
            width: 95px;
            height: 95px;
            font-size: 32px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
        }

        .tic-tac-toe button:focus {
            outline: none;
        }

        /* Matching Pairs Game Styles */
        .matching-pairs {
            display: grid;
            grid-template-columns: repeat(4, 100px);
            grid-template-rows: repeat(4, 100px);
            gap: 5px;
            justify-content: center;
            margin-top: 30px;
        }

        .matching-pairs button {
            width: 95px;
            height: 95px;
            font-size: 20px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
        }

        .matching-pairs button:focus {
            outline: none;
        }
    </style>
</head>
<body>

<header>
    <h1>Mindful Puzzles - Tic-Tac-Toe & Matching Pairs</h1>
</header>

<div class="content">

    <!-- Tic-Tac-Toe Game -->
    <div class="instructions">
        <h2>Tic-Tac-Toe Game</h2>
        <p>Play Tic-Tac-Toe against an AI.</p>
    </div>

    <div class="tic-tac-toe" id="ticTacToeGrid">
        <button onclick="makeMove(0)" id="cell0"></button>
        <button onclick="makeMove(1)" id="cell1"></button>
        <button onclick="makeMove(2)" id="cell2"></button>
        <button onclick="makeMove(3)" id="cell3"></button>
        <button onclick="makeMove(4)" id="cell4"></button>
        <button onclick="makeMove(5)" id="cell5"></button>
        <button onclick="makeMove(6)" id="cell6"></button>
        <button onclick="makeMove(7)" id="cell7"></button>
        <button onclick="makeMove(8)" id="cell8"></button>
    </div>

    <button class="btn" onclick="resetGame()">Reset Game</button>

    <!-- Matching Pairs Game -->
    <div class="instructions">
        <h2>Matching Pairs Game</h2>
        <p>Try to match the pairs of cards by clicking on them. Remember the positions of the cards!</p>
    </div>

    <div class="matching-pairs" id="matchingPairsGrid">
        <button onclick="flipCard(0)" id="card0"></button>
        <button onclick="flipCard(1)" id="card1"></button>
        <button onclick="flipCard(2)" id="card2"></button>
        <button onclick="flipCard(3)" id="card3"></button>
        <button onclick="flipCard(4)" id="card4"></button>
        <button onclick="flipCard(5)" id="card5"></button>
        <button onclick="flipCard(6)" id="card6"></button>
        <button onclick="flipCard(7)" id="card7"></button>
        <button onclick="flipCard(8)" id="card8"></button>
        <button onclick="flipCard(9)" id="card9"></button>
        <button onclick="flipCard(10)" id="card10"></button>
        <button onclick="flipCard(11)" id="card11"></button>
    </div>

    <button class="btn" onclick="resetMatchingPairs()">Reset Matching Pairs Game</button>

</div>

<script>
    // Tic-Tac-Toe Game
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let winnerDisplayed = false;

    function makeMove(index) {
        if (board[index] === '' && !winnerDisplayed) {
            board[index] = currentPlayer;
            document.getElementById('cell' + index).textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                alert(currentPlayer + ' wins!');
                winnerDisplayed = true;
                return;
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === 'O') {
                aiMove();
            }
        }
    }

    function aiMove() {
        let availableMoves = board
            .map((cell, index) => cell === '' ? index : null)
            .filter(index => index !== null);

        if (availableMoves.length > 0) {
            let move = availableMoves[Math.floor(Math.random() * availableMoves.length)];
            makeMove(move);
        }
    }

    function checkWin(player) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winningCombinations.some(combination => 
            combination.every(index => board[index] === player)
        );
    }

    function resetGame() {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        winnerDisplayed = false;
        for (let i = 0; i < 9; i++) {
            document.getElementById('cell' + i).textContent = '';
        }
    }

    // Matching Pairs Game
    const cardWords = ['apple', 'banana', 'cherry', 'date', 'apple', 'banana', 'cherry', 'date', 'grape', 'grape', 'kiwi', 'kiwi'];
    let flippedCards = [];
    let matchedPairs = 0;

    function shuffleCards() {
        for (let i = cardWords.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardWords[i], cardWords[j]] = [cardWords[j], cardWords[i]]; // Swap
        }
    }

    shuffleCards(); // Randomize card positions each time the page is loaded

    function flipCard(index) {
        const card = document.getElementById('card' + index);
        card.textContent = cardWords[index];
        flippedCards.push({ index, value: cardWords[index] });

        if (flippedCards.length === 2) {
            if (flippedCards[0].value === flippedCards[1].value) {
                matchedPairs++;
                flippedCards = [];
                if (matchedPairs === 6) {
                    alert("You won! All pairs matched.");
                }
            } else {
                setTimeout(() => {
                    document.getElementById('card' + flippedCards[0].index).textContent = '';
                    document.getElementById('card' + flippedCards[1].index).textContent = '';
                    flippedCards = [];
                }, 1000);
            }
        }
    }

    function resetMatchingPairs() {
        flippedCards = [];
        matchedPairs = 0;
        shuffleCards(); // Randomize cards again
        for (let i = 0; i < cardWords.length; i++) {
            document.getElementById('card' + i).textContent = '';
        }
    }
</script>

</body>
</html>
