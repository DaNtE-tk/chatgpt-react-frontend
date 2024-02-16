import {
    SEND_PROMPT_REQUEST,
    SEND_PROMPT_SUCCESS,
    SEND_PROMPT_FAIL,

    USER_PROMPTS_REQUEST,
    USER_PROMPTS_SUCCESS,
    USER_PROMPTS_FAIL
} from '../constants/promptConstant'

export const sendPromptReducer = (state={}, action) =>{
    switch(action.type){
        case SEND_PROMPT_REQUEST:
            return {loading: true}
        case SEND_PROMPT_SUCCESS:
            return {loading: false, success: true, prompt: action.payload}
        case SEND_PROMPT_FAIL:
            return {loading: false, success: false, error: action.payload}
        default:
            return state
    }
}

export const getUserPromptsReducer = (state={prompts:[]}, action) =>{
    switch(action.type){
        case USER_PROMPTS_REQUEST:
            return {loading: true}
        case USER_PROMPTS_SUCCESS:
            return {loading: false, success: true, prompts: action.payload}
        case USER_PROMPTS_FAIL:
            return {loading: false, success: false, error: action.payload}
        default:
            return state
    }
}