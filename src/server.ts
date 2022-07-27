import 'dotenv/config';
import express from "express";

const server = express();

server.get('/', (_, res: express.Response) => {
	res.send("Hello World!");
});

export default server;