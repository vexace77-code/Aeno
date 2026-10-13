import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('.', import.meta.url)), port = Number(process.env.PORT || 4173);
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
createServer(async (req,res) => { try {
 const path = decodeURIComponent(new URL(req.url,'http://localhost').pathname), target = resolve(root, `.${path === '/' ? '/index.html' : path}`);
 if (target !== root && !target.startsWith(root + sep)) throw new Error();
 const body = await readFile(target); res.writeHead(200, {'Content-Type':types[extname(target)] || 'application/octet-stream','X-Content-Type-Options':'nosniff'}); res.end(body);
} catch { res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'}); res.end('Not found'); }}).listen(port,()=>console.log(`Aeno Player System running at http://localhost:${port}`));
