var http = require('http');
const os = require('os')

console.log('CORES', os.cpus().length)

http.createServer(function (req, res) {

    console.log(`Just got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000, () => console.log('server is listening on port 3000'));


