import React, { useEffect, useState } from 'react'
import Inicio from './pages/Inicio'
import { ToastContainer } from 'react-toastify'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Ingreso from './componentes/auth/Ingreso'
import {connect} from "react-redux"
import authActions from './redux/actions/authActions'
import carritoActions from './redux/actions/carritoActions'
import Categoria from './pages/Categoria'
import Carrito from './componentes/carrito/Carrito'
import Administrador from './pages/Administrador'
import Registro from './componentes/auth/Registro'
import Producto from './pages/Producto'
import PasarelaDePago from './pages/PasarelaDePago'
import Header from './componentes/Header'
import Footer from './componentes/Footer'

import "./styles/stylebaez.css"
import "./styles/stylecomes.css"
import "./styles/styledomato.css"
import "./styles/stylelorenzo.css" 
import "./styles/stylepozzolo.css"
import "antd/dist/antd.css";



const App = ({userLogged, logInForced, obtenerProductos}) => {
  const [carrito, setCarrito] = useState(null)
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
      <>
        <ToastContainer/>
        <BrowserRouter>
        <Header carrito={carrito}/>
          <Switch>
            <Route path="/ingreso" component={Ingreso}/>
            <Route exact path="/" component={Inicio}/>
            <Route path="/categoria/:categoria" component={Categoria}/>
            <Route path="/administrador" component={Administrador} />
            <Route path="/registro" component={Registro}/>
            <Route path="/carrito" component={Carrito}/>
            <Route path="/producto/:id" component={Producto} />
            <Route path="/comprar" component={PasarelaDePago} />
            <Redirect to='/'/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    )
  }

const mapStateToProps = state =>{
  return{
    userLogged: state.userLogged
  }
}

const mapDispatchToProps = {
  logInForced : authActions.logInForced,
  obtenerProductos : carritoActions.obtenerProductos
}

export default connect(mapStateToProps,mapDispatchToProps)(App)