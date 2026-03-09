// app.js
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from Docker + GitHub Actions!');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
