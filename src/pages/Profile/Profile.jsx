import React, { useState } from 'react'
import './Profile.scss'
import './Modal.css'
import Aside from '../../components/Aside/Aside'
import { GrApps } from "react-icons/gr";
import { BsTrash } from "react-icons/bs";

import { IoChatbubblesOutline, IoClose } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { PiUserSquareThin } from "react-icons/pi";

import Popup from 'reactjs-popup';


const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='profilepage-wrapper'>
            <Aside />

            <div className="profileMain">
                <div className="profilePageHeader-container">
                    <div className="profilePageHeader">
                        <img src="/images/homePostUser.jpeg" alt="" />
                        <div className="profileHomeText">
                            <h2>r.kececi</h2>
                            <div className="stats">
                                <p><b>1</b> Posts</p>
                                <p><b>0</b> Followers</p>
                                <p><b>9</b> Following</p>
                            </div>
                            <h2>Recep Kececi</h2>
                            <p>Bio Text</p>
                        </div>
                        <Popup
                            trigger={
                                <button>Edit profile</button>
                            }
                            modal
                            nested
                        >
                            {(close) => (
                                <div className="modal">
                                    <div className="content2">
                                        <div className="editProfile-container">
                                            <form className='editProfile'>
                                                <div className='uploadImage-container'>
                                                    <img
                                                        className=''
                                                        src={"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                                                        alt=""
                                                    />
                                                    <div className='inputImage'>
                                                        <input
                                                            type="file"
                                                            id="uploadImage"
                                                            accept="image/*"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label htmlFor="fullName">Full Name:</label>
                                                    <input
                                                        type="text"
                                                        id="fullName"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="username">Username:</label>
                                                    <input
                                                        type="text"
                                                        id="username"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="bioText">Bio Text:</label>
                                                    <input
                                                        type="text"
                                                        id="bioText"
                                                    ></input>
                                                </div>
                                                <div> 
                                                    <button type="submit">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
                <div className='profile-posts'>
                    <GrApps />
                </div>
                <div className="postsBoxContainer">
                    <Popup
                        trigger={
                            <div className="postsBox">
                                <img src="/images/1920x1080-px-snow-leopards-1278063-wallhere.com.jpg" alt="" />
                            </div>
                        }
                        modal
                        nested
                    >
                        {(close) => (
                            <div className="modal">
                                <div className="content">
                                    <div className='left'>
                                        <img src="/images/1920x1080-px-snow-leopards-1278063-wallhere.com.jpg" alt="" />
                                    </div>
                                    <div className='right'>
                                        <div className="header">
                                            <div className="profileHeader">
                                                <img src="/images/homePostUser.jpeg" alt="" />
                                                <h4>fenerbahcesk</h4>
                                            </div>
                                            <div className="icons">
                                                <span><BsTrash /></span>
                                                <span className='closeModal' onClick={close}><IoMdClose /></span>
                                            </div>
                                        </div>

                                        <div className="commentsContent">
                                            <div className="commentBox">
                                                <div className='left'>
                                                    <img src="/images/homePostUser.jpeg" alt="" />
                                                    <div className="text">
                                                        <h4>r.kececi</h4>
                                                        <span>13h ago</span>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing asdsadasdelit. Quae, ipsum!</p>
                                            </div>
                                            <div className="commentBox">
                                                <div className='left'>
                                                    <img src="/images/homePostUser.jpeg" alt="" />
                                                    <div className="text">
                                                        <h4>r.kececi</h4>
                                                        <span>13h ago</span>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing asdsadasdelit. Quae, ipsum!</p>
                                            </div>
                                            <div className="commentBox">
                                                <div className='left'>
                                                    <img src="/images/homePostUser.jpeg" alt="" />
                                                    <div className="text">
                                                        <h4>r.kececi</h4>
                                                        <span>13h ago</span>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing asdsadasdelit. Quae, ipsum!</p>
                                            </div>
                                            <div className="commentBox">
                                                <div className='left'>
                                                    <img src="/images/homePostUser.jpeg" alt="" />
                                                    <div className="text">
                                                        <h4>r.kececi</h4>
                                                        <span>13h ago</span>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing asdsadasdelit. Quae, ipsum!</p>
                                            </div>
                                            <div className="commentBox">
                                                <div className='left'>
                                                    <img src="/images/homePostUser.jpeg" alt="" />
                                                    <div className="text">
                                                        <h4>r.kececi</h4>
                                                        <span>13h ago</span>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing asdsadasdelit. Quae, ipsum!</p>
                                            </div>
                                            <div className="commentBox">
                                                <div className='left'>
                                                    <img src="/images/homePostUser.jpeg" alt="" />
                                                    <div className="text">
                                                        <h4>r.kececi</h4>
                                                        <span>13h ago</span>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing asdsadasdelit. Quae, ipsum!</p>
                                            </div>
                                            <div className="commentBox">
                                                <div className='left'>
                                                    <img src="/images/homePostUser.jpeg" alt="" />
                                                    <div className="text">
                                                        <h4>r.kececi</h4>
                                                        <span>13h ago</span>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing asdsadasdelit. Quae, ipsum!</p>
                                            </div>
                                            <div className="commentBox">
                                                <div className='left'>
                                                    <img src="/images/homePostUser.jpeg" alt="" />
                                                    <div className="text">
                                                        <h4>r.kececi</h4>
                                                        <span>13h ago</span>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing asdsadasdelit. Quae, ipsum!</p>
                                            </div>

                                            <div className="commentBox">
                                                <div className='left'>
                                                    <img src="/images/homePostUser.jpeg" alt="" />
                                                    <div className="text">
                                                        <h4>r.kececi</h4>
                                                        <span>13h ago</span>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing asdsadasdelit. Quae, ipsum!</p>
                                            </div>
                                            <div className="commentBox">
                                                <div className='left'>
                                                    <img src="/images/homePostUser.jpeg" alt="" />
                                                    <div className="text">
                                                        <h4>r.kececi</h4>
                                                        <span>13h ago</span>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing asdsadasdelit. Quae, ipsum!</p>
                                            </div>
                                            <div className="commentBox">
                                                <div className='left'>
                                                    <img src="/images/homePostUser.jpeg" alt="" />
                                                    <div className="text">
                                                        <h4>r.kececi</h4>
                                                        <span>13h ago</span>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing asdsadasdelit. Quae, ipsum!</p>
                                            </div>

                                        </div>

                                        <div className="post-footer">
                                            <div className="icons">
                                                <GoHeart />
                                                <IoChatbubblesOutline />
                                            </div>
                                            <h6>122 Likes</h6>
                                            <span>Posted 6w ago</span>
                                            <form className='commentPost'>
                                                <input type="text" placeholder='Add a comment...' />
                                                <button>Post</button>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div >



        </div >
    )
}

export default Profile