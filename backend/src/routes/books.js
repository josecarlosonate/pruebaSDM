const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

/* Obtener todos los libros */
router.get('/api/book', (req, res) => {
    mysqlConnection.query('SELECT * FROM books WHERE state = ?', [1], (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

/* Obtener libro por id */
router.get('/api/book/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM books WHERE id = ? AND state = ?', [id, 1], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

/* Ingresar  libro */
router.post('/api/book/add', (req, res) => {
    let { name, description, stock, available, create_at, update_at } = req.body;

    const query = `  
        INSERT INTO
            books(
                name,
                description,
                stock,
                available,
                created_at,
                updated_at
            )
        VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id  `;
    mysqlConnection.query(query, [name, description, stock, available, create_at, update_at], (err, rows, fields) => {
        if (!err) {
            res.json({ Code: "Ok", Status: 'Realizado con exito' });
        } else {
            res.json({ Code: "Error", Status: err });
        }
    });
});

/* Editar usuario */
router.put('/api/user/edit/:id', (req, res) => {
    const { name, document, create_at, update_at } = req.body;
    const { id } = req.params;
    const query = 'CALL userAddOrEdit (?, ?, ?, ?, ?);';
    mysqlConnection.query(query, [id, name, document, create_at, update_at], (err, rows, fields) => {
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