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

	let isRegister = false;

</script>

<Header title="{$GeneralStore.title}">
	<CompanyInfo />
</Header>
<FeaturedProducts />
<!-- <Register /> -->
<RegisterLogin />
<CategoryHome />
<RegisterLogin {isRegister} />
