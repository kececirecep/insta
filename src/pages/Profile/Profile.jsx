import React, { useState } from 'react'
import './Profile.scss'
import './Modal.css'
import Aside from '../../components/Aside/Aside'
import { GrApps } from "react-icons/gr";


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
                        <button>Edit profile</button>
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
                                                
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>



        </div>
    )
}

export default Profile