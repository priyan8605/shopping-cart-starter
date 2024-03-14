import {createSlice} from '@reduxjs/toolkit'

export const CartSlice=createSlice({
    name:'cart',
    initialState:[],//empty array
    reducers:{
        // case reducers takes 2 parameter one is state and other is action
        add:(state,action)=>{
            // state.push() mtlb state ke andr push krna chahte
            // in Product.js => jbb Add to Cart pr click krte hai to "post" hum send krr rhe hai add()  me
            //and to access "post" in "CartSlice" we use "action.payload"
            state.push(action.payload);
            //jo bhi input parameter i.e "post" jo "Product.js" me send krr rhe hai oose "action.payload" darshata hai

        },
        remove:(state,action)=>{
            // jbb "Remove From cart" pr click krenge in Home page in "Product.js" to hum remove krr denge "post" ko
            return(
                // we will use filter() and "id" is used coz input me hum "remove(post.id)" de rhe hai in Product.jsx
                state.filter((item)=>item.id !== action.payload)
                // iss state ke andr bss oonhi item ko retain(i.e save) krna jinki id "action" or "input parameter" ke andr jo id aayi hai oonke equal naa hoo
                // action.payload is post.id defined in Product.js
            )
        }
    }
})
export const{add,remove}=CartSlice.actions;
export default CartSlice.reducer;