import { IncomingMessage, ServerResponse } from "http";

export default function routes(req: IncomingMessage, res: ServerResponse) {
	switch (req.url) {
		case '/time':
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify({
				hora: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
			}))
			break;
		case '/day':
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify({
				day: new Date().getDate(),
			}))
			break
		default:
			res.writeHead(200, { 'Content-Type': 'application/json' })
			res.end(JSON.stringify({
				message: "Hello World"
			}))
			break;
	}
}