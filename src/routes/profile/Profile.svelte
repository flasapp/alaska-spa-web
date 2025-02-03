<script>
	//Core
	//Utils and stores
	import { put, get } from "@/lib/methods/api"
	import GeneralSettings, { updateUser } from "@/stores/General"
	import { addToast } from "@/stores/Toasts"
	//Svelte
	import { onMount } from "svelte"

	//Components
	import Input from "@/components/form/Input.svelte"
	import PhoneIcon from "@/components/shared/icons/Phone.svelte"
	import MailIcon from "@/components/shared/icons/Mail.svelte"
	import UserIcon from "@/components/shared/icons/User.svelte"
	import AddressIcon from "@/components/shared/icons/AddressBook.svelte"
	import BuilindgIcon from "@/components/shared/icons/Building.svelte"
	import CornerIcon from "@/components/shared/icons/Corner.svelte"
	import LocationIcon from "@/components/shared/icons/Location.svelte"
	import RighArrowIcon from "@/components/shared/icons/RightArrow.svelte"
	import InfoIcon from "@/components/shared/icons/Info.svelte"

	//Variables for tabs
	let active_tab = 'INFO'
	//Variables for invalid inputs
	let invalidForm = {}
	let saving = false
	let orders = []
	//Functions
	const restoreInvalids = () => {
		saving = false
		invalidForm = {
			name: false,
			lastName: false,
			email: false,
			phone: false,
			street: false,
			number: false,
			corner: false,
			depto: false,
			neighbourhood: false
		}
	}

	const save = async () =>{
		restoreInvalids()
		//Validate name, lastname, email, phone, street, number, neighborhood
		if(!$GeneralSettings.userLogged.name) return invalidForm.name = true
		if(!$GeneralSettings.userLogged.lastName) return invalidForm.lastName = true
		if(!$GeneralSettings.userLogged.email) return invalidForm.email = true
		if(!$GeneralSettings.userLogged.phone) return invalidForm.phone = true
		if(!$GeneralSettings.userLogged.address.street) return invalidForm.street = true
		if(!$GeneralSettings.userLogged.address.number) return invalidForm.number = true
		if(!$GeneralSettings.userLogged.address.neighbourhood) return invalidForm.neighborhood = true
		
		//Save user data
		updateUser($GeneralSettings.userLogged)
		saving = true
		let response = await put(`/api/session/update-info/${$GeneralSettings.userLogged.id}`, $GeneralSettings.userLogged)
		saving = false
		if(response.success) return addToast({ text: "Datos actualizados correctamente", type: "Success" })
		addToast({ text: "Ha ocurrido un error, intentelo nuevamente mas tarde", type: "Error" })
	
}

const getMyOrders = async () => {
	setTimeout(async () => { // --> This is a workaround if the user reload the page. The userLogged is not available yet
		console.log("🚀  --> $GeneralSettings.userLogged:", $GeneralSettings.userLogged)
		if(!$GeneralSettings.userLogged.id) return
		let resp = await get(`orders-user/${$GeneralSettings.userLogged.id}`)
		orders = resp.data
		console.log("🚀  --> orders:", orders)
	}, 200);
}
	
	
	const getNeighbourhoods = async () => {
		let resp = await get('settings/neighbourhoods');
		let neighbourhoods = resp?.data?.map( (neigh)=>{
			return {
				id: neigh.idBarrio,
				title: neigh.title,
				amount: neigh.monto
			}	
		})
		$GeneralSettings.neighbourhoods = neighbourhoods
	}
	
	const goTo = (orderId) => {
		
		goto(`/orders?order=${orderId}&user=${$GeneralSettings.userLogged.id}`)

	}

	onMount(async () => {
		
		if($GeneralSettings.neighbourhoods.length == 0) getNeighbourhoods()
		getMyOrders()
		// if(!$GeneralSettings.userLogged.id){
		// 	addToast({ text: "Debes iniciar sesión para acceder a tu perfil", type: "Error" })
		// 	goto(`/`) 
		// } 
	})
</script>

