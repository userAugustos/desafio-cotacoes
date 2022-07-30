import { IncomingMessage, ServerResponse } from "http";
import { serviceA } from "./services/serviceA";
import generateError from "./utils/generateError";
import generateResponse from "./utils/generateResponse";

export default async function routes(req: IncomingMessage, res: ServerResponse) {
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
					const response = await serviceA(moeda!)

					return response.ok ? generateResponse(res, response) : generateError(res, response.error)
				case 'curr':
					res.writeHead(200, { 'Content-Type': 'application/json' })
					res.end(JSON.stringify({
						day: new Date().getDate(),
					}))
					break
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