<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let open = false;
	function close(){
		open = false;
		dispatch('close');
	}
</script>
<div class=overlay-dialog>
	<dialog open class="bg-base-100 rounded-lg shadow-xl p-8 sm:p-16 w-[95%] sm:w-1/2 lg:w-1/3">
		<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={close}>✕</button>
		<slot></slot>
	</dialog>
</div>

<style>
	dialog{
		
		transition: scale .3s ease, display .3s ease allow-discrete;
		

		&[open]{
			transition: scale .3s ease-in-out, opacity .3s ease, translate 1s ease;
			translate: 0px 0px;
		}

		@starting-style{
			scale: 0;
			translate: 0px 100px;
		}
		
	}
	.overlay-dialog{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.5);
		pointer-events: unset;
		z-index: 2;
	}

	.overlay-dialog dialog{
		pointer-events: auto;
		position: fixed;
		top: 100px;
		border-radius: 8px;
		box-shadow: 0 0 10px rgba(0,0,0,.5);

		overflow: scroll;
		max-height: 80vh;
	}
</style>