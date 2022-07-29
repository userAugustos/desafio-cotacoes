import 'dotenv/config';
import express from "express";

const server = express();

server.get('/', (_, res: express.Response) => {
	res.send({
		from: "Felipe Augustos",
		to: "Brendinha Diniz",
		message: "Te amo gatinha <3"
	});
});

export default server;