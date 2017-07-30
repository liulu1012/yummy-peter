import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './dashboard.css'
import svg from './comment.svg'

class Dashboard extends React.Component{
  imgUrl1 = 'http://media.haoduoshipin.com/yummy/dishes/dish3.jpg'
  imgUrl2 = 'http://media.haoduoshipin.com/yummy/dishes/dish1.jpg'
  styles = {
    dishImg : {
      'background' :  `url(${this.imgUrl1}) no-repeat center center`,
      'height' : '130px',
      'width':'90%',
      'margin':'0 auto',
      'marginTop' : '20px'
    }
  }
	render(){
		return(
			<div className='dashboard'>
				<TitleHeader title='好友更新' />
				<div className='feed-wrap'>
					<div className='feed-item'>
            <div className='feed-item-header'>
              <div className='feed-user'>
                <img src='http://media.haoduoshipin.com/yummy/default-avatar.png' alt='avtar'/>
                <div className='feed-user-name-wrap'>
                  <div className='feed-user-name'>
                    liulu
                  </div>
                  <div className='feed-user-time'>
                    2017nian7yue
                  </div>
                </div>
              </div>
              <div className='feed-comment-btn'>
                <img src={svg} alt='comment' />
              </div>
            </div>
            <div style={this.styles.dishImg} className='feed-item-dish'></div>
          </div>
				</div>
			</div>
		)
	}
}

export default Dashboard
