<script>
  import InfoSection from "@/components/shared/InfoSection.svelte";
  import img from "@/assets/images/shcedule_page.svg";
  import SEO from "@/components/shared/SEO.svelte";

  let title = "Horario de atención"
  let breadcrumbs = [{
    name: "Horario de atención",
    url: "/horarios"
  }]
</script>

<SEO 
  title="Horario de atención | Alaska Congelados" 
  description="Conoce nuestros horarios de atención. Lunes a viernes de 9:00 a 20:00 hrs y sábados de 9:00 a 14:00 hrs."
/>

<InfoSection {title} {breadcrumbs}>
  <img src="{img}" alt="Imagen de horarios">
  <hr><br>
  <p class="font-medium">
    Estamos esperándote en nuestro local de San José 1290, Montevideo.
  </p>
  <p class="my-2">
    De lunes a viernes de 9:00 a 20:00 hrs y los sábados de 9:00 a 14:00 hrs.
  </p>
</InfoSection>

<style>
</style>
