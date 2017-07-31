import React from 'react'
import {connect} from 'react-redux'

class Dish extends React.Component{
  render(){
    const {dishes} = this.props
    const {dishId} = this.props.match.params
    console.log(dishes[dishId])
    return(
      <div>
      dish
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dishes:state.dish.all
})

export default connect(mapStateToProps)(Dish)
