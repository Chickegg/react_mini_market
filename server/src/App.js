const express = require('express');
const app = express();
const port = 1004;

const { connect: dbConnect} = require('./models');

dbConnect();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(port, function() {
    console.log("서버 연결완료");
})