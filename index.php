<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<!-- bootstrap -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

	<link rel="stylesheet" href="./assets/css/style.css">

	<title>Tic Tac Toe</title>
</head>
<body>
		 <div class="container">
            <h1>Let's play TicTacToe</h1>
            <div class="my-2">
                <h3><span class="x-turn">Player 1</span></h3>
                <h3><span class="o-turn d-none">Player 2</span></h3>

                <h3><span class="player-x-win d-none"><strong>Player One Wins</strong></span></h3>
                <h3><span class="player-o-win d-none"><strong>Player Two Wins</strong></span></h3>
                <h3><span class="draw d-none"><strong>It's a tie!</strong></span></h3>
            </div>

            <ul id="game">
                <!-- first row -->
                <li data-pos="0,0"></li>
                <li data-pos="0,1"></li>
                <li data-pos="0,2"></li>
                <!-- second row -->
                <li data-pos="1,0"></li>
                <li data-pos="1,1"></li>
                <li data-pos="1,2"></li>
                <!-- third row -->
                <li data-pos="2,0"></li>
                <li data-pos="2,1"></li> 
                <li data-pos="2,2"></li>
            </ul>
            
            <button id="reset-game">Reset Game</button>
            
        </div>
	
    <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous"></script>

	<!-- bootstrap plug-ins-->
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    

	<!-- js -->
	<script src="./assets/js/script.js"></script>
</body>
</html>
