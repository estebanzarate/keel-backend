import express from 'express';
import { __dirname } from './utils/utils.js';
import router from './routes/routes.js';

const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/../public'));

app.use('/', router);

app.all('*', (req, res) => res.sendFile(path.join(__dirname, '/public/pages/error404.html')));

app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`));
