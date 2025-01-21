<script>
  import InfoSection from "@/components/shared/InfoSection.svelte";
  import img from "@/assets/images/shcedule_page.svg";
  let title = "Horario de atención"
  let breadcrumbs = [{
    name: "Horario de atención",
    url: "/schedule"
  }]
</script>

<InfoSection {title} {breadcrumbs}>
  <div class="justify-center">
    <img src="{img}" alt="Imagen de horarios">
  </div>
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
