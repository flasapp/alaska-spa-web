const { VITE_ALASKA_API } = import.meta.env

export async function get(url) {
	let options = {
		method: "GET",
		headers: { "Content-Type": "application/json" }
	}
	const responsePromise = await fetch(VITE_ALASKA_API + url, options)
	const response = await responsePromise.json()
	return response
}