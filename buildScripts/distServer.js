/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Fake DB
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@example.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@example.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@example.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
