import React from 'react'
import './Suggested.scss'

const Suggested = () => {
  return (
    <div className='suggested-wrapper'>
      <div className="suggested-logout">
        <div className='profile-logoutinfo'>
          <img src="/images/homePostUser.jpeg" alt="" />
          <h4>r.kececi</h4>
        </div>
        <span>Logout</span>
      </div>
      <div className="suggested-card">
        <div className='profile-logoutinfo'>
          <img src="/images/homePostUser.jpeg" alt="" />
          <div className="text">
            <h4>fenerbahcesk</h4>
            <h6>77 followers</h6>
          </div>
        </div>
        <span>Follow</span>
      </div>
      <p>© 2024 INSTAGRAM FROM KECECI</p>
    </div>
  )
}

export default Suggested