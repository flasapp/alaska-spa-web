<script>
	import { onMount } from 'svelte';
	import conffeti from 'canvas-confetti';
	import SuccessAnimation from '../../components/shared/images/SucessAnimation.svelte';

	export let orderBody = {}

	function formatDate(date) {
		//format date from YYYY-MM-DD to DD/MM/YYYY
		const [year, month, day] = date.split('-');
		return `${day}/${month}/${year}`;
	}

	onMount(() => {
		conffeti();
		console.log("🚀  --> orderBody:", orderBody)
	})

</script>

<div class="pointer-events-auto w-full bg-base-100">

	<div class="px-4 py-6 sm:px-6">
		<h3 class="font-light w-full text-center">Gracias por tu compra <span class="font-regular">{orderBody.user.name}</span>, su pedido se ha guardado con éxito.</h3>
		<SuccessAnimation />
		<p class="font-regular pt-2">
			Dirección de entrega: 
			<span class="font-light">
				{orderBody.user.street} {orderBody.user.number} 
				{#if orderBody.user.depto} / {orderBody.user.depto}{/if}
			</span>
		</p>
		<p class="font-regular pt-2">
			Fecha de entrega: 
			<span class="font-light">
				{formatDate(orderBody.schedule.day)}
			</span>
		</p>
		<p class="font-regular pt-2">
			Horario de entrega: 
			<span class="font-light">
				{orderBody.schedule.hour}
			</span>
		</p>
		<p class="font-medium pt-4 font-md">Muchas gracias!</p>
		<p style="font-size: .4rem; visibility:hidden;">Que disfrute sus productos, y si no le gustan vaya a lavarse las patas!!!</p>
	</div>
</div>