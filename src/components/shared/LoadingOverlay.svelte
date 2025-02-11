<script>
	import cartGif from "@/assets/images/Cart.gif";
  	export let isLoading = true;
</script>

{#if isLoading}
  <div class="overlay">
    <img class="svg-loader" src="{cartGif}" alt="Loading..." width="100"/>
  </div>
{/if}

<style>
  /* Estilo del overlay */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Asegurarse de que esté por encima de todo */
  }
</style>