<script>

  import Router, {location, link} from 'svelte-spa-router';

  import Layout from '@/Layout.svelte';
  import Home from '@/routes/home/Home.svelte';
  import Schedule from '@/routes/schedule/Schedule.svelte';
</script>


<Layout>
  <Router routes={{
    '/': Home,
    '/about': Schedule,
    '/delivery': Schedule
    // '/blog/:blogName': Blog
  }} />
</Layout>
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
