<script>
	//Core
	//Utils and stores
	import { get, post } from '@/lib/methods/api' 
	import { ShoppingCart, restoreStepCart, goNextStep, goPrevStep, resetCart } from "@/stores/Cart"
	import GeneralStore from "@/stores/General"
	console.log("🚀  --> GeneralStore:", $GeneralStore.userLogged)
	import { addToast } from "@/stores/Toasts"
	//Svelte
	import { onMount } from "svelte"

	//Components
	import StepOne from "./StepOne.svelte"
	import StepTwo from "./StepTwo.svelte"
	import StepThree from "./StepThree.svelte"
	import SuccessOrder from "./SuccessOrder.svelte"
	import BackIcon from "@/components/shared/icons/Back.svelte"
	import ForwardIcon from "@/components/shared/icons/Forward.svelte"
	import LoginModal from "@/components/sections/session/LoginModal.svelte"


	//Variables
	let steps = [
		{ title: "Productos del carrito", description: "En este paso puede ver y confirmar los productos que recibirá", active: true, component: StepOne },
		{ title: "Datos de envío ", description: "En este paso deberá proporcionar la información de entrega, ingresando o registrándose previamente", active: false, component: StepTwo },
		{ title: "Fecha y horario de envío", description: "En este paso deberá proporcionar la información relacionada a la fecha y horario de entrega", active: false, component: StepThree },
	];
	let showLoginModal = false
	let unsuscribe = null
	let orderFinished = false
	let orderBody = {}
	let saving = false

	//Functions
	const handleLogin = () => {
		showLoginModal = $GeneralStore.userLogged.id ? false : showLoginModal
		if($GeneralStore.userLogged.id) goForward()
	}
	
	const goForward = () => {
		console.log("🚀  --> $GeneralStore:", $GeneralStore)
		if($ShoppingCart.step == 0 && !$GeneralStore.userLogged.id){
			showLoginModal = true
			unsuscribe = GeneralStore.subscribe(state => {
				if(state.userLogged?.id) handleLogin()
			})
			return
		}else if($ShoppingCart.step == 1){
			// Validations for step 2
			if(!$GeneralStore.userLogged.phone) return addToast({ text: "Debe ingresar una teléfono de contacto", type: "Error" })
			if(!$GeneralStore.userLogged.address.street) return addToast({ text: "Debe ingresar una calle", type: "Error" })
			if(!$GeneralStore.userLogged.address.number) return addToast({ text: "Debe ingresar una número de puerta", type: "Error" })
			if(!$GeneralStore.userLogged.address.neighbourhood) return addToast({ text: "Debe ingresar una barrio", type: "Error" })
		}else if($ShoppingCart.step == 2){
			// Validations for step 3
			console.log("🚀 --> $ShoppingCart.deliveryInfo", $ShoppingCart.deliveryInfo)
			if(!$ShoppingCart.deliveryInfo || !$ShoppingCart.deliveryInfo.address || !$ShoppingCart.deliveryInfo.schedule){
				return addToast({ text: "Debe ingresar un dia y horario de entrega", type: "Error" })
			} 
			
		}
		else{
			if(unsuscribe) unsuscribe()
		}
		goNextStep()

	}

	const goBack = () => {
		goPrevStep()
	}

	const postOrder = async () => {

		// Validate there are products in the cart
		if($ShoppingCart.products.length == 0) return addToast({ text: "No hay productos en el carrito", type: "Error" })
		// Validate there is a schedule
		if(!$ShoppingCart.deliveryInfo.schedule || !$ShoppingCart.deliveryInfo.schedule.day || !$ShoppingCart.deliveryInfo.schedule.hour) return addToast({ text: "Debe seleccionar una fecha y hora de entrega", type: "Error" })
		// Validate there is an address
		if(!$ShoppingCart.deliveryInfo.address) return addToast({ text: "Debe seleccionar una dirección de entrega", type: "Error" })
		//Validate if there is a payment method
		if(!$ShoppingCart.deliveryInfo.schedule.paymentMethod) return addToast({ text: "Debe seleccionar un método de pago", type: "Error" })
		// Validate there is a user logged
		if(!$GeneralStore.userLogged.id) return addToast({ text: "Debe iniciar sesión para realizar un pedido", type: "Error" })
		// Validate the amount of the card is greater or equal than the neighborhood minimum
		let neighbourhood = $GeneralStore.neighbourhoods.find( neigh => neigh.id == $GeneralStore.userLogged.address.neighbourhood)
		if($ShoppingCart.total < neighbourhood.amount) return addToast({ text: `El monto mínimo de compra en <b>${neighbourhood.title}</b> es de <b>$ ${neighbourhood.amount}</b>`, type: "Error" })
		
		saving = true
		//Info to order
		orderBody = {
			paymentMethod: $ShoppingCart.deliveryInfo.schedule.paymentMethod,
			observations: $ShoppingCart.deliveryInfo.schedule.observations,
			total: $ShoppingCart.total,
			user: {
				email: $GeneralStore.userLogged.email,
				name: $GeneralStore.userLogged.name,
				lastname: $GeneralStore.userLogged.lastName,
				phone: $GeneralStore.userLogged.phone,
				street: $GeneralStore.userLogged.address.street,
				number: $GeneralStore.userLogged.address.number,
				corner: $GeneralStore.userLogged.address.corner,
				depto: $GeneralStore.userLogged.address.depto,
				neighbourhood: $GeneralStore.userLogged.address.neighbourhood,
				id: $GeneralStore.userLogged.id
			},
			schedule: {
				hour: $ShoppingCart.deliveryInfo.schedule.hour,
				day: $ShoppingCart.deliveryInfo.schedule.day
			},
			products: $ShoppingCart.products
		}

		//Info to send
		let newOrder = {
			modoPago: orderBody.paymentMethod,
			observaciones: orderBody.observations,
			total: orderBody.total,
			usuario: {
				mail: orderBody.user.email,
				nomUsuario: orderBody.user.name,
				apellido: orderBody.user.lastname,
				tel: orderBody.user.phone,
				calle: orderBody.user.street,
				numero: orderBody.user.number,
				esquina: orderBody.user.corner,
				apto: orderBody.user.depto,
				idBarrio: orderBody.user.neighbourhood,
				idUsuario: orderBody.user.id
			},
			fechaEntrega: {
				horario: orderBody.schedule.hour,
				anioElegido: orderBody.schedule.day.split('-')[0],
				mesElegido: orderBody.schedule.day.split('-')[1],
				diaElegido: orderBody.schedule.day.split('-')[2]
			},
			carrito: {
				items: orderBody.products.map(product => {
					return {
						_id: product.id,
						_name: product.title,
						_price: product.price,
						_quantity: 2,
						_data: {
							...product
						},
					}
				})
			},
		}
		
		let order = await post('order-new', newOrder)
		if(order.response && order.response == "Ok"){
			addToast({ text: "Pedido agregado exitosamente", type: "Success" });
			orderFinished = true
			resetShoppingCart()
		}else{
			addToast({ text: "Ha ocurrdio un error intentando guardar su pedido", type: "Error" });
		}
		return saving = false
		
	}

	const resetShoppingCart = () => {
		resetCart()
	}

