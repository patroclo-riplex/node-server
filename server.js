const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const tasks = [
  { id: 1, description: 'Tarea 1', completed: false },
  { id: 2, description: 'Tarea 2', completed: true },
  { id: 3, description: 'Tarea 3', completed: true },
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
