import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
const Home = () => {
  return (
    <div>
       
   <div className='flex flex-row mt-52'> 
              <div className='text-white mb-[50px]'>
                <p className='text-[15]'>FIND MOVIES</p>
                <h1 className=' text-blue-500'>TV SHOWS <span className=' text-red-500'>AND MORE</span> </h1>
                <h4 className=' text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                              sed do eiusmod tempor incididunt ut labore et dolore magna
                                              aliqua.” The purpose of lorem ipsum is to create a natural
                                              looking block of text 
                                              sentence, paragraph, page, etc. that doesn't distract from the layout</h4>
                  <button class="button" className='  border-[2px] border-[white]'>< FaPlayCircle/>Watch Tutorial</button>

              </div>
              <div className='ml-[300px] '>
                <img src='public/Capture.PNG'></img>
              
              </div>
      
             </div>
            </div>
         
     
 
  )
}

export default Home;
