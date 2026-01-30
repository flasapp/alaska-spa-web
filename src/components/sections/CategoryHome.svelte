<script>
	const { VITE_IMAGES_PATH } = import.meta.env;
	import { onMount } from "svelte";
	import { get } from "@/lib/methods/api";
	import GeneralStore from "@/stores/General";

	const getFavCategories = async () => {
		//Call API to Get Favorite Categories using the Service
		const response = await get("categories-featured");
		return response;
	};

	function setCategory(category) {
		GeneralStore.update((data) => {
			data.selectedCategory = category;
			return data;
		});
	}

	let categories = [];

	onMount(async () => {
		const resp = await getFavCategories();
		categories = resp;
	});
</script>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
	<h2 class="text-2xl mb-5 text-gray-800 font-bold">Categorías destacadas</h2>
	<div class="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
		{#each categories as category, i}
			<a
				class="group relative block overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg border-white aspect-square w-full {i ===
					0 || i === 5
					? 'col-span-2 row-span-2'
					: 'col-span-1 row-span-1'}"
				href={`categorias/${category.name.replace(/[\s\/]/g, "-").toLowerCase()}?catSku=${category.id}`}
				on:click={setCategory(category)}
			>
				<!-- Background Image -->
				<img
					src={VITE_IMAGES_PATH + category.image}
					alt={category.name}
					class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
				/>

				<!-- Gradient Overlay -->
				<div
					class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300"
				></div>

				<!-- Content -->
				<div
					class="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
				>
					<h3
						class="text-white text-lg md:text-2xl font-bold mb-1 leading-tight"
					>
						{category.name}
					</h3>
					{#if category.description}
						<small
							class="text-gray-200 block line-clamp-2 md:line-clamp-none text-xs md:text-sm font-medium opacity-90"
						>
							{category.description}
						</small>
					{/if}

					<div
						class="flex items-center text-white text-xs font-bold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					>
						<span>VER PRODUCTOS</span>
						<svg
							class="w-3 h-3 ml-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="3"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	/* Grid handles layout, no extra css needed for masonry */
</style>
