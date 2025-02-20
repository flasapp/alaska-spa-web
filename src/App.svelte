<script>
  //Core
  import { fade, fly } from "svelte/transition";
  import { onMount } from 'svelte';
  //Utils and stores
  import { Route, router } from 'tinro'; 
  import { get } from '@/lib/methods/api'
  import GeneralStore from '@/stores/General';
  //Components
  import Layout from '@/Layout.svelte';
  import LoadingOverlay from '@/components/shared/LoadingOverlay.svelte';
  //Routes
  import Home from '@/routes/home/Home.svelte';
  import Schedule from '@/routes/schedule/Schedule.svelte';
  import Delivery from '@/routes/delivery/Delivery.svelte';
  import Contact from '@/routes/contact/Contact.svelte';
  import Payments from '@/routes/payments/Payments.svelte';
  import Checkout from '@/routes/checkout/Checkout.svelte';
  import Product from '@/routes/products/Product.svelte';
  import Category from '@/routes/categories/Category.svelte';
  import Profile from '@/routes/profile/Profile.svelte';
  import Order from '@/routes/orders/Order.svelte';
  import RecoverPassword from '@/routes/recoverPassword/RecoverPassword.svelte';
  import Notfound from '@/routes/notFound/NotFound.svelte';

  // let isLoading = true;

  router.subscribe( _ => window.scrollTo(0, 0)); // --> To scroll up everytime route change

  onMount(async () => {
    // Get settings
    let resp = await get('settings/configs');
    // resp.fgPedidos = 0; //Toggle to test this
    $GeneralStore.blockOrders = resp.fgPedidos != 1 && resp.fgPedidos != '1';
    // isLoading = false; // Hide overlay after getting the settings
  });


</script>
<!-- <LoadingOverlay {isLoading} /> -->
<Layout>
  {#key $router.path}
    <div
      in:fly={{ y: -200, duration: 500, delay: 500 }}
      out:fly={{ x: -200, duration: 500 }}
    >
      <Route path="/"><Home /></Route>
      <Route path="/nosotros"><Schedule/></Route>
      <Route path="/horarios"><Schedule/></Route>
      <Route path="/delivery"><Delivery/></Route>
      <Route path="/contacto"><Contact/></Route>
      <Route path="/medios-de-pago"><Payments/></Route>
      <Route path="/checkout"><Checkout/></Route>
      <Route path="/productos/:name"><Product/></Route>
      <Route path="/categorias/:name"><Category/></Route>
      <Route path="/perfil"><Profile/></Route>
      <Route path="/pedidos/:order/:user"><Order/></Route>
      <Route path="/recuperar-usuario/:email"><RecoverPassword/></Route>
      <Route fallback><Notfound/></Route>
    </div>
  {/key}
</Layout>

<style>
</style>
