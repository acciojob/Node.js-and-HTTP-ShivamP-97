const http = require('http');

const server = http.createServer((req, res) => {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const responseData = {
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: body || null
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData, null, 2));
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = { server };
