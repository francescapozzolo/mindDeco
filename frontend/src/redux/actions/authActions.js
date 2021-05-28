import axios from 'axios'
// import {toast } from 'react-toastify'

const authActions = {
    createUser: (user) => {
        return async (dispatch, getState) => {
            try{

<<<<<<< HEAD
                const response = await axios.post('http://localhost:3000/api/user/signup', user)
=======
                const response = await axios.post('http://localhost:3000/', user)
>>>>>>> 14151e9d533562c363b29544e15e776eb9df7f71
                if(!response.data.success){
                    return response.data.errores
                }
                dispatch({
                    type: 'LOG_USER',
                    payload: response.data.success ? response.data.respuesta : null
                })
            }catch(error){
                console.log(error)

            }
        }
    },
    logInUser: (user) => {
        return async(dispatch, getState) => {
            try{

<<<<<<< HEAD
                const response = await axios.post('http://localhost:3000/api/user/signin', user)
=======
                const response = await axios.post('http://localhost:3000/', user)
>>>>>>> 14151e9d533562c363b29544e15e776eb9df7f71
                if(!response.data.success){
                    return response.data.error
                }
                dispatch({
                    type:'LOG_USER',
                    payload: response.data.success ? response.data.respuesta : null
                })
            }catch(error){
                console.log(error)
            }
        }
    },
    logOutUser: () => {
        return(dispatch, getState) => {
            try{
                dispatch({type: 'LOGOUT_USER'})
            }catch(error){
                console.log(error)
            }
        }
    },
    logInForced: (user) => {
        
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.get('http://localhost:3000/', {
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                
                dispatch({type: 'LOG_USER', payload: {
                    ...respuesta.data.respuesta,
                    token: user.token
                }})
            } catch(error) {
                console.log(error)
                // toast.error('Ops... An error occurred, contact the administrator')  
            }
            
        }
    }
    

        
}

export default authActions