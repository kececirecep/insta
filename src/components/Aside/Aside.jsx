import React from 'react'
import './Aside.scss'
import Logo from './Logo'
import Menu from './Menu'

const Aside = () => {
  return (
    <div className='aside-wrapper'>
      <div className='aside'> 
          <Logo />
          <Menu /> 
      </div>
    </div>
  )
}

export default Aside