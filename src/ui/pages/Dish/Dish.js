import React from 'react'
import {connect} from 'react-redux'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './dish.css'
import ShoppingIcon from './ShoppingIcon'


class Dish extends React.Component{
  state = {
    buy:false
  }
  buy = () => {
    this.setState({
      buy:true
    })
    this.props.dispatch({type:'ADD_CART',dishId:'xxx'})
  }
  render(){
    if(Object.keys(this.props.dishes).length !== 0){
      const {dishes} = this.props
      const {dishId} = this.props.match.params
      console.log(dishes[dishId])
      let dish = dishes[dishId]
      //因为加载需要时间，刚开始是空对象，所以需要用对象的键值长度进行判断
      return(
        <div className='dish'>
          <TitleHeader title={dish.name} />
          <div className='dish-info'>
            <div className='dish-img-wrap'>
              <div style={{'backgroundImage':`url(${dish.poster})`}} className='img'>
              </div>
            </div>
            <div className='dish-info-card'>
              <h1 className='dish-name'>{dish.name}</h1>
              <div className='price-tag'>
                24<span className='unit'>元</span>
              </div>
              <div onClick={this.buy} className='shopping-icon-wrap'>
                <ShoppingIcon color={this.state.buy?'#F77062':'#D0D0D0'} />
              </div>
            </div>
          </div>
        </div>
      )
    }else{ return null}
  }
}

const mapStateToProps = (state) => ({
  dishes:state.dish.all
})

export default connect(mapStateToProps)(Dish)
