
<script>
	// Utils and store
  	import General from '../../stores/General.js';
	//Components
	import Slider from "../shared/Slider.svelte";
	import GradientTitle from "../shared/GradientTitle.svelte";
	
	export let title = "Alaska Congelados"

	function toggleSearchingProdcuts(event){
		// event.stopPropagation();
		General.update((data)=>{
			data.searchingProducts = !data.searchingProducts;
			return data;
		})
	}

</script>

<header class="md:flex pt-16 bg-header bg-header-image lg:px-8" style="padding-left:10%; padding-right:10%;">
	<div class="w-full md:py-12 lg:py-16 inline-block align-top px-2">
		<div class="justify-center items-center text-center pb-8">
    		<div class="mx-auto flex justify-center">
				<div class="text-center ">
					<h1 class="text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
						<span class="block xl:inline"><span class="block">Bienvenido a</span>
						<span class="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">
							<GradientTitle text="{title}" class="text-left" />
							<!-- {title} -->
						</span>
						</span>
						<div class="mt-2">compra mas fácil,
							<span class="relative mt-3 whitespace-nowrap text-blue-600" style="z-index:-1">
								<svg 
									aria-hidden="true" viewBox="0 0 418 42"
									class="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
									preserveAspectRatio="none"
								>
								<path
									d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
								</path>
							</svg>
							<span class="relative">compra mejor.</span>
							</span>
						</div>
					</h1>
					
					<!-- <div class="mt-5 sm:mt-8 sm:flex sm:justify-center">
						<div class="rounded-md shadow"><a
								class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
								href="#">Get started for free 🚀
							</a>
						</div>
					</div> -->
				</div>
    		</div>
			<p class="mx-auto mt-3 max-w-xl text-lg text-gray-500 dark:text-slate-400 sm:mt-5 md:mt-5">
						Encuentra los productos que necesitas de forma rápida y sencilla. 
						<!-- <span class="text-blue-600">Get started for free 🚀</span> -->
					</p>
			<!-- <button class="text-base font-medium px-8 mt-8 btn btn-outline btn-primary bounce" style="border-radius: 25px;" on:click={toggleSearchingProdcuts}>ver categorias</button> -->
			<button class="text-base font-medium px-8 mt-8 btn btn-primary"  on:click={toggleSearchingProdcuts}>
				buscar producto 
				<svg class="bounce-arrow text-base s-JNLYuTJ9zdN9" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" class="s-JNLYuTJ9zdN9"></path><polyline points="9 6 15 12 9 18" class="s-JNLYuTJ9zdN9"></polyline></svg>
				<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hidden h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 md:inline-block"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path></svg> -->

			</button>
		</div>
		<!-- Bienvenido a 
		<GradientTitle text="{title}"  /> -->
		<slot></slot>
	</div>
</header>
	




<style>
	.header-right{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		flex-direction: column;
		align-content: center;
		justify-content: center;
	}
	.bg-header-image {
		background-repeat: round;
		background-position: center;
		mask-image: linear-gradient(black 95%, transparent) !important;
	}
	
	@-webkit-keyframes bounce {
		0% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}
	@keyframes bounce {
		0% {
    		transform: translateY(0);
		}

		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.bounce {
		-webkit-animation: bounce 2s infinite;
	}

	@-webkit-keyframes bounce-arrow {
		0% {
			transform: translate(0);
		}
		25% {
			transform: translate(-5px);
		}
		50% {
			transform: translate(5px);
		}
		75% {
			transform: translate(-5px);
		}
		100% {
			transform: translate(0);
		}
	}
	@keyframes bounce-arrow {
		0% {
			transform: translate(0);
		}
		25% {
			transform: translate(-5px);
		}
		50% {
			transform: translate(5px);
		}
		75% {
			transform: translate(-5px);
		}
		100% {
			transform: translate(0);
		}
	}

	.bounce-arrow {
		-webkit-animation: bounce-arrow 2s infinite;
	}
	
</style>