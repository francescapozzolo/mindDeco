import React, { useEffect } from 'react'
import Inicio from './pages/Inicio'

import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
// import Registro from './pages/Registro'
import Ingreso from './componentes/auth/Ingreso'
import {connect} from "react-redux"
import authActions from './redux/actions/authActions'
import Categoria from './pages/Categoria'
import Carrito from './componentes/carrito/Carrito'
import Administrador from './pages/Administrador'
import Registro from './componentes/auth/Registro'

import "./styles/stylebaez.css"
import "./styles/stylecomes.css"
import "./styles/styledomato.css"
import "./styles/stylelorenzo.css" 
import "./styles/stylepozzolo.css"
import Header from './componentes/Header'
import Footer from './componentes/Footer'


const App = ({userLogged, logInForced}) => {
  useEffect(()=>{
    if (!userLogged && localStorage.getItem('token')) {
      const userData = JSON.parse(localStorage.getItem('userLogged'))
      const userForced = {
        token: localStorage.getItem('token'),
        ...userData
      }
      console.log(userForced)
      logInForced(userForced)
    }
  },[userLogged, logInForced])  
    return(
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/ingreso" component={Ingreso}/>
          <Route exact path="/" component={Inicio}/>
          <Route path="/categoria" component={Categoria}/>
          <Route path="/administrador" component={Administrador} />
          <Route path="/registro" component={Registro}/>
          <Route path="/carrito" component={Carrito}/>
          <Redirect to='/'/>
        </Switch>
        <Footer />
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
