import React, { useEffect } from 'react'
import Inicio from './pages/Inicio'
// import './styles/stylelorenzo.css'
import "./styles/stylebaez.css"
import "./styles/stylecomes.css"
import "./styles/styledomato.css"
import "./styles/stylelorenzo.css"
import "./styles/stylepozzolo.css"
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
// import Registro from './pages/Registro'
import SignIn from './pages/SignIn'
import Ingreso from './componentes/auth/Ingreso'
import {connect} from "react-redux"
import authActions from './redux/actions/authActions'
<<<<<<< HEAD
import Registro from './componentes/auth/Registro'

import "./styles/styledomato.css"

=======
import Categoria from './pages/Categoria'
>>>>>>> 14151e9d533562c363b29544e15e776eb9df7f71

import Administrador from './pages/Administrador'
import './styles/stylepozzolo.css';


import "./styles/stylebaez.css"
import "./styles/stylecomes.css"
import "./styles/styledomato.css"
import "./styles/stylelorenzo.css"
import "./styles/stylepozzolo.css"

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
          <Route exact path="/" component={Inicio} />
          <Route path="/ingreso" component={Ingreso}/>
<<<<<<< HEAD
          <Route path="/registro" component={Registro}/>
=======
          <Route path="/categoria" component={Categoria}/>
          <Route path="/administrador" component={Administrador} />
>>>>>>> 14151e9d533562c363b29544e15e776eb9df7f71
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