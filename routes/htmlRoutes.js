const Router = require('express').Router();
const path = require('path');

Router.get('/notes', function (req,res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

Router.get('*', function (req,res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = Router;