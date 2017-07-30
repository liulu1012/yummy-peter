import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './cart.css'
import axios from 'axios'
import Settings from '../../../settings.js'
import {connect} from 'react-redux'


class Cart extends React.Component{
  state = {
    num:1,
    prices:20
  }
  clickNumMinus= () => {
    let {num,prices} = this.state
    this.state.num===0?0:this.setState({num:num-1,prices:num*20})

  }
  clickNumAdd = () => {
    let {num,prices} = this.state
    this.setState({num:num+1,prices:num*20})
  }
  render(){
    let {num,prices} = this.state
    return(
      <div className='cart'>
        <TitleHeader title='购物车' />
        <div className='cart-wrap'>
          <div className='cart-total'><span>{prices}</span>元</div>
          <div className='cart-card-wrap'>
            <div className='cart-card-item'>
              <div className='cart-card-shop'>
                <img src='http://media.haoduoshipin.com/yummy/dishes/dish3.jpg' alt='cart' />
                <div className='cart-card-price'>
                  <h2>White Shirt</h2>
                  <p>$&nbsp;<span className="price">20.00</span></p>
                </div>
              </div>
              <div className='cart-card-num'>
                <span className='cart-card-minus' onClick={this.clickNumMinus}>-</span>
                <span className='cart-card-item-num'><span>{this.state.num}</span></span>
                <span className='cart-card-add' onClick={this.clickNumAdd}>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(null)(Cart)
