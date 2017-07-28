import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './dashboard.css'

class Dashboard extends React.Component{
	render(){
		return(
			<div className='dashboard'>
				<TitleHeader title='好友更新' />
				<div className='feed-wrap'>
					<div className='feed-item'></div>
				</div>
			</div>
		)
	}
}

export default Dashboard
