const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    res.status(200);
    return res.send('Hello World');
});

baseRouter.post('/add', (req, res) => {
    const first = req.body.first;
    const second = req.body.second;
    const ans = first+second;
    res.json({ "result": ans});
});


baseRouter.post('/subtract', (req, res) => {
    const first = req.body.first;
    const second = req.body.second;
    const ans = first - second;
    res.json({ "result": ans });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});