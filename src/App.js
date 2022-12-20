import { Navbaar } from './components/header/Navbaar';
import './App.css';
import {Newnav} from './components/newnavbaar/Newnav'
import { Maincomp } from './components/home/Maincomp';
import {Footer} from './components/footer/Footer';
import { Sign_in } from './components/signup_sign/Sign_in';
 import { SIgnup } from './components/signup_sign/SIgnup';
 import  Cart  from './components/cart/Cart';
 import { Buynow } from './components/buynow/Buynow';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
   <>
   <Navbaar />
   <Newnav />
   <Routes>
    <Route path="/" element={<Maincomp/>} />
    <Route path="/login" element={<Sign_in/>} /> 
     <Route path="/register" element={<SIgnup/>} /> 
     <Route path="/getproductsone//:id" element={<Cart/>} /> 
     <Route path="/buynow" element={<Buynow/>} /> 

    

   </Routes>
   {/* <Maincomp />  */}
   <Footer />
   </>
  );
}


export default App;
