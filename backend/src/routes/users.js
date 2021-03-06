const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

/* Obtener todos los usuarios */
router.get('/api/user', (req, res) => {
    mysqlConnection.query('SELECT * FROM users WHERE state = ?', [1], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

/* Obtener usuario por id */
router.get('/api/user/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM users WHERE id = ? AND state = ?', [id, 1], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

/* Ingresar  usuario */
router.post('/api/user/add', (req, res) => {
    let { name, document, state, create_at, update_at } = req.body;
    console.log(req.body);
    const query = `
        INSERT INTO
            users(
                name,
                document,
                state,
                create_at,
                update_at
            )
        VALUES(?, ?, ?, ?, ?)
    `;
    mysqlConnection.query(query, [name, document, state, create_at, update_at], (err, rows, fields) => {
        if (!err) {
            res.json({ Code: "Ok", Status: 'Realizado con exito' });
        } else {
            res.json({ Code: "Error", Status: err });
        }
    });
});

/* Editar usuario */
router.put('/api/user/edit/:id', (req, res) => {
    const { name, document, state, update_at } = req.body;
    const { id } = req.params;
    const query = `
        UPDATE users
        SET
            name = ?,
            document = ?,
            state = ?,
            update_at = ?
        WHERE id = ?`;
    mysqlConnection.query(query, [name, document, state, update_at, id], (err, rows, fields) => {
        if (!err) {
            res.json({ Code: "Ok", Status: 'Actualizado con exito' });
        } else {
            res.json({ Code: "Error", Status: err });
        }
    });
});

/* Eliminar usuario */
router.delete('/api/user/delet/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM users WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ Code: "Ok", Status: 'Eliminado con exito' });
        } else {
            res.json({ Code: "Error", Status: err });
        }
    });
});

module.exports = router;