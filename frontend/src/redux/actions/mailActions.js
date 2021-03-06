import axios from 'axios'
import {toast } from 'react-toastify'

const mailActions = {
    mandarMail: (mail) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.post('https://minddeco.herokuapp.com/api/mensaje', mail)
                if(!response.data.success){
                    toast.success('Su mail fue enviado con éxito')
                }
            }catch(error){
                console.log(error)
            }
        }
    },  
}

export default mailActions