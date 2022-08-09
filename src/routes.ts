import { IncomingMessage, ServerResponse } from "http";
import controllerA from "./controllers/controllerA";
import controllerB from "./controllers/controllerB";
import generateError from "./utils/generateError";

export default async function routes(req: IncomingMessage, res: ServerResponse): Promise<any> {
	if (!req.url) {
		return generateError(res, 400, 'URL missing')
	}

	const url = new URL(req.url, `http://${req.headers.host}`);

	const parameter: string = url.searchParams.keys().next().value 

	switch (req.method) {
		case 'GET':
			switch (parameter) {
				case 'moeda':
					const moeda = url.searchParams.get(parameter)
					return await controllerA(res, moeda!)
					
				case 'curr':
					const curr = url.searchParams.get(parameter)
					return await controllerB(res, curr!)
				default:
					res.writeHead(404, { 'Content-Type': 'application/json' })
					res.end(JSON.stringify({
						error: 404,
						message: `There is no endpoint "${parameter}" here, :(`
					}))
					break;
			}
			break;

		case 'POST':
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify({
				message: "POST"
			}))
			break;
	}
}