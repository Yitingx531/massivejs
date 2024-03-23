const {massiveInstance}= require('./connectToDB');
const express = require('express');
const app = express();

app.set('db', massiveInstance);

const userController = {
   getInfo: (req, res, next) =>{
    const db = req.app.get('db');
        db.proofread.find({
             id: null,
             wordcount: 1000
          })
          .then(result => {
            res.locals.info = result;
            return next();
          })
          .catch(err => {
            console.log(err);
            return next(err);
          })
}
}

module.exports = userController;