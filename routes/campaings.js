const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    const [rows] = await db.query("SELECT * FROM campaings");
    res.json(rows);
});

router.post('/', async (req, res) => {
    const { company_id, list_id, name, content, content2, content3, type_media, href, due_at, hour_at, status } = req.body;
    const [result] = await db.query(`
    INSERT INTO campaings 
    (company_id, list_id, name, content, content2, content3, type_media, href, due_at, hour_at, status) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [company_id, list_id, name, content, content2, content3, type_media, href, due_at, hour_at, status]
    );
    res.json({ id: result.insertId });
});

module.exports = router;
