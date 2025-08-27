import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartItems",
  initialState: [],
  reducers: {
    //add to cart action  action-name:reducer function
    addTocart: (state, actionByComponent) => {
      const existingProduct = state.find(
      (item) => item.id == actionByComponent.payload.id
      )
      if(existingProduct){
        existingProduct.quantity++
        existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
        const remainingProducts = state.filter(item=>item.id!=existingProduct.id)
        state = [...remainingProducts,existingProduct]
       }else{
        state.push({...actionByComponent.payload,quantity:1,
        totalPrice:actionByComponent.payload.price})
       }
    },
    incrementQuantity:(state,actionByCart)=>{
      const existingProduct = state.find(item=>item.id==actionByCart.payload)  
      existingProduct.quantity++
      existingProduct.totalPrice=existingProduct.quantity*existingProduct.price
      const remainingProducts=state.filter(item=>item.id !=existingProduct.id)
      state=[...remainingProducts,existingProduct] 
    },
    removeCartItem:(state,actionByCart)=>{
       return state.filter(item=>item.id !=actionByCart.payload)
       
    },
    /*decrementQuantity:(state,actionByCart)=>{
        const existingProduct=state.find(item=>item.id==actionByCart.payload.id)
        if(existingProduct){
            if(existingProduct.quantity>1){
                existingProduct.quantity--;
                existingProduct.totalPrice=existingProduct.quantity * existingProduct.price;
            }else{
                return state.filter(item=>item.id!=actionByCart.payload)
            }
        }
       
    }*/

        decrementQuantity: (state, action) => {
            const productId = action.payload.id;
            const existingProduct = state.find(item => item.id === productId);
            if (existingProduct) {
                 if (existingProduct.quantity > 1) {
                   existingProduct.quantity -= 1;
                   existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
                } else {
      
                  return state.filter(item => item.id !== productId);
                }
            }

        return state;

  
},

  }
})

export const {addTocart,incrementQuantity,decrementQuantity,removeCartItem} = cartSlice.actions
export default cartSlice.reducer

