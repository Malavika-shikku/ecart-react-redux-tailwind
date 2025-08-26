import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <div style={{height:"250px",marginTop:"100px"}} className="bg-purple-700 text-white p-4 w-full mt-5">
      <div className="flex justify-between p-4">
        
        {/* Left Section */}
        <div style={{width:'400px'}} className='intro'>
          <h5 className="text-xl font-bold mb-2"><i className='fa-solid fa-truck-fast me2'></i>E Cart</h5>
          <p>
            Designed and built with all the love in the world by
            Luminart Team with the help of our contributors.
          </p>
          <p>
            Code licensed Luminart, docs CC BY 3.0.
          </p>
          <p>Currently v5.3.2</p>
        </div>

        {/* Middle Section */}
        <div className='flex flex-col'>
          <h5 className="text-lg font-bold mb-2">Links</h5>
          <Link to={"/"} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={"/home"} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={"/history"} style={{textDecoration:'none',color:'white'}}>History Page</Link>
        </div>

        <div className='flex flex-col'>
            <h5 className='text-xl font-bold'>Guides</h5>
            <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>
            React</a>
            <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none',color:'white'}} target='_blank'>
            React Bootstrap</a>
            <a href="https://www.npmjs.com/package/react-router-dom/" style={{textDecoration:'none',color:'white'}} target='_blank'>
            React Router</a>

        </div>

        {/* Right Section */}
        <div className='flex flex-col'>
          <h5 className="text-xl font-bold mb-2">Contact Us</h5>
          <div className='flex'>
              <input
                type="text"
                placeholder="Enter your email here..."
                className="p-1 rounded border text-white"
              />
              <button className='btn btn-info ms-2'>
                <i className='fa-solid fa-arrow-right'></i>
              </button>
          </div>
          <div className='icons flex justify-between mt-3'>
            <a href='https://x.com/?lang=en-in' style={{textDecoration:'none',color:'white'}}
            target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href='https://www.instagram.com/' style={{textDecoration:'none',color:'white'}}
            target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href='https://www.facebook.com/' style={{textDecoration:'none',color:'white'}}
            target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href='https://www.linkedin.com/learning/' style={{textDecoration:'none',color:'white'}}
            target='_blank'><i className='fa-brands fa-linkedin'></i></a>
            <a href='https://github.com/apps/github-learning-lab' style={{textDecoration:'none',color:'white'}}
            target='_blank'><i className='fa-brands fa-github'></i></a>
            <a href='https://github.com/apps/github-learning-lab' style={{textDecoration:'none',color:'white'}}
            target='_blank'><i className='fa-solid fa-phone'></i></a>

          
          
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs mt-6 border-t border-purple-500 pt-4">
        © 2025 E Cart. Built with React + Tailwind.
      </div>
    </div>
  )
}

export default Footer