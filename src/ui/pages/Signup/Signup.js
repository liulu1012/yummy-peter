import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader.js'
import './signup.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Settings from '../../../settings.js'

class Signup extends React.Component{
  signup = (e) => {
    e.preventDefault()
    let data = {
      username:'xxx',
      password:'222'
    }
    axios.post(`${Settings.host}/user/signup`,data)
      .then(res => console.log(res.data))
  }
  render(){
    return(
      <div className='signup'>
        <TitleHeader title='signup'/>
        <div className='signup-content'>
          <div className='signup-hero'>
            <h1 className='title'>
              注册
            </h1>
            <p className='slogan'>
              连接小而确定的幸福
            </p>
          </div>
          <form className='signup-form' onSubmit={this.signup}>
            <div className='signup-text-inputs'>
              <div className='signup-text-inputs-inner'>
                <input type='text' placeholder='用户名'/>
                <input type='text' placeholder='Email'/>
                <input type='password' placeholder='密码'/>
                <input type='password' placeholder='再次输入密码'/>
              </div>
            </div>
            <div className='signup-actions'>
              <button type='sumbit'>注册</button>
            </div>
          </form>
          <div className='signup-other-option'>
            <Link to='/login'>已有账号？直接登陆</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
