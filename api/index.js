import express from 'express';
import { getAdventures } from './database.js';

const app = express();

app.get("/adventures", async (req, res) => {
    const adventures = await getAdventures();
    res.send(adventures);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("");
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});