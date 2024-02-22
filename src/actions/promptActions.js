import {
    SEND_PROMPT_REQUEST,
    SEND_PROMPT_SUCCESS,
    SEND_PROMPT_FAIL,

    USER_PROMPTS_REQUEST,
    USER_PROMPTS_SUCCESS,
    USER_PROMPTS_FAIL
} from '../constants/promptConstant'
import axios from 'axios'

// axios.defaults.baseURL = 'http://localhost:7071';

export const createPrompt = (prompt) => async(dispatch, getState)=>{
    try{
        dispatch({type:SEND_PROMPT_REQUEST})
        // console.log(prompt);
        const {
            userLogin : {userInfo},
        } = getState()

        const config = {
            headers:{
                "Access-Control-Allow-Origin": "*",
                'Content-type':'application/json',
                // Authorization:`Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post(
            `/api/prompts/send-prompt?code=T_JCvMblGTCBT0PZA0z6UyZr5PcxpKsX8Q5zjR20OKjPAzFu3WD4Mg==`,
            {
                "email":userInfo.email,
                "prompt":prompt
            },
            config,
            )
        dispatch({
            type:SEND_PROMPT_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type:SEND_PROMPT_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listUserPrompts = () => async (dispatch, getState)=>{
    try{
        dispatch({ type: USER_PROMPTS_REQUEST })
        // console.log(keyword,'',pageNumber);
        const {
            userLogin : {userInfo},
        } = getState()

        const config = {
            headers:{
                "Access-Control-Allow-Origin": "*",
                'Content-type':'application/json',
                // Authorization:`Bearer ${userInfo.token}`
            }
        }
        
        const { data } = await axios.post(
            `/api/prompts/get-records?code=t6Ki7AFytub5m6J_xnjJAcFuLzeUdiIRVC3t9YT8ZBmwAzFuoJPBsQ==`,
            {
                "email":userInfo.email
            },
            config,
            )
        dispatch({
            type: USER_PROMPTS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: USER_PROMPTS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}