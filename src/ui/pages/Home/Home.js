import React from 'react'
import './home.css'
import logo from './logo.svg'
import {Link} from 'react-router-dom'

class Home extends React.Component{
  render(){
    return(
      <div className='home'>
        <div className='hero'>
          <img src={logo} alt='logo' className='app-logo' />
          <h1 className='title'>吮指</h1>
          <p className='slogan'>享受舌尖艳遇</p>
        </div>
        <div className='actions'>
          <Link to='/signup'>注册</Link>
          <Link to='/login'>登陆</Link>
        </div>
      </div>
    )
  }
}

export default Home
