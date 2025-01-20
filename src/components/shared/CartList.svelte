<script>
	// Configurations
	const { VITE_IMAGES_PATH } = import.meta.env;
	
	//Svelte core

	//Stores and utils
	import { ShoppingCart, addProduct, substractProduct } from "../../stores/Cart"
	import GeneralStore from "../../stores/General"
	import EmptyCartImage from "../../components/shared/images/Cart.svelte";
	import InfoIcon from "../../components/shared/icons/Info.svelte"

	export let title = ''
	//Functions
	function setProduct(product) {
    	GeneralStore.update((data) => {
      		data.selectedProduct = product;
      		return data;
    	});
  	}
	function plusProduct(product) {
		addProduct(product, 1)
	}
	function minusProduct(product) {
		substractProduct(product, 1)
	}

</script>


	<div class="flex h-full flex-col">
		<div class="flex-1 px-4 sm:px-6">
			{#if title != ''}
				<div class="flex items-start justify-between">
					<h2 class="text-lg font-medium" id="slide-over-title">{title}</h2>
				</div>
			{/if}
			<div class="mt-8">
				<div class="flow-root">
					{#if $ShoppingCart?.products.length > 0}
						<ul role="list" class="-my-6">
							{#each $ShoppingCart.products as product, index}
								<li class="flex py-6"  >
									<div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
										<img 
											src={VITE_IMAGES_PATH + product.image}
											alt={product.title + product.description}
											class="h-full w-full object-cover object-center"
										>
										</div>
										<div class="ml-4 flex flex-1 flex-col text-left">
											<div>
												<div class="flex justify-between text-md font-regular">
													<h3>
														<a href="/products/{ product.url }" on:click={ setProduct(product) }>{ product.title }</a>
													</h3>
													<p class="ml-4 text-sm font-regular">$ { product.price } c/u.</p>
												</div>
												<p class="mt-1 text-sm font-light">{product.description}</p>
											</div>
										<div class="flex flex-1 items-end justify-between text-sm">
											<div class="flex">
												<div class="relative flex items-center w-5/12">
													<button
														type="button"
														class="border-current rounded-l-lg p-3 h-11 bg-base-300"
														on:click={() => minusProduct(product)}
													>
														-
													</button>
													<span class="p-3 h-11">{product.quantity}</span>
													<button
														type="button"
														class="border-current rounded-e-lg p-3 h-11 bg-base-300"
														on:click={() => plusProduct(product)}
													>
														+
													</button>
												</div>
												<!-- <button type="button" class="font-medium">Remove</button> -->
											</div>
											<p class="ml-4 font-md font-medium">Subtotal $ { product.quantity * product.price }</p>
										</div>
									</div>
								</li>
								<hr>
								<!-- <div class="divider"></div> -->
							{/each}
						<!-- More products... -->
						</ul>
					{:else}
						<EmptyCartImage />
						<div role="alert" class="alert alert-info mt-4">
							<InfoIcon />
							<span>No hay productos en el carrito.</span>
						</div>
					{/if}
				</div>
			</div>
		</div>
		
	</div>


<style>

</style>