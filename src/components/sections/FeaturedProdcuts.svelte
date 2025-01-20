<script>
  // Configurations
  const { VITE_IMAGES_PATH } = import.meta.env;
  // Utils
  // import { get } from "@/lib/api/methods-local"
  import GeneralStore from "../../stores/General";
  import { onMount } from "svelte";
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

  function slideLeft() {
    const slider = document.getElementById("slider-container");
    slider.scrollLeft -= 400;
  }

  function slideRight() {
    const slider = document.getElementById("slider-container");
    slider.scrollLeft += 400;
  }

  async function getFeaturedProducts() {
    products = [
    {
        "id": 1031,
        "title": "Camarón pelado chico Ártico",
        "description": "Bandeja 300g",
        "image": "Camaron pelado chico.jpg",
        "price": 260,
        "sale": true,
        "url": "camarón-pelado-chico-ártico?sku=1031"
    },
    {
        "id": 1086,
        "title": "GUACAMOLE",
        "description": "450 GRS",
        "image": "38.jpg",
        "price": 345,
        "sale": true,
        "url": "guacamole?sku=1086"
    },
    {
        "id": 444,
        "title": "Noisettes pommuni",
        "description": "1 Kg.",
        "image": "ECOFROST Noisettes 1.jpg",
        "price": 175,
        "sale": true,
        "url": "noisettes-pommuni?sku=444"
    },
    {
        "id": 248,
        "title": "Papas fritas bastón I LAMB WESTON",
        "description": "2,5 Kg. - 9mm - Corte Tradicional.",
        "image": "lambweston papas 2.5.jpg",
        "price": 290,
        "sale": true,
        "url": "papas-fritas-bastón-i-lamb-weston?sku=248"
    },
    {
        "id": 993,
        "title": "Tarta de Jamon y Queso Blé",
        "description": "Tarta de 700 grs.",
        "image": "Tarta de Jamon y Queso2.jpg",
        "price": 385,
        "sale": true,
        "url": "tarta-de-jamon-y-queso-blé?sku=993"
    },
    {
        "id": 1040,
        "title": "Tortillas originales",
        "description": "8 unidades chicas",
        "image": "ORIGINAL X8.jpg",
        "price": 145,
        "sale": true,
        "url": "tortillas-originales?sku=1040"
    }
]
    // products = await get("/api/products/featured")
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
  class="mx-auto py-8 w-full bg-base-100 relative"
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
</style>
