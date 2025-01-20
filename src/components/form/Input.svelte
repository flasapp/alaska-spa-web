<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let  invalidInput = '';
	export let  placeholder = '';
	export let  value;
	export let type = 'text';
	export let icon = '';
	export let label = ''

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
	<input {type} {placeholder} on:input={handleInput} value={value} class="grow"   />
</label>