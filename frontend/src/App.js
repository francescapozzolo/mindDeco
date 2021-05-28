import React, { useEffect } from 'react'
import Inicio from './pages/Inicio'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Ingreso from './componentes/auth/Ingreso'
import {connect} from "react-redux"
import authActions from './redux/actions/authActions'
import Administrador from './pages/Administrador'
import './styles/stylepozzolo.css';


const App = (props) => {
  useEffect(()=>{
    if (!props.userLogged && localStorage.getItem('token')) {
      const userData = JSON.parse(localStorage.getItem('userLogged'))
      const userForced = {
        token: localStorage.getItem('token'),
        ...userData
      }

      props.logInForced(userForced)
    }
  },[])  
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/ingreso" component={Ingreso}/>
          <Route path="/administrador" component={Administrador} />
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