<script>
	import { onMount } from 'svelte';
	import { meta } from 'tinro';
	import { post } from "@/lib/methods/api";
	import MailIcon from "@/components/shared/icons/Mail.svelte";
	import PassIcon from "@/components/shared/icons/Password.svelte";
	import UserIcon from "@/components/shared/icons/User.svelte";
	import Input from "@/components/form/Input.svelte";
	import NumberInput from "@/components/form/NumberInput.svelte";
  	import InfoSection from "@/components/shared/InfoSection.svelte";
  	import RecoverImage from "@/assets/images/recover.svg";

	const route = meta();	
	let submitted = false;
	let user = {
		mail: '',
		code: '',
		pass: '',
		confirmPass: ''
	}
	let title = "Recuperar Contraseña - obtener código";
	let breadcrumbs = [{
		name: "Recuperar contraseña",
		url: "/recuperar-clave"
	}];
	let step = 1;
	
	// Número de inputs que deseas (puedes cambiar este valor)
    let inputsQuantity = 4;
    // Array to store the value of each Numberinput
    let valuesArray = Array(inputsQuantity).fill('');
    // Update the user.code value with the valuesArray
    $: user.code = valuesArray.join('');
    // Number input references
    let inputRefs = [];

    // Función para enfocar el siguiente input
    function focusNext(index) {
		let numberInputs = document.querySelectorAll('.input-code');
		if(numberInputs && numberInputs[index + 1]) numberInputs[index + 1].focus();
    }

	function isValidEmail(email) {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return emailRegex.test(email);
	}

	const getCode = async () => {
		if(!user.mail) return;
		let resp = await post('recover-password', { mail: user.mail });
		if(resp.error){
			console.log("🚀 ~ file: RecoverPassword.svelte ~ line 41 ~ getCode ~ resp.error", resp.error)
		}
	}

	onMount(() => {
		if(isValidEmail(route.params.email)){
			user.mail = route.params.email;
			step = 2;
		}
	});
</script>

<InfoSection {title} {breadcrumbs}>
	<img src="{RecoverImage}" alt="Recuperar contraseña">
	<hr><br>
	{#if step == 1}
	<p class="font-medium">
		Ingresa tu email y te enviaremos un link y un código para recuperar tu contraseña.
	</p>
	<form action="getCode" class="w-full mt-4">
		<div class="form-control">
			<Input placeholder="Email" bind:value={user.mail} type="email" icon="{MailIcon}" />
			<br>
			<button class="flex rounded-md font-medium btn btn-primary w-full" on:click={getCode} disabled={submitted}>
				{#if submitted}
				<span class="loading loading-spinner"></span>
				Enviando
				{:else}
				Obtener código
				{/if}
			</button>
		</div>
	</form>
	{/if}
	{#if step == 2}
	<p class="font-medium">
		Ingresa el código enviado en el email y tu nueva contraseña.
	</p>
	<form action="getCode" class="w-full mt-4">
		<div class="form-control ">
			<div class="flex gap-4 justify-center">
				{#each valuesArray as valor, index}
					<NumberInput
						bind:value={valuesArray[index]}
						placeholder="1"
						on:nextFocus={() => focusNext(index)}
						bind:this={inputRefs[index]}
					/>
				{/each}
			</div>
			<br>
			<Input placeholder="Ingrese su nueva contraseña" bind:value={user.pass} type="password" icon="{PassIcon}" />
			<br>
			<Input placeholder="Confirme su nueva contraseña" bind:value={user.confirmPass} type="password" icon="{PassIcon}"/>
			<br>
			<button class="flex rounded-md font-medium btn btn-primary w-full" on:click={getCode} disabled={submitted}>
				{#if submitted}
				<span class="loading loading-spinner"></span>
				Recuperando contraseña
				{:else}
				Recuperar contraseña
				{/if}
			</button>
		</div>
	</form>
	{/if}
</InfoSection>

<style>
	
</style>
