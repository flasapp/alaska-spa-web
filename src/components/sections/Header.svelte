<script>
	// Utils and store
	import General from "../../stores/General.js";
	import GradientTitle from "../shared/GradientTitle.svelte";
	import heroImage from "@/assets/images/Hero1.png";

	export let title = "Alaska Congelados";

	function toggleSearchingProdcuts(event) {
		General.update((data) => {
			data.searchingProducts = !data.searchingProducts;
			return data;
		});
	}
</script>

<header class="relative bg-header bg-header-image overflow-hidden" style="">
	<div
		class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:pt-20 md:pb-12 lg:pt-32 lg:pb-24"
	>
		<div class="md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
			<!-- Left Column: Text & Actions -->
			<div
				class="text-left max-w-2xl text-animation-header z-10 relative"
			>
				<h1
					class="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-slate-900 leading-[1.1]"
				>
					<span class="block text-slate-600">Bienvenido a</span>
					<span
						class="block bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"
					>
						{title}
					</span>
					<div class="block mt-2">
						compra mas fácil,
						<span class="relative">
							<span class="relative z-10 text-blue-600"
								>compra mejor.</span
							>
							<!-- Decorator line could go here if needed as an absolute svg -->
							<svg
								aria-hidden="true"
								viewBox="0 0 418 42"
								class="absolute top-[85%] left-0 w-full h-[0.4em] fill-pink-400/50 -z-0"
								preserveAspectRatio="none"
							>
								<path
									d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
								>
								</path>
							</svg>
						</span>
					</div>
				</h1>

				<p
					class="mt-6 text-xl text-slate-500 max-w-lg leading-relaxed sub-text-animation-header"
				>
					Encuentra los productos que necesitas de forma rápida y
					sencilla. Calidad premium directamente a tu mesa.
				</p>

				<div
					class="mt-10 flex items-center gap-6 button-animation-header"
				>
					<button
						class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold text-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/30"
						on:click={toggleSearchingProdcuts}
					>
						buscar producto
						<svg
							class="w-5 h-5 bounce-arrow-x"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path d="M5 12h14M12 5l7 7-7 7" /></svg
						>
					</button>
					<button
						class="text-slate-600 hover:text-slate-900 font-medium text-lg border-b-2 border-transparent hover:border-slate-300 transition-all"
					>
						Ver ofertas
					</button>
				</div>

				<!-- Features Section -->
				<div
					class="mt-12 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 sub-text-animation-header delay-300"
				>
					<div class="flex items-center gap-2">
						<div
							class="p-1.5 rounded-full bg-blue-50 text-blue-600"
						>
							<svg
								class="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/></svg
							>
						</div>
						<span class="text-sm font-medium text-slate-700"
							>100% Calidad</span
						>
					</div>
					<div class="flex items-center gap-2">
						<div
							class="p-1.5 rounded-full bg-blue-50 text-blue-600"
						>
							<svg
								class="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								><path
									d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
								/><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 012-2 7 7 0 0114 0"
								/></svg
							>
						</div>
						<span class="text-sm font-medium text-slate-700"
							>Envío Grátis</span
						>
					</div>
					<div class="flex items-center gap-2">
						<div
							class="p-1.5 rounded-full bg-blue-50 text-blue-600"
						>
							<svg
								class="w-5 h-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/></svg
							>
						</div>
						<span class="text-sm font-medium text-slate-700"
							>Cadena de Frío</span
						>
					</div>
				</div>
			</div>

			<!-- Right Column: Image -->
			<div class="mt-12 md:mt-0 relative z-0 perspective-1000">
				<div
					class="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-gradient-to-tr from-slate-200 to-slate-100 shadow-2xl border-4 border-white transform transition-all duration-500 ease-out hover:rotate-0 rotate-3 hover:scale-[1.02] cursor-pointer group"
				>
					<!-- Placeholder Image -->
					<div
						class="w-full h-full flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors"
					>
						<img
							src={heroImage}
							alt="Hero Image"
							class="w-full h-full object-cover"
						/>
						<svg
							class="w-24 h-24"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
							></path></svg
						>
					</div>
				</div>
				<!-- Removed floating badges as requested -->
			</div>
		</div>

		<!-- Slot for CompanyInfo -->
		<div class="mt-16 sm:mt-24">
			<slot></slot>
		</div>
	</div>
</header>

<style>
	.bg-header-image {
		/* Adjusted transparency for cleaner look with new layout */
		background-repeat: no-repeat;
		background-size: cover;
	}

	.text-animation-header {
		animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	.sub-text-animation-header {
		animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	.button-animation-header {
		animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
		opacity: 0;
		transform: translateY(20px);
	}

	@keyframes fade-in-up {
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.bounce-arrow-x {
		animation: bounce-x 1.5s infinite;
	}

	@keyframes bounce-x {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(3px);
		}
	}
</style>
