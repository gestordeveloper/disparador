const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors('*'));
app.use(bodyParser.json());

app.use('/api/campaings', require('./routes/campaings'));
app.use('/api/lists', require('./routes/lists'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(process.env.PORT, () => {
    console.log('🚀 API rodando em http://localhost:3000');
});
