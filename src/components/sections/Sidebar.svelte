<script>
	// Utils
	// import { get } from "@/lib/api/methods-local"
	import GeneralStore, { getCategories } from "@/stores/General";
	console.log("🚀  --> GeneralStore:", GeneralStore)
	import { onMount } from 'svelte';

	let categories = []
	let sidebarModel = false

	function setCategory(category){
    	GeneralStore.update((data)=>{
			data.selectedCategory = category;
			return data;
		})
		sidebarModel = false;
	}

	function toggleSidebar(){
		GeneralStore.update((data)=>{
			data.showingSideBar = !data.showingSideBar;
			return data;
		})
	}

	onMount(async ()=>{
		//Get categories
		categories = await getCategories()
		console.log("🚀  --> categories:", categories)
	})
	
</script>
<div class="navbar-start">
	<div class="drawer" style="z-index:2">
		<input id="my-drawer" type="checkbox" class="drawer-toggle" on:change={ toggleSidebar } bind:checked={sidebarModel}/>
		<div class="drawer-content">
			<!-- Page content here -->
			<label for="my-drawer" class="btn drawer-button" style="background: transparent;">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
			</label>
		</div> 
		<div class="drawer-side">
			<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
			
			<ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
				<!-- Sidebar content here -->
				<li class="text-xl my-4">Categorías</li>
				<!-- each to show all categories -->
				{#each categories as category}
					<li><a href="{category.url}" on:click="{setCategory(category)}">{category.name}</a></li>
				{/each}
				
			</ul>
		</div>
	</div>
</div>
<style>
.navbar-start {
    width: 25% !important;
  }
</style>