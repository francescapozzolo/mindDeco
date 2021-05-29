import axios from 'axios'

const carritoActions = {
    agregarProductoAlCarrito: (user, producto) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.put('http://localhost:4000/api/carrito',{producto},{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                
            }catch(error){
                console.log(error)
            }
        }        
    },
    modificarProducto: (user, producto, cantidad) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.put('http://localhost:4000/api/modificarCantidadProducto',{producto, cantidad},{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                
            }catch(error){
                console.log(error)
            }
        }    
    }
}

export default carritoActions