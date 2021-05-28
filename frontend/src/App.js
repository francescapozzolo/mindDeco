import React, { useEffect } from 'react'
import Inicio from './pages/Inicio'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
// import Registro from './pages/Registro'
import Ingreso from './componentes/auth/Ingreso'
import {connect} from "react-redux"
import authActions from './redux/actions/authActions'
import Categoria from './pages/Categoria'

import Administrador from './pages/Administrador'

import Registro from './componentes/auth/Registro'

import "./styles/stylebaez.css"
import "./styles/stylecomes.css"
import "./styles/styledomato.css"
import "./styles/stylelorenzo.css" 
import "./styles/stylepozzolo.css"

import Header from './componentes/Header'

const App = ({userLogged, logInForced}) => {

  useEffect(()=>{
    if (!userLogged && localStorage.getItem('token')) {
      const userData = JSON.parse(localStorage.getItem('userLogged'))
      const userForced = {
        token: localStorage.getItem('token'),
        ...userData
      }

      logInForced(userForced)
    }
  },[userLogged, logInForced])  
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/ingreso" component={Ingreso}/>
          <Route path="/categoria" component={Categoria}/>
          <Route path="/administrador" component={Administrador} />
          <Route path="/registro" component={Registro}/>
          <Redirect to='/'/>
        </Switch>
      </BrowserRouter>
    )
  }


// const mapStateToProps = state =>{
//   return{
//     userLogged: state.userLogged
//   }
// }

// const mapDispatchToProps = {
//   logInForced : authActions.logInForced
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App)
export default App