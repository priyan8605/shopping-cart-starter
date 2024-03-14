import { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {
  // 2 cheej ho skta hai ya to cart empty hai ya oosme product hai
  // CartSlice.jsx me se data i.e"initialState" or "cart" access krne ke liye we will use useSelector()
  const {cart}=useSelector((state)=>state)//useSelector jo bhi "state" or "data" pda hai oosi ko return krr dega
   const [totalAmount,setTotalAmount]=useState(0);

   useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>(acc+curr.price),0))//here 0 is default value
   },[cart]
  // jbb bhi "cart" me change hoga setTotalAmount() will be called which update "totalAmount"
   )

  return(
    <div>
      {
        // cart.length >0 mtlb cart array me kuchh to pda hua hai
        cart.length>0 ?(
          // here cart is non empty so we have to display the items
           <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">


               <div className="w-[100%] md:w-[60%] flex flex-col p-2">
                {
                  cart.map((item,index) => 
                  {
                    // hrr ek single item ke liye we will return <CartItem/>
                    return(  
                       <CartItem key={item.id} item={item} itemIndex={index}/>
                       )
                  }
                   
                 )
                }
               </div>

              <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
                <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
                  <div className="flex flex-col gap-5 ">
                  <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
                  <div className="font-semibold text-xl text-green-800 ">Summary</div>
                  <p className="text-xl">
                    <span className="text-gray-700 font-semibold text-xl">
                      Total Items: {cart.length}
                     {/* jo bhi "cart" array ka length hoga that will be our total number of
                      item present in our cart
                     */}
                    </span>
                  </p>
                </div>
                </div>

                <div className="flex flex-col">
                  <p className="text-xl font-bold">
                  <span className="text-gray-700 font-semibold">Total Amount:</span> ${totalAmount}
                    {/* totalAmount variable we will get from useState */}
                  </p>
                  <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                    CheckOut Now
                  </button>
                </div>
              </div>

           </div>
        ):
        (
           <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">Cart Empty</h1>
            <Link to='/'>
              <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                Shop Now
              </button>
            </Link>
           </div>
        )
      }
    </div>
  );
};

export default Cart;
