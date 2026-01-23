<script>
  export let item = {
    title: "",
    description: "",
    image: "",
    link: "",
  };
</script>

<div
  class="flex gap-4 items-start p-4 hover:bg-white/50 rounded-xl transition-all duration-300 group"
>
  <div class="flex-shrink-0">
    <div
      class="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 border border-slate-100"
    >
      {@html item.image}
    </div>
  </div>
  <div class="flex flex-col gap-1 text-left">
    <h3 class="text-md font-bold text-slate-800 leading-tight">
      {item.title}
    </h3>
    <p class="text-slate-500 text-sm leading-relaxed">
      {item.description || "Información disponible"}
    </p>
    <a
      href={item.link}
      class="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-1 hover:gap-2 transition-all"
    >
      Conocer más
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M13 5l7 7l-7 7" />
      </svg>
    </a>
  </div>
</div>

<style>
  /* No custom CSS needed, tailored with Tailwind */
</style>
