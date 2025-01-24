const express = require('express');
const app = express();
app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Database error'); // Send proper error response
      return; // Crucial to stop further execution
    }
    res.json(results);
  });
});
app.listen(3000, () => console.log('Server started'));