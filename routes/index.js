var express = require('express');
var router = express.Router();
const translate = require('google-translate-api');

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/translate/:word', function(req, resp, next) {
    var word = req.params.word;
    translate(word, {to: 'ar'}).then(res => {
        resp.send(res);
    }).catch(err => {
        console.error(err);
    });
});

module.exports = router;
