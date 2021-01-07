const fs = require('fs');
const http = require('http');

http.createServer(function (req, res) {
    if (/^\/static/.test(req.url)) {
        const resource = fs.readFileSync(`.${req.url}`);
        res.end(resource);
        return
    }
    const html = fs.readFileSync('./index.html');
    res.end(html);
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');
