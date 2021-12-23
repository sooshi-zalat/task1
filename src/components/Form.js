import React,{useState,useEffect,setShow} from 'react';
import "../style.css"
import color from "../img/color.jpg"

const Schools = ({ schools,classes }) =>  {
    const [show, setShow] = useState(true);
  return (
    <div className="container" >

   <div className="row">
   <div className="col-sm-6"> 
<ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist" style={{marginTop:"20px"}}>
  <li className="nav-item" role="presentation">
    <a onClick={() => setShow((s) => !s)}
      className="nav-link text-white "
      id="tab-login"
      data-mdb-toggle="pill"
      href="#pills-login"
      role="tab"
      aria-controls="pills-login"
      aria-selected="true"
      style={{backgroundColor:"orange", width:"200px", borderRadius:"25px"}}
      >Hide/Show</a>

  </li>
  {/* <li className="nav-item" role="presentation">
    <a onClick={() => setShow((s) => !s)}
      className="nav-link text-dark"
      id="tab-register"
      data-mdb-toggle="pill"
      href="#pills-register"
      role="tab"
      aria-controls="pills-register"
      aria-selected="false"
      >Sign in</a>
  </li> */}
</ul>


<div className="tab-content" style={{ display: show ? "block" : "none" }}>
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

                   <div className="form-outline mb-4">
                     <label className="form-label" for="loginName">School</label>
                     <select class="form-control">

                     {schools.map((school) => (
               <option key={school.id} value={school.name}>
                 {school.name}
              </option>
               ))}

               </select>
                 </div>



                     <div className="form-outline mb-4">
                     <label className="form-label" for="loginName">Classes</label>
                     <select class="form-control">

                     {classes.map((school) => (
               <option key={school.id} value={school.name}>
                 {school.name}
              </option>
               ))}

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


<div className="col-sm-6" style={{ display: show ? "block" : "none" }}> 

<img src={color}/>
</div>

</div>

    </div>
  );
}

export default Schools ;


