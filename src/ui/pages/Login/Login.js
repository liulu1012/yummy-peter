import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader.js'
import './login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Settings from '../../../settings.js'
import {connect} from 'react-redux'

class Login extends React.Component{
  signup = (e) => {
    e.preventDefault()
    let username = this.usernameInput.value
    let password = this.passwordInput.value
    let data = {
      username,
      password
    }
    axios.post(`${Settings.host}/user/login`,data)
      .then(res => {
        console.log(res.data)
        this.props.history.push('./dashboard')
        this.props.dispatch({type:'SIGN_IN',username:res.data.username})
      })
      .catch(err => {
        console.log(err.response.data.msg)
        this.props.dispatch({type:'SHOW_ALERT',msg:err.response.data.msg})
      })
  }
  render(){
    return(
      <div className='signup'>
        <TitleHeader title='signup'/>
        <div className='signup-content'>
          <div className='signup-hero'>
            <h1 className='title'>
              登陆
            </h1>
            <p className='slogan'>
              连接小而确定的幸福
            </p>
          </div>
          <form className='signup-form' onSubmit={this.signup}>
            <div className='signup-text-inputs'>
              <div className='signup-text-inputs-inner'>
                <input type='text' placeholder='用户名' ref={value=>this.usernameInput=value}/>
                <input type='password' placeholder='密码' ref={value=>this.passwordInput=value}/>
              </div>
            </div>
            <div className='signup-actions'>
              <button type='sumbit'>登陆</button>
            </div>
          </form>
          <div className='signup-other-option'>
            <Link to='/signup'>没有账号？直接注册</Link>
          </div>
        </div>
      </div>
    )
  }
}



export default connect(null)(Login)
