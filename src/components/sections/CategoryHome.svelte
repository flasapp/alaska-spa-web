<script>
	const { VITE_IMAGES_PATH } = import.meta.env;
	import { onMount } from "svelte";
	import gf from "@/assets/images/gf.jpg";
	import veggie from "@/assets/images/veggie.jpg";
	import ready from "@/assets/images/veggie.jpg";
	import { get } from "@/lib/methods/api";
	import GeneralStore from "@/stores/General";

	const getFavCategories = async () => {
		//Call API to Get Favorite Categories using the Service
		const response = await get(
			"categories?where[favorite]=1&offset=0&limit=6",
		);
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
		categories = resp.data;
		console.log(resp);
	});
</script>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
	<h2 class="text-2xl">Categorias destacadas</h2>
	<div class="columns-1 md:columns-3 gap-5 space-y-5">
		{#each categories as category, i}
			<a
				class="category-card group relative block w-full overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 break-inside-avoid mb-5 border-white"
				href={`categorias/${category.name.replace(/[\s\/]/g, "-").toLowerCase()}?catSku=${category.id}`}
				on:click={setCategory(category)}
				style="height: {i === 0 ? '500px' : '300px'}"
			>
				<!-- Background Image -->
				<img
					src={VITE_IMAGES_PATH + category.image}
					alt={category.name}
					class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>

				<!-- Gradient Overlay - Only visible on hover -->
				<div
					class="absolute inset-0 bg-gradient-to-t from-base-200/70 via-base-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
				></div>

				<!-- Content - Only visible on hover -->
				<div
					class="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
				>
					<h3 class="text-white text-2xl font-semibold mb-2">
						{category.name}
					</h3>
					<div
						class="flex items-center text-white/80 group-hover:text-white text-sm transition-colors"
					>
						<span>Explorar</span>
						<svg
							class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
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
	/* Ensure masonry layout works properly */
	@media (min-width: 768px) {
		.columns-3 > * {
			display: inline-block;
			width: 100%;
		}
	}

	/* Scroll animation - initial state */
	.category-card {
		opacity: 1;
		transform: translateY(30px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}

	/* Stagger animation delay */
	.category-card:nth-child(1) {
		transition-delay: 0s;
	}

	.category-card:nth-child(2) {
		transition-delay: 0.1s;
	}

	.category-card:nth-child(3) {
		transition-delay: 0.2s;
	}
</style>
