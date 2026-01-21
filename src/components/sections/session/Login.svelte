<script>
	//Core
	import { fade, fly } from "svelte/transition";
	//Components
	import Input from "@/components/form/Input.svelte";
	import PasswordIcon from "@/components/shared/icons/Password.svelte";
	import MailIcon from "@/components/shared/icons/Mail.svelte";
	//Utils and Stores
	import { post } from "@/lib/methods/api";
	import GeneralStore from "@/stores/General";
	import { addToast } from "@/stores/Toasts";

	//Local Storage
	// const userLogged = browser && localStorage?.getItem('userLogged') ? JSON.parse(localStorage?.getItem('cart')) : []

	//Variables
	let submitted = false;
	let invalidMail = "";
	let invalidPass = "";

	let user = {
		mail: "",
		pass: "",
	};

	//Computed
	$: invalidMail = user.mail == "" && submitted;
	$: invalidPass = user.pass == "" && submitted;

	//Functions
	function setLoggedUser(user) {
		if (user) {
			$GeneralStore.userLogged = user;
			localStorage.setItem("userLogged", JSON.stringify(user));
		}
	}

	async function login() {
		submitted = true;
		if (!user.mail || !user.pass) return;
		let response = await post("login", user);
		submitted = false;
		if (!response.id)
			return addToast({
				text: "Email y/o contraseña incorrecta",
				type: "Error",
			});
		const userLogged = {
			id: response.id,
			name: response.name,
			lastName: response.lastName,
			email: response.email,
			phone: response.phone,
			token: response.token,
			address: {
				street: response.street,
				number: response.number,
				depto: response.apartment,
				corner: response.corner,
				neighbourhood: response.neighborhoodId,
			},
		};
		setLoggedUser(userLogged);
		addToast({ text: "Logueado con éxito", type: "success" });
		return response;
	}
</script>

<div in:fade={{ delay: 200 }}>
	<div class="rounded flex-grow place-items-center">
		<!-- <div class="w-full text-left mb-4">
			<h2>Ingresa como usuario registrado!</h2>
		</div> -->
		<form action="" class="w-full">
			<div class="form-control">
				<Input
					placeholder="Email"
					bind:value={user.mail}
					type="email"
					icon={MailIcon}
					invalidInput={invalidMail}
				/>
				<br />
				<Input
					placeholder="Contraseña"
					bind:value={user.pass}
					type="password"
					icon={PasswordIcon}
					invalidInput={invalidPass}
				/>
				<br />
				<button
					class="flex rounded-md font-medium btn btn-primary w-full"
					on:click={login}
					disabled={submitted}
				>
					{#if submitted}
						<span class="loading loading-spinner"></span>
						Ingresando
					{:else}
						Ingresar
					{/if}
				</button>
				<div
					class="mt-6 flex justify-center text-center text-sm text-gray-500"
				>
					<a
						type="button"
						class="font-regular text-sm text-primary"
						href="/recuperar-usuario/obtener-codigo"
					>
						Olvidaste la contraseña?
					</a>
				</div>
			</div>
		</form>
	</div>
</div>
