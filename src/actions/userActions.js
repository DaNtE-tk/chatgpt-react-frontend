import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL
} from '../constants/userConstants'
import axios from 'axios'

// https://demoappme.azurewebsites.net/api/users/login?code=eIEl-SeVBEXLKETmTlKgkiaopXkXKj6cq0zYElQHQUW0AzFuaDwtHA==
axios.defaults.baseURL = "https://demoappme.azurewebsites.net"

export const login = (email,password)=> async(dispatch) =>{
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post(
            '/api/users/login?code=eIEl-SeVBEXLKETmTlKgkiaopXkXKj6cq0zYElQHQUW0AzFuaDwtHA==',
            {
                'email':email,
                'password':password
            },
            config
            )

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}


export const logout = () =>(dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})
    // dispatch({type:USER_DETAILS_RESET})
    // dispatch({type:ORDER_LIST_MY_RESET})
    // dispatch({type:USER_LIST_RESET})
}

export const register = (name,email,password)=> async(dispatch) =>{
    try{
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers:{
                "Access-Control-Allow-Origin": "*",
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post(
            '/api/users/register/?code=cgDL4OM9y2lmal-P7FnkOKrdsbKouNOJmdenMlRy-DzFAzFubZzhQA==',
            {
                "name":name,
                "email":email,
                "password":password
            },
            config
            )

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}