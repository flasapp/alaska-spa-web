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

	<div class="px-4 py-6 sm:px-6 font-light w-full text-left">
		Gracias por tu compra <span class="font-bold">{orderBody.user.name}</span>, 
		<br><span class="text-sm font-medium">Hemos enviado un correo a su casilla, no olvides revisar tu bandeja de spam.</span>
		


		<SuccessAnimation />
		<p class="font-regular pt-2">
			Dirección de entrega: 
			<span class="font-light">
				{orderBody.user.street} {orderBody.user.number} 
				{#if orderBody.user.depto} / {orderBody.user.depto}{/if}
			</span>
		</p>
		<p class="font-regular pt-1">
			Fecha de entrega: 
			<span class="font-light">
				{formatDate(orderBody.schedule.day)}
			</span>
		</p>
		<p class="font-regular pt-1">
			Horario de entrega: 
			<span class="font-light">
				{orderBody.schedule.hour}
			</span>
		</p>
		<p class="font-medium pt-2 font-md">Muchas gracias!</p>
		<p style="font-size: .4rem; visibility:hidden;">Que disfrute sus productos, y si no le gustan vaya a lavarse las patas!!!</p>
	</div>
</div>