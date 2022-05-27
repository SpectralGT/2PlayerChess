<script lang="ts">
	import Board from "./board.svelte";
	import FallenPiecesBlock from "./fallenPiecesBlock.svelte";
	import initialiseChessBoard from "../helpers/boardInitilizer";

	var squares = initialiseChessBoard();
	var whiteFallenSoldiers = [];
	var blackFallenSoldiers = [];
	var player = 1;
	var sourceSelection = -1;
	var status = "";
	var turn = "white";

	function handleClick(i) {
		const squaresSlice = squares.slice();

		if (sourceSelection === -1) {
			if (!squaresSlice[i] || squaresSlice[i].player !== player) {
				status ="Wrong selection. Choose player " + player + " pieces.";
			} else {
				squares[i].isSelected = true;
				window.updateSquares();
				console.log(squares[i].isSelected);
				status = "Choose destination for the selected piece";
				sourceSelection = i;
			}

		} else if (sourceSelection > -1) {
			squares[sourceSelection].isSelected = false;
			window.updateSquares();
			console.log(squares[sourceSelection].isSelected);

			if (squares[i] && squares[i].player === player) {
				status =
					"Wrong selection. Choose valid source and destination again.";
				sourceSelection = -1;
			} else {
				const squaresSlice = squares.slice();
				const whiteFallenSoldiersSlice = whiteFallenSoldiers.slice();
				const blackFallenSoldiersSlice = blackFallenSoldiers.slice();
				const isDestEnemyOccupied = squaresSlice[i] ? true : false;
				const isMovePossible = squaresSlice[
					sourceSelection
				].isMovePossible(sourceSelection, i, isDestEnemyOccupied);
				const srcToDestPath = squaresSlice[
					sourceSelection
				].getSrcToDestPath(sourceSelection, i);
				const isMoveLegalBool = isMoveLegal(srcToDestPath);

				if (isMovePossible && isMoveLegalBool) {
					if (squaresSlice[i] !== null) {
						if (squaresSlice[i].player === 1) {
							whiteFallenSoldiersSlice.push(squaresSlice[i]);
						} else {
							blackFallenSoldiersSlice.push(squaresSlice[i]);
						}
					}
					console.log("whiteFallenSoldiers", whiteFallenSoldiersSlice);
					console.log("blackFallenSoldiers", blackFallenSoldiersSlice);
					squaresSlice[i] = squaresSlice[sourceSelection];
					squaresSlice[sourceSelection] = null;
					let otherPlayer = player === 1 ? 2 : 1;

					let nextTurn = turn === "white" ? "black" : "white";
					sourceSelection = -1;
					squares = squaresSlice;
					whiteFallenSoldiers = whiteFallenSoldiersSlice;
					blackFallenSoldiers = blackFallenSoldiersSlice;
					player = otherPlayer;
					status: "";
					turn = nextTurn;
				} else {
					status =
						"Wrong selection. Choose valid source and destination again.";
					sourceSelection = -1;
				}
			}
		}
	}

	// Check all path indices are null. For one steps move of pawn/others or jumping moves of knight array is empty, so  move is legal.
	// @param  {[type]}  srcToDestPath [array of board indices comprising path between src and dest ]
	// @return {Boolean}

	function isMoveLegal(srcToDestPath:Array<number>):boolean {
		let isLegal = true;
		for (let i = 0; i < srcToDestPath.length; i++) {
			if (squares[srcToDestPath[i]] !== null) {
				isLegal = false;
			}
		}
		return isLegal;
	}
</script>

<div>
    <div class="game">
      <div class="game-board">
        <Board 
        squares = {squares}
        onClick = {handleClick}
        />
      </div>
      <div class="game-info">
        <h3>Turn</h3>
        <div id="player-turn-box" style=backgroundColor:${turn}>

        </div>
        <div class="game-status">{status}</div>

        <div class="fallen-soldier-block">
          
          <FallenPiecesBlock
          whiteFallenSoldier = {whiteFallenSoldiers}
          blackFallenSoldier = {blackFallenSoldiers}
          />
        </div>
        
      </div>
    </div>

    <div class="icons-attribution">
      <div> <small> Chess Icons And Favicon (extracted) By en:User:Cburnett [<a href="http://www.gnu.org/copyleft/fdl.html">GFDL</a>, <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA-3.0</a>, <a href="http://opensource.org/licenses/bsd-license.php">BSD</a> or <a href="http://www.gnu.org/licenses/gpl.html">GPL</a>], <a href="https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces">via Wikimedia Commons</a> </small></div>
    </div>
  </div>
