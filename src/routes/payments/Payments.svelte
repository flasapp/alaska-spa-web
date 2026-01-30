<script>
  import InfoSection from "@/components/shared/InfoSection.svelte";
  import paymentImg from "@/assets/images/payments.svg";
  import InfoIcon from "@/components/shared/icons/Info.svelte";
  import SEO from "@/components/shared/SEO.svelte";

  let title = "Medios de pago";
  let breadcrumbs = [{
    name: "Medios de pago",
    url: "/medios-de-pago"
  }];
</script>

<SEO 
  title="Medios de Pago | Alaska Congelados" 
  description="Aceptamos diversos medios de pago: Efectivo, Tarjetas de Crédito y Débito, Tickets Alimentación. Consulta opciones para envíos a domicilio."
/>

<InfoSection {title} {breadcrumbs}>
	<img src={paymentImg} alt="Medios de pago"  /><br>
	<p class="text-md">Medios de pago aceptados en <b>nuestro local:</b></p>
	<!-- Creat a list of metodos de pago -->
	<ul class="list-disc list-inside text-sm">
		<li>Efectivo</li>
		<li>Tarjetas de crédito</li>
		<li>Tarjetas de débito</li>
		<li>Ticket alimentación</li>
	</ul>

	<p class="pt-4 text-md">Medios de pago aceptados en las <b>entregas a domicilio:</b></p>
	<!-- Creat a list of metodos de pago -->
	<ul class="list-disc list-inside text-sm">
		<li>Efectivo</li>
		<li>Tarjetas de crédito</li>
		<li>Tarjetas de débito</li>
		<li>Tickets de alimentación</li>
	</ul>

	<div role="alert" class="alert alert-info mt-4">
		<InfoIcon />
		<span class="text-sm">Cuando realiza un pedido en la web le solicitaremos el medio de pago deseado.</span>
	</div>
</InfoSection>

<style>
</style>
