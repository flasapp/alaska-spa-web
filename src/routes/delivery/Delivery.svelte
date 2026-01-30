<script>
	import { get } from "@/lib/methods/api";
	import GeneralStore from "../../stores/General";
	import { onMount } from "svelte";
	import InfoSection from "@/components/shared/InfoSection.svelte";
	import InfoIcon from "@/components/shared/icons/Info.svelte";
	import mapImg from "@/assets/images/map.svg";
	import SEO from "@/components/shared/SEO.svelte";

	let neighbourhoods = [];
	let neighbourhoodsPromise = null;
	let title = "Información de envíos";
	let breadcrumbs = [
		{
			name: "Envíos",
			url: "/delivery",
		},
	];

	async function getneighbourhoods() {
		let resp = await get("settings/neighbourhoods");
		neighbourhoods = resp?.data;
		return neighbourhoods;
	}

	onMount(async () => {
		// if ($GeneralStore.neighbourhoods.length == 0) {
		neighbourhoodsPromise = getneighbourhoods();
		// }
	});
</script>

<SEO 
	title="Información de envíos | Alaska Congelados" 
	description="Envíos sin costo en Montevideo. Consulta nuestros horarios de entrega y zonas de cobertura."
/>

<InfoSection {title} {breadcrumbs}>
	<img src={mapImg} /><br />
	<p class="font-regular">
		Se realizan <span class="font-bold">envíos sin costo</span> en todo montevideo.
		Nuestro horario de envíos a domicilio es entre las 11:00 hrs y las 20:00
		hrs
	</p>
	<p class="my-2">
		Los envíos se realizan en las siguientes franjas horarias:
	</p>
	<ul class="ml-4 schedules">
		<li>
			11 a 14 hrs
			<div
				class="tooltip tooltip-right"
				data-tip="Para este horario el pedido debe realizarse antes de las 10hrs."
			>
				<InfoIcon />
			</div>
		</li>
		<li>
			14 a 17 hrs
			<div
				class="tooltip tooltip-right"
				data-tip="Para este horario el pedido debe realizarse antes de las 13hrs."
			>
				<InfoIcon />
			</div>
		</li>
		<li>
			17 a 20 hrs
			<div
				class="tooltip tooltip-right"
				data-tip="Para este horario el pedido debe realizarse antes de las 1530hrs."
			>
				<InfoIcon />
			</div>
		</li>
	</ul>

	<div role="alert" class="alert alert-info mt-4">
		<InfoIcon />
		<span>Aceptamos tarjetas de crédito/débito a domicilio</span>
	</div>
	<div class="divider divider-primary mt-8">Mínimo de compra por Barrio</div>
	{#await neighbourhoodsPromise}
		<div class="w-full" style="min-height: 50px">
			<div class="flex gap-4 items-center">
				<div class="skeleton h-20 w-1/5 rounded-md"></div>
				<div class="skeleton h-20 w-1/5 rounded-md"></div>
				<div class="skeleton h-20 w-1/5 rounded-md"></div>
				<div class="skeleton h-20 w-1/5 rounded-md"></div>
			</div>
			<br />
			<div class="flex gap-4 items-center">
				<div class="skeleton h-20 w-1/5 rounded-md"></div>
				<div class="skeleton h-20 w-1/5 rounded-md"></div>
				<div class="skeleton h-20 w-1/5 rounded-md"></div>
				<div class="skeleton h-20 w-1/5 rounded-md"></div>
			</div>
		</div>
	{:then}
		<div
			class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-between bg-base-100 rounded mt-8"
		>
			{#each neighbourhoods as neighbourhood}
				<!-- <div class="bg-gradient-to-r from-violet-400 to-violet-400 p-1 rounded"> -->
				<div
					class="neigh-container p-4 bg-opacity-60 rounded-xl hover:bg-opacity-80 hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-102"
				>
					<h3
						class="text-md font-regular w-100 text-left product-title"
					>
						{neighbourhood.title}
					</h3>
					<div
						class="w-full font-regular text-sm"
						style="letter-spacing: .5px;"
					>
						$ {neighbourhood.amount}
					</div>
				</div>
			{/each}
		</div>

		<!-- <div class="md:w-2/4 text-center m-auto overflow-x-auto">
		<table class="table">
			<thead>
			<tr class="text-center">
				<th class="">Barrio</th>
				<th class="">Monto mínimo</th>
			</tr>
			</thead>
			<tbody>
			{#each neighbourhoods as neighbourhood}
				<tr class="text-center">
				<td class="">{neighbourhood.title}</td>
				<td class="">{neighbourhood.amount}</td>
				</tr>
			{/each}
			</tbody>
		</table>
		</div> -->
	{:catch error}
		<p>{error.text}</p>
	{/await}
</InfoSection>

<style>
	.neigh-container {
		background-color: #f7fafc;
		transition: all 0.3s ease-in-out;
	}
	.neigh-container:hover {
		background-color: #edf2f7;
	}
	.schedules li {
		display: flex;
		gap: 1rem;
		align-items: center;
		margin-top: 0.5rem;
	}
</style>
