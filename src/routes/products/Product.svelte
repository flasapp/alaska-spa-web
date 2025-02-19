<script>
  //Utils Stores
  import { get } from "@/lib/methods/api";
  import GeneralStore from "@/stores/General";
	import { handleProductData } from "@/helpers/utils"

  //Core
  import { onMount } from "svelte";
  import { meta } from 'tinro';
  //Components
  import ProductCard from "@/components/shared/ProductCard.svelte";
  import FeaturedProducts from "@/components/sections/FeaturedProdcuts.svelte";
  
  const route = meta()  
  let product = {};
  let productsProp = []
  let title
  let fullWidth = true;

  // GeneralStore.subscribe((data) => {
    // product = data.selectedProduct;
    // productsProp = data.searchingProductsList;
  // });

  async function getProduct(id) {
    let resp = await get(`product/${id}`);
    let prod = [{}]
    if (resp.data) {
      prod = await handleProductData(resp.data)
      return prod[0];
    } else {
      	throw new Error({ text: "No se encontró el producto deseado, disculpa las molestias." });
    }
  }

  onMount(async () => {
    
    if($GeneralStore.selectedProduct?.id){
      	product = $GeneralStore.selectedProduct;
    } else{
      const sku = route.query.sku
      product = await getProduct(sku)
    } 
    if($GeneralStore.searchingProductsList?.length > 0){
      productsProp = $GeneralStore.searchingProductsList;
      title = "Productos relacionados";
    }
  });
</script>
{#if product.id}
  <ProductCard {product} {fullWidth} />
{:else}
  <div class="flex flex-col gap-4 w-72 w-1/2 m-auto mt-16">
    <div class="skeleton h-80 w-full rounded-md"></div>
    <div class="skeleton h-8 w-28 rounded-md"></div>
    <div class="skeleton h-6 w-56 rounded-md"></div>
    <div class="skeleton h-4 w-72 rounded-md"></div>
    <div class="flex gap-4 items-center">
      <div class="skeleton h-10 w-1/5 rounded-md"></div>
      <div class="skeleton h-10 w-4/5 rounded-md"></div>
    </div>
  </div>
{/if}
{#key productsProp}
  <FeaturedProducts {productsProp} {title}/>
{/key}
<style>

</style>
