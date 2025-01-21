<script>

  import Router, {location, link} from 'svelte-spa-router';

  import Layout from '@/Layout.svelte';
  import Home from '@/routes/home/Home.svelte';
  import Schedule from '@/routes/schedule/Schedule.svelte';
</script>



<main>
  <Layout>
    <Router
      routes={{
        '/': Home,
        '/about': Schedule,
        '/delivery': Schedule
        // '/blog/:blogName': Blog
      }} 
    />
  </Layout>

</main>

<style>
</style>
