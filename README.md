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
