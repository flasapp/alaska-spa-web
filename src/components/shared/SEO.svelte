<script>
  export let title = "Alaska Congelados | Alimentos Congelados Uruguay";
  export let description = "Venta de alimentos congelados en Montevideo, Uruguay. Calidad, frescura y variedad para tu hogar o negocio. Entrega rápida y segura.";
  export let keywords = "congelados, alimentos, uruguay, montevideo, delivery, comida";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  
  <!-- OG Updates -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  
  <!-- Twitter Updates -->
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
</svelte:head>
