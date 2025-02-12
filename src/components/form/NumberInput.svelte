<script>
    export let value = ''; // Valor inicial del input
    export let placeholder = ''; // Placeholder opcional

    // Función para validar que solo se ingresen números
    function handleInput(event) {
        value = event.target.value.replace(/[^0-9]/g, '');
        if (value.length === 1) dispatch('nextFocus'); // Notifica al padre que se debe enfocar el siguiente input
    }

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>

<input
    type="text"
    value={value}
    on:input={handleInput}
    placeholder={placeholder}
	class="input-code"
	maxlength="1"
/>

<style>
/* Delete arrows */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield; /* Para Firefox */
}
.input-code{
	width: 5rem;
	height: 5rem;
	text-align: center;
	font-size: 1.5rem;
	border: 1px solid #e2e8f0;
	border-radius: 0.375rem;
}
</style>