</script>

<div class="mx-auto mt-4 py-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative text-center">
    <div class="text-sm breadcrumbs py-4">
      	<ul>
        	<li><a href="/">Inicio</a></li>
        	<li>Carrito</li>
        	{#if $ShoppingCart.step >= 0}<li>Productos</li>{/if}
			{#if $ShoppingCart.step >= 1}<li>Envío</li>{/if}
			{#if $ShoppingCart.step >= 2}<li>Entrega</li>{/if}
      	</ul>
    </div>

	<div class="text-left">
    	<h2 class="text-2xl font-medium">Checkout</h2>
		<div>
			{#if !orderFinished}
				<div class="stepper-container">
					<ul class="steps">
						{#each steps as step, index}
							<li>
								<button class="mx-4 btn btn-square btn-outline {index == $ShoppingCart.step ? 'step-active' : 'step-common'}">
									{index + 1}
								</button>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
			<div class="w-full lg:w-1/2 m-auto text-left" style="line-height: 1.2rem">
				<h2 class="text-md font-regular">{ steps[$ShoppingCart.step].title }</h2>
				<small class="text-md font-light">{ steps[$ShoppingCart.step].description }</small><br><br>
				<div class="bg-gradient-to-r from-violet-400 to-blue-400 p-1 rounded">
					<div class="bg-base-100">
						{#if !orderFinished}
							<svelte:component this={steps[$ShoppingCart.step].component} />
						{:else}
							<SuccessOrder {orderBody} />
						{/if}
					</div>
				</div>
			</div>
			{#if $ShoppingCart.products.length > 0 }
				<div class="mt-6 w-full lg:w-1/2 m-auto bg-base-100 flex flex-row gap-1">
					<button  
						on:click={goBack}
						disabled="{$ShoppingCart.step == 0}" 
						class="rounded-md font-medium btn btn-primary btn-outline w-1/2">
						<BackIcon /> Atrás
					</button>
					{#if $ShoppingCart.step == steps.length - 1 && $ShoppingCart.products.length > 0 && $ShoppingCart.deliveryInfo.address && $ShoppingCart.deliveryInfo.address}
						<button 
							on:click={postOrder} 
							disabled="{!$ShoppingCart.deliveryInfo.schedule || !$ShoppingCart.deliveryInfo.schedule.day || !$ShoppingCart.deliveryInfo.schedule.hour || saving}" 
							class="rounded-md font-medium btn btn-primary w-1/2">
							{#if saving}
								<span class="loading loading-spinner"></span>
								Finalizando
							{:else}
								Finalizar
							{/if}
							
						</button>
					{:else}
						<button 
							on:click={goForward} 
							disabled="{$ShoppingCart.step == steps.length - 1 || ($ShoppingCart.step == 1 && !$GeneralStore.userLogged.id)}" 
							class="rounded-md font-medium btn btn-primary w-1/2">
							Continuar <ForwardIcon />
						</button>
					{/if}	
				</div>
			{/if}
			<div class="mt-6 flex justify-center text-center text-sm text-gray-500">
				
				<a type="button" class="font-regular text-sm text-primary" href="/">
					seguir comprando
				</a>
				
			</div>
		</div>
		{#if showLoginModal}
			<LoginModal bind:showMe={showLoginModal}/>
		{/if}
	</div>
</div>

<style>
	.stepper-container {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 1rem;
		
	}
	.steps{
		/* min-width: 400px; */
		padding-bottom: 1rem;
	}
	.step-common{
		border: 1px solid #a78bfa;
		color: #a78bfa;
		cursor: not-allowed;
		/* background: #f8f5ff; */
	}
	.step-active{
		/* border: 1px solid #f8f5ff; */
		color: #f8f5ff;
		background: #a78bfa;
	}

	.btn-outline:hover{
		background: transparent;
		color: #a78bfa;
		border-color: #a78bfa;
	}

	.checkout-container{
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		/* grid-template-rows: 1fr; */
		gap: 64px;
		width: 100%;
		grid-template-areas: 
			'description description content content content';
		margin: auto;
	}
	.description-container, .content-container{
		/* border: 4px solid #a78bfa; */
		padding: 16px;
		border-radius: 4px;
	}
	.description-container{
		/* height: 530px; */
		grid-area: description;
	}
	.content-container{
		grid-area: content;
	}
	.checkout-content-page .collapse{
		border-radius: 4px;
	}
	.checkout-content-page .collapse:first-child{
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
		/* position: relative;

		&:before{
			content: '';
			border-top: 1px solid;
			position: absolute;
			bottom: 0;
			height: 1px;
			width: 96%;
			left: 2%;
		} */
	}
	.checkout-content-page .collapse:nth-child(2){
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
		border-top-left-radius: 0px;
		border-top-right-radius: 0px;
	}
	.checkout-content-page .collapse:last-child{
		border-top-left-radius: 0px;
		border-top-right-radius: 0px;
		/* position: relative;
		&:before{
			content: '';
			border-top: 1px solid;
			position: absolute;
			top: 0;
			height: 1px;
			width: 96%;
			left: 2%;
		} */
	}
</style>