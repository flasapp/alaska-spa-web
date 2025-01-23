<script>
  import InfoSection from "@/components/shared/InfoSection.svelte";
  import paymentImg from "@/assets/images/payments.svg";

  let title = "Medios de pago";
  let breadcrumbs = [{
    name: "Medios de pago",
    url: "/payments"
  }];
</script>

<InfoSection {title} {breadcrumbs}>
	<img src={paymentImg} alt="Medios de pago"  /><br>
	<p class="font-medium">Medios de pago aceptados en nuestros locales:</p>
	<!-- Creat a list of metodos de pago -->
	<ul class="list-disc list-inside">
		<li>Efectivo</li>
		<li>Tarjetas de crédito</li>
		<li>Tarjetas de débito</li>
		<li>Ticket alimentación</li>
	</ul>

	<p class="font-medium">Medios de pago aceptados en las entregas a domicilio:</p>
	<!-- Creat a list of metodos de pago -->
	<ul class="list-disc list-inside">
		<li>Efectivo</li>
		<li>Tarjetas de crédito</li>
		<li>Tarjetas de débito</li>
		<li>Tickets de alimentación</li>
	</ul>
</InfoSection>

<style>
</style>
