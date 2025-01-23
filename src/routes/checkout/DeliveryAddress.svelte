<script>
	//Core
	import { fade, fly } from 'svelte/transition';
	import { onMount } from "svelte";
	//Utils and stores
	import { get } from "@/lib/methods/api"
	import GeneralSettings from "@/stores/General"
	import { ShoppingCart } from "@/stores/Cart"
	//Components
	import Input from "@/components/form/Input.svelte"
	import UserIcon from "@/components/shared/icons/User.svelte"
	import PhoneIcon from "@/components/shared/icons/Phone.svelte"
	import MailIcon from "@/components/shared/icons/Mail.svelte"
	import PasswordIcon from "@/components/shared/icons/Password.svelte"
	import LocationIcon from "@/components/shared/icons/Location.svelte"
	import AddressBookIcon from "@/components/shared/icons/AddressBook.svelte"
	import BuildingIcon from "@/components/shared/icons/Building.svelte"
	import CornerIcon from "@/components/shared/icons/Corner.svelte"

	export let showSaveDataButton = true
	let delivery = {
		phone: "",
		street: "",
		number: "",
		corner: "",
		depto: "",
		neighbourhood: "",

	}
	let neighbourhoods = []
	let selectedNeighbourhood = {}
	let submitted = false

	let invalidPhone = false
	let invalidStreet = false
	let invalidNumber = false
	let invalidCorner = false
	let invalidDepto = false
	let invalidneighbourhood = false

	//Computed
	$: invalidPhone = delivery.phone == '' && submitted
	$: invalidStreet = delivery.street == '' && submitted
	$: invalidNumber = delivery.number == '' && submitted
	$: invalidCorner = delivery.corner == '' && submitted
	$: invalidDepto = delivery.depto == '' && submitted
	$: invalidneighbourhood = delivery.neighbourhood == '' && submitted

	function searchSelectedNeighbourhood(){
		selectedNeighbourhood = $GeneralSettings.neighbourhoods.find( neigh => neigh.id == $GeneralSettings.userLogged.address.neighbourhood)
	}

	function handleChange(field, value){

		if(field == 'phone') return $GeneralSettings.userLogged.phone = value
		$GeneralSettings.userLogged.address[field] = value
		if(field == 'neighbourhood') searchSelectedNeighbourhood()

	}

	function searchAddress(){

	}

	function setAddress(delivery){
		// if(delivery) userLogged = delivery
		// console.log("userLogged = ",userLogged)
	}

	async function getneighbourhoods() {
		neighbourhoods = await get('/api/neighbourhoods/')
		$GeneralSettings.neighbourhoods = neighbourhoods
		
	}

	$: $ShoppingCart.deliveryInfo.address = delivery

	// function refreshShoppingCartStoreAddress(){
	// 	$ShoppingCart.deliveryInfo.address = delivery
	// }

	async function saveUserData(){
		// TODO: Register delivery
		submitted = true
		console.log("Delivery: ", delivery)
		//Refresh userLogged info with the selected one.
		$GeneralSettings.userLogged.phone = delivery.phone
		$GeneralSettings.userLogged.address.street = delivery.street
		$GeneralSettings.userLogged.address.number = delivery.number
		$GeneralSettings.userLogged.address.corner = delivery.corner
		$GeneralSettings.userLogged.address.depto = delivery.depto
		$GeneralSettings.userLogged.address.neighbourhood = delivery.neighbourhood

		//Refresh delivery info
		// refreshShoppingCartStoreAddress()
		
	}

	onMount(async () => {
		console.log($GeneralSettings.userLogged)
		delivery = {
			phone: $GeneralSettings.userLogged.phone,
			street: $GeneralSettings.userLogged.address.street,
			number: $GeneralSettings.userLogged.address.number,
			corner: $GeneralSettings.userLogged.address.corner,
			depto: $GeneralSettings.userLogged.address.depto,
			neighbourhood: +($GeneralSettings.userLogged.address.neighbourhood),
			
		}
		$GeneralSettings.neighbourhoods.length == 0 ? await getneighbourhoods() : neighbourhoods = $GeneralSettings.neighbourhoods
		searchSelectedNeighbourhood()
	});
</script>


<div in:fade={{ delay: 500 }} out:fly={{ y: 200, duration: 500 }}>
	<div class="flex-grow place-items-center">
		<!-- <div class="w-full text-left mb-4">
			<h2>Ya casi terminas. Coloca los datos de entrega!</h2>
		</div> -->
		<form action="" class="w-full">
			<div class="form-control grid gap-2 text-left">
				<!-- Hola {$GeneralSettings.userLogged.name}! tu dir es {delivery.street} {delivery.number} {delivery.corner} {delivery.depto} -->
				<Input 
					placeholder="Teléfono" 
					bind:value={delivery.phone} 
					icon="{PhoneIcon}" 
					invalidInput={invalidPhone} 
					label="Teléfono" 
					on:changed={handleChange('phone', delivery.phone)} />
				<Input 
					placeholder="Calle" 
					bind:value={delivery.street} 
					icon="{AddressBookIcon}" 
					invalidInput={invalidStreet} 
					label="Calle" 
					on:changed={handleChange('street', delivery.street)}/>
				<Input 
					placeholder="Número" 
					bind:value={delivery.number} 
					icon="{LocationIcon}" 
					invalidInput={invalidNumber} 
					label="Número"
					on:changed={handleChange('number', delivery.number)}/>
				<Input 
					placeholder="Esquina" 
					bind:value={delivery.corner} 
					icon="{CornerIcon}" 
					invalidInput={invalidDepto} 
					label="Esquina"
					on:changed={handleChange('corner', delivery.corner)}/>
				<Input 
					placeholder="Apto" 
					bind:value={delivery.depto} 
					icon="{BuildingIcon}" 
					invalidInput={invalidDepto} 
					label="Apto"
					on:changed={handleChange('depto', delivery.depto)}/>

				<label>
					<div class="label">
						<span class="label-text">Barrio</span>
					</div>
					<select class="select select-bordered w-full" bind:value={delivery.neighbourhood} on:change={handleChange('neighbourhood', delivery.neighbourhood)}>
						<option disabled selected>Seleccione su barrio</option>
						{#each neighbourhoods as neighbourhood}
							<option value={neighbourhood.id}>{neighbourhood.title}</option>
						{/each}
					</select>
					<div class="label">
						<span class="label-text-alt"><small class="text-xs font-extralight">Míinimo de compra para este barrio es : $ {selectedNeighbourhood.amount}</small></span>
					</div>
				</label>
				
				<br>
				{#if showSaveDataButton}
					<button class="flex rounded-md font-medium btn btn-primary w-full" on:click={saveUserData}>
						Guardar mis datos
					</button>
				{/if}
			</div>
		</form>
	</div>	
</div>