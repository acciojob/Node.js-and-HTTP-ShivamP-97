const http = require('http');

const server = http.createServer((req, res) => {
  const response = {
    method: req.method
  };

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });
}

module.exports = { server };
