import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {
  const {cart} =useSelector((state)=>state);
  const [totalAmount, setTotalAmount]=useState(0);
  //using reduce method for calculating total sum of all amount from cart
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr)=> acc+curr.price, 0));
  },[cart]);
  
  return(
    <div>
      <div>
        {
          cart.length>0 ?
          (
            <div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">
                <div className="lg:w-[70%]">
                  {
                    cart.map((item, index) => (
                      <CartItem key={item.id} item={item} itemIndex={index}/>
                    ))
                  }
                </div>
                <div className="flex flex-col md:w-[30%] w-full gap-8 justify-between">
                  <div className="mt-20">
                    <div className="text-xl text-[[#166534] uppercase font-[800]">Your Cart</div>
                    <div className="text-5xl font-[600] text-[#15803d] uppercase mb-4">Summary</div>
                    <p className="font-[600] text-xl text-slate-700">
                      Total Items: <span  className="font-normal">{cart.length}</span>
                    </p>
                  </div>
                  <div className="mb-20">
                      <p className="text-slate-700 text-xl font-[600] mb-5 ">Total Amount : 
                        <span className="font-bold ml-2 text-black">${totalAmount.toFixed(2)} </span></p>
                      <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
                        CheckOut Now
                      </button>
                  </div>
                </div>
            </div>
           ) :
          (
            <div className="w-screen h-[calc(100vh-80px)] flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold"> Your cart is empty !</h1>
              <br/>
              <Link to="/">
                  <button className="bg-[#16a34a] text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-[#16a34a] border-2 hover:bg-white hover:text-[#16a34a] ease-in transition-all duration-300">
                      Shop Now
                  </button>  
              </Link>
            </div>
          )
        }
      </div>

      
    </div>
  )
};

export default Cart;
