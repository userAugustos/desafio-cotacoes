import axios from "axios"

export async function serviceA(moeda: string) {

	try {
		const resp = await axios({
			method: "GET",
			url: `${process.env.SERVICE_ENDPOINT}/servico-a/cotacao`,
			params: {
				moeda
			}
		})
	
		return {
			ok: true,
			data: resp.data,
		}
	} catch (error: any) {
		// console.log(error)
		return {
			ok: false,
			error: error.message,
		}
	}
}