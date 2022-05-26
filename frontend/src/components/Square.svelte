<script lang="ts">

    export let shade :string = "light";
    export let onClick = ()=>{};
</script>

<button class={"square"+shade} onclick={()=>{onClick()}}></button>