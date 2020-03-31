import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    detailList: result.detailList,
    recommendList: result.recommendList,
    writersList: result.writersList
})

const addHomeData = (list,page) => ({
    type: constants.ADD_HOME_LIST,
    list: fromJS(list),
    page
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result))
        }).catch(() => {
            console.log('error');
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeMoreList.json?page='+page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeData(result,page+1))
        })
    }
}

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_SCROLL_TOP,
    show
})
