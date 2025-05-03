<script>
	import InputDate from "@/components/form/InputDate.svelte"
	import { addToast } from "@/stores/Toasts"
	import { ShoppingCart } from "@/stores/Cart"
	import MandatoryFieldsWarning from "@/components/shared/MandatoryFieldsWarning.svelte"

	const SCHDEULE_1 = '11:00 a 14:00 hrs'
	const SCHDEULE_2 = '14:00 a 17:00 hrs'
	const SCHDEULE_3 = '17:00 a 19:00 hrs'
	const SCHDEULE_SATURDAY = '09:30 a 13:30 hrs'

	const SCHEDULES = [
		{
			name: SCHDEULE_1,
			value: SCHDEULE_1,
			disabled: false
		},
		{
			name: SCHDEULE_2,
			value: SCHDEULE_2,
			disabled: false
		},
		{
			name: SCHDEULE_3,
			value: SCHDEULE_3,
			disabled: false
		}
	]

	const PAYMENT_METHODS = [
		{
			name: 'Efectivo',
			value: 'Efectivo'
		},
		{
			name: 'Credito o debito',
			value: 'Credito o debito'
		},
		{
			name: 'Tickets alimentacion',
			value: 'Tickets alimentacion'
		}
	]
	
	let paymentMethods = PAYMENT_METHODS
	let schedules = SCHEDULES

	let delivery = {
		day: '',
		hour: '',
		observations: '',
		paymentMethod: ''
	}
	let invalidDay = false
	let now = new Date()
	let year = now.getFullYear();
	let month = String(now.getMonth() + 1).padStart(2, '0');
	let day = String(now.getDate()).padStart(2, '0');

	let minDate = `${year}-${month}-${day}`;
	
	//Refresh delivery info
	$: $ShoppingCart.deliveryInfo.schedule = delivery

	function handleChangeDate(field, value){
		
		if(field == 'day'){
			
			invalidDay = false

			//Validate that selected date is not less than today
			if(value < minDate){
				invalidDay = true
				return 
			}
			let date = new Date(value)
			let weekDay = date.getDay()
			//If is Sunday disable all schedules and invalid day
			if(weekDay == 6){
				invalidDay = true
				schedules = SCHEDULES.map(schedule => {
					schedule.disabled = true
					return schedule
				})
				return addToast({ text: "Lo sentimos, pero los <b>domingos</b> no trabajamos, escoga otro dia", type: "error" });
			}

			//If value is saturday just one schedule is available
			if(weekDay == 5){
				//User should be able to select date until 09:00
				//Get the now hour
				let nowHour = new Date().getHours()
				schedules = [{
					name: SCHDEULE_SATURDAY,
					value: SCHDEULE_SATURDAY,
					disabled: nowHour >= 9
				}]
				return addToast({ text: `Los sábados entregamos únicamente de <b>${SCHDEULE_SATURDAY}</b>`, type: "info" })
			}

			schedules = SCHEDULES
			//Disable each schedule depending the hour
			let nowHour = new Date().getHours()
			schedules[0].disabled = value == minDate && nowHour >= 10
			schedules[1].disabled = value == minDate && nowHour >= 13
			schedules[2].disabled = value == minDate && nowHour >= 15
			

		}
	}

</script>


<div class="flex-grow place-items-center">

	<form action="" class="w-full">
		<div class="form-control grid gap-2 text-left">
			<InputDate
				placeholder="Día de entrega" 
				bind:value={delivery.day} 
				invalidInput={invalidDay} 
				label="Día de entrega *" 
				{minDate}
				on:changed={handleChangeDate('day', delivery.day)} />
			<label>Hora de entrega *</label>
			<select 
				class="select select-bordered w-full" 
				bind:value="{delivery.hour}" 
				disabled={delivery.day == ''}
			>
				{#each schedules as { value, disabled, name } }
					<option {value} {disabled}>{name}</option>
				{/each}
			</select>
			<label>Método de pago *</label>
			<select 
				class="select select-bordered w-full" 
				bind:value="{delivery.paymentMethod}"
			>
				{#each paymentMethods as { value, name } }
					<option {value}>{name}</option>
				{/each}
			</select>
			<label>Observaciones</label>
			<textarea class="textarea textarea-bordered textarea-sm w-full" bind:value={delivery.observations}></textarea>
			<br />
			<MandatoryFieldsWarning />
		</div>
	</form>
</div>

<style>
	.select-disabled, .select:disabled, .select[disabled]{
		background-color: revert;
	}
</style>