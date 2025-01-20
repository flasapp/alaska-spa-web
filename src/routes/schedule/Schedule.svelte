<script>
  import InfoSection from "@/components/shared/InfoSection.svelte";
  let title = "Horario de atención"
  let breadcrumbs = [{
    name: "Horario de atención",
    url: "/schedule"
  }]
</script>

<InfoSection {title} {breadcrumbs}>
  <p class="font-medium">
    Estamos esperándote en nuestro local de San José 1290, Montevideo.
  </p>
  <p class="my-2">
    De lunes a viernes de 9:00 a 20:00 hrs y los sábados de 9:00 a 14:00 hrs.
  </p>
</InfoSection>

<style>
</style>
