<script>
	import GeneralSettings, { logOut } from "../../stores/General";
	// import { goto } from '$app/navigation';
	import UserIcon from "@/components/shared/icons/UserNoFill.svelte"

	// import { push } from 'svelte-spa-router';

	const handleLogout = () => {
		$GeneralSettings.userLogged = {}
		logOut()
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
		<b>Hola, {$GeneralSettings.userLogged.name} {$GeneralSettings.userLogged.lastName}</b>
	</li>
	<li>
		<a class="justify-between" href="/profile">
		Perfil
		<span class="badge">New</span>
		</a>
	</li>
	
	<li><button on:click="{handleLogout}">Salir/Logout</button></li>
	</ul>
</div>
<style>

</style>