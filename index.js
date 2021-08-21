const express = require('express');
const commentsRouter = require('./routes/comments');

const app = express(); 
const port = 3000;

app.use('/comments', commentsRouter);

app.get('/', (req, res) => {
    res.json({message:"hello"});
});

app.listen(port);