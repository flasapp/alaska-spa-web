
const { VITE_ALASKA_API } = import.meta.env
function createRequestOptions(method) {
	const userLogged = JSON.parse(localStorage.getItem("userLogged"))
	console.log("🚀  --> userLogged:", userLogged)
	let options = {
		method,
		headers: { "Content-Type": "application/json" }
	}
	//Uncomment next code when token is fixed on the backend
	// if (userLogged?.token) options.headers.token = `${userLogged?.token}`
	return options
}

export async function get(url) {
	let options = createRequestOptions("GET")	
	console.log("🚀  --> options:", options)
	const responsePromise = await fetch(VITE_ALASKA_API + url, options)
	const response = await responsePromise.json()
	return response
}

export async function post(url, data) {
	const body = JSON.stringify(data)
	let options = createRequestOptions("POST")
	options.body = body
	const responsePromise = await fetch(VITE_ALASKA_API + url, options)
	const response = await responsePromise.json()
	return response
}

export async function put(url, data) {
	const body = JSON.stringify(data)
	let options = createRequestOptions("PUT")
	options.body = body
	const responsePromise = await fetch(VITE_ALASKA_API + url, options)
	const response = await responsePromise.json()
	return response
}