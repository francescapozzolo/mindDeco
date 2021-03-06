import axios from 'axios'

const carritoActions = {
    agregarProductoAlCarrito: (user, producto) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.put('https://minddeco.herokuapp.com/api/carrito',{producto},{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                dispatch({
                    type: 'LOG_USER',
                    payload: {...response.data.respuesta, token: user.token}
                })
                return response.data
            }catch(error){
                console.log(error)
            }
        }        
    },
    modificarProducto: (user, producto, cantidad) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.put('https://minddeco.herokuapp.com/api/modificarCantidadProducto',{producto, cantidad},{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                dispatch({
                    type: 'LOG_USER',
                    payload: response.data.success ? {...response.data.respuesta, token: user.token} : null
                })
                return response.data.respuesta                
            }catch(error){
                console.log(error)
            }
        }    
    },
    obtenerProductos: (user) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.get('https://minddeco.herokuapp.com/api/obtenerProductos',{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                return response.data.respuesta
            }catch(error){
                console.log(error)
            }
        }        
    },
    borrarProducto:(user, producto) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.put('https://minddeco.herokuapp.com/api/borrarProducto',{producto},{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                // console.log('ln: 13', response.data.respuesta )
                dispatch({
                    type: 'LOG_USER',
                    payload: response.data.success ? {...response.data.respuesta, token: user.token} : null
                })
                return response.data.respuesta
            }catch(error){
                console.log(error)
            }
        }       
    },
    vaciarCarrito:(user,producto) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.put('https://minddeco.herokuapp.com/api/vaciarCarrito',{producto},{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                // console.log('ln: 13', response.data.respuesta )
                dispatch({
                    type: 'LOG_USER',
                    payload: response.data.success ? {...response.data.respuesta, token: user.token} : null
                })
                return response.data.respuesta
            }catch(error){
                console.log(error)
            }
        }       
    },

}

export default carritoActions