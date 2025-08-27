import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addTocart } from '../redux/slices/cartSlice'

const View = () => {
  const userCart = useSelector(state=>state.cartReducer)

  const dispatch = useDispatch()
  const userWishlist=useSelector(state=>state.wishlistReducer)

  const [product,setProduct] = useState({})
  const {id} = useParams()
  console.log(id);
  const {allProducts} = useSelector(state=>state.productReducer)
  console.log(allProducts);

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
    const allProducts =JSON.parse(sessionStorage.getItem("allProducts"))
    //console.log(product);
    setProduct(allProducts.find(item=>item.id==id))
    }
    
  },[])
  console.log(product);

  const handleWishlist=()=>{
    const existingWishlist = userWishlist?.find(item=>item?.id==id)
    if(existingWishlist){
      alert("product already exixts in the wish list!!!")
    }else{
      dispatch(addToWishlist(product))
      alert("product added to wishlist")
    }
  }


  const handleCart=()=>{
    dispatch(addTocart(product))
    const existingProduct = userCart?.find(item=>item?.id==id)
    if(existingProduct){
      alert("product quantity incremented")
    }else{
      
      alert("product added to cart")
    }
  }


  
  
  
  
  return (
    <>
    <Header/>
    
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-4xl w-full grid md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product?.thumbnail}
            alt=""
            className="w-72 h-auto rounded-lg object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product?.title}</h2>
            <p className="text-lg text-green-600 font-semibold mt-2">{product?.price}</p>
            <p><span className='font-bold'>Brand:</span>{product?.brand}</p>
            <p><span className='font-bold'>Category:</span>{product?.category}</p>
            <p className="mt-4  text-sm leading-relaxed">
            <span className='font-bold'>Description:</span>{product?.description}
             
            </p>
          </div>

          {/* Reviews */}
          
           <div className="mt-4 space-y-1">
  <h3 className='font-bold'>Client Review</h3>
  {
    product?.reviews?.length > 0 ? (
      product?.reviews?.map((item, index) => (
        <div key={item.date + index} className='shadow border rounded p-2 mb-2'>
          <h5>
            <span className='font-bold'>{item?.reviewerName} </span>
            <span>{item?.comment}</span>
          </h5>
          <p>
            Rating: {item?.rating}
            <i className='fa-solid fa-star text-yellow-400'></i>
          </p>
        </div>
      ))
    ) : (
      <div className='font-bold text-red-600'>No reviews yet!!!!</div>
    )
  }
</div>

          
           
          

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button onClick={handleWishlist}className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md transition">
              Add To Wishlist
            </button>
            <button onClick={handleCart} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    
   </>
  )
}

export default View