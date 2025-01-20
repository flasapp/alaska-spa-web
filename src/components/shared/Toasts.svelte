<script>
  import { Toasts } from "../../stores/Toasts";
  import Toast from "./Toast.svelte";

  export let location = "toast-top toast-center"

</script>
{#if $Toasts.items.length > 0 }
  <section >
    <div class="toast {location}">
      {#each $Toasts.items as toast}
        <Toast {toast}/>
      {/each}
    </div>
  </section>
{/if}

<style>
  section {
    position: absolute;
    top: 0;
    /* left: 0; */
    right: 20px;
    width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;
    max-width: 500px;
  } 
</style>