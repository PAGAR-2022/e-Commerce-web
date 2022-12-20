import { Divider } from '@mui/material';
import { fontSize, fontWeight } from '@mui/system';
import React from 'react'
import "./cart.css"

const Cart = () => {
    return (

        <div className="cart_section">

            <div className="cart_container">
                <div className="left_cart">
                    <img src="https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70" alt="cart" />
                    <div className="cart_btn">
                        <button className="cart_btn1" >Add to Cart</button>
                        <button className="cart_btn2">Buy Now</button>
                    </div>
                </div>
                <div className='right_cart'>
                <h3>Fitness Gear</h3>
                <h4>Pigeon FAVOURITE Electric kettle(1.5 L, Silver, Black)</h4>
                <Divider/>
                <p className="mrp">M.R.P : ₹1195</p>
                <p>Deal of the DayC </p>
                <p>You Save:₹570 (47%) <span style={{color:"#B12704"}}> : ₹625</span> </p>
                <div className="discount_box">
                 <h5>Discount:<span style={{color:"#111"}}>Extra 10% Off</span> </h5>
                 <h4>Free Delivery<span style={{color:"#111", fontWeight:600}}> oct 8-21</span> Details</h4>
                 <p>Fastest Delivery: <span style={{color:"#111", fontWeight:600}}>Tommorow 11AM</span></p>
                 <p className='discription'>About the Item:<span style={{color:"#565959",fontSize:14, fontWeight:5000,letterSpacing:"0.4px"}}>XFree home Installation of the bike is provided for your convenience.
                 Lifelong Bike comes with a back support, an adjustable seat and a foot lock pedal which makes your exercise stress-free.
                 It has a digital display meter which displays your exercise time, revolutions per minute (rpm), 
                 calories burnt; it also gives you an accurate</span>.</p>
                </div>
            </div>
            </div>
           </div>
    )
};

export default Cart;
