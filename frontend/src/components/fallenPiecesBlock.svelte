<script lang='ts'>
import App from "../App.svelte";

    import Square from "./Square.svelte";

    export var whiteFallenSoldier = [];
    export var blackFallenSoldier = [];

    const renderSquare =(square,i)=>{
        return `<Square piece={${square}}/>`
    }
</script>

<div>
    <div class="boardRow">{whiteFallenSoldier.map((ws,index)=>{
        renderSquare(ws,index);
    })}</div>
    <div class="boardRow">{blackFallenSoldier.map((bs,index)=>{
        renderSquare(bs,index);
    })}</div>
</div>