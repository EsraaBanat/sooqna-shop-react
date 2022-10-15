import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// let url = 'http://localhost:3000'
let url = 'https://agents-shop.herokuapp.com'

export const signUp = (data) => {
    return fetch(`${url}/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const signIn = ({username, password}) => {
    // console.log(username, password)
    return fetch(`${url}/signin`, {
        method: 'POST',
        headers: {
            "Authorization": "Basic " + btoa(username + ":" + password)
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err);
    })
}

export const authenticate = (data, next) => {
    console.log('data', data)
    cookies.set('data', data, {path: '/'});
    window
        .location
        .reload();
    next();
};

export const logOut = next => {
    cookies.remove('data', {path: '/'})
    window
        .location
        .reload();

};

export const isAuthenticated = () => {
    if (cookies.get('data') === 'undefined') {
        return false;
    }
    if (cookies.get('data')) {
        return cookies.get('data');
    } else {
        return false;
    }
};

export const userInfo = async(token) => {
    const result = await axios.get(`${url}/userinfo`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return result.data
};

export const updateUserInfo = async(data, token) => {
    const result = await axios.put(`${url}/updateprofile`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return result;

};