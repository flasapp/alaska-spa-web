<script>

  import { fade, fly } from "svelte/transition";
  import { Router, Route } from 'svelte-routing';
  import Layout from '@/Layout.svelte';
  import Home from '@/routes/home/Home.svelte';
  import Schedule from '@/routes/schedule/Schedule.svelte';
  import Delivery from '@/routes/delivery/Delivery.svelte';
  import Contact from '@/routes/contact/Contact.svelte';

</script>

<Router 
  viewtransition="{() => ({ fn: fade, duration: 300, delay: 500 })}"
  >
  <Layout>
    <!-- {#key currentPath}
      <div
        in:fly={{ x: -200, duration: 300, delay: 300 }}
        out:fly={{ x: 200, duration: 300 }}
      >
        <Route path="/" component={Home} />
        <Route path="/about" component={Schedule} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/contact" component={Contact} />
      </div>
    {/key} -->
      <Route path="/" component={Home} />
      <Route path="/about" component={Schedule} />
      <Route path="/delivery" component={Delivery} />
      <Route path="/contact" component={Contact} />
  </Layout>
</Router>
<!-- <main>
  NAV:
  <nav>
    <a use:link href="/">Home</a>
    <a use:link href="/about">About</a>
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
