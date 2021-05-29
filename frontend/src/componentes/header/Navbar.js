import React, { useState } from 'react'
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="c-navbarContainer">
            <div className="c-innerNavbarContainer">

                <div className="c-logoNavbar"></div>

                <div className="c-iconsContainer">
                    <div>
                        <AccountCircleRoundedIcon style={{fontSize: 30}} onClick={()=> setOpen(!open)}/>
                        {
                            open && <div>
                                <NavLink to='/ingreso'>Ingreso</NavLink>
                                <NavLink to='/registro'>Registro</NavLink>
                            </div>
                        }
                    </div>
                    <div>
                        <LocalMallRoundedIcon  style={{fontSize: 30}} />
                    </div>
                    <div>
                        <NavLink to='/carrito' style={{color: 'white'}}><ShoppingCartRoundedIcon style={{fontSize: 30}} /></NavLink>                         
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Navbar