import express from 'express';
import router from './routes/routes.js';

import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/public'));

app.use('/', router);

app.all('*', (req, res) => res.sendFile(path.join(__dirname, '/public/pages/error404.html')));

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
