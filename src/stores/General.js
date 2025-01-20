import { writable } from "svelte/store"

const GeneralSettings = writable({
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
})

export const logOut = () => {
	localStorage.setItem('userLogged', JSON.stringify({}))
}

export const updateUser = (user) => {
	localStorage.setItem('userLogged', JSON.stringify(user))
}

export default GeneralSettings