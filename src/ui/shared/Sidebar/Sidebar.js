import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

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
  logout = () => {
    localStorage.removeItem('userId')
    this.props.dispatch({type:'LOG_OUT'})
  }
  render(){
    // console.log(this.props)
    let authStr = (
      <div>
        <Link to='/signup' onClick={this.closeBmMenu} className='bm-user-left'>
          注册
        </Link>
        <Link to='/login' onClick={this.closeBmMenu} className='bm-user-right'>
          登录
        </Link>
      </div>
    )
    let userinfo = (
      <div>
        <Link to='' className='bm-user-left'>
          {this.props.currentUser}
        </Link>
        <Link to='' className='bm-user-right' onClick={this.logout}>
          退出
        </Link>
      </div>
    )
    return(
      <div className='sidebar'>
        <Menu isOpen={this.state.isOpen}>
          <div className='bm-user-info'>
            <Link to='/profile'><img src='http://media.haoduoshipin.com/yummy/default-avatar.png' alt='userinfo' onClick={this.closeBmMenu}/></Link>
            <div className='bm-user-auth'>
              {this.props.isAuthenticated ? userinfo : authStr}
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

const mapStateToProps = (state) => ({
  currentUser : state.account.currentUser,
  isAuthenticated : state.account.isAuthenticated
})

export default connect(mapStateToProps)(Sidebar)
