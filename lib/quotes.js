import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'

const quotes = {}

quotes.getAllQuotes = () => {
    const dirname = path.dirname(fileURLToPath(import.meta.url))
    const fileContents = fs.readFileSync(`${dirname}/quotes.txt`, 'utf8');
    const arrayOfQuotes = fileContents.split(/\r?\n/);
    const arrayLength = arrayOfQuotes.length;
}
export default quotes;
