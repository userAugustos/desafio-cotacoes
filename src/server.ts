import 'dotenv/config';
import { createServer } from 'http'
import routes from './routes'

const server = createServer((req, res) => {
	routes(req, res)
})

server.listen(process.env.PORT, () => console.log('Server listening on port', process.env.PORT))