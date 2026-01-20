const http = require('http');

const server = http.createServer((req, res) => {
  // Prepare the JSON response with request details
  const response = {
    method: req.method
  };

  // Set status and headers
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Send the JSON response
  res.end(JSON.stringify(response));
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Export server for testing
module.exports = { server };
