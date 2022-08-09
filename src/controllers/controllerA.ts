import { ServerResponse } from "http";
import { serviceA } from "../services/serviceA";

export default async function controllerA(res: ServerResponse, moeda: string): Promise<ServerResponse> {
	const data = await serviceA(moeda);

	if (!data.ok) {
		res.writeHead(500, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify({
			errorCode: 500,
			message: data.error
		}))
		return res
	}

	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(JSON.stringify({
		...data.message
	}))

	return res
}