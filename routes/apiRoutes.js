const Router = require('express').Router();
const fs = require('fs');

Router.get('/api/notes', function (req, res) {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        res.send(data);
      })
})

module.exports = Router;