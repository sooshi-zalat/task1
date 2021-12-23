import React, { Component} from 'react';
import Form from './components/Form';

import './App.css';
import Signin from './components/Signin';

class App extends Component  {
  render(){
  return (
    <div className="App">
      <button className='btn btn-primary'>TEST</button>
     <Form schools={this.state.schools} classes={this.state.classes}/>
     <Signin />
    </div>
  );
  }
  state = {
    schools: [], 
    classes:[],
    user:[],
    key:[]
};

componentDidMount() {
  fetch('https://react-task-api.herokuapp.com/api/schools')
      .then(res => res.json())
      .then((data) => {
          this.setState({ schools: data })
      })
      .catch(console.log)

      fetch('https://react-task-api.herokuapp.com/api/classes')
      .then(res => res.json())
      .then((data) => {
          this.setState({ classes: data })
      })
      .catch(console.log)
}
}
export default App;
