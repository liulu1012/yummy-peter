import React from 'react'
import './alert-box.css'
import store from '../../../redux/store.js'
import {connect} from 'react-redux'

class AlertBox extends React.Component{
  closeAlert = () => {
    console.log(store.getState())
  }
  render(){
    return(
      <div className={this.props.showAlert ?'alert-box show' : 'alert-box'}>
        <div className='alert-content-card'>
          <div className='alert-msg'>
            报错信息
          </div>
          <div className='alert-close-button' onClick={this.closeAlert}>
            关闭
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  showAlert : state.showAlert
})

export default connect(mapStateToProps)(AlertBox)
