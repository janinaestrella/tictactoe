(function Game() {
	// call elements
	let game = $('#game')
	let boxes = document.querySelectorAll('li');
	let resetGame = $('#reset-game');
    let xTurn = $('.x-turn');
    let oTurn = $('.o-turn');
    let xWin = $('.player-x-win');
    let oWin = $('.player-o-win');
    let draw = $('.draw');

	//declare variables
	let context = {
		'player1' : 'x',
		'player2' : 'o'
	}

	let board = [];
	let turns;
	let currentContext;

	let init = function() {
		turns = 0;
		
		//to determine who's turn is it
		currentContext = computeContext();

		//build 3x3 board
		board[0] = new Array(3);
		board[1] = new Array(3);
		board[2] = new Array(3);
		
		for(i=0; i < boxes.length; i++) {

			boxes[i].addEventListener('click', clickHandler, false);
		}

		resetGame.on('click', resetGameHandler);
	}


	//turn counter
	let computeContext = function() {
		return (turns % 2 == 0) ? context.player1 : context.player2;
	}

    let clickHandler = function() { 
        this.removeEventListener('click', clickHandler);    
            
        this.className = currentContext;    
        this.innerHTML = currentContext;    
            
        let pos = this.getAttribute('data-pos').split(','); 

        board[pos[0]][pos[1]] = computeContext() == 'x' ? 1 : 0;    
            
            
        turns++;    
        currentContext = computeContext();  

        if (currentContext == 'o'){
            oTurn.removeClass('d-none');
            xTurn.addClass('d-none');
        } else {
            xTurn.removeClass('d-none');
            oTurn.addClass('d-none');
        }

        if(checkStatus()) { 
            gameWon();  
        } 
    }	

    // check if player won
    let checkStatus = function() {
        let used_boxes = 0;

        for( rows = 0; rows < board.length; rows++){
            let row_total = 0;
            let col_total = 0;

            for ( cols = 0; cols < board[rows].length; cols++){
                row_total += board[rows][cols];
                col_total += board[cols][rows];

                // console.log(row_total);
                // console.log(col_total);

                if(typeof board[rows][cols] !== "undefined"){
                    used_boxes++;
                }
            }

            //winning combos
            // [0,1,2]
            // [3,4,5]
            // [6,7,8]
            // [0,3,6]
            // [1,4,7]
            // [2,5,8]
            // [0,4,8]
            // [2,4,6]


            //if total is 0 or 3, play wins. 
            //X = 1pt 
            //O = 0pt
            if(row_total == 0 || col_total == 0 || row_total == 3 || col_total == 3){
                return true;
            }

            let diagonal1 = board[0][0] + board[1][1] + board [2][2];
            let diagonal2 = board[0][2] + board[1][1] + board [2][0];

            if(diagonal1 == 0 || diagonal2 == 0 || diagonal1 == 3 || diagonal2 == 3){
                return true;
            }

            // if all boxes are full, it is a tie
            if(used_boxes == 9) {
                gameDraw();
            }
        }
    }

    let gameWon = function(){
        //call function to stop clicking empty cells
        clearEvents();

        winner = computeContext();

        if (winner != 'x'){
            oTurn.addClass('d-none');
            xWin.removeClass('d-none');
        } else if (winner != 'o'){
            xTurn.addClass('d-none');
            oWin.removeClass('d-none');
        } 
           
    }

    let gameDraw = function(){
        draw.removeClass('d-none');
        xTurn.addClass('d-none');
        oTurn.addClass('d-none');
        clearEvents();
    }

    let clearEvents = function(){
        for( i=0; i < boxes.length; i++){
            boxes[i].removeEventListener('click', clickHandler);
        }  
    }

    //reset button
    let resetGameHandler = function(){
        console.log('reset')
        clearEvents();
        init();
        
        //clear boxes
        for( i=0; i < boxes.length; i++){
            boxes[i].className = '';
            boxes[i].innerHTML = ''
        }

        //default first player is X
        xTurn.removeClass('d-none');
        oTurn.addClass('d-none');
        xWin.addClass('d-none');
        oWin.addClass('d-none');
        draw.addClass('d-none');
    }

	game && init();

})

();