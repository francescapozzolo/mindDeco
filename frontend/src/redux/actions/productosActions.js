import axios from 'axios'

const productosActions = {
    obtenerLosProductos: () => {
        return async(dispatch, getState) => {
            try {
                const respuesta = await axios.get('https://minddeco.herokuapp.com/api/productos')
                if(respuesta.data.success) {
                    dispatch({
                        type: 'OBTENER_PRODUCTOS',
                        payload: respuesta.data.respuesta
                    })
                    return respuesta.data.respuesta
                } else {
                    alert('Algo salio mal y seras redigirido a la pagina inicial')
                }                
            } catch(error) {
                console.log(error)
                alert('Error interno del servidor, intente nuevamente en un momento')
            }
        }
    },

    obtenerProductosPorCategoria: (categoria) => {
        return async(dispatch, getState) => {
            try {
                const respuesta = await axios.get(`https://minddeco.herokuapp.com/api/productos/${categoria}`)
                if(respuesta.data.success) {
                    dispatch({
                        type: 'PRODUCTOS_CATEGORIA',
                        payload: respuesta.data.respuesta
                    })
                } else {
                    alert('Algo salio mal y seras redigirido a la pagina inicial')
                }    
            } catch (error) {
                console.log(error)
                alert('Error interno del servidor, intente nuevamente en un momento')
            }
        }
    },

    obtenerProductoPorId: (id) => {
        return async(dispatch, getState) => {
            try {
                const respuesta = await axios.get(`https://minddeco.herokuapp.com/api/producto/${id}`)
                if(respuesta.data.success) {

                    console.log(respuesta.data.respuesta)
                    return respuesta.data.respuesta
                } else {
                    alert('Algo salio mal y seras redigirido a la pagina inicial')
                }    
            } catch (error) {
                console.log(error)
                alert('Error interno del servidor, intente nuevamente en un momento')
            }
        }
    },

    obtenerProductosPorSubcategoria: (subcategoria) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.get(`https://minddeco.herokuapp.com/api/productosSubcategoria/${subcategoria}`)
                if(respuesta.data.success) {
                    dispatch({
                        type: 'PRODUCTOS_SUBCATEGORIA',
                        payload: respuesta.data.respuesta
                    })
                } else {
                    alert('Algo salio mal y seras redigirido a la pagina inicial')
                }    
            } catch (error) {
                console.log(error)
                alert('Error interno del servidor, intente nuevamente en un momento')
            }
        }
    },

    cargarNuevoProducto: (formData) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.post(`https://minddeco.herokuapp.com/api/productos`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    } 
                })
                dispatch({
                    type: 'AGREGAR_PRODUCTO',
                    payload: respuesta.data.respuesta
                })
                return respuesta.data                
            }
            catch(error){
                console.log(error)
            }
        }
    }
}

export default productosActions