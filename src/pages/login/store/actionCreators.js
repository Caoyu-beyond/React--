import axios from 'axios';
import * as constants from './constants';

const getLogin = () => ({
    type:constants.CHANGE_LOGIN,
    value: true
})

export const changeLogOut = () => ({
    type:constants.LOG_OUT,
    value: false
})

export const login = (account,password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password ).then((res) => {
            const result = res.data.data;
            if(result){
                dispatch(getLogin()) 
            }else{
                alert('登录失败')
            }
        })
    }
}