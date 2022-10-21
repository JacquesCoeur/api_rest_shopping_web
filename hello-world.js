const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req,res)=> {
    res.send('Hello World!, from express!');
});

app.listen(PORT, () => console.log(`Hello world app listening on http://localhost:${PORT}`))