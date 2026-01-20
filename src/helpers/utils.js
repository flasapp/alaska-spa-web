
const { VITE_ALASKA_API } = import.meta.env


export async function handleProductData(products) {
	let data = products.map((product) => {
		return {
			id: product.id,
			title: product.name,
			description: product.description,
			image: product.image,
			price: product.price,
			category: product.categoryId,
			sale: product.offer == 1,
			url: product?.name?.replace(/\s/g, '-').toLowerCase() + '?sku=' + product.id,
			stock: product.stock != 0,
		}
	})
	return data
}
