import React, { Component} from 'react';
import axios from 'axios';
import './App.css';
import Signin from './components/Signin';
import Cascading from './components/Cascading';

class App extends Component  {
  render(){
  return (
    <div className="App">
      <Cascading/>
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

}
}
export default App;
