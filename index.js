const express = require('express');
const app = express();

app.use(express.static('views'));


app.listen(process.env.port || 8000, function () {
    console.log('server started');
});