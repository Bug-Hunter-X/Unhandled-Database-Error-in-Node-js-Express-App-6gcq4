const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This will cause an error if the database connection fails
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      // Do something with the error
      console.error(err);
      res.status(500).send('Error');
    } else {
      res.json(results);
    }
  });
});
app.listen(3000, () => console.log('Server started'));