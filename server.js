// Vanilla
// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var message = 'It works!\n',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();

// const express = require('express');
// const path = require('path');
// const app = express();

// const PORT = process.env.PORT || 5000;;

// // app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (_, res) {
// //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     res.send('hello world');
// });

// app.listen(PORT, function() {
//     console.log(`Server istening on port ${PORT}`)
// });

const express = require('express');
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
    try {
        await app.prepare();
        const server = express();
        
        server.all("*", (req, res) => {
            return handle(req, res);
        });
        
        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();