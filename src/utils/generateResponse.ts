import { ServerResponse } from "http";

export default function generateResponse(res: ServerResponse, response: any) {
	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end(JSON.stringify({
		...response.message
	}))
}