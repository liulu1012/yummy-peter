import React from 'react'
import './login.css'
import TitleHeader from '../../shared/TitleHeader/TitleHeader.js'
import {Link} from 'react-router-dom'

class Login extends React.Component{
  render(){
    return(
      <div className='login'>
        <TitleHeader title='login' />
      </div>
    )
  }
}

export default Login
