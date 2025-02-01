<script>
	//Svelte Core
	import { fade, fly } from 'svelte/transition'
	import { onMount } from 'svelte'
	//Utils and stores
	import { ShoppingCart } from "../../stores/Cart"
	import GeneralStore from "../../stores/General"
	//Components
	import LoginSignup from "../../components/sections/session/LoginSignup.svelte"
	import DeliveryAddress from "./DeliveryAddress.svelte"
	//Variables
	const goPreviousStep = () => {
		goPrevStep();
	};

</script>
<div class="p-4">

	{#if !$GeneralStore.userLogged.id}
		<LoginSignup />
	{:else}
		<div class="pointer-events-auto w-full m-auto" >
			<DeliveryAddress showSaveDataButton={false}/>
		</div>
	{/if}


<!-- <button class="btn" onclick="my_modal_5.showModal()">open modal</button> -->

</div>

<style>

	.highlight{
		position: absolute;
		bottom: 5px;
		top:5px;
		width: 49%;
		height: 30px;
		left: calc(var(--position) * 1%); 
		transition: all ease .3s;
	}
	
	.tab-active{
		color: white !important;
		background: transparent !important;
	}
	

</style>