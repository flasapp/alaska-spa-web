<script>

  import { fade, fly } from "svelte/transition";
  import { Route, router } from 'tinro'; 
  import Layout from '@/Layout.svelte';
  import Home from '@/routes/home/Home.svelte';
  import Schedule from '@/routes/schedule/Schedule.svelte';
  import Delivery from '@/routes/delivery/Delivery.svelte';
  import Contact from '@/routes/contact/Contact.svelte';
  import Payments from '@/routes/payments/Payments.svelte';
  import Checkout from '@/routes/checkout/Checkout.svelte';
  import Product from '@/routes/products/Product.svelte';
  import Category from '@/routes/categories/Category.svelte';

  router.subscribe( _ => window.scrollTo(0, 0));

</script>

  <Layout>
    {#key $router.path}
      <div
        in:fly={{ y: -200, duration: 500, delay: 500 }}
        out:fly={{ x: -200, duration: 500 }}
      >
        <Route path="/"><Home /></Route>
        <Route path="/about"><Schedule/></Route>
        <Route path="/schedule"><Schedule/></Route>
        <Route path="/delivery"><Delivery/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/payments"><Payments/></Route>
        <Route path="/checkout"><Checkout/></Route>
        <Route path="/products/:name"><Product/></Route>
        <Route path="/categories/:name"><Category/></Route>
        
      </div>
    {/key}
  </Layout>

<!-- <main>
  NAV:
  <nav>
    <a  href="/">Home</a>
    <a  href="/about">About</a>
  </nav>

  <button class="btn">Daisy button</button>

  <Router routes={{
    '/': Home,
    '/about': Schedule
    // '/blog/:blogName': Blog
  }} />

  <hr>
  LOCATION : {$location}

</main> -->

<style>
</style>
