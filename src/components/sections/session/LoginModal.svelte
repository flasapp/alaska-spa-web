<script>
	import Modal from '../../shared/Modal.svelte'
	import LoginSignup from './LoginSignup.svelte'

	export let showMe = false
</script>

{#if showMe}
	<Modal on:close={() => showMe = false}>
		<LoginSignup />
	</Modal>
{/if}