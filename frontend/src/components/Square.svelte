<script lang="ts">
	import type { Piece } from "../Consts";

	export var piece: Piece;
	export var OnClick = () => {};
	export var isWhite: boolean;
	export var isPicked: boolean;
	export var isValidDestination: boolean;

	const whiteSquareColor = "#EADAB9";
	const blackSquareColor = "#C2A482";
	const isPickedColor = "lime";
	const isValidDestinationColor = "yellow";

	let backgroundColor: string = isWhite ? whiteSquareColor : blackSquareColor;
	
	// Special square highlighting a picked square or valid destination
	if (isPicked) {
		backgroundColor = isPickedColor;
	} else if (isValidDestination) {
		backgroundColor = isValidDestinationColor;
	}
</script>

<div
	style="--background-color:{backgroundColor}"
	onclick={() => {
		OnClick();
	}}
>
	{piece}
</div>

<style>
	div {
		background-color: var(--background-color);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		font-size: 5vw;
	}
</style>
