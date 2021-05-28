import React from 'react'
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

const Navbar = () => {
    return (
        <div className="c-navbarContainer">
            <div className="c-innerNavbarContainer">

                <div className="c-logoNavbar"></div>

                <div className="c-iconsContainer">
                    <div>
                        <AccountCircleRoundedIcon style={{fontSize: 30}} />
                    </div>
                    <div>
                        <LocalMallRoundedIcon  style={{fontSize: 30}} />
                    </div>
                    <div>
                        <ShoppingCartRoundedIcon  style={{fontSize: 30}} />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Navbar