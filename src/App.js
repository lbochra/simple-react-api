import React, { Component } from 'react';
import Repos from './components/Repos.js'

import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }
  componentDidMount() {
    fetch('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc')
      .then(res => res.json())
      .then((data) => {
        this.setState({ repos: data.items })
      })
      .catch(console.log)
  }
  render() {
    return (
    <div className="App">
        <Repos repos={this.state.repos}/>
    </div>
  );
  }
  
}

export default App;
