
import { writable } from "svelte/store"
// import { browser } from '$app/environment';

const defaultCart = localStorage?.getItem('cart') ? JSON.parse(localStorage?.getItem('cart')) : []
const defaultTotal = defaultCart.reduce((acc, product) => acc + product.price * product.quantity, 0)

const ShoppingCart = writable({
	products: defaultCart,
	total: defaultTotal,
	step: 0,
	deliveryInfo: {
		address: {},
		schedule: {}
	}
})

const addProduct = (product, quantity) => {
	ShoppingCart.update((cart) => {
		const existingProduct = cart.products.find(p => p.id === product.id)
		if (existingProduct) {
			existingProduct.quantity += quantity
		} else {
			cart.products.push({ ...product, quantity })
		}
		cart.total += product.price * quantity
		localStorage.setItem('cart', JSON.stringify(cart.products))
		return cart
	})
}

const calculateCartTotal = () => { 
	let total = 0
	ShoppingCart.subscribe(cart => {
		total = cart.products.reduce((acc, product) => acc + product.price * product.quantity, 0)
	})
	return total
}

const substractProduct = (product, quantity) => { 
	ShoppingCart.update((cart) => {
		const existingProduct = cart.products.find(p => p.id === product.id)
		if (existingProduct) {
			if (existingProduct.quantity === 1) { 
				cart.products = cart.products.filter(p => p.id !== product.id)
			} else {
				existingProduct.quantity -= quantity
			}
		}
		cart.total = calculateCartTotal()
		localStorage.setItem('cart', JSON.stringify(cart.products))
		return cart
	})
}

const deleteProduct = (product) => {
	ShoppingCart.update((cart) => {
		const existingProduct = cart.products.find(p => p.id === product.id)
		if (existingProduct) {
			cart.products = cart.products.filter(p => p.id !== product.id)
			cart.total -= product.price * product.quantity
		}
		return cart
	})
}

const goNextStep = () => { 
	ShoppingCart.update((cart) => {
		cart.step += 1
		return cart
	})
}

const goPrevStep = () => { 
	ShoppingCart.update((cart) => {
		cart.step -= 1
		return cart
	})
}

const restoreStepCart = () => { 
	ShoppingCart.update((cart) => {
		cart.step = 0
		return cart
	})
}

const resetCart = () => {
	ShoppingCart.update((cart) => {
		cart.products = []
		cart.total = 0
		cart.step = 0
		cart.deliveryInfo = {
			address: {},
			schedule: {}
		}
		localStorage.removeItem('cart')
		return cart
	})
}

export { ShoppingCart, addProduct, deleteProduct, substractProduct, goNextStep, goPrevStep, restoreStepCart, resetCart }