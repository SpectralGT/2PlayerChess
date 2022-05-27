<script lang="ts">
import type Piece from "../pieces/Piece";

	export let shade;
	export let onClick: () => void;
	export var backgroundImage;
	export var square:Piece;

	$: isSelected = (square)?square.isSelected:false;

</script>

<button
	class:isSelected
	style="--background-image:{backgroundImage}"
	class={"square " + shade}
	on:click={() => {
		onClick();
	}}
/>

<style>
	button {
		background-image: var(--background-image);
		background-color: var(--background-color);
	}
	.light-square {
		background-color: #bbbe64;
	}
	.dark-square {
		background-color: #eaf0ce;
	}
</style>
