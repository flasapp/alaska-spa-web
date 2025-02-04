<script>
	import { router } from 'tinro';
	import GeneralStore, { logOut } from "@/stores/General";
	import { ShoppingCart } from "@/stores/Cart";
	import UserIcon from "@/components/shared/icons/UserNoFill.svelte"

	// import { push } from 'svelte-spa-router';

	const handleLogout = () => {
		$GeneralStore.userLogged = {}
		logOut()
		$ShoppingCart.step = 0;
		router.goto(`/`)
		// push('/')
	}
</script>
<div class="dropdown dropdown-end">
	<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
	<!-- <div class="w-10 rounded-full">
		<img alt="Tailwind CSS Navbar component" src="/assets/images/avatar.png" />
	</div> -->
	<UserIcon />
	</div>
	<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-300 rounded-box w-52 shadow-xl">
	<li>
		<b>Hola, {$GeneralStore.userLogged.name} {$GeneralStore.userLogged.lastName}</b>
	</li>
	<li>
		<a class="justify-between" href="/perfil">
		Perfil
		<span class="badge">New</span>
		</a>
	</li>
	
	<li><button on:click="{handleLogout}">Salir/Logout</button></li>
	</ul>
</div>
<style>

</style>