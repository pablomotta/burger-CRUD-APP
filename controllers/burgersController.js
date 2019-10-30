var express = require('express');

var router = express.Router();

var burger = require('../models/burgers.js');

router.get('/', function(req, res) {
    burger.all().then(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', function(req, res) {
    burger
        .create(
            ['burger_name', 'devoured'],
            [req.body.burger_name, req.body.devoured ? 1 : 0]
        )
        .then(function(result) {
            res.json({ id: result.insertId });
        });
});

router.put('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger
        .update(
            {
                devoured: req.body.devoured
            },
            condition
        )
        .then(function(result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        });
});

router.delete('/api/burgers/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.delete(condition).then(function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
