<script>
  // import { link } from 'svelte-spa-router';
  import { links, link } from 'svelte-routing';
  

</script>

<footer class="footer p-10 bg-base-100 text-base-content ">
  <aside>
    <p>Alaska Congelados.</p>
	  <p>Dirección: San José 1290 esquina Aquiles Lanza</p>
	  <p>Teléfono: 29015219</p>
	  <p>Email: alaskacongelaods@gmail.com</p>
  </aside> 
  <nav use:links>
    <h6 class="footer-title">Información</h6>
    <!-- <Link to="/delivery">scheduleeee</Link> -->
    <a class="link link-hover" href="/delivery">Envíos gratuitos</a>
    <a class="link link-hover" href="/delivery">Barrios</a>
  </nav> 
  <nav>
    <h6 class="footer-title">Alaska</h6> 
    <a use:link class="link link-hover" href="/about">Nosotros</a>
    <a use:link class="link link-hover" href="/contact">Contáctanos</a>
  </nav> 
  <!-- <nav>
    <h6 class="footer-title">Legal</h6> 
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </nav> -->
</footer>

<style>
  .footer-title{
    opacity: 1;
  }
</style>