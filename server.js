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
    const n1 = req.body.first;
    const n2 = req.body.second;
    const ans = n1+n2;
    
    res.json({ "result": ans});
});


baseRouter.post('/subtract', (req, res) => {
    const n1 = req.body.first;
    const n2 = req.body.second;
    const ans = n1 - n2;
    res.json({ "result": ans });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});