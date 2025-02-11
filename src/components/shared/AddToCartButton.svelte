<script>
  //Store
  import { ShoppingCart, addProduct } from "@/stores/Cart";
  import GeneralStore from "@/stores/General";
  //Props
  export let showQuantity = true;
  export let product = {};
  //Variables
  let quantity = 1;

  function addToCart(event) {
    addProduct(product, quantity);
  }
</script>

<div class="flex flex-col md:flex-row justify-center gap-2 md:gap-0">
  {#if showQuantity}
    <div class="relative flex items-center w-full md:w-5/12 justify-center">
      <button
        type="button"
        class="border-current bg-base-200 rounded-full p-4 md:p-2"
        on:click={() => (quantity = quantity > 1 ? quantity - 1 : 1)}
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 2"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h16"
          />
        </svg>
      </button>
      <span class="p-2 h-9 text-sm">{quantity}</span>
      <button
        type="button"
        class="border-current bg-base-200 rounded-full p-4 md:p-2"
        on:click={() => (quantity += 1)}
      >
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
    <!-- <input type="number" placeholder="" class="input input-bordered w-3/12" bind:value={quantity} min="1"/> -->
  {/if}
  <button
    class="btn btn-outline btn-primary mx-0 md:mx-2 {showQuantity
      ? 'w-full md:w-7/12'
      : 'w-full'}"
      style="padding: 4px;"
    on:click={addToCart}
    disabled={$GeneralStore.blockOrders}
  >
    {#if $GeneralStore.blockOrders}
      No se pueden realizar pedidos
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="mr-2 h-6 w-6 s-9TBH5qwna9k1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          class="s-9TBH5qwna9k1"
        ></path></svg
      >
      agregar
    {/if}
    </button>
  
  
</div>

<style>
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
