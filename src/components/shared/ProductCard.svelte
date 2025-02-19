<script>
  // Configurations
  const { VITE_IMAGES_PATH } = import.meta.env;
  //Svelte core
  import { onMount } from "svelte";
  // import { browser } from "$app/environment";

  // Utils and Store
  // import { get } from "@/lib/api/methods-local";
  import GeneralStore from "@/stores/General";
  //Import Components
  import AddToCartButton from "./AddToCartButton.svelte";
  import FullSkeletonProduct from "./FullSkeletonProduct.svelte";
  import StarIcon from "./icons/Star.svelte";

  //Props
  export let fullWidth = false;
  export let product = {};

  //Vars
  let loadingImage = true;
  let productPromise = null;

  //Functions
  function setProduct(product) {
    GeneralStore.update((data) => {
      data.selectedProduct = product;
      return data;
    });
  }

  function getImage() {
    const img = document.getElementById(`product-image-${product.id}`);
    if(img){
      img.onload = () => {
        loadingImage = false;
      };
    }
    
  }

  function goBack() {
    window.history.back();
  }

  onMount(async () => {
    getImage();
  });
</script>

{#if !fullWidth}
  <article
    class="shadow-md group relative item-product overflow-hidden rounded-md bg-base-100 transition-all duration-200 border-base-300 rounded"
  >
    <div
      class="item-product-img aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80 relative"
    >
      <a
        href="/productos/{product.url}"
        on:click={setProduct(product)}
        alt={product.title}
      >
        <picture>
          <div
            style="display: {!loadingImage ? 'none' : 'block'}"
            class="skeleton h-full w-full rounded-md"
          ></div>
          <img
            style="opacity: {loadingImage ? 0 : 1} max-height: 320px; aspect-ratio: 1 / 1;"
            id="product-image-{product.id}"
            src={VITE_IMAGES_PATH + product.image}
            alt={product.title + product.description}
            class="h-full w-full object-contain object-center lg:h-full lg:w-full"
            role="presentation"
          />
        </picture>
      </a>
      {#if product.sale}
        <span id="sale-badge" class="badge badge-secondary"> <StarIcon /> </span>
      {/if}
    </div>
    <div class="product-info-container">
      <div style="min-height: 50px">
        <!-- Title -->
        <h3 class="text-md font-regular w-100 text-left product-title">
          <a href="#">{product.title}</a>
        </h3>
        <!-- Descroption -->
        <p class="text-xs w-full text-left font-light" style="letter-spacing: .5px;">
          {product.description}
        </p>
      </div>
      <!-- Price -->
      <div class="w-full font-regular" style="min-height: 40px; letter-spacing: .5px;">
        $ {product.price}
      </div>
      <div class="w-full">
        <AddToCartButton {product} />
      </div>
    </div>
  </article>
{:else}
  <article
    class="p-16 m-auto w-full sm:w-1/2 group relative item-product overflow-hidden rounded-md bg-base-100 transition-all duration-200 border-base-300 rounded"
  >
    <div
      class="item-product-img aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80 relative"
    >
      <a href="/productos/{product.url}" on:click={setProduct(product)}>
        <picture>
          <img
            style="opacity: {loadingImage ? 0 : 1} max-height: 300px;"
            id="product-image-{product.id}"
            src={VITE_IMAGES_PATH + product.image}
            alt={product.title + product.description}
            class="h-full w-full object-contain object-center lg:h-full lg:w-full"
            role="presentation"
          />
        </picture>
      </a>
      {#if product.sale}
        <span id="sale-badge" class="badge badge-secondary"> <StarIcon /> </span>
      {/if}
    </div>
    <div class="product-info-container">
      <div style="min-height: 50px">
        <!-- Title -->
        <h3 class="text-md font-regular w-100 text-left product-title">
          <a href="#">{product.title}</a>
        </h3>
        <!-- Descroption -->
        <p class="text-xs w-full text-left font-light">
          {product.description}
        </p>
      </div>
      <!-- Price -->
      <div class="w-full font-regular" style="min-height: 40px">
        $ {product.price}
      </div>
      <div class="w-full">
        <AddToCartButton {product} />
      </div>
    </div>
  </article>
{/if}

<style>
  #sale-badge {
    /* transition: opacity 0.3s ease-in-out; */
    z-index: 2;
    position: absolute;
    bottom: 1rempx;
    left: 1rem;
  }
  .item-product-img {
    aspect-ratio: 1 / 1;
    /* min-height: 320px; */
    /* border-radius: .5rem; */
  }

  .product-info-container {
    padding: 1rem;
  }

  .product-title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: .5px;
  }
  img {
    transition-property: transform, opacity;
    transition-duration: 0.5s;
  }
  img:hover {
    transform: scale(1.2);
  }
  .item-product {
    view-timeline-name: --image;
    view-timeline-axis: block;

    animation-timeline: --image;
    animation-name: show;

    animation-range: entry 5% cover 60%;
    animation-fill-mode: both;

    scale: 0.5;

    /* border: 2px solid #a78bfa; */
  }
  @keyframes show {
    from {
      opacity: 0;
      scale: 0.5;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }
</style>
