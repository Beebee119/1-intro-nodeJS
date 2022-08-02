const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Welcome to our home page!'
    }));
  }
  
  if (req.url === '/about') {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({
        data: "Welcome to our about page"
    }))
  }

});

server.listen(8000);