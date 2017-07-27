import React from 'react'
import './App.css'
import Home from './ui/pages/Home/Home.js'
import Signup from './ui/pages/Signup/Signup.js'
import Login from './ui/pages/Login/Login.js'
import Sidebar from './ui/shared/Sidebar/Sidebar.js'
import Dashboard from './ui/pages/Dashboard/Dashboard.js'
import AlertBox from './ui/shared/AlertBox/AlertBox'
import {
  BrowserRouter as Router,
  Route,
  Switch
}from 'react-router-dom'


class App extends React.Component{
  render(){
    return(
      <div>
        <AlertBox />
        <Router>
          <div>
            <Route render={({location}) => {
              return location.pathname !== '/' ?
              (<Sidebar />): null
            }} />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/signup'  component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/dashboard' component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
