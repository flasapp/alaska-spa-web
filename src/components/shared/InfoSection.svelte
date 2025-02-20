<script>
  export let title
  export let breadcrumbs = []
</script>
<div class="mx-auto py-12 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
  <div class="text-sm breadcrumbs py-4">
    <ul>
      <li>
        <a href="/">Inicio</a>
      </li>
      {#each breadcrumbs as breadcrumb}
        <li>
          <a href={breadcrumb.url}>{breadcrumb.name}</a>
        </li>
      {/each}
    </ul>
  </div>
  
  <section class="text-left">
    <h2 class="text-2xl font-medium">{title}</h2>
		<div>
      <div class="w-full lg:w-1/2 m-auto text-left mt-4">
				<div class="bg-gradient-to-r from-violet-400 to-blue-400 p-1 rounded">
          <div class="bg-base-100 p-4">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </section>

</div>


<style>
  .title-section{
    color: white;
    overflow: hidden;
    text-align: center;
    width: 100%;
  }
  .title-section h2{
    padding: 8px;
    margin: auto;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
</style>
