<script>
  
  import { ShoppingCart } from "../../stores/Cart";
  
</script>

<div class="hidden sm:block dropdown dropdown-end {$ShoppingCart.products.length ? 'cart-active' : ''}" role="button">
  <div tabindex="0" class="btn btn-ghost btn-circle">
    <div class="indicator">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span class="badge badge-sm indicator-item"
        >{$ShoppingCart?.products.length}</span
      >
    </div>
  </div>
  <div
    tabindex="0"
    class="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-300 rounded-box w-52 shadow-xl dropdown-top"
  >
    <div class="card-body">
      <span class="font-medium text-md"
        >{$ShoppingCart.products.length} producto{$ShoppingCart.products
          .length > 1
          ? "s"
          : ""}</span
      >
      <span class="font-medium text-md">Total: $ {$ShoppingCart.total}</span>
      <div class="card-actions">
        <a href="/checkout" class="btn btn-primary btn-block btn-sm">ver carrito</a>
      </div>
    </div>
  </div>
</div>

<div class="flex flex-col sm:hidden {$ShoppingCart.products.length ? 'cart-active' : ''}">
	<!-- <a href="/checkout"> -->
	<a href="/checkout" class="searchingProductsBtn btn btn-ghost btn-circle -my-1 ml-auto flex items-center justify-center">

		<div tabindex="0" class="">
			<div class="indicator">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
			<span class="badge badge-sm indicator-item"
				>{$ShoppingCart?.products.length}</span
			>
			</div>
		</div>
	</a>
	<span class="sm:hidden font-medium" style="font-size: 0.875rem; margin-top: -6px">Carrito</span>
</div>

<style>
	.card-body {
		padding: .5rem;
	}
	.pulse {
		border-radius: 50%;
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
		animation: pulse-blue 2s infinite;
	}

	.cart-active{
		/* background: skyblue;
		color: white; */
		animation: tada 2s;
	}
	@keyframes pulse-blue {
		0% {
			/* transform: scale(0.2); */
			box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
		}
		
		70% {
			/* transform: scale(1); */
			box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
		}
		
		100% {
			/* transform: scale(0.95); */
			box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
		}	
	}
	@keyframes tada {
		0% {
			transform: scale(1);
		}
		10% {
			transform: scale(.9) rotate(-3deg);
		}
		20% {
			transform: scale(.9) rotate(-3deg);
		}
		30% {
			transform: scale(1.1) rotate(3deg);
		}
		40% {
			transform: scale(1.1) rotate(-3deg);
		}
		50% {
			transform: scale(1.1) rotate(3deg);
		}
		60% {
			transform: scale(1.1) rotate(-3deg);
		}
		70% {
			transform: scale(1.1) rotate(3deg);
		}
		80% {
			transform: scale(1.1) rotate(-3deg);
		}
		90% {
			transform: scale(1.1) rotate(3deg);
		}
		100% {
			transform: scale(1) rotate(0);
		}
	}
</style>