<script>
	//Core
	import { fade, fly } from 'svelte/transition';
	//Components
	import Input from "@/components/form/Input.svelte"
	import PasswordIcon from "@/components/shared/icons/Password.svelte"
	import MailIcon from "@/components/shared/icons/Mail.svelte"
	//Utils and Stores
	import { post } from "@/lib/methods/api"
	import GeneralSettings from "@/stores/General"
	import { addToast } from "@/stores/Toasts"

	//Local Storage
	// const userLogged = browser && localStorage?.getItem('userLogged') ? JSON.parse(localStorage?.getItem('cart')) : []

	//Variables
	let submitted = false
	let invalidMail = ''
	let invalidPass = ''

	let user = {
		mail: "",
		pass: ""
	}

	//Computed
	$: invalidMail = user.mail == '' && submitted
	$: invalidPass = user.pass == '' && submitted

	//Functions
	function setLoggedUser(user){
		if(user){
			$GeneralSettings.userLogged = user
			localStorage.setItem('userLogged', JSON.stringify(user))
		} 
	}

	async function login() {
		submitted = true
		if(!user.mail || !user.pass) return 
		// let resp = {}
		let response = await post('login', user)
		console.log("🚀  --> response:", response)
		submitted = false
		if (!response.idUsuario) return addToast({ text: "Email y/o contraseña incorrecta", type: "Error" })
		const userLogged = {
			id: response.idUsuario,
			name: response.nomUsuario,
			lastName: response.apellido,
			email: response.mail,
			phone: response.tel,
			address: {
				street: response.calle,
				number: response.numero,
				depto: response.apto,
				corner: response.esquina,
				neighbourhood: response.idBarrio
			}
		}
		setLoggedUser(userLogged)
		addToast({ text: "Logueado con éxito", type: "success" });
		return response;
  	}


</script>

<div in:fade={{ delay: 200 }}>
	<div 
		class="rounded flex-grow place-items-center">
		<!-- <div class="w-full text-left mb-4">
			<h2>Ingresa como usuario registrado!</h2>
		</div> -->
		<form action="" class="w-full">
			<div class="form-control">
				<Input placeholder="Email" bind:value={user.mail} type="email" icon="{MailIcon}" invalidInput="{invalidMail}"/>
				<br>
				<Input placeholder="Contraseña" bind:value={user.pass} type="password" icon="{PasswordIcon}" invalidInput="{invalidPass}"/>
				<br>
				<button class="flex rounded-md font-medium btn btn-primary w-full" on:click={login} disabled={submitted}>
					{#if submitted}
						<span class="loading loading-spinner"></span>
						Ingresando
					{:else}
						Ingresar
					{/if}
				</button>
			</div>
		</form>
	</div>
</div>