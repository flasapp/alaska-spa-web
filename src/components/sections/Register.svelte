<script>
  import GeneralStore from "@/stores/General"
  import LoginModal from './session/LoginModal.svelte'

  let showLoginModal = false
  let user = {}

  GeneralStore.subscribe(state => {
    if(state.userLogged.id){
      showLoginModal = false
      user = state.userLogged
    } 
  })

</script>

<section class="mx-auto w-full register-now" style="width: 100%;">
  <div class="bg-glass content">
	
	<h2 class="font-light text-gray-800 text-xl" style="letter-spacing:.5px;">Regístrate ahora y comienza a comprar <span class="text-blue-600 font-medium">fácil y rápido</span></h2>
	<button class="btn btn-secondary" on:click="{() =>showLoginModal = true}">Registrarme</button>
	
  </div>
</section>
<LoginModal bind:showMe={showLoginModal}/>

<style>
.register-now {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 50px 10%;
  /* background: linear-gradient(45deg,white, #a78bfa, #60a5fa , white); */
  background: linear-gradient(45deg,white, #cdbdfc, #bfdcff , white);

  
}
.register-now::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.8)); */
}
.content {
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 80px;
}

.register-now{
  &h2{
    letter-spacing: 1rem;
  }
}
</style>