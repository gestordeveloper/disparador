const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:list_id', async (req, res) => {
    const [rows] = await db.query("SELECT * FROM campaings_lists_contacts WHERE list_id = ?", [req.params.list_id]);
    res.json(rows);
});

router.post('/', async (req, res) => {
    const { list_id, name, phone, email, website } = req.body;
    const [result] = await db.query(`
    INSERT INTO campaings_lists_contacts (list_id, name, phone, email, website) 
    VALUES (?, ?, ?, ?, ?)`,
        [list_id, name, phone, email, website]
    );
    res.json({ id: result.insertId });
});

module.exports = router;
