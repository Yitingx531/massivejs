const express = require('express');
const app = express();
const PORT = 4000;
const userController = require('./userController');
const massiveInstance = require('./connectToDB');

massiveInstance()
.then(db => {
    app.set('db', db);
    app.listen(PORT, () => {
        console.log('app listening on PORT ' + PORT);
    });
})

app.get('/', userController.getInfo,(req, res) => {
    return res.status(200).json(res.locals.info);
})

