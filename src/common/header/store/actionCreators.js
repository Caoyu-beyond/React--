import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})


export const getList = () => {
    return (dispatch) => {
        //console.log(123);
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch(()=>{
            console.log('error');
            
        })
    }
}


/**
 * 1 异步获取的数据都拆分到了actionCreators里面,如果想要拆分到这里来，就要求返回的不能是一个对象 而是一个函数 就必须用redux-thunk中间件
 *  
 * **/