<div class="mx-auto py-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative text-center">
    <div class="text-sm breadcrumbs py-4">
      	<ul>
        	<li><a href="/">Inicio</a></li>
        	<li>Perfil</li>
        	{#if active_tab == 'INFO'}<li>Mis datos</li>{/if}
			{#if active_tab == 'ORDERS'}<li>Mis Pedidos</li>{/if}
      	</ul>
    </div>

	<div class="text-left">
    	<h2 class="text-2xl font-medium">Perfil</h2>
		<div>
			<div class="w-full lg:w-1/2 m-auto text-left mt-4">
				<div class="bg-gradient-to-r from-violet-400 to-blue-400 p-1 rounded">
					<div class="bg-base-100 p-4">
						<div role="tablist" class="tabs tabs-boxed bg-base-100">
							<a role="tab" class="tab {active_tab == 'INFO' ? 'tab-active' : ''}" on:click={() => {active_tab = 'INFO'}}>Mis datos</a>
							<a role="tab" class="tab {active_tab == 'ORDERS' ? 'tab-active' : ''}" on:click={() => {active_tab = 'ORDERS'; getMyOrders();}}>Mis pedidos</a>
						</div>
						<div class="pointer-events-auto w-full m-auto" >
							{#if active_tab == 'INFO'}
								<!-- <Login /> -->
								 <form action="" class="w-full">
									<div class="form-control grid gap-2 text-left p-4">
										<!-- Hola {$GeneralSettings.userLogged.name}! tu dir es {delivery.street} {delivery.number} {delivery.corner} {delivery.depto} -->
										<Input 
											placeholder="Nombre" 
											bind:value={$GeneralSettings.userLogged.name} 
											icon="{UserIcon}" 
											invalidInput={invalidForm.name} 
											label="Nombre" 
										/>
										<Input 
											placeholder="Apellido" 
											bind:value={$GeneralSettings.userLogged.lastName} 
											icon="{UserIcon}" 
											invalidInput={invalidForm.lastName} 
											label="Apellido" 
										/>

										<Input
											placeholder="Email"
											bind:value={$GeneralSettings.userLogged.email}
											icon="{MailIcon}"
											invalidInput={invalidForm.email}
											label="Email"
										/>
										<Input
											placeholder="Teléfono"
											bind:value={$GeneralSettings.userLogged.phone}
											icon="{PhoneIcon}"
											invalidInput={invalidForm.phone}
											label="Teléfono"
										/>
										<Input
											placeholder="Calle"
											bind:value={$GeneralSettings.userLogged.address.street}
											icon="{LocationIcon}"
											invalidInput={invalidForm.street}
											label="Calle"
										/>
										<Input
											placeholder="Número"
											bind:value={$GeneralSettings.userLogged.address.number}
											icon="{BuilindgIcon}"
											invalidInput={invalidForm.number}
											label="Número"
										/>
										<Input
											placeholder="Esquina"
											bind:value={$GeneralSettings.userLogged.address.corner}
											icon="{CornerIcon}"
											invalidInput={invalidForm.corner}
											label="Esquina"
										/>
										<Input
											placeholder="Depto"
											bind:value={$GeneralSettings.userLogged.address.depto}
											icon="{AddressIcon}"
											invalidInput={invalidForm.depto}
											label="Depto"
										/>
										<label>
											<div class="label">
												<span class="label-text">Barrio</span>
											</div>
											<select 
												class="select select-bordered w-full" 
												bind:value={$GeneralSettings.userLogged.address.neighbourhood}
												placeholder="Seleccione un barrio"
											>
												<option disabled selected>Seleccione su barrio</option>
												{#each $GeneralSettings.neighbourhoods as neighbourhood}
													<option value={neighbourhood.id}>{neighbourhood.title}</option>
												{/each}
											</select>
										</label>
										<button 
											on:click={save} 
											class="rounded-md font-medium btn btn-primary w-full mt-4"
											disabled={saving}>
											{#if saving}
												<span class="loading loading-spinner"></span>
												Actualizando
											{:else}
												Actualizar mis datos
											{/if}
										</button>
									</div>
								</form>
							{/if}
							{#if active_tab == 'ORDERS'}
								{#key orders}
									{#if orders.length == 0}
										<div role="alert" class="alert alert-info mt-4">
											<InfoIcon />
											<span>No se encontraron pedidos.</span>
										</div>
										<p class="text-center"></p>
									{:else}
										<div class="overflow-x-auto mt-4">
											<table class="table table-zebra">
												<thead>
													<tr class="text-center">
														<!-- <th class="">Pedido #</th> -->
														<th class="">Fecha</th>
														<th class="">Horario</th>
														<th class="">Total</th>
														<th class="">Estado</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
													{#each orders as order}
														<tr class="text-center hover" on:click={goTo(order.orderId)}>
															<!-- <td class="">{order.orderId}</td> -->
															<td class="">{order.deliveryDate}</td>
															<td class="">{order.deliverySchedule}</td>
															<td class="">$ {order.total}</td>
															<td class="">
																{#if order.status == 1}
																	<span class="badge badge-outline badge-primary">Procesado</span>
																{:else if order.status == 0}
																	<span class="badge badge-outline badge-secondary">Recibido</span>
																{/if}
															</td>
															<td class="">
																
																<RighArrowIcon />
																
															</td>
														</tr>
													{/each}
												</tbody>
											</table>
										</div>
									{/if}
								{/key}
							{/if}
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</div>

<style>
	html{
		scroll-behavior: smooth;
	}
</style>