<script>
	//Core
	import { onMount } from "svelte";
	import { meta } from 'tinro';

	//Utils Stores
	import { get } from "@/lib/methods/api";
	import { handleProductData } from "@/helpers/utils"
	import GeneralStore from "@/stores/General";
	//Components
	import ProductCard from "@/components/shared/ProductCard.svelte";
	import EmptyCategory from "@/assets/images/empty_category.svg"
	import SEO from "@/components/shared/SEO.svelte";

	const route = meta();

	let category = {};
	let products = [];
	let fullWidth = false;
	let categoryPromise = null;
	let productsPromise = null;
	let catSku =route.query.catSku;
	let searchTerm = "";
	let filteredProducts = [];

	GeneralStore.subscribe((data) => {
		if (data.selectedCategory.id && data.selectedCategory.id != category.id) {
			category = data.selectedCategory;
		}
	});

	async function getCategory(id) {
		let resp = await get(`categories/${id}`);
		let categories = resp.data.map( (cat)=>{
			return {
				id: cat.id,
				name: cat.name,
				description: cat.description,
			}	
		});
		category = categories[0];
	}

	async function getProductsByCategory(id) {
		products = [];
		$GeneralStore.searchingProductsList = []
		let resp = await get(`products-category/${id}`);
		if(resp.data){
			products = await handleProductData(resp.data)
			$GeneralStore.searchingProductsList = products
		}
	}

	const filterProducts = () => {
		return (filteredProducts = products.filter((product) => {
			let productTitle = product.title.toLowerCase();
			let productDescription = product.description.toLowerCase();
			return (
			productTitle.includes(searchTerm.toLowerCase()) ||
			productDescription.includes(searchTerm.toLowerCase())
			);
		}));
	};

	onMount(async () => {
		//First check if the category is already loaded
		if (catSku && !$GeneralStore.selectedCategory.id) {
			categoryPromise = getCategory(catSku);
		} else {
			category = $GeneralStore.selectedCategory;
		}
		productsPromise = getProductsByCategory(catSku);
	});


</script>

<div class="mx-auto py-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
	{#await categoryPromise}
		<div class="text-sm breadcrumbs py-4">
			<ul>
			<li><div class="skeleton h-6 w-14 rounded-md"></div></li>
			<li><div class="skeleton h-6 w-28 rounded-md"></div></li>
			<li><div class="skeleton h-6 w-28 rounded-md"></div></li>
			</ul>
		</div>
		<div class="flex justify-between items-center pb-4">
			<div class="skeleton h-6 w-14 rounded-md"></div>
		</div>
	{:then}
		<SEO 
			title="{category?.name} | Alaska Congelados" 
			description={category?.description || `Explora nuestra selección de ${category?.name}. Calidad y buen precio.`}
		/>
		<div class="text-sm breadcrumbs py-4">
			<ul>
			<li><a href="/">Inicio</a></li>
			<li>Categoria</li>
			<li>Lista de productos</li>
			</ul>
		</div>
		<!-- Search input to filter the products -->
		<div class="flex justify-between items-center pb-4">
			<h1 class="text-2xl font-medium">{category?.name}</h1>
			<div class="flex items-center">
			<label
				class="search-input input input-bordered flex items-center gap-2"
			>
				<input
				type="text"
				class=""
				placeholder=""
				bind:value={searchTerm}
				on:input={filterProducts}
				required
				/>
				<svg
				style="right:23px;"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="w-4 h-4 opacity-70 absolute"
				><path
					fill-rule="evenodd"
					d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
					clip-rule="evenodd"
				/></svg
				>
			</label>
			</div>
		</div>
	{/await}

	{#await productsPromise}
		<div
			class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-between bg-base-100 rounded"
		>
			{#each Array(10) as _, i}
			<div class="flex flex-col gap-4 w-72">
				<div class="skeleton h-80 w-56 rounded-md"></div>
				<div class="skeleton h-8 w-36 rounded-md"></div>
				<div class="skeleton h-6 w-28 rounded-md"></div>
				<div class="skeleton h-4 w-48 rounded-md"></div>
				<!-- <div class="skeleton h-4 w-full rounded-md"></div> -->

				<div class="flex gap-4 items-center">
				<div class="skeleton h-10 w-24 rounded-md"></div>
				<div class="skeleton h-10 w-28 rounded-md"></div>
				</div>
			</div>
			{/each}
		</div>
	{:then}
		{#if filteredProducts.length == 0 && searchTerm != ""}
			<div role="alert" class="alert alert-info">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="stroke-current shrink-0 w-6 h-6"
				><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				></path></svg
			>
			<span
				>No se encontraron productos con el término "{searchTerm}" dentro de
				la categoría {category?.name}</span
			>
			</div>
		{:else if filteredProducts.length > 0}
			<div
			class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-between bg-base-100 rounded"
			>
			{#each filteredProducts as product}
				<ProductCard {product} />
			{/each}
			</div>
		{:else if products.length > 0}
			<div
			class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-between bg-base-100 rounded"
			>
			{#each products as product}
				<ProductCard {product} />
			{/each}
			</div>
		{:else}
            <div class="flex flex-col items-center justify-center text-center">
                <img src="{EmptyCategory}" alt="Categoria sin productos" class="w-full md:w-1/2 mb-4"/>
                <p>No se encontraron productos en esta categoría</p>
                <small>La categoría {category?.name} no tiene productos en este momento.</small>
            </div>
        {/if}
	{:catch error}
		<p>{error.text}</p>
	{/await}
</div>

	<!-- <ProductCard {product} {fullWidth} /> -->

<style>
	.search-input input {
		width: 45px;
		transition: width 0.3s;
	}
	.search-input {
		width: auto;
		height: 40px;
		padding: 0.5rem;
		overflow: hidden;
		position: relative;
	}
	.search-input:focus-within input {
		width: 200px;
	}
	.search-input input:not(:placeholder-shown) {
		width: 200px;
	}

	/* add fade-in effect to grid */
	.grid {
		opacity: 0;
		animation: fadeIn 0.5s forwards;
	}
	.alert {
		opacity: 0;
		animation: fadeIn 0.5s forwards;
	}
	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}
</style>
