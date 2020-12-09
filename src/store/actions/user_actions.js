import axios from 'axios';
import {
    USER_LOGIN,
    USER_AUTH,
    USER_LOGOUT,
    USER_SIGNUP
} from '../types';


/*========= USER ===========*/

export function loginUser({email, password}){

    const request = axios.post('https://pet-haven-api.herokuapp.com/api/users/login', {email, password})
    .then( response => response.data )

    return {
        type: USER_LOGIN,
        payload:request
    }
}


export function auth(){
    const request = axios.get('https://pet-haven-api.herokuapp.com/api/users/auth')
                    .then(response => response.data);

        return {
            type: USER_AUTH,
            payload:request
        }
}

export function logoutUser(){
    const request = axios.get('https://pet-haven-api.herokuapp.com/api/users/logout')
                    .then( response => { 
                        return null
                    });
    return {
        type: USER_LOGOUT,
        payload:request
    }        
}

export function signupUser({email, password, firstname, lastname, address1, address2, city, state, country, zipcode, role}){
    const request = axios.post('https://pet-haven-api.herokuapp.com/api/users/register', {email, password, firstname, lastname, address1, address2, city, state, country, zipcode, role})
    .then( response => response.data )

    return {
        type: USER_SIGNUP,
        payload:request
    }       
}

