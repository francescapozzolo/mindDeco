import axios from 'axios'

const productosActions = {
    obtenerLosProductos: () => {
        return async(dispatch, getState) => {
            try {
                const respuesta = await axios.get('http://localhost:4000/api/productos')
                if(respuesta.data.success) {
                    dispatch({
                        type: 'OBTENER_PRODUCTOS',
                        payload: respuesta.data.respuesta
                    })
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
                const respuesta = await axios.get(`http://localhost:4000/api/productos/${categoria}`)
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
}

export default productosActions