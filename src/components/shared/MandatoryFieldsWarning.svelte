<script>
	import InfoIcon from "@/components/shared/icons/Info.svelte";
	export let text = "Todos los campos con * son obligatorios.";
</script>
<div role="alert" class="alert alert-info text-sm">
	<InfoIcon />
	<span>{ text }</span>
</div>