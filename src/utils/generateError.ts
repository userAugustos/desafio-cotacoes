import { ServerResponse } from "http";

export default function generateResponse(res: ServerResponse, errorCode: number, message: string = 'Request Failed'): ServerResponse {
	res.writeHead(errorCode, { 'Content-Type': 'application/json' })
	res.end(JSON.stringify({
		errorCode,
		message
	}))

	return res
}