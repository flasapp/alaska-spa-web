<script>
  import { link } from "svelte-routing";
  //Utils
  import General from "../../stores/General.js";
  //Components
  import Sidebar from "./Sidebar.svelte";
  import SearchMenu from "../shared/SearchMenu.svelte";
  import CartMenu from "../shared/CartMenu.svelte";
  import UserMenu from "../shared/UserMenu.svelte";
  import DarkLightModeMenu from "../shared/DarkLightModeMenu.svelte";
  import logo from "@/assets/images/logo.jpg"

  export let title = $General.title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div class="navbar bg-base-100 shadow-lg fixed" style="z-index:1">
  <!-- Button and Sidebar -->
  <Sidebar />
  <!-- Title Section -->
  <div class="navbar-center">
    <a
      use:link
      class="btn btn-ghost text-xl logo"
      href="/"
      style="font-variant:all-petite-caps; letter-spacing: 2px;"
      >
      <img src="{logo}" alt="Alaska Congelados" width="150"/>
    </a
    >
  </div>
  <div class="navbar-end hidden sm:flex">
    <!-- SearchProducts -->
    <SearchMenu />
    <!-- Carte Menu -->
    <CartMenu />
    <!-- Dark Light Mode  Toggle Menu-->
    <!-- <DarkLightModeMenu /> -->
    <!-- User Menu -->
    {#if $General?.userLogged?.id}
      <UserMenu />
    {/if}
  </div>
</div>

<style>
  .navbar-center {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar-end {
    width: 25%;
  }
  .logo:hover{
    background: transparent;
  }
</style>
