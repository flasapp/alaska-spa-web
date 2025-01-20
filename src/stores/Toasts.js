import { writable } from "svelte/store"

const Toasts = writable({
	items: []
});

const addToast = (toast) => {
	const id = Math.floor(Math.random() * 10000);
	let toastToAdd = {
		...toast,
		id,
		closeMe: () => closeToast(id)
	}
	// Push the toast to the top of the list of toasts
	Toasts.update((toasts) => {
		toasts.items.push(toastToAdd);
		return toasts
	});
	if (!toastToAdd.fixed) {
		setTimeout(() => {
			closeToast(id);
		}, 10000);
	}
	
}

const closeToast = (id) => {
	Toasts.update((toasts) => { 
		const indexOfToast = toasts.items.findIndex((t) => t.id === id);
		if (indexOfToast > -1) {
			toasts.items.splice(indexOfToast, 1);
		}
		return toasts
	})
}

export { Toasts, addToast, closeToast };
