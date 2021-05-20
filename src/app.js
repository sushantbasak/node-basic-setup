const express = require('express');

const app = express();

const port = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.listen(port, () => console.log('Server started at port ' + port));