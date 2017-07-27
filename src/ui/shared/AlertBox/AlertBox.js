import React from 'react'
import './alert-box.css'
import {connect} from 'react-redux'


class AlertBox extends React.Component{
  closeAlert = () => {
    console.log('...HIDE_ALERT')
    this.props.dispatch({type:'HIDE_ALERT'})
  }
  // componentWillMount(){
  //   // console.log(store.getState())
  // }
  render(){
    return(
      <div className={this.props.showAlert ?'alert-box show' : 'alert-box'}>
        <div className='alert-content-card'>
          <div className='alert-msg'>
            {this.props.alertMsg}
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
  showAlert : state.app.showAlert,
  alertMsg : state.app.alertMsg
})

export default connect(mapStateToProps)(AlertBox)
