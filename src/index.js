import 'dotenv/config';
import express from 'express';

import sum from './sum.js';
import callMyFunction from './callMyFunction.js';

const app = express();

let i = 0;

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};
let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});
app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});
app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});
app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});
app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});
app.get('/messages', (req, res) => {
  return res.send(Object.values(messages));
});
app.get('/messages/:messageId', (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.get('/test', (req, res) => {
  i++;
  res.send('Hello Test!'+i.toString()+'\n');
});

console.log('Hello, Project.');
console.log(process.env.MY_SECRET);

console.log(sum(1, 2));

callMyFunction(function() {
  console.log('Hello world');
});

app.listen(process.env.PORT, () =>
  console.log('example app listening on port 3000!'),
);
