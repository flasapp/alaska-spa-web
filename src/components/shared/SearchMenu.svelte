<script>
  	import General from '../../stores/General.js'
  	import SearchProduct from '../shared/SearchProduct.svelte';	
	import SearchIcon from '@/components/shared/icons/Search.svelte';

	let seachingProducts = false;
	General.subscribe((data)=>{
		//This callback will be triggered everytime the store changes
		seachingProducts = data.searchingProducts;
	})

	function toggleSearchingProdcuts(event){
		// event.stopPropagation();
		General.update((data)=>{
			data.searchingProducts = !data.searchingProducts;
			return data;
		})
	}
</script>
<div class="form-control">
	<button type="button" on:click="{toggleSearchingProdcuts}" class="searchingProductsBtn btn btn-ghost btn-circle -my-1 ml-auto flex items-center justify-center">
		<span class="searchingProductsBtn sr-only">Buscar productos</span>
		<SearchIcon />
		<span class="sm:hidden font-medium" style="font-size: 0.875rem;">Buscar</span>
	</button>
</div>
<!-- If seachingProducts is true show SeachProducts -->
