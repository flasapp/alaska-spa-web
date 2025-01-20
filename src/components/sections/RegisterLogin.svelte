<script>
  import GeneralSettings from "@/stores/General"
  import LoginModal from './session/LoginModal.svelte'

  export let isRegister = true
  let showLoginModal = false
  let user = {}

  GeneralSettings.subscribe(state => {
    if(state?.userLogged?.id){
      showLoginModal = false
      user = state.userLogged
    } 
  })

  
</script>

<section class="bg-header bg-header-image {isRegister ? 'bg-left' : 'bg-right'}" style="mask-image:linear-gradient(transparent, black 15%, white 85%, transparent) !important">
  <div class="w-full text-center ">
    <section class="signup-section {isRegister ? 'signup-left' : 'signup-right'}">
        {#if isRegister}
          <h2 class="text-2xl">Regístrate y comienza a comprar en nuestra tienda</h2>
          <p class="text-md font-regular">Descubre ofertas exclusivas y productos únicos</p>
          <button on:click="{() =>showLoginModal = true}" class="glow-button bg-violet-400">Regístrate ahora</button>
        {:else}
          <h2 class="text-2xl">Ingresa y comienza a comprar en nuestra tienda</h2>
          <p class="text-md font-regular">Inicia sesión y haz tu compra fácil y rápido</p>
          <button on:click="{() =>showLoginModal = true}" class="glow-button bg-violet-400">Iniciar sesión</button>
        {/if}
    </section>
  </div>
</section>
<LoginModal bind:showMe={showLoginModal}/>

<style>
  .signup-section {
        text-align: center;
        padding: 60px 20px;
        max-width: 600px;
        margin: 0 auto;
    }
    /* h2 {
        color: #333;
        font-size: 2em;
        margin-bottom: 20px;
        animation: fadeInUp 0.6s ease-out;
        line-height: 2.5rem;
    } */
    p {
        color: #666;
        font-size: 1em;
        margin-bottom: 30px;
        animation: fadeInUp 0.6s ease-out 0.2s both;
    }
    .glow-button {
        display: inline-block;
        padding: 12px 36px;
        /* background-color: #a78bfa;  */
        color: white;
        text-decoration: none;
        font-size: 1.1em;
        border-radius: 30px;
        position: relative;
        overflow: hidden;
        animation: fadeInUp 0.6s ease-out 0.4s both;
        transition: all 0.3s ease;
    }
    .glow-button:hover {
        box-shadow: 0 0 15px rgba(167, 139, 250, 0.7), /* violet glow */
                    0 0 30px rgba(191, 219, 254, 0.5); /* blue glow */
        transform: translateY(-2px);
    }
    .glow-button::after {
        content: "→";
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        opacity: 0;
        transition: all 0.3s ease;
    }
    .glow-button:hover::after {
        opacity: 1;
        right: 15px;
    }

    .bg-left{
      background-position: left;
    }
    .bg-right{
      background-position: right;
    }
    .signup-left{
      text-align: left;
      margin: 0 10%;
    }
    .signup-right{
      text-align: right;
      margin-right: 10%;
    }
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>