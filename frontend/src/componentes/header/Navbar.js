import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import PersonIcon from '@material-ui/icons/Person';

import { Menu, Dropdown } from "antd";

import authActions from '../../redux/actions/authActions'

const Navbar = (props) => {

    const itemsCarrito = [
      {articulo: 'Mesa de Roble', precio: 22000, cantidad: 1},
      {articulo: 'Mesa Rectangular', precio: 29000, cantidad: 1},
      {articulo: 'Lampara de Baño', precio: 22000, cantidad: 1}
    ]
    
    const MenuAccount = (
        <Menu>
          <Menu.Item>
            <div className="c-inputHeader">
              {props.userLogged ? <Link to='/' onClick={()=>props.logOutUser()}>CERRAR SESION</Link> : <Link to='/ingreso'>INICIAR SESION</Link>}
            </div>
          </Menu.Item>
          <Menu.Item>
            <div className="c-inputHeader">
            {props.userLogged ? null : <Link to='/registro'>REGISTRARSE</Link>}
            </div>
          </Menu.Item>
        </Menu>
      )

    const MenuOrdenes = (
      <Menu>
        <Menu.Item>
          <div className="c-inputHeader">
            <Link to='/'>MIS PEDIDOS</Link>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div className="c-inputHeader">
            <Link to='/'>INFORMACION PERSONAL</Link>
          </div>
        </Menu.Item>
      </Menu>
      )

    return (
        <div className="c-navbarContainer">
            <div className="c-innerNavbarContainer">
                <Link to="/">
                  <div className="c-logoNavbar"></div>
                </Link>

                <div className="c-iconsContainer">
                    <Dropdown overlay={MenuOrdenes} placement="bottomCenter" arrow>
                        <LocalMallRoundedIcon  style={{fontSize: 30}} />
                    </Dropdown>
                    <Dropdown overlay={MenuAccount} placement="bottomCenter" arrow>
                        <PersonIcon style={{fontSize: 32}} />
                    </Dropdown>
                    <div className="relative">
                        <Link to='/carrito' style={{color: 'white'}}><ShoppingCartRoundedIcon style={{fontSize: 30}} /></Link>                         
                        <div className="c-cantidadesCarrito">{cantidades}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
  return {
    userLogged: state.authReducer.userLogged
  }
}

const mapDispatchToProps = {
  logOutUser: authActions.logOutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)