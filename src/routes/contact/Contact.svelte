<script>
  import InfoSection from "@/components/shared/InfoSection.svelte";
  import UserIcon from "@/components/shared/icons/User.svelte";
  import MailIcon from "@/components/shared/icons/Mail.svelte";
  import Input from "@/components/form/Input.svelte";
  import { post } from '@/lib/methods/api'
  import { addToast } from '@/stores/Toasts'
  import imgContact from '@/assets/images/contact-us.svg'
  
  let title = "Contacto"
  let breadcrumbs = [{
    name: "Contacto",
    url: "/contact"
  }]
  let contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  let invalidForm = {}
	let saving = false
  //Functions
	const restoreInvalids = () => {
		saving = false
		invalidForm = {
			name: false,
			email: false,
			subject: false,
			message: false
		}
	}
  const save = async () =>{
		restoreInvalids()
		//Validate name, lastname, email, phone, street, number, neighborhood
		if(!contact.name) return invalidForm.name = true
		if(!contact.email) return invalidForm.email = true
		if(!contact.subject) return invalidForm.subject = true
		if(!contact.message) return invalidForm.message = true
		
		
		//Save user data
		saving = true
		//Send to php backend.
		saving = false
    let response = await post('api/comments', contact)
		if(response.success) return addToast({ text: "Datos actualizados correctamente", type: "Success" })
		addToast({ text: "Ha ocurrido un error, intentelo nuevamente mas tarde", type: "Error" })

	}
</script>

<InfoSection {title} {breadcrumbs}>
  <!-- <p class="font-medium">Llena el formulario y consultanos lo que necesites</p> -->
  <form action="" class="w-full">
    <img src="{imgContact}" alt="Contáctanos">
    <div class="form-control grid gap-2 text-left p-4">
      <!-- Hola {$GeneralSettings.userLogged.name}! tu dir es {delivery.street} {delivery.number} {delivery.corner} {delivery.depto} -->
      <Input 
        placeholder="Nombre" 
        bind:value={contact.name} 
        icon="{UserIcon}" 
        invalidInput={invalidForm.name} 
        label="Nombre" 
      />

      <Input
        placeholder="Email"
        bind:value={contact.email}
        icon="{MailIcon}"
        invalidInput={invalidForm.email}
        label="Email"
      />
      <Input
        placeholder="Asunto"
        bind:value={contact.subject}
        icon="{MailIcon}"
        invalidInput={invalidForm.email}
        label="Asunto"
      />
      <label>Mensaje</label>
      <textarea class="textarea textarea-bordered" invalidInput={invalidForm.message} placeholder="Mensaje" bind:value={contact.message}></textarea>

      
      <button 
        on:click={save} 
        class="rounded-md font-medium btn btn-primary w-full mt-4"
        disabled={saving}>
        {#if saving}
          <span class="loading loading-spinner"></span>
          Enviando...
        {:else}
          Enviar
        {/if}
      </button>
    </div>
  </form>
</InfoSection>

<style>
</style>
