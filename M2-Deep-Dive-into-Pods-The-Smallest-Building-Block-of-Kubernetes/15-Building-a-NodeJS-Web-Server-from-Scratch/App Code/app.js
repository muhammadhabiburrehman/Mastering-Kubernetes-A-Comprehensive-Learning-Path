const http = require('http')
const os = require('os')

console.log("Server Starting")

var handler = function(request, response){
    console.log("Received Request From " + request.connection.remoteAddress)

    response.writeHead(200)
    response.end("You have hit" + os.hostname() +"\n")
}

var www = http.createServer(handler)

www.listen(3000)

