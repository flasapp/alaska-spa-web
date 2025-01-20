<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import Cross from './icons/Cross.svelte';

	export let toast = {
		text: "",
		type: "info",
		icon: null,
		closeMe: () => {}
	}
	
</script>

<div class="alert alert-{toast.type.toLowerCase()} flex">
	<svelte:component this={toast.icon} />
	<span>{@html toast.text}</span>
	<button on:click|once={toast.closeMe}>
		<Cross />
	</button>
</div>




<style>
	.alert {
		padding: 15px;
		/* margin-bottom: 20px; */
		border: 1px solid transparent;
		border-radius: 4px;
	}
	.alert-info{
		background-color: #d1ecf1;
		color: #0c5460;
		border-color: #bee5eb;
	}
	.alert-error{
		background-color: #f8d7da;
		color: #842029;
		border-color: #f5c2c7;
	}
	.alert-success{
		background-color: #d4edda;
		color: #0f5132;
		border-color: #c3e6cb;
	}
	.alert-warning{
		background-color: #fff3cd;
		color: #856404;
		border-color: #ffeeba;
	}
	.alert-danger {
		background-color: #f8d7da;
		color: #842029;
		border-color: #f5c2c7;
	}
</style>