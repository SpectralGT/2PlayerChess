<script lang="ts">
	import Square from "./Square.svelte";

	export var squares = [];
	export var onClick: (i: Number) => void;

	const isEven = (num) => {
		return num % 2 == 0;
	};

	window.updateSquares = ()=>{
		squares = squares;
	}

	const render = () => {
		const board = [];
		for (let i = 0; i < 8; i++) {
			const squareRows = [];
			for (let j = 0; j < 8; j++) {
				const squareShade:String =
					(isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
						? "light-square"
						: "dark-square";
				squareRows.push({ index: i * 8 + j, squareShade: squareShade });
			}
			board.push(squareRows);
		}

		return board;
	};

	const board = render();
</script>

<div>
	{#each board as row}
		<div class="board-row">
			{#each row as cell}
				<Square
					shade={cell.squareShade}
					onClick={()=>{onClick(cell.index)}}
					backgroundImage={squares[cell.index]?squares[cell.index].backgroundImage:null}
					square={squares[cell.index]}
					/>
			{/each}
		</div>
	{/each}
</div>
