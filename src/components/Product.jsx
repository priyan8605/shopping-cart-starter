
import {useSelector,useDispatch} from "react-redux"
import {toast} from 'react-hot-toast'
import {add,remove} from "../redux/Slices/CartSlice"
const Product = ({post}) => {
  //post we are getting from Home.jsx <Product post={post}/>
  const {cart}=useSelector((state)=>state)

  const dispatch=useDispatch();//way to do function call from slice CartSlice.jsx

  const addToCart=()=>{
    // addToCart() does two work one is to add "item" in a "cart"
    dispatch(add(post))//add() is coming from "CartSlice.js" and {post} has been passed as a prop
    // jaise "HomePage" Pr "Add to Cart" button prr click krenge  addToCart() "add()" ko call krega from Cartslice.jsx
    // aur oosme "post" jo ki as a prop aaya hai from "Home.jsx" add krr dega
    toast.success("Items added to Cart");
  }
  const removeFromCart=()=>{
    dispatch(remove(post.id));
     // jaise "HomePage" Pr "Remove from Cart" button prr click krenge  addToCart() "remove()" ko call krega from Cartslice.jsx
    // aur oosme "post" jo ki as a prop aaya hai from "Home.jsx" oose nikal dega
     toast.error("Item removed from Cart")
  }
  return(
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
      <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{Product.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={`${post.image}`} className="h-full w-full " alt=""/>
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
        <p className="text-green-600 font-semibold">{post.price}</p>
      </div>
      
        {
          // agr Cart me koi item pahle se hai to "remove" button show kro Home Page pr
          // nhi to show"add to cart" buttom
          // pr iske liye pahle "cart" pta hona chahiye so we access "cart" from CartSlice.js
          cart.some((p)=> (p.id === post.id))? //p.id(i.e cart array me jo item hai)===post.id(post jo pass hua hai as a prop ooska id)
          // simple word me jo "post" pass huii hai as a prop agr vo cart me exist krti hai to use "remove" button else use "Add to cart" button
           (
            <button 
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}>Remove Item</button>
           )
           :
           (
            <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
            text-[12px] p-1 px-3 uppercase 
            hover:bg-gray-700
            hover:text-white transition duration-300 ease-in"
            onClick={addToCart}>Add to Cart</button>
           )
        }
      
      </div>
    </div>
  ) ;
};

export default Product;
