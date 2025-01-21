<script>
  // css
  import "tailwindcss/tailwind.css";
  //Svelte core
  import { onMount } from "svelte";
	// import { browser } from '$app/environment';
  import { fly } from 'svelte/transition'
  // Stores
  import GeneralStore from "@/stores/General";
  // Components
  import Navbar from "@/components/sections/Navbar.svelte";
  import FootBar from "@/components/sections/FootBar.svelte";
  import SearchProduct from "@/components/shared/SearchProduct.svelte";
  import Footer from "@/components/sections/Footer.svelte";
  import Toasts from "@/components/shared/Toasts.svelte";

  export let data
  let seachingProducts = false;

  GeneralStore.subscribe((data) => {
    //This callback will be triggered everytime the store changes
    seachingProducts = data.searchingProducts;

  });

  onMount(async () => {
      const userLogged = localStorage?.getItem('userLogged') ? JSON.parse(localStorage?.getItem('userLogged')) : {}
      $GeneralStore.userLogged = userLogged
      if($GeneralStore.userLogged.neighbourhood) $GeneralStore.userLogged.neighbourhood = +$GeneralStore.userLogged.neighbourhood
	});
</script>

<!-- <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> -->
<Navbar />
<Toasts />
{#if seachingProducts}
  <SearchProduct />
{/if}

<div
  class="w-full mx-auto pt-16"
  style="position: relative; z-index: {$GeneralStore.searchingProducts ||
  $GeneralStore.showingSideBar
    ? 0
    : 0}"
>
  {#key data?.url}
    <div
      in:fly={{ x: -200, duration: 300, delay: 300 }}
      out:fly={{ x: 200, duration: 300 }}
    >
      <slot />
    </div>
  {/key}
</div>
<FootBar class="sm:hidden" />
<Footer />

<style>
  * {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
</style>
