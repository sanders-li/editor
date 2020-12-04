# Full stack web table

Basic React implementation of Handsontable, delivered through Express.js server

## Features

- Retrieve last table state from server
- Save table data to server
- Server-side, single origin storage

## Issues

Ideally, state should dynamically update when user enters new data
- However, calling `setState` when Handsontable `afterChange` event is triggered conflicts with initial GET request when retrieving data from server, as initial GET request triggers `afterChange` and updates the state infinitely. 
- May be tied to another issue: `get_data` method is only called when `componentDidMount`. For some reason, calling `get_data` during constructor results in two GET requests?

Implement client-side persistent state?
- I think this is a good idea, but not what is requested

Implement (SQL) database
- Not requested, but required if app is to be scaled