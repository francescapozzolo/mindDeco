import React, { useEffect } from 'react'
import Inicio from './pages/Inicio'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Registro from './pages/Registro'
import Logueo from './pages/Logueo'
import {connect} from "react-redux"
import authActions from './redux/actions/authActions'

const App = () => {
  useEffect(()=>{
    if (!this.props.userLogged && localStorage.getItem('token')) {
      const userData = JSON.parse(localStorage.getItem('userLogged'))
      const userForced = {
        token: localStorage.getItem('token'),
        ...userData
      }

      this.props.logInForced(userForced)
    }
  },[])  
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/registro" component={Registro}/>
          <Route path="/logueo" component={Logueo}/>
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    )
  }

const mapStateToProps = state =>{
  return{
    userLogged: state.userLogged
  }
}

const mapDispatchToProps = {
  logInForced : authActions.logInForced
}

export default connect(mapStateToProps,mapDispatchToProps)(App)