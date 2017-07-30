import React from 'react'


class Attention extends React.Component{
  state = {
  disabled: true,
};
handleDisabledChange = (disabled) => {
  this.setState({ disabled });
}
onChange = (checked) => {
  console.log(checked)
}
  render(){
    return(
      <div className='attention-wrap'>
        <div>
          <div className='profile-attention-card'>
            <div>
              <img src='http://media.haoduoshipin.com/yummy/default-avatar.png' alt='avtar'/>
              <span>liu</span>
            </div>
            <div>
              <div className='checked'>
                guanzhu
              </div>
            </div>
          </div>
          <div className='profile-attention-card'>zhang</div>
          <div className='profile-attention-card'>wang</div>
        </div>
        <div className='card-history'>
          
          <div>
            <h1>商品</h1>
            <p>价格</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Attention
