<script>
	// Utils
	import GeneralStore from "@/stores/General";
	import Header from "@/components/sections/Header.svelte";
	import ProductCard from "@/components/shared/ProductCard.svelte";
	import FeaturedProducts from "@/components/sections/FeaturedProdcuts.svelte";
	import CompanyInfo from "@/components/sections/CompanyInfo.svelte";
	import Register from "@/components/sections/Register.svelte";
	import RegisterLogin from "@/components/sections/RegisterLogin.svelte";
	import CategoryHome from "@/components/sections/CategoryHome.svelte";
	import SEO from "@/components/shared/SEO.svelte";

	let isRegister = false;

</script>

<SEO 
	title="Alaska Congelados | Inicio" 
	description="Bienvenido a Alaska Congelados. La mejor calidad en alimentos congelados con envío a domicilio en Montevideo."
/>

<Header>
	<CompanyInfo />
</Header>
<FeaturedProducts />
<!-- <Register /> -->
<RegisterLogin />
<CategoryHome />
<RegisterLogin {isRegister} />
