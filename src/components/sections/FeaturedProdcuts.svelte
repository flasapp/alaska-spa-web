<script>
  // Configurations
  const { VITE_IMAGES_PATH } = import.meta.env;
  //Core
  import { onMount } from "svelte";
  // Utils adn Stores
  import { get } from "@/lib/methods/api"
  import GeneralStore from "@/stores/General";
	import { handleProductData } from "@/helpers/utils"
  //Components
  import ProductCard from "../shared/ProductCard.svelte";
  import TypingText from "../shared/TypingText.svelte";
  import LeftArrowIcon from "../shared/icons/LeftArrow.svelte";
  import RightArrowIcon from "../shared/icons/RightArrow.svelte";
  //Props
  export let productsProp = []
  export let title = "Productos destacados"

  let products = []
  let loadingProducts = true
  let productsPromise = null
  let hideFeatured = false
  let widthToMove = window.innerWidth < 768 ? 200 : 400; //if is in mobile change widthToMove to 200 (size of each element of carrousel)
  
  function slideLeft() {
    const slider = document.getElementById("slider-container");
    slider.scrollLeft -= widthToMove;
  }

  function slideRight() {
    const slider = document.getElementById("slider-container");
    slider.scrollLeft += widthToMove;
  }

  async function getFeaturedProducts() {
    products = []
    let resp = await get("products-featured")
    if(resp.data) products = await handleProductData(resp.data)
    return products
  }

  onMount(async () => {
    //set categories
    if(productsProp.length == 0) productsPromise = getFeaturedProducts();
    else products = productsProp
    const slider = document.getElementById("slider-container")
  });
</script>

<div
  class="mx-auto py-8 w-full bg-base-100 relative featured-products-container"
  style="padding-left:10%; padding-right:10%;"
>
  <h2 class="text-2xl">{title}</h2>
  <!-- <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"> -->
  <!-- <div class="mt-6"> -->

  <div
    class="carousel carousel-center w-full py-8 space-x-4 rounded-box"
    id="slider-container"
  >
    {#await productsPromise}
      {#each Array(4) as _, i}
        <div class="flex flex-col gap-4 w-72">
          <div class="skeleton h-80 w-full rounded-md"></div>
          <div class="skeleton h-8 w-28 rounded-md"></div>
          <div class="skeleton h-6 w-56 rounded-md"></div>
          <div class="skeleton h-4 w-72 rounded-md"></div>
          <!-- <div class="skeleton h-4 w-full rounded-md"></div> -->

          <div class="flex gap-4 items-center">
            <div class="skeleton h-10 w-1/5 rounded-md"></div>
            <div class="skeleton h-10 w-4/5 rounded-md"></div>
          </div>
        </div>
      {/each}
    {:then}
      <button
        on:click={slideLeft}
        class="btn btn-sm md:btn-md absolute bg-base-300"
        id="left-arrow"
      >
        <LeftArrowIcon />
      </button>
      {#each products as product, i}
        <div class="carousel-item" style="width:250px">
          <ProductCard {product} />
        </div>
      {/each}
      <button
        on:click={slideRight}
        class="btn btn-sm md:btn-md absolute bg-base-300"
        id="right-arrow"
      >
        <RightArrowIcon />
      </button>
    {/await}
  </div>
  <!-- </div> -->
</div>

<style>
  #left-arrow, #right-arrow {
    top: 50%;
    z-index: 2;
    position: absolute;
  }
  #left-arrow {
    left: 5%;
  }
  #right-arrow {
    right: 5%;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(120px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

.featured-products-container {
  opacity: 0;
  transform: translateY(120px);
  /* animation: fadeInSlide 0.8s ease-out forwards; */

  animation: fadeIn 0.8s ease-out forwards;
  animation-timeline: view();
  animation-range: entry 20% cover 50%;
}
</style>
