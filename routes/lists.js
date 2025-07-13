const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    const [rows] = await db.query("SELECT * FROM campaings_lists");
    res.json(rows);
});

router.post('/', async (req, res) => {
    const { company_id, name } = req.body;
    const [result] = await db.query(`
    INSERT INTO campaings_lists (company_id, name) VALUES (?, ?)`,
        [company_id, name]
    );
    res.json({ id: result.insertId });
});

module.exports = router;
