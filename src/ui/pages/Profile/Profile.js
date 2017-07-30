import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import svg from './edit.svg'
import './profile.css'
import Attention from './Attention'

class Profile extends React.Component{
  render(){
    return(
      <div className='profile'>
        <TitleHeader title='个人中心'/>
        <div className='profile-wrap'>
          <div className='profile-user'>
            <img src='http://media.haoduoshipin.com/yummy/default-avatar.png' alt='avtar'/>
            <div className='profile-user-name-wrap'>
              <div className='profile-user-name'>
                liulu
              </div>
              <div className='profile-user-time'>
                2017nian7yue
              </div>
            </div>
          </div>
          <div className='profile-edit'>
            <img src={svg} />
          </div>
        </div>
        <div className='profile-attention-wrap'>
          <div className='profile-attention-card'>
            <div>
              <img src='http://media.haoduoshipin.com/yummy/default-avatar.png' alt='avtar'/>
              <span>liu</span>
            </div>
            <div>
              <div>
                zujian
              </div>
            </div>
          </div>
          <div className='profile-attention-card'>zhang</div>
          <div className='profile-attention-card'>wang</div>
        </div>
      </div>
    )
  }
}


export default Profile
