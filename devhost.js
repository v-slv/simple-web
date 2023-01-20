const express = require('express');
const app = express();

app.use(express.static('source'));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});