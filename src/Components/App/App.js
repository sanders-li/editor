import React from 'react';
import Table from '../Table/Table.js';
import NavBar from '../NavBar/NavBar.js';
import Submit from '../Submit/Submit.js';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
              {id: 1, title: 'asdf', url: 'asdf.com', rank: 1, date: '12/12/1234'}
            ]
    };
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Table data={this.state.data} />
        <Submit data={this.state.data} />
      </div>
    );
  };
}