const initialState =  {
    todosLosProductos: [],
    productosCategoria: []
}

const productosReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'OBTENER_PRODUCTOS':
            return {
                ...state,
                todosLosProductos: action.payload
            }
        case 'PRODUCTOS_CATEGORIA':
            return {
                ...state,
                productosCategoria: action.payload
            }
        default:
            return state
    }
}

export default productosReducer