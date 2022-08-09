import axios from "axios"

export async function serviceB(curr: string) {
	try {
		const resp = await axios({
			method: "GET",
			url: `${process.env.SERVICE_ENDPOINT}/servico-b/cotacao`,
			params: {
				curr
			}
		})
	
		return {
			ok: true,
			data: resp.data,
		}
	} catch (error: any) {
		console.log(error)
		return {
			ok: false,
			error: error.message,
		}
	}
}