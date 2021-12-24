import React, { Component} from 'react';
import Form from './components/Form';
import axios from 'axios';
import './App.css';
import Signin from './components/Signin';
import Cascading from './components/Cascading';

class App extends Component  {
  render(){
  return (
    <div className="App">
      {/* <Cascading/> */}
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

      // fetch('https://react-task-api.herokuapp.com/api/classes')
      // .then(res => res.json())
      // .then((data) => {
      //     this.setState({ classes: data })
      // })
      // .catch(console.log)


var data = JSON.stringify({
        "schoolId": "61b605920559dd4a4d5bb0e5"
      });
    //   const requestOptions = {
    //     method: 'get',
    //     headers: { 'Content-Type': 'application/json' },
    //     postMessage: JSON.stringify({ data })
    // };
    // fetch('https://react-task-api.herokuapp.com/api/classes', requestOptions)
    //     .then(response => response.json())
    //     .then(response => console.log(response[0]._id,data));


      
      var config = {
        method: 'get',
        url: 'https://react-task-api.herokuapp.com/api/classes',
        params : {
          "schoolId":"61b605e10559dd4a4d5bb0ea"
        },
        headers: { 
          'Content-Type': 'application/json'
        }
      };
      
      axios({
        method: 'get',
                    url: 'https://react-task-api.herokuapp.com/api/classes',
                    headers: { 'Content-Type': 'application/json' },
                    data: {
                      schoolId:"61c38c844b3925f593e9505c"
                    }
                    ,body: {
                      schoolId:'61c38c844b3925f593e9505c'
                    }
      })
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      }).then((data) => {
             this.setState({ classes: data })
         })
      .catch(function (error) {
        console.log(error);
      });
}
}
export default App;
