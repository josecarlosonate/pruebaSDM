const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

/* Obtener todos los usuarios */
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

/* Obtener usuario por id */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM users WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

/* Ingresar nuevo usuario */
router.post();

module.exports = router;