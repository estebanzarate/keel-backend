import url from 'url';
import path from 'path';
import bcrypt from 'bcrypt';

const __filename = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));
const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

export { createHash, isValidPassword };
