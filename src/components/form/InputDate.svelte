<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let  invalidInput
	export let  placeholder
	export let  value
	export let icon
	export let label
	export let minDate
	export let canType = false

	let type = 'date'

	const handleKeydown = e => {
		return false
	};

	const handleInput = e => {
		// in here, you can switch on type and implement
		// whatever behaviour you need
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
		dispatch('changed', {
			value
		});
	};

</script>

{label}
<label class="input input-bordered flex items-center gap-2 {invalidInput ? 'input-error' : ''}">
	<svelte:component this={icon} />
	<!-- bind:value={value} -->
	<input type="date" onkeydown="{handleKeydown}" min={minDate} {placeholder} oninput={handleInput} value={value} class="grow"   />
</label>

<style>
input[type="date"]::-webkit-datetime-edit, input[type="date"]::-webkit-inner-spin-button, input[type="date"]::-webkit-clear-button {
  color: #fff;
  position: relative;
}

input[type="date"]::-webkit-datetime-edit-year-field{
  position: absolute !important;
  border-left:1px solid #8c8c8c;
  padding: 2px;
  padding-left: 8px;
  color:#000;
  left: 68px;
}

input[type="date"]::-webkit-datetime-edit-month-field{
  position: absolute !important;
  border-left:1px solid #8c8c8c;
  padding: 2px;
  padding-left: 8px;
  color:#000;
  left: 30px;
}


input[type="date"]::-webkit-datetime-edit-day-field{
  position: absolute !important;
  color:#000;
  padding: 2px;
  left: 4px;
  
}
</style>