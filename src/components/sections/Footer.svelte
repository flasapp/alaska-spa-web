<script>
  let googleMapRef = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4959.363399845666!2d-56.19131216276469!3d-34.90749644896293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81cc8d380213%3A0x1edc3e5ec048824!2sAlaska%20congelados!5e0!3m2!1ses!2suy!4v1740053040773!5m2!1ses!2suy"
  let googleMapLink = "https://maps.app.goo.gl/eVYtsUDACx6RSeHq6"
  let classBackground = "bg-base-200"
  let classBackgroundSvg = "text-base-200"
</script>

<div class="w-full relative {classBackground} mt-10" style="z-index:-1">
  <!-- Forma ondulada -->
  <div class="absolute top-0 left-0 w-full overflow-hidden leading-none z-10" style="top:-30px">
    <svg class="relative block w-full h-10 0 {classBackgroundSvg}" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor"></path>
    </svg>
  </div>
  <!-- Links of enterprise -->
  <footer class="footer p-10 text-base-content">
    <aside>
      <h6 class="footer-title">Alaska Congelados.</h6>
      <p>Dirección: <a class="link link-hover" href="{googleMapLink}" target="_blank">San José 1290 esquina Aquiles Lanza</a></p>
      <p>Teléfono: <a class="link link-hover" href="tel:+59829013519">29013519</a></p>
      <p>Email: <a class="link link-hover" href="mailto:alaskacongelados@gmail.com">alaskacongelados@gmail.com</a></p>
    </aside> 
    <nav>
      <h6 class="footer-title">Entregas.</h6>
      <a class="link link-hover" href="/delivery">Envíos gratuitos</a>
      <a class="link link-hover" href="/delivery">Barrios de entrega</a>
      <a class="link link-hover" href="/delivery">Condiciones de entrega</a>
      <a class="link link-hover" href="/medios-de-pago">Medios de pago</a>
    </nav> 
    <nav>
      <h6 class="footer-title">Información.</h6> 
      <a class="link link-hover" href="/nosotros">Horario de atención</a>
      <a class="link link-hover" href="mailto:alaskacongelados@gmail.com">Contáctanos</a>
    </nav> 
  </footer>
  <!-- Google Maps iframe -->
  <iframe 
    src="{googleMapRef}" 
    width="100%" 
    height="400" 
    style="border:0; border-radius:" 
    class="px-10 pb-10 {classBackground}"
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
  </iframe>
  <!-- Copyright -->
  <div class="container mx-auto text-center py-4">
    <p class="text-sm">
      © 2025 Alaska Congelados - Sitio desarrollador por <a href="https://flasap.com.uy" target="_blank" class="link link-hover">flasap</a>
    </p>
  </div>
  
</div>

<style>
  .footer-title{
    opacity: 1;
  }
</style>