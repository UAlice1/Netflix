import React from 'react'

function Navbar() {
  return (
    <div>
         <div>
            <div className=''>
            <img src="./public/Group 1.png"></img>
            </div>
            <div className=' text-white'>
             <nav>
                <ul className='flex flex-row no-underline gap-8 ml-[750px]'>
                    <li><a href='/'> Home</a></li>
                    <li><a href='/Explore'> Explore</a></li>
                    <li><a href='/Genre'>Genre</a></li>
                    <li><a href='/News'>News</a></li>
                    <li><a href='/Movies'>Movies</a></li>
                    <li><a href='/Tv'>TV Show</a></li>
                    
                </ul>
             </nav>
             </div>
             </div>
    </div>
  )
}

export default Navbar;