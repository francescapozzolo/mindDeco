import React from 'react'
import {connect} from "react-redux"
import carritoActions from "../../redux/actions/carritoActions"
import CloseIcon from '@material-ui/icons/Close';
import NumericInput from 'react-numeric-input'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify'


const Producto = (props) => {
    const borrarProducto = () => {
        Swal.fire({
            title: '¿Esta seguro que quiere eliminar este producto?',
            text: "No podra revertir esta accion!",
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#C9B687',
            cancelButtonColor: '#C9B687',
            confirmButtonText: 'Borrar',
            cancelButtonText: 'Cancelar',
            customClass: {
                container: 'BFjala',
                popup: '...',
                header: '...',
                title: 'BTitleSwal',
                closeButton: '...',
                icon: 'BSwalIcon',
                image: '...',
                content: '...',
                htmlContainer: '...',
                input: '...',
                inputLabel: '...',
                validationMessage: '...',
                actions: '...',
                confirmButton: 'BButon',
                denyButton: '...',
                cancelButton: 'BButon',
                loader: '...',
                footer: '....'
              }
          }).then((result) => {
            if (result.isConfirmed) {
                props.borrarProducto(props.producto)
            Swal.fire({
                title:'Borrado!',
                text:'Su producto ha sido borrado.',
                confirmButtonText:'Volver al carrito',
                confirmButtonColor: '#C9B687',
                customClass: {
                    container: 'BFjala',
                    popup: '...',
                    header: '...',
                    title: '...',
                    closeButton: '...',
                    icon: 'BSwalIcon',
                    image: '...',
                    content: '...',
                    htmlContainer: '...',
                    input: '...',
                    inputLabel: '...',
                    validationMessage: '...',
                    actions: '...',
                    confirmButton: 'BButon',
                    denyButton: '...',
                    cancelButton: 'BButon',
                    loader: '...',
                    footer: '....'
                  }
            }
                )
            }
          })
    }

    return (
        <div className='BContainerProducto'>
            <div className='BImagenProducto' style={{backgroundImage:`url(${props.producto.idProducto.fotos[0]})`}}></div>
            <div className='BProductoContenido'>
                <div className='BContainerTituloProducto'>
                    <h3 className='BTituloProducto'>{props.producto.idProducto.nombre.charAt(0).toUpperCase() + props.producto.idProducto.nombre.slice(1, props.producto.idProducto.nombre.legth)}</h3>
                    <h4 className='BPrecioProducto'>${props.producto.idProducto.precio}</h4>
                    {/* <h5 className='BDescripcionProducto'>{props.producto.idProducto.dimensiones ? 'Dimensión: '+ props.producto.idProducto.dimensiones : null}</h5> */}
                </div>
                <div className='BContainerNumeric'>
                    <NumericInput 
                        className="BInputNumeric" 
                        value={ props.producto.cantidad } 
                        min={ 1 } 
                        max={ props.producto.idProducto.stock } 
                        step={ 1 } 
                        precision={ 0 } 
                        size={ 5 } 
                        onChange={ (e) => {
                            if(String(e) === String(props.producto.idProducto.stock)){
                                toast.error('No hay mas productos en stock')
                            }
                            return props.loading ? props.modificaProducto(props.producto, e) : null
                        }
                        } 
                    />
                </div>
                <h3 className='BTotalProducto'>${props.producto.cantidad*props.producto.idProducto.precio} </h3>
                <CloseIcon className="BIconoClose" onClick={borrarProducto}/>
            </div>
            <ToastContainer/>
        </div>
    )
}

const mapStateToProps = state => {
   return { 
       userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    logInUser: carritoActions.logInUser,
}

export default connect(mapStateToProps ,mapDispatchToProps)(Producto)