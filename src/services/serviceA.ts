import axios from "axios"

export async function serviceA(moeda: string) {

	try {
		const resp = await axios({
			method: "GET",
			url: process.env.SERVICE_A_ENDPOINT,
			params: {
				moeda
			}
		})
	
		return {
			ok: true,
			message: resp.data,
		}
	} catch (error: any) {
		console.log(error)
		return {
			ok: false,
			error: error.message,
		}
	}
}