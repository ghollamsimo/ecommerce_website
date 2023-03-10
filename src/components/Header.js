import React, {useContext, useEffect, useState} from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
import {BsBag} from 'react-icons/bs'
// link
import { Link } from 'react-router-dom';
// logo
import Logo from '../img/logo.svg'

const Header = () => {
  // header state
  const [isAcative, setIsAcitve] = useState(false) 
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const {itemAmount} = useContext(CartContext)
  // event listener
  useEffect (() => {
    window.addEventListener('scroll' , () => {
      window.scrollY > 60 ? setIsAcitve(true) : setIsAcitve(false)
    })
  })

  return( 
  <header className={`${isAcative ? 'bg-white py-4 shadow-md' : 'bg-none py-4'} fixed w-full z-10 transition-all `}>
    <div className='container mx-auto flex items-center justify-between h-full'>
    <Link to={'/'}>
      <div>
        <img className='w-[40px] text-white'  src={Logo} alt="" />
      </div>
    </Link>
    
    <div onClick={()=> setIsOpen(!isOpen)} className="cursor-pointer flex relative ">
      <BsBag className='text-2xl'/>
      <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
    </div>
    </div>
  </header>
)
};

export default Header;
