# Temperature grapher

I have a Raspberry Pi Zero that has a digital thermometer probe in it.  I want to graph temperature data from it.

The Pi will call an API to add each duple of [time, temperature] to a database.

The API will respond to a request for all temperature datapoints recorded in a specified time range range with a JSON response.

There will be a web page the will allow the user to choose the endpoints of the time range and graph all the temperatures recorded in the time range.

This is my first express.js project.  I'm following https://www.robinwieruch.de/node-express-server-rest-api

see also: https://github.com/rwieruch/minimal-node-application

To install:

- cd temperature-grapher
- copy .env-example to .env
- nvm use stable
- npm install
- npm start

Examples:

```
curl -X POST -H "Content-Type:application/x-www-form-urlencoded" -d  "text=this%20is%20a%20123%20test%5Cn%5Cn%5Cntest%20againn"  http://localhost:3000/messages
```

```
curl -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Goodbye, curl World"}'
```

```
jeremy@ubuntu:~/projects/temperature-grapher$ curl localhost:3000/messages
[{"id":"1","text":"Hello World","userId":"1"},{"id":"2","text":"By World","userId":"2"},{"id":"43ae136e-389d-4b84-87f2-54165666d0f4","text":"Goodbye, curl World"},{"id":"705b708b-6dcb-46aa-bbc0-23517eeb6655"},{"id":"7e579bc4-2c3c-4c23-9f1a-491004db133f"},{"id":"621243fb-8fbe-469a-a706-a5ebaa8b1a0f","text":"this is a 123 test\\n\\n\\ntest againn"},{"id":"1b88
60a8-f4c9-47d8-a9eb-74642d942110","text":"Goodbye, curl World"}]
jeremy@ubuntu:~/projects/temperature-grapher$ curl localhost:3000/messages/1b8860a8-f4c9-47d8-a9eb-74642d942110
{"id":"1b8860a8-f4c9-47d8-a9eb-74642d942110","text":"Goodbye, curl World"}
jeremy@ubuntu:~/projects/temperature-grapher$ 
```
