<script>
  //Core
  import { onMount } from "svelte";
  // import { page } from "$app/stores";
  // Utils
  import { meta } from 'tinro';
  import { get } from "@/lib/methods/api";
  import GeneralStore from "@/stores/General";
  //Components

  const { VITE_IMAGES_PATH } = import.meta.env;
	const route = meta();

  let order = {};

  async function getOrder(orderId, userId) {
    let resp = await get(`order-user/${orderId}/${userId}`);
    if (resp.data) {
      if(resp.data[0] && resp.data[0].products){
        resp.data[0].products = JSON.parse(resp.data[0].products);
      }
      order = resp.data[0];
      return order;
    } else {
      throw new Error({ text: "No se encontó el pedido" });
    }
  }
  
  onMount(async () => {
    if(route.params.order && route.params.user){
      getOrder(route.params.order, route.params.user);
    } else{
      throw new Error({ text: "No se encontó el pedido" });
    }
  });

</script>
{#if order}
  <div class="mx-auto mt-4 py-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative text-center">
    <div class="text-sm breadcrumbs py-4">
      	<ul>
        	<li><a href="/">Inicio</a></li>
        	<li><a href="/perfil">Perfil</a></li>
          <li><a href="/perfil">Mis pedidos</a></li>
          {#if order.orderId}
            <li># {order?.orderId}</li>
          {/if}
      	</ul>
    </div>

    <div class="text-left">
        <h2 class="text-2xl font-medium">Pedido</h2>
      <div>
        <div class="w-full lg:w-1/2 m-auto text-left mt-4">
          <div class="bg-gradient-to-r from-violet-400 to-blue-400 p-1 rounded">
            <div class="bg-base-100 p-4 ">
              <section class="w-full flex flex-column">
                <h2 class="w-1/2 font-medium">Datos de entgrega</h2>
                <div class="w-1/2 text-right">
                  {#if order.seen == ""}
                    <span class="badge badge-outline badge-secondary">Pendiente</span>
                  {:else}
                    <span class="badge badge-outline badge-primary">Procesado</span>
                  {/if}
                </div>
              </section>
              <section class="w-full flex flex-column">
                <div class="w-full text-sm">
                  <div class="mt-4">
                    <p class="font-regular">Pedido #</p>
                    <p class="font-extralight">{order?.orderId}</p>
                  </div>
                  <div class="mt-4">
                    <p class="font-regular">Dia de entrega</p>
                    <p class="font-extralight">{order?.deliveryDate}</p>
                  </div>
                  <div class="mt-4">
                    <p class="font-regular">Horario de entrega</p>
                    <p class="font-extralight">{order?.deliverySchedule}</p>
                  <div class="mt-4">
                    <p class="font-regular">Dirección de entrega</p>
                    <p class="font-extralight">{order?.deliveryAddress}</p>
                  </div>
                </div>
              </section>

              <section class="w-full mt-4" style="max-height: 400px; overflow-y:scroll;">
                <h2 class="w-1/2 font-medium bg-base-100 w-full py-4" style="position: sticky; top:0">Productos</h2>
                <ul role="list">
                  {#if order?.products?.length}
                    {#each order.products as product, index}
                      <li class="flex py-6"  >
                        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                          <img 
                            src={VITE_IMAGES_PATH + product.img}
                            alt={product.name + product.description}
                            class="h-full w-full object-cover object-center"
                          >
                          </div>
                          <div class="ml-4 flex flex-1 flex-col text-left">
                            <div>
                              <div class="flex justify-between text-md font-regular">
                                <h3>
                                  { product.name }
                                </h3>
                                <p class="ml-4 text-sm font-regular">
                                  { product.quantity } x $ { product.amount / product.quantity }
                                </p>
                              </div>
                              <p class="mt-1 text-sm font-light">{product.description}</p>
                            </div>
                          <div class="flex flex-1 items-end justify-between text-sm">
                            <div class="flex">
                              <div class="relative flex items-center w-5/12">
                                
                              </div>
                            </div>
                            <p class="ml-4 font-md font-medium">Subtotal $ { product.amount }</p>
                          </div>
                        </div>
                      </li>
                      <hr>
                    {/each}
                    <div class="w-full mt-4">
                      <div class="flex justify-between">
                        <p class="font-medium">Total</p>
                        <p class="font-extralight">$ {order?.total}</p>
                      </div>
                    </div>
                  {/if}
                <!-- More products... -->
                </ul>
              </section>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <ProductCard {product} {fullWidth} /> -->
{/if}
<style>

</style>
