import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './dashboard.css'
import FeedItem from './FeedItem'


class Dashboard extends React.Component{
  cards = [
    {username:'liulu',comment:'真是好吃'},
    {username:'gao',comment:'不错'},
    {username:'wang',comment:'3星'},
  ]
	render(){
    const cardList = this.cards.map((c,index) => {
      return(
        <FeedItem key={index} username={c.username} comment={c.commeng} />
      )
    })
		return(
			<div className='dashboard'>
				<TitleHeader title='好友更新' />
				<div className='feed-wrap'>
          {cardList}
				</div>
			</div>
		)
	}
}

export default Dashboard
