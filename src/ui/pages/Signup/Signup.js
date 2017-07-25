import React from 'react'
import './signup.css'
import {Link} from 'react-router-dom'

class Signup extends React.Component{
  render(){
    return(
      <div className='signup'>
        <p className='title-top'>signup</p>
        <div className='hero'>
          <h1 className='title'>注册</h1>
          <p className='slogan'>连接一个个小而确定的幸福</p>
          <form className='signup-form'>
            <input type='text' placeholder='用户名'/>
            <input type='text' placeholder='Email'/>
            <input type='password' placeholder='密码'/>
            <input type='password' placeholder='再输入一遍'/>
            <button type='submit'>注册</button>
          </form>
        </div>
        <Link to='/login'>已有账号？点此登陆</Link>
      </div>
    )
  }
}

export default Signup
