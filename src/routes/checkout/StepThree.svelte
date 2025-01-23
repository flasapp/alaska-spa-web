<script>
	//Svelte Core
	import { fade, fly } from 'svelte/transition'
	import { onMount } from 'svelte'
	//Utils and stores
	import { ShoppingCart, goPrevStep, goNextStep } from "../../stores/Cart"
	import GeneralSettings from "../../stores/General"
	//Components
	import LoginSignup from "../../components/sections/session/LoginSignup.svelte"
	import DeliveryDate from "./DeliveryDate.svelte"
	//Variables
	const goPreviousStep = () => {
		goPrevStep();
	};

</script>
<div class="p-4">

	{#if !$GeneralSettings.userLogged.id}
		<LoginSignup />
	{:else}
		<div class="pointer-events-auto w-full m-auto" >
			<DeliveryDate />
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