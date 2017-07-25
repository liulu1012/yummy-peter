import React from 'react'
import './App.css'
import Home from './ui/pages/Home/Home.js'
import Signup from './ui/pages/Signup/Signup.js'
import Sidebar from './ui/shared/Sidebar/Sidebar.js'
import Dashboard from './ui/pages/Dashboard/Dashboard.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
}from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
            <Route render={({location}) => {
              return location.pathname !== '/' ?
              (<Sidebar />): null
            }} />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/signup'  component={Signup} />
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
