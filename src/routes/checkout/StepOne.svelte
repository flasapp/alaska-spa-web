<script>
	//Core

	//Utils and Stores
	import { ShoppingCart } from "../../stores/Cart"

	//Components
	import CartList from "../../components/shared/CartList.svelte";

</script>
<div class="pointer-events-auto w-full bg-base-100">
	
	<CartList/>

	<div class="px-4 py-6 sm:px-6 pt-8">
		<div class="flex justify-between text-md font-medium">
			<p>Total</p>
			<p>$ {$ShoppingCart?.total}</p>
		</div>
		<p class="mt-0.5 text-xs font-light text-left">Costo de envío e impuestos incluídos.</p>
		
	</div>
</div>