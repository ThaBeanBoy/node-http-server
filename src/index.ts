import 'dotenv/config';
import http from 'http';
import { readFileSync } from 'fs';

try {
  const port = parseInt(process.env.PORT || '8080');
  const host = process.env.HOSTNAME || 'localhost';

  const server = http.createServer((req, res) => {
    const { url, method } = req;
    console.log(url, method);

    switch (url) {
      // Return html
      case '/':
        const page = readFileSync(`${__dirname}/pages/index.html`);

        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(page);
        break;

      // Return 404
      default:
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(404, 'Uknown url');
        res.end('<html><body><h1>Unidentified URL</h1></body></html>');
        break;
    }
  });

  server.listen(port, host, () => {
    console.clear();
    console.log(`running on http://${host}:${port}`);
  });
} catch (error) {}
