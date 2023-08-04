import 'dotenv/config';
import http from 'http';
import { readFileSync } from 'fs';

try {
  const port = parseInt(process.env.PORT || '8080');
  const host = process.env.HOSTNAME || 'localhost';

  //   Instead of loading on every request, the server will load when it's booted up
  const indexPage = readFileSync(`${__dirname}/pages/index.html`);
  const _404Page = readFileSync(`${__dirname}/pages/404.html`);

  const server = http.createServer((req, res) => {
    const { url, method } = req;
    console.log(url, method);

    switch (url) {
      // Return html
      case '/':
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(indexPage);
        break;

      case '/api/':
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'sending json boii' }));
        break;

      case '/api/ninjas/':
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(
          JSON.stringify([
            { name: 'Naruto', clan: 'Uzumaki' },
            { name: 'Sasuke', clan: 'Uchiha' },
            { name: 'Sakura', clan: 'Haruno' },
          ])
        );

      // Return 404
      default:
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(404, 'Uknown url');
        res.end(_404Page);
        break;
    }
  });

  server.listen(port, host, () => {
    console.clear();
    console.log(`running on http://${host}:${port}`);
  });
} catch (error) {}
