import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..')));

app.post('/submit-filter', (req, res) => {
    const data = req.body;

    fs.readFile(path.join(__dirname, 'data.json'), (err, fileData) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).send(err);
        }

        let filters = [];
        if (fileData) {
            filters = JSON.parse(fileData);
        }

        filters.push(data);

        fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(filters, null, 2), (err) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send('Data saved successfully');
        });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});