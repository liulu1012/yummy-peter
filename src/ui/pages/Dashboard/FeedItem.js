import React from 'react'
import svg from './comment.svg'
import CommentIcon from '../../icons/CommentIcon'
import {Link} from 'react-router-dom'

class FeedItem extends React.Component{
  render(){
    return(
      <div className='feed-item expand'>
        <div className='feed-expand'>
          评论内容
        </div>
        <div className='feed-card'>
          <div className='feed-card-header'>
            <div className='feed-user'>
              <img src='http://media.haoduoshipin.com/yummy/default-avatar.png' alt='avtar'/>
              <div className='feed-user-info'>
                <div className='feed-username'>
                  liulu
                </div>
                <div className='feed-time'>
                  2017
                </div>
              </div>
            </div>
            <div className='feed-button'>
              <CommentIcon color={'#fe5196'} />
            </div>
          </div>
          <Link style={{'backgroundImage':`url(http://media.haoduoshipin.com/yummy/dishes/dish1.jpg)`}} to={`/dish/`} className='feed-dish'></Link>
        </div>
      </div>
    )
  }
}

export default FeedItem
