import React from 'react'
import './HomePost.scss'
import { GoHeart } from "react-icons/go";
import { RiChat1Line } from "react-icons/ri";
import { CiChat2 } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";

const HomePost = () => {
 
  return (
    <div className='homePost-wrapper'>
      <div className="homePost-card">
        <div className="homePost-header"> 
          <div className='left'>
            <img src="/images/homePostUser.jpeg" alt="" />
            <h4>r.kececi</h4>
            <span>• 5h </span>
          </div>
          <div className="right">
            <span>unfollow</span>
          </div>
        </div>
        <div className="homePost-img">
          <img src="/images/1920x1080-px-snow-leopards-1278063-wallhere.com.jpg" alt="" />
        </div>
        <div className="icons">
          <GoHeart />
          <IoChatbubblesOutline />
        </div>
        <span className="likes">36 likes</span>
        <div className="comment">
          <h4>r.kececi</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cum beatae quam reiciendis dolore ullam eligendi quis sapiente id nesciunt?</p>
        </div>
        <span className='view-comment'>View all 528 comments</span>
        <form className='commentForm'>
          <input type="text" placeholder='Add a comment...' />
          <button>Post</button>
        </form>
      </div> 
      
    </div>
  )
}

export default HomePost