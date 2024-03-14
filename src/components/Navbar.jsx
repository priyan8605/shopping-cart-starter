import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux'
const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return (
  <div>

    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">
      
      <NavLink to="/">
        <div className="ml-5">
      <img src="../logo.png" height="35" alt="" className="h-14"/>
      {/* logo.png is present in "public" folder */}
      </div>
      </NavLink>
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to='/'>
        <h1>Home</h1>
        </NavLink>
        <NavLink to='/cart'>
         <div className="relative">
         <FaShoppingCart className="text-2xl"/>
         {
          cart.length>0 &&
          // agr cart array ka length 0 se zyada hai or koi item present hai cart array me then only
          // show <span>{cart.length}</span>
            <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center
            items-center animate-bounce rounded-full text-white">{cart.length}</span>
          
         }
         </div>
        </NavLink>
      </div>
    </div>

    </div>
  
  )
};

export default Navbar;
