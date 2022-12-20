import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const SIgnup = () => {
  const [udata, setUdata] = useState({
    fname:"",
    email:"",
    mobile:"",
    password:"",
    cpassword: ""
   });
   console.log(udata);
  //  const adddata = (e) =>{
  //   const{name,value} = e.target;
  //  }
  
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
        
          <form>
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label htmlFor="fname">Your name</label>
              <input type="text"
               onChange={(e)=>setUdata({...udata,fname:e.target.value})}
               value={udata.fname}
              name="fname" id="fname" />
            </div>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input type="text" 
              //  onChange={adddata}
              onChange={(e)=>setUdata({...udata,email:e.target.value})}
               value={udata.email}
              name="email" id="email" />
            </div>
            <div className="form_data">
              <label htmlFor="number">Mobile</label>
              <input type="text"
              //  onChange={adddata}
              onChange={(e)=>setUdata({...udata,mobile:e.target.value})}
               value={udata.mobile}
              name="mobile" id="mobile" />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input type="password" 
              //  onChange={adddata}
              onChange={(e)=>setUdata({...udata,password:e.target.value})}
               value={udata.password}
              name="password" placeholder="At least 6 char" id="password" />
            </div>
            <div className="form_data">
              <label htmlFor="cpassword">Password Again</label>
              <input type="password"
              //  onChange={adddata}
              onChange={(e)=>setUdata({...udata,cpassword:e.target.value})}
               value={udata.cpassword}
              name="cpassword" id="cpassword" />
            </div>
            <button className="signin_btn">Continue</button>
                        <div className="signin_info">
                            <p>Already have an account?</p>
                         <NavLink to="/login">signin</NavLink>
                        </div>
          </form>

        </div>
        
      </div>
    </section>
  )
}

