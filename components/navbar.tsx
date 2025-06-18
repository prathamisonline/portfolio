import React from 'react'

const navbarItem = [
    { title: "About" },
    { title: "Posts" },
    { title: "Gallary" },
    { title: "Uses" },
    { title: "Work" },
    { title: "Contact" },
];
const Navbar = () => {
  return (
    <div className='flex justify-center items-center'>
            <ul className='flex gap-4 items-center  text-white font-medium text-xl cursor-pointer'>
                {navbarItem.map((nav,index)=>
                    <li key={index} className='hover:text-gray-400 transition-colors'>{nav.title}</li>
                )}
            </ul>
    </div>
  )
}

export default Navbar