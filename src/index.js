import 'dotenv/config';
import express from 'express';
const app = express();

let i = 0;

app.get('/', (req, res) => {
  i++;
  res.send('Hello World!'+i.toString());
});

app.get('/test', (req, res) => {
  i++;
  res.send('Hello Test!'+i.toString()+'\n');
});

console.log('Hello, Project.');
console.log(process.env.MY_SECRET);

app.listen(3000, () =>
  console.log('example app listening on port 3000!'),
);
