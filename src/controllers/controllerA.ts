import { ServerResponse } from "http";
import { serviceA } from "../services/serviceA";

export default async function controllerA(res: ServerResponse, moeda: string): Promise<ServerResponse> {
	const { ok, error, data } = await serviceA(moeda);

	if (!ok) {
		res.writeHead(400, { 'Content-Type': 'application/json' })
		res.end(JSON.stringify({
			errorCode: 400,
			message: error
		}))
		return res
	}

	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(JSON.stringify({
		...data
	}))

	return res
}