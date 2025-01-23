<script>

  import { fade, fly } from "svelte/transition";
  import { Route, router } from 'tinro'; 
  import Layout from '@/Layout.svelte';
  import Home from '@/routes/home/Home.svelte';
  import Schedule from '@/routes/schedule/Schedule.svelte';
  import Delivery from '@/routes/delivery/Delivery.svelte';
  import Contact from '@/routes/contact/Contact.svelte';

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
        <Route path="/delivery"><Delivery/></Route>
        <Route path="/contact"><Contact/></Route>
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
