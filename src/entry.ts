import server from './server'

server.listen(3000, () => {
	console.log(`server running in ${process.env.SERVER_PORT}`)
})