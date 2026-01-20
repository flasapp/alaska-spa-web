import { get } from "@/lib/methods/api"


export async function getFeaturedProducts() {
	let resp = await get("products-featured")
	let products = resp.data.map((product) => {
		return {
			id: product.id,
			title: product.name,
			description: product.description,
			image: product.img,
			price: product.price,
			category: product.categoryName,
			sale: product.offer == 1,
			url: product?.name?.replace(/\s/g, '-').toLowerCase() + '?sku=' + product.id,
			stock: product.stock != 0
		}
	})
	return products
}
