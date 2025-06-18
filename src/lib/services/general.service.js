import { get } from "@/lib/methods/api"


export async function getFeaturedProducts() {
	let resp = await get("products-featured")
    let products = resp.data.map( (product)=>{
		return {
			id: product.idProducto,
			title: product.nombre,
			description: product.descripcion,
			image: product.foto,
			price: product.precio,
			category: product.nombre_categoria,
			sale: product.oferta == 1,
			url: product?.nombre?.replace(/\s/g, '-').toLowerCase() + '?sku=' + product.idProducto,
			stock: product.stock != 0
		}	
	})
	return products
}
