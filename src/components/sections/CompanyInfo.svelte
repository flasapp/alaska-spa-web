<script>
  import TypingText from "../shared/TypingText.svelte";
  import InfoItem from "../shared/InfoItem.svelte";

  let info = [
    {
      title: "Envíos a domicilio",
      description: "Entregas rápidas y seguras.",
      image:
        '<svg  xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-truck-delivery"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" /><path d="M3 9l4 0" /></svg>',
      link: "/delivery",
      bgClass: "bg-base-100",
      txClass:
        "bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent",
    },
    {
      title: "Modalidad de pagos",
      description: "Múltiples opciones disponibles.",
      image:
        '<svg  xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-credit-card-pay"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" /><path d="M3 10h18" /><path d="M16 19h6" /><path d="M19 16l3 3l-3 3" /><path d="M7.005 15h.005" /><path d="M11 15h2" /></svg>',
      link: "/medios-de-pago",
      bgClass: "bg-base-100",
      // bgClass: 'bg-gradient-to-r from-violet-100 to-indigo-200',
      txClass:
        "bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent",
    },
    {
      title: "Horarios de atención",
      description: "Siempre listos para ayudarte.",
      image:
        '<svg  xmlns="http://www.w3.org/2000/svg" width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>',
      link: "/horarios",
      bgClass: "bg-base-100",
      // bgClass: 'bg-gradient-to-r from-violet-100 to-violet-300',
      txClass:
        "bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent",
    },
  ];
</script>

<div class="mx-auto py-8 w-full max-w-7xl">
  <div
    class="bg-gradient-to-r from-violet-50 to-blue-50 border border-white/20 rounded-3xl p-8 sm:p-12"
  >
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-violet-100"
    >
      {#each info as item}
        <InfoItem {item} />
      {/each}
    </div>
  </div>
</div>

<style>
</style>
