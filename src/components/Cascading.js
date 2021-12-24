import React, {Component } from 'react'
import axios from 'axios';
import '../App.css';
export class Cascading extends Component {
constructor(props) {
super(props)
this.state = {
ClassId: '',
SchoolId: '',
Schools: [],
Classes: []
}
}

componentDidMount() {
    var config = {
        method: 'get',
        url: 'https://react-task-api.herokuapp.com/api/schools',
        headers: { }
      };
      
      axios(config)
      .then(response => {
        this.setState({
            Schools: response.data
        });
        console.log(JSON.stringify(response.data));
        }).catch(function (error) {
        console.log(error);
      });
    }

ChangeteState = (e) => {
    console.log(e.target.value)
this.setState({
    SchoolId: e.target.value
});
this.state.SchoolId = e.target.value
if(this.state.SchoolId){
    let data = JSON.stringify({
        "schoolId": "61c38c844b3925f593e9505c"
      });
      var config = {
        method: 'get',
        url: 'https://react-task-api.herokuapp.com/api/classes',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      axios(config)
      .then(response => {
        this.setState({
            Classes: response.data,
        });
        console.log(JSON.stringify(response.data));
        }).catch(function (error) {
        console.log(error);
      });
    }
}


render() {  
return (  
<div>  
<div className="row" className="hdr">  
<div className="col-sm-12 btn btn-info">  
Spiritude Task 
</div>  
</div>  
<div className="form-group dropdn">  
<select className="form-control" name="school" value={this.state.SchoolId} onChange={this.ChangeteState}  >  
<option>School Name</option>

{this.state.Schools.map((e, key) => {  
return <option key={key} value={e._id}>{e.name}</option>;  
})}  
</select>  <br></br>
<select className="form-control slct" name="class"  >  
<option>Class Name</option>
{this.state.Classes.map((e, key) => { 
return <option key={key} value={e.id}>{e.name}</option>;  
})}  
</select> 
   
</div>  
</div>  
)  
}  
}  
export default Cascading  