import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'

import {slide as Menu} from 'react-burger-menu'

class Sidebar extends React.Component{
  state = {
    isOpen:false
  }
  closeBmMenu = ()=>{
    this.setState({
      isOpen:false
    })
  }
  render(){
    return(
      <div className='sidebar'>
        <Menu isOpen={this.state.isOpen}>
          <div className='bm-user-info'>
            <img src='http://media.haoduoshipin.com/yummy/default-avatar.png' alt='userinfo' />
            <div className='bm-user-auth'>
              <Link to='' className='bm-user-left'>
                lulu
              </Link>
              <Link to='' className='bm-user-right'>
                退出
              </Link>
            </div>
          </div>
          <div className='bm-link-list'>
            <Link to='/'>Home</Link>
            <Link to='/signup'>注册</Link>
            <Link to='/cart'>购物车</Link>
            <Link to='/dishes'>猜你喜欢</Link>
          </div>
          <button className='bm-close-button' onClick={this.closeBmMenu}>关闭</button>
        </Menu>
      </div>
    )
  }
}

export default Sidebar
