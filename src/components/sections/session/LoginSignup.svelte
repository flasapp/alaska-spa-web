<script>
	import GeneralStore from "@/stores/General"
	import Login from './Login.svelte';
	import Signup from './Signup.svelte';
	let active_tab = 0
	const leftMarginTab = 1
	let position = leftMarginTab

</script>
<div role="tablist" class="tabs tabs-boxed bg-base-100" style="max-width: 500px; margin:auto; position: relative;">
	<div class="highlight rounded bg-gradient-to-r from-violet-400 to-blue-400" style="--position: {position}"></div>
	<a role="tab" class="tab {active_tab == 0 ? 'tab-active' : ''}" on:click={() => {active_tab = 0; position = leftMarginTab}}>Ingresar</a>
	<a role="tab" class="tab {active_tab == 1 ? 'tab-active' : ''}" on:click={() => {active_tab = 1; position = 50}}>Registrarme</a>
</div>
<br>

<div class="pointer-events-auto w-full m-auto" >
	{#if active_tab == 0}
		<Login />
	{/if}
	{#if active_tab == 1}
		<Signup />
	{/if}
</div>