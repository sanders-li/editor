import React from 'react';
import Table from '../Table/Table.js';
import NavBar from '../NavBar/NavBar.js';
import Submit from '../Submit/Submit.js';
import axios from 'axios';
import './App.css';

const API = process.env.REACT_APP_API || 'http://localhost:3001';
const default_data = {id: '', title: '', url: '', rank: '', date: ''}

export default class App extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {}
    this.hotTableComponent = React.createRef()
    this.get_data = this.get_data.bind(this)
    this.post_data = this.post_data.bind(this)
  };

  componentDidMount() {
    // Get the data after mount. For some reason getting the data before mounting results in two GET requests?
    this.get_data()
  }

  get_data() {
    console.log(`%c GET request to ${API}/`, 'font-weight: bold')
    axios.get(`${API}/`).then(res => {
      console.log('Received:')
      console.table(res.data)
      this.setState({ data: res.data })
    }).catch(err => {
      console.log(err)
      this.setState({ data: default_data })
    })
  };

  post_data(data) {
    console.log(`%c POST request to ${API}/posts`, 'font-weight: bold')
    console.log('Sent:')
    console.table(data)
    axios.post(`${API}/posts`, data).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Table data={this.state.data} table={this.hotTableComponent} />
        <Submit table={this.hotTableComponent} post_data={this.post_data} />
      </div>
    );
  };
}