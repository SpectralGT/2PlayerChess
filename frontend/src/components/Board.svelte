<script lang="ts">
	import Square from "./Square.svelte";

	export var squares = [];
	export var onClick = (i) => {};

	const isEven = (num) => {
		return num % 2 == 0;
	};

	const renderSquare = (i, squareShade) => {
		return `<Square 
        piece={${squares[i]}} 
        style={${squares[i] ? squares[i].style : null}}
        shade={${squareShade}}
        onClick={()=>{${onClick(i)}}}
        />;`;
	};

	const render = () => {
		const board = [];
		for (let i = 0; i < 8; i++) {
			const squareRows = [];
			for (let j = 0; j < 8; j++) {
				const squareShade =
					(isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
						? "light-square"
						: "dark-square";
				squareRows.push(this.renderSquare(i * 8 + j, squareShade));
			}
			board.push(`<div className="board-row">{${squareRows}}</div>`);
		}

		return `<div>
        {${board}}
      </div>`;
	};
</script>

<div>{@html render()}</div>
