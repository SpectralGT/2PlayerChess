<script lang="ts">
	import Square from "./components/Square.svelte";
    import {Piece} from "./Consts";
</script>

<main >
    <Square piece={Piece.BLACK_PAWN} OnClick={()=>{}} isWhite={false} isPicked={false} isValidDestination={false}/>
</main>

<style>
</style>
