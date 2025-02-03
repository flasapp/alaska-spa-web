<script>
  //Core
  
  //Components
  import SearchMenu from "../shared/SearchMenu.svelte";
  import CartMenu from "../shared/CartMenu.svelte";
  import DarkLightModeMenu from "../shared/DarkLightModeMenu.svelte";
  import UserIcon from "@/components/shared/icons/UserNoFill.svelte"

  //Utils and stores

</script>

<div class="btm-nav sm:hidden">
   <!-- class="{activeSection == "" ? 'active' : ''}" -->
  <a href="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      /></svg
    >
	  <span class="sm:hidden font-medium" style="font-size: 0.875rem;">Inicio</span>
    
  </a>
  <button>
    <SearchMenu />
  </button>
  <button>
    <CartMenu />
  </button>
  <!-- <button>
    <DarkLightModeMenu />
  </button> -->
  <a href="/perfil">
    <UserIcon />
    <span class="sm:hidden font-medium" style="font-size: 0.875rem;">Usuario</span>
  </a>
</div>
<style>
  .btm-nav{
    box-shadow: 10px 15px #888, 0px 10px 15px #888
  }
</style>