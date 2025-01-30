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
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        header {
            background-color: #3B82F6;
            color: white;
            padding: 20px;
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

        .word-search-container {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(5, 50px);
            gap: 5px;
            justify-content: center;
        }

        .word-search-container input {
            width: 45px;
            height: 45px;
            text-align: center;
            font-size: 18px;
        }

        .crossword-container {
            margin-top: 20px;
            display: grid;
            grid-template-columns: repeat(5, 50px);
            gap: 5px;
            justify-content: center;
        }

        .crossword-container input {
            width: 45px;
            height: 45px;
            text-align: center;
            font-size: 18px;
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
    </style>
</head>
<body>

<header>
    <h1>Mindful Puzzles - Sudoku, Crossword, Word Search, Tic-Tac-Toe</h1>
</header>

<div class="content">

    <!-- Sudoku Puzzle Section -->
    <div class="instructions">
        <h2>Sudoku Puzzle</h2>
        <p>Fill in the grid so that each column, each row, and each of the 3x3 subgrids contains all of the digits from 1 to 9. Enjoy!</p>
    </div>

    <div class="puzzle-container">
        <div class="puzzle-box">
            <input type="text" maxlength="1" id="cell-1" oninput="this.value=this.value.replace(/[^1-9]/,'')">
            <input type="text" maxlength="1" id="cell-2" oninput="this.value=this.value.replace(/[^1-9]/,'')">
            <input type="text" maxlength="1" id="cell-3" oninput="this.value=this.value.replace(/[^1-9]/,'')">
            <input type="text" maxlength="1" id="cell-4" oninput="this.value=this.value.replace(/[^1-9]/,'')">
            <input type="text" maxlength="1" id="cell-5" oninput="this.value=this.value.replace(/[^1-9]/,'')">
            <input type="text" maxlength="1" id="cell-6" oninput="this.value=this.value.replace(/[^1-9]/,'')">
            <input type="text" maxlength="1" id="cell-7" oninput="this.value=this.value.replace(/[^1-9]/,'')">
            <input type="text" maxlength="1" id="cell-8" oninput="this.value=this.value.replace(/[^1-9]/,'')">
            <input type="text" maxlength="1" id="cell-9" oninput="this.value=this.value.replace(/[^1-9]/,'')">
        </div>
    </div>

    <button class="btn" onclick="checkSudokuSolution()">Check Sudoku Solution</button>

    <!-- Word Search Puzzle Section -->
    <div class="instructions">
        <h2>Word Search Puzzle</h2>
        <p>Find the words in the grid below:</p>
    </div>

    <div class="word-search-container">
        <input type="text" maxlength="1" id="word-search-1">
        <input type="text" maxlength="1" id="word-search-2">
        <input type="text" maxlength="1" id="word-search-3">
        <input type="text" maxlength="1" id="word-search-4">
        <input type="text" maxlength="1" id="word-search-5">
    </div>

    <button class="btn" onclick="checkWordSearch()">Check Word Search</button>

    <!-- Crossword Puzzle Section -->
    <div class="instructions">
        <h2>Crossword Puzzle</h2>
        <p>Complete the crossword puzzle below:</p>
    </div>

    <div class="crossword-container">
        <input type="text" maxlength="1" id="crossword-1">
        <input type="text" maxlength="1" id="crossword-2">
        <input type="text" maxlength="1" id="crossword-3">
        <input type="text" maxlength="1" id="crossword-4">
        <input type="text" maxlength="1" id="crossword-5">
    </div>

    <button class="btn" onclick="checkCrossword()">Check Crossword Solution</button>

    <!-- Tic-Tac-Toe Game -->
    <div class="instructions">
        <h2>Tic-Tac-Toe Game</h2>
        <p>Play Tic-Tac-Toe against an easy AI. The AI will make non-optimal moves to increase your chances of winning.</p>
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
</div>

<script>
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';

    function makeMove(index) {
        if (board[index] === '') {
            board[index] = currentPlayer;
            document.getElementById('cell' + index).textContent = currentPlayer;
            if (checkWin(currentPlayer)) {
                alert(currentPlayer + ' wins!');
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
        for (let i = 0; i < 9; i++) {
            document.getElementById('cell' + i).textContent = '';
        }
    }

    // Sudoku solution checker (example)
    function checkSudokuSolution() {
        const solution = [
            5, 3, 4, 6, 7, 8, 9, 1, 2,
            6, 7, 2, 1, 9, 5, 3, 4, 8,
            1, 9, 8, 3, 4, 2, 5, 6, 7,
            8, 5, 9, 7, 6, 1, 4, 2, 3,
            4, 2, 6, 8, 5, 3, 7, 9, 1,
            7, 1, 3, 9, 2, 4, 8, 5, 6,
            9, 6, 1, 5, 3, 7, 2, 8, 4,
            2, 8, 7, 4, 1, 9, 6, 3, 5,
            3, 4, 5, 2, 8, 6, 1, 7, 9
        ];

        let inputValues = [];
        for (let i = 1; i <= 81; i++) {
            let cellValue = document.getElementById(`cell-${i}`).value;
            inputValues.push(cellValue ? parseInt(cellValue) : null);
        }

        let isCorrect = solution.every((val, index) => val === inputValues[index]);
        alert(isCorrect ? "Congratulations! You solved the Sudoku puzzle!" : "Incorrect solution, try again.");
    }

    // Example Word Search solution checker
    function checkWordSearch() {
        const correctAnswer = ["W", "O", "R", "D"];
        let inputValues = [];
        for (let i = 1; i <= 4; i++) {
            inputValues.push(document.getElementById(`word-search-${i}`).value.toUpperCase());
        }

        let isCorrect = correctAnswer.every((val, index) => val === inputValues[index]);
        alert(isCorrect ? "You found the word!" : "Try again, words are incorrect.");
    }

    // Example Crossword solution checker
    function checkCrossword() {
        const correctAnswer = ["C", "R", "O", "S", "S"];
        let inputValues = [];
        for (let i = 1; i <= 5; i++) {
            inputValues.push(document.getElementById(`crossword-${i}`).value.toUpperCase());
        }

        let isCorrect = correctAnswer.every((val, index) => val === inputValues[index]);
        alert(isCorrect ? "Crossword solved!" : "Incorrect crossword solution.");
    }
</script>

</body>
</html>
