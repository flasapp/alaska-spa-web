<script>
  	import InfoSection from "@/components/shared/InfoSection.svelte";
  	import InfoIcon from "@/components/shared/icons/Info.svelte";
	import  NotFoundImg from "@/components/shared/images/404.svelte";
  	let title = "Página no encontrada";
  	let breadcrumbs = [];

</script>
<InfoSection {title} {breadcrumbs}>
	<NotFoundImg/>
	<p class="font-regular">
		La página que buscas no existe. Por favor, verifica la URL e intenta nuevamente.
	</p>
</InfoSection>

<style>

</style>
