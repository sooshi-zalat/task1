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
    
    <div class="row mb-4">
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="fname">First name</label>
        <input type="text" id="fname" class="form-control" />
   
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="lname">Last name</label>
        <input type="text" id="lname" class="form-control" />
      
      </div>
    </div>
  </div>

      <div className="form-outline mb-4">
      <label className="form-label" for="loginName">Email </label>
        <input type="email" id="loginName" className="form-control" />
       
      </div>

    <select className="form-control" name="school" value={this.state.SchoolId} onChange={this.ChangeteState}  >  
    <option>School Name</option>
    
    {this.state.Schools.map((e, key) => {  
    return <option key={key} value={e._id}>{e.name}</option>;  
    })}  
    </select>  <br></br>


    <div className="form-outline mb-4">
                      <label className="form-label" for="loginName">Classes</label>
    <select className="form-control slct" name="class"  >  
    <option>Class Name</option>
    {this.state.Classes.map((e, key) => { 
    return <option key={key} value={e.id}>{e.name}</option>;  
    })}  
    </select> 
    </div>

             <div class="form-outline mb-4">
         <label class="form-label" for="loginPassword">Password</label>
         <input type="password" id="loginPassword" class="form-control" />
    
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
// const Schools = ({ schools,classes }) =>  {
//     const [show, setShow] = useState(true);
    
//   return (
//     <div className="container" >

//    <div className="row">
//    <div className="col-sm-6"> 
// <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist" style={{marginTop:"20px"}}>
//   <li className="nav-item" role="presentation">
//     <a onClick={() => setShow((s) => !s)}
//       className="nav-link text-white "
//       id="tab-login"
//       data-mdb-toggle="pill"
//       href="#pills-login"
//       role="tab"
//       aria-controls="pills-login"
//       aria-selected="true"
//       style={{backgroundColor:"orange", width:"200px", borderRadius:"25px"}}
//       >Hide/Show</a>

//   </li>
//   {/* <li className="nav-item" role="presentation">
//     <a onClick={() => setShow((s) => !s)}
//       className="nav-link text-dark"
//       id="tab-register"
//       data-mdb-toggle="pill"
//       href="#pills-register"
//       role="tab"
//       aria-controls="pills-register"
//       aria-selected="false"
//       >Sign in</a>
//   </li> */}
// </ul>


// <div className="tab-content" style={{ display: show ? "block" : "none" }}>
//   <div
//     className="tab-pane fade show active"
//     id="pills-login"
//     role="tabpanel"
//     aria-labelledby="tab-login"
//   >
//     <form>
    
//     <div class="row mb-4">
//     <div class="col">
//       <div class="form-outline">
//       <label class="form-label" for="fname">First name</label>
//         <input type="text" id="fname" class="form-control" />
   
//       </div>
//     </div>
//     <div class="col">
//       <div class="form-outline">
//       <label class="form-label" for="lname">Last name</label>
//         <input type="text" id="lname" class="form-control" />
      
//       </div>
//     </div>
//   </div>

//       <div className="form-outline mb-4">
//       <label className="form-label" for="loginName">Email </label>
//         <input type="email" id="loginName" className="form-control" />
       
//       </div>

//       <select className="form-control" name="school" value={this.state.SchoolId} onChange={this.ChangeteState}  >  
// <option>School Name</option>

// {this.state.Schools.map((e, key) => {  
// return <option key={key} value={e._id}>{e.name}</option>;  
// })}  
// </select>



//                      <div className="form-outline mb-4">
//                      <label className="form-label" for="loginName">Classes</label>
//                      <select className="form-control slct" name="class"  >  
// <option>Class Name</option>
// {this.state.Classes.map((e, key) => { 
// return <option key={key} value={e.id}>{e.name}</option>;  
// })}  
// </select>
//                  </div>

//         <div class="form-outline mb-4">
//         <label class="form-label" for="loginPassword">Password</label>
//         <input type="password" id="loginPassword" class="form-control" />
    
//       </div>
        

     

    
//       <button type="submit" className="btn btn-primary btn-block mb-3">Sign up</button>

      
      
//     </form>
//   </div>

// </div>
// </div>


// <div className="col-sm-6" style={{ display: show ? "block" : "none" }}> 

// <img src={color}/>
// </div>

// </div>

//     </div>
//   );
// }

// export default Schools ;


