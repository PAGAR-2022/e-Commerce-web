import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./signup.css"

 export const Sign_in = () => {
const[logData,setData] = useState({
  email:"",
  password:""
});
console.log(logData);

const addData = (e) => {
  const {name,value} = e.target;

  setData(()=>{
    return{
      ...logData,
      [name]: value
    }
  })
}

  


return  (<>
<section>
    <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form>
                        <h1>Sign-In</h1>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="text" 
                            onChange={addData}
                           value={logData.email}
                            name="email" id="email" />
                        </div>
                        <div className="form_data">
                        <label htmlFor="password">Password</label>
                            <input type="password" 
                             onChange={addData}
                             value= {logData.password}
                            name="password" placeholder="At least 6 char" id="password" />
                            </div>
                            <button className="signin_btn">Continue</button>
                    </form>

                </div>
                <div className="create_accountinfo">
                <p>New to Amazon?</p>
               <NavLink to="/register"><button>Create Your amazon account</button></NavLink>
                </div>
                </div>
    </section>
    </>
  )
}