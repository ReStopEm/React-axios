import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const apiURL ='https://jsonplaceholder.typicode.com/users';

class App extends Component {
  constructor(){
    super();
    this.state = {
      persons : [],
    }
  }

  componentDidMount(){
    axios.get(apiURL)
      .then( res => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.persons.map( (person, index) => <li key={index} >{ person.name }</li> )}
        </ul>
      </div>
    );
  }
}

export default App;
