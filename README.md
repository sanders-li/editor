# Simple Full-Stack Web Table

Basic React implementation of Handsontable, delivered through Express.js server

## Features

- Retrieve last table state from server
- Save table data to server
- Server-side, single origin storage

## Guide

1. Copy repo: `git clone https://github.com/sandersl/editor/ <your_directory>`
2. `cd <your_directory>`
3. Run `npm install` to install required node modules
4. Run `npm start`

`npm start` will build the React app in `/build`, then start the server delivering the built React app.

To deploy, only the contents of `/build` and `/server` are needed. Ensure both folders are located in the same directory

For Docker, use `docker-compose build` to build the image.

Access the application at `http://localhost:3000`

## Improvements

Ideally, state should dynamically update when user enters new data
- However, calling `setState` when Handsontable `afterChange` event is triggered conflicts with initial GET request when retrieving data from server, as initial GET request triggers `afterChange` and updates the state infinitely. 
- May be tied to another issue: `get_data` method is only called when `componentDidMount`. For some reason, calling `get_data` during constructor results in two GET requests?

Client-side persistent state
- A good idea, but not what is requested

(SQL) database
- Not requested, but required if app is to be scaled