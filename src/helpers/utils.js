
const { VITE_ALASKA_API } = import.meta.env


export async function handleProductData(products) {
	let data = products.map( (product)=>{
		return {
			id: product.idProducto,
			title: product.nombre,
			description: product.descripcion,
			image: product.foto,
			price: product.precio,
			category: product.nombre_categoria,
			sale: product.oferta == 1,
			url: product?.nombre?.replace(/\s/g, '-').toLowerCase() + '?sku=' + product.idProducto,
			stock: product.stock != 0,
		}	
	})
	return data
}
