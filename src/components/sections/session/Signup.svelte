<script>
	//Core
	import { fade, fly } from 'svelte/transition';
	//Utils and stores
	import { post } from "@/lib/methods/api"
	import GeneralStore from "@/stores/General"
	import { addToast } from "@/stores/Toasts"
	//Components
	import Input from "@/components/form/Input.svelte"
	import UserIcon from "@/components/shared/icons/User.svelte"
	import PhoneIcon from "@/components/shared/icons/Phone.svelte"
	import MailIcon from "@/components/shared/icons/Mail.svelte"
	import PasswordIcon from "@/components/shared/icons/Password.svelte"



	let user = {
		name: "",
		lastname: "",
		mail: "",
		pass: "",
		phone: ""

	}
	let submitted = false
	
	let invalidName = false
	let invalidLastname = false
	let invalidPhone = false
	let invalidMail = false
	let invalidPassword = false
	
	//Computed
	$: invalidName = user.name == '' && submitted
	$: invalidLastname = user.lastname == '' && submitted
	$: invalidPhone = user.phone == '' && submitted
	$: invalidMail = user.mail == '' && submitted
	$: invalidPassword = user.pass == '' && submitted
	
	
	function setLoggedUser(user){
		if(user) $GeneralStore.userLogged = user
	}
	
	async function signup(){
		//Validations
		if(!user.name || !user.lastname || !user.phone || !user.mail || !user.pass) return addToast({ text: "Todos los campos son obligatorios", type: "Error" });
		submitted = true
		let body = {
			email: user.mail,
			password: user.pass,
			name: user.name,
			lastName: user.lastname,
			phone: user.phone,
			createdAt: new Date().toISOString().split('T')[0]
		}
		let resp = await post('signup', body)
		submitted = false
		console.log("🚀  --> resp:", resp)
		if(resp.code){
			if(resp.code == 'MISSING_INFO') return addToast({ text: "Todos los campos son obligatorios", type: "Error" });
			if(resp.code == 'USER_EXISTS') return addToast({ text: "Ha ocurrido un error con sus datos, intentelo nuevamente mas tarde", type: "Error" });
		}
		if(resp.success){
			let credentials = {
				email: user.mail,
				password: user.pass
			}
			console.log("🚀  --> credentials:", credentials)
			let respLogin = await post('login', credentials)
			console.log("🚀  --> respLogin:", respLogin)
			if (!respLogin.id) return addToast({ text: "Email y/o contraseña incorrecta", type: "Error" })
			const userLogged = {
				id: respLogin.id,
				name: respLogin.name,
				lastName: respLogin.lastName,
				email: respLogin.email,
				phone: respLogin.phone,
				token: respLogin.token,
				address: {
					street: respLogin.street,
					number: respLogin.number,
					depto: respLogin.apartment,
					corner: respLogin.corner,
					neighbourhood: respLogin.neighborhoodId
				}
			}
			setLoggedUser(userLogged)
			addToast({ text: "Registrado con éxito", type: "success" });
			return user;
		}
    	
	}
</script>


<div in:fade={{ delay: 200 }}>
	<div class="flex-grow place-items-center">
		<!-- <div class="w-full text-left mb-4">
			<h3 class="font-medium">Registrarse como nuevo usuario!</h3>
		</div> -->
		<form action="" class="w-full">
			<div class="form-control">
				<!-- Name -->
				<Input placeholder="Nombre" bind:value={user.name} icon="{UserIcon}" invalidInput={invalidName} />
				<br>
				<!-- Last Name -->
				<Input placeholder="Apellido" bind:value={user.lastname} icon="{UserIcon}" invalidInput={invalidLastname} />
				<br>
				<!-- Phone -->
				<Input placeholder="Teléfono" bind:value={user.phone} icon="{PhoneIcon}" invalidInput={invalidPhone} />
				<br>
				<!-- Mail -->
				<Input placeholder="Email" type="email" bind:value={user.mail} icon="{MailIcon}" invalidInput={invalidMail} />
				<br>
				<!-- Password -->
				<Input placeholder="Contraseña" type="password" bind:value={user.pass} icon="{PasswordIcon}" invalidInput={invalidPassword}/>
				<br>
				<div class="w-full text-left mb-4">
					<span class="text-sm">* Todos los campos son obligatorios</span>
				</div>
				<button class="flex rounded-md font-medium btn btn-primary w-full" on:click={signup} disabled={submitted}>
					{#if submitted}
						<span class="loading loading-spinner"></span>
						Registrando...
					{:else}
						Registrarme!
					{/if}
				</button>
			</div>
		</form>
	</div>	
</div>