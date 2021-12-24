import React,{Component,useState,useEffect,setShow} from 'react';
import "../style.css"
import axios from "axios";
import color from "../img/color.jpg"

export class Form extends Component{
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
            url: 'https://react-task-api.herokuapp.com/api/classes/'+this.state.SchoolId,

            headers: { },
          };
          
          axios(config)
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
    
    
    render() {  
    return (  
      <div className="container" >

    <div className="row">
    <div className="col-sm-6">
    <div className="row" className="hdr">  
    <div className="col-sm-12 btn btn-info">  
    Spiritude Task 
    </div>  
    </div>  

  <div className="tab-content" >
   <div
    className="tab-pane fade show active"
    id="pills-login"
    role="tabpanel"
    aria-labelledby="tab-login"
   >
    <form>
    
    <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
      <label className="form-label">First name</label>
        <input type="text" id="fname" className="form-control" />
   
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
      <label className="form-label">Last name</label>
        <input type="text" id="lname" className="form-control" />
      
      </div>
    </div>
  </div>

      <div className="form-outline mb-4">
      <label className="form-label">Email </label>
        <input type="email" id="loginName" className="form-control" />
       
      </div>

    <select className="form-control" name="school" value={this.state.SchoolId} onChange={this.ChangeteState}  >  
    <option>School Name</option>
    
    {this.state.Schools.map((e, key) => {  
    return <option key={key} value={e._id}>{e.name}</option>;  
    })}  
    </select>  <br></br>


    <div className="form-outline mb-4">
                      <label className="form-label">Classes</label>
    <select className="form-control slct" name="class"  >  
    <option>Class Name</option>
    {this.state.Classes.map((e, key) => { 
    return <option key={key} value={e.id}>{e.name}</option>;  
    })}  
    </select> 
    </div>

             <div className="form-outline mb-4">
         <label className="form-label">Password</label>
         <input type="password" id="loginPassword" className="form-control" />
    
       </div>
    
      <button type="submit" className="btn btn-primary btn-block mb-3">Sign up</button>

      
      
           </form>
   </div>

 </div>
 </div>


 <div className="col-sm-6" > 

 <img src={color}/>
 </div>

 </div>

     </div>
   
      
    )  
    }  
    }  
    export default Form 


