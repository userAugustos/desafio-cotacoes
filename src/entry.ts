import http from 'http'

http.createServer((req, res) => {
	console.log('req', req.url)
	res.writeHead(200, { 'Content-Type': 'application/json' })
	res.end('hello world')
}).listen(3000)