import { writable } from "svelte/store"
import { get } from "@/lib/methods/api"

const GeneralStore = writable({
	theme: "light",
	language: "es",
	searchingProducts: false,
	searchingName: "",
	searchingProductsList: [],
	showingSideBar: false,
	title: "Alaska congelados",
	categories: [],
	neighbourhoods: [],
	userLogged: {
		address: {}
	},
	selectedProduct: {},
	selectedCategory: {},
	blockOrders: false,
})

export const getCategories = async () => {
	// const response = await fetch('http://localhost:3000/api/categories')
	let results = await get('categories')
    let categories = results?.data.map((category) => {
		return {
			id: category.idCategoria,
			name: category.nombre,
			url: '/categorias/' + category.nombre.replace(/\s/g, "-").toLowerCase() + "?catSku=" + category.idCategoria,
		};
    });

	GeneralStore.update((settings) => {
		settings.categories = categories
		return settings
	})

	return categories
}

export const logOut = () => {
	localStorage.setItem('userLogged', JSON.stringify({}))
}

export const updateUser = (user) => {
	localStorage.setItem('userLogged', JSON.stringify(user))
}

export default GeneralStore