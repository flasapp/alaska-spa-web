<script>
  import Router, {location, link} from 'svelte-spa-router';
  import { routes } from '@/routes/routes';
  console.log("🚀  --> routes:", routes)
</script>

<Router {routes} />