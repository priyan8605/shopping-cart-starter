import { useEffect, useState } from "react";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false)
  const [posts,setPosts]=useState([])
   /* 1.>async function bnao or api se data call kro and json() data ko object me convert kro using
      res.json() as we are using fetch() 
    2.>useEffect me above async function call kro jo ki api se data le krr aa rha hai
   */
   async function fetchProductData()
   {
    setLoading(true)
    try{
      const res=await fetch(API_URL);//fetch data from url
      const data=await res.json();//parse the json url data 
      setPosts(data)//'posts' state ke andr url se aaya hua data store hoga

    }
    catch(error)
    {
      console.log('Error aa gya');
      setPosts([])
    }
    setLoading(false)
   }
   useEffect(()=>{
    fetchProductData()
   },[])//sirf ek baar render hoga aur oosi time fetchProductData() call hoga 
  return(
    <div>
      {
        loading? (<h1 >....Loading</h1>)
        :(
          posts.length === 0 ?(
          <div className="flex justify-center items-center">
              <p>No Data Found</p>
          </div>
          ):
          (
            <div className="grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {
                // with help of map() posts ke harr ek index prr pde hue data ke liye <Product/> return krenge
              posts.map((post)=>(
                <Product key={posts.id} post={post}/>
              ))
              }
            </div>
          )
        )
      }
    </div>
  )
};

export default Home;
