import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeCartItem } from '../redux/slices/cartSlice'


const Cart = () => {
    const userCart=useSelector(state=>state.cartReducer)
    const dispatch=useDispatch()
    const [cartTotal,setCartTotal] =useState(0)

    useEffect(()=>{
        if(userCart?.length>0){
            setCartTotal(userCart?.map(item=>item?.totalPrice)
            .reduce((a1,a2)=>a1+a2,0))
        }
    },[userCart])
    
    
  return (
    <>
    <Header/>
   <div style={{paddingTop:"100px"}} className='0x-5' >
   {userCart?.length>0 ?
    <>
    <h1 className='text-5xl font-bold text-purple-900'>Cart Summary.....</h1>
    <div className='grid grid-cols-3 gap-4 mt-5'>
        <div className='col-span-2 border rounded p-5 shadow'>
            <table className='table-auto w-full'>
                <thead>
                    <tr>
                        <td className='font-semibold'>#</td>
                        <td className='font-semibold'>Name</td>
                        <td className='font-semibold'>Image</td>
                        <td className='font-semibold'>Quantity</td>
                        <td className='font-semibold'>price</td>
                        <td className='font-semibold'>...</td>
                    </tr>
                </thead>
                <tbody>
                   {userCart?.map((product,index)=>(
                     <tr key={product.id}>
                        <td>{index+1}</td>
                        <td>{product?.title}</td>
                        <td><img  width={"70px"} height={"70px"}src={product?.thumbnail} alt=''></img></td>
                        <td>
                            <div className='flex'>
                                <button onClick={()=>dispatch(decrementQuantity(product))}
                                 className='font-bold'>-</button>
                                 
                                <input style={{width:"40px"}} type='text' className='border p-1 rounded mx-2'
                                 value={product?.quantity} readOnly></input>
                                <button onClick={()=>dispatch(incrementQuantity(product?.id))}
                                 className='font-bold'>+</button>
                            </div>
                        </td>
                        <td>{product?.toatalPrice}</td>
                        <td><button onClick={()=>dispatch(removeCartItem(product?.id))}className='text-red-600'><i className='fa-solid fa-trash'></i></button></td>
                    </tr>
                   )
                   )

                   }
                </tbody>

            </table>
            <div className='float-right mt-5'>
                <button className='bg-red-500 rounded p-2 text-white'>Empty cart</button>
                <Link to={'/'} className='bg-purple-600 ms-3 rounded p-2 text-white'>Shop More</Link>

            </div>

        </div>
        <div className='col-span-1'>
            <div className='border rounded shadow p-5'>
              <h2 className='text-2xl font-bold '>Total Amount:
              <span className='text-red-600'>{cartTotal}</span></h2>
              <hr/>
              <button className='bg-green-500 rounded p-2 text-white w-full mt-4'>Check Out</button>
            </div>

        </div>

    </div>
    </> 
    :
    <div className='flex justify-center items-center h-screen'>
            <img src='https://i.pinimg.com/originals/5a/d0/47/5ad047a18772cf0488a908d98942f9bf.gif' alt=''></img>
            <h1 className='text-3xl text-red-600'>Your cart is empty!!!</h1>
         </div>

   }
   </div>
   </>
  )
}

export default Cart