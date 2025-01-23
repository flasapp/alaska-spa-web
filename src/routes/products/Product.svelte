<script>
  //Utils Stores
  import { get } from "@/lib/methods/api";
  import GeneralStore from "@/stores/General";
  //Core
  import { onMount } from "svelte";
  import {meta} from 'tinro';
  //Components
  import ProductCard from "@/components/shared/ProductCard.svelte";
  import FeaturedProducts from "@/components/sections/FeaturedProdcuts.svelte";
  
  const route = meta();  
  let product = {};
  let productsProp = [];
  let title
  let fullWidth = true;

  GeneralStore.subscribe((data) => {
    product = data.selectedProduct;
    productsProp = data.searchingProductsList;
  });

  async function getProduct(id) {
    let resp = await get(`products/${id}`);
    if (resp) {
    console.log("🚀  --> resp:", resp)
		let prod = resp.data.map( (product)=>{
			return {
				id: product.idProducto,
				title: product.nombre,
				description: product.descripcion,
				image: product.foto,
				price: product.precio,
				category: product.nombre_categoria,
				sale: product.oferta == 1,
				url: product?.nombre?.replace(/\s/g, '-').toLowerCase() + '?sku=' + product.idProducto
			}	
		})
		console.log("product = ",product)
		product = prod[0];
      	return product;
    } else {
      	throw new Error({ text: "No se encontró el producto deseado, disculpa las molestias." });
    }
  }

  onMount(async () => {
    
    if($GeneralStore.selectedProduct?.id){
      	product = $GeneralStore.selectedProduct;
    } else{
		console.log("route = ",route)
		const sku =route.query.sku;
		console.log("🚀  --> sku:", sku)
		getProduct(sku)
    } 

    if($GeneralStore.searchingProductsList?.length > 0){
		productsProp = $GeneralStore.searchingProductsList;
		title = "Productos relacionados";
    }
  });
</script>
{#if product?.id}
  <ProductCard {product} {fullWidth} />
{/if}

<!-- <RelatedProducts {products} /> -->
{#key productsProp}
  <FeaturedProducts {productsProp} {title}/>
{/key}
<style>

</style>
