const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Bienvenido a Express!' });
});

app.listen(port, () => console.log('Escuchando en el puerto ${port}'));