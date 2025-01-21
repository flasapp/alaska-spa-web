<script>

  // import Router, {location, link} from 'svelte-spa-router';
  import { Router, Route, Link } from 'svelte-routing';
  import Layout from '@/Layout.svelte';
  import Home from '@/routes/home/Home.svelte';
  import Schedule from '@/routes/schedule/Schedule.svelte';
  import Delivery from '@/routes/delivery/Delivery.svelte';
</script>

<Router>
<Layout>
    <Route path="/" component={Home} />
    <Route path="/about" component={Schedule} />
    <Route path="/delivery" component={Delivery} />
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
