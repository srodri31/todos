import React, { Component } from 'react';
import List from './components/todo/list/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todos Front</h1>
        <List />
      </div>
    );
  }
}

export default App;
