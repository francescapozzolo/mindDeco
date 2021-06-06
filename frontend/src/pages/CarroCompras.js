import React, { useEffect } from 'react'
import {connect} from "react-redux"
import carritoActions from "../redux/actions/carritoActions"
import Modal from 'react-modal'

const CarroCompras = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Modal
                // isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
            ></Modal>
        </div>
    )
}
const mapDispatchToProps = {
    logInUser: carritoActions.logInUser 
}

export default connect(null ,mapDispatchToProps)(CarroCompras)