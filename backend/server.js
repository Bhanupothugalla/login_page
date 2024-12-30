const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Sample Login API
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '1234') {
        res.json({ token: 'sample-token' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
