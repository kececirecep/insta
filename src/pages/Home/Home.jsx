import React from 'react'
import './Home.scss'
import Aside from '../../components/Aside/Aside'
import HomePost from '../../components/HomePost/HomePost'
import Suggested from '../../components/Suggested/Suggested'


const Home = () => {
  return (
    <div className='homepage-wrapper'>
        <Aside/>
        <HomePost/>
        <Suggested/>
    </div>
  )
}

export default Home