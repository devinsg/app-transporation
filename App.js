import React, { Component } from 'react';
import Sample from './component/sample';

class App extends Component {
  render() {
    let author = 'James Bond 007';
    return (
      <Sample author={author}/>
    );
  }
};

export default App;
