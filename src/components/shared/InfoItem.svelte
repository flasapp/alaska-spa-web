<script>
  export let item = {
    title: "",
    description: "",
    image: "",
    link: "",
  };
</script>

<div
  class="p-1 bg-gradient-to-r from-violet-400 to-blue-400 info-item rounded shadow-md hover:shadow-xl {item.bgClass}"
>
  <!-- <figure>{@html item.image}</figure> -->
  <div class="card-body bg-base-100">
    <div style="
    display: flex;
    gap: 1rem;
    align-items: center;
    min-width: 300px;
">
      {@html item.image}
      <h2
      class="text-2xl font-regular {item.txClass}"
    >
      <!-- Gradient effect Text 
				<span class="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent s-ZNDfrm2Xj49P"><div class="s-35smNsNE2XDi"><span class="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient s-35smNsNE2XDi">{item.title}</span></div><GradientTitle></span> 
			-->
      {item.title}
    </h2>
    </div>
    
    <p>{item.description}</p>
    <div class="card-actions justify-end">
      <a class="link link-primary inline-flex link-hover" href={item.link}>
        conocer más
        <svg
          class="text-base"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="9 6 15 12 9 18" /></svg
        >
      </a>
    </div>
  </div>
</div>

<style>
  .info-item {
    transition: all 0.3s;
  }
  .info-item:hover {
    transform: translateY(-5px);
  }
  .card-body{
    padding: 1rem !important;
  }
</style>
