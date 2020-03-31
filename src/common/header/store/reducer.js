import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page:1, //当前页数
    totalPage:1  //总页数
});

const changeList = (state,action) => {
    return state.merge({
        list: action.data,
        totalPage: action.totalPage
    })
};

export default ( state = defaultState,action ) => {
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
             return changeList(state,action);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
            
        default:
            return state; 
    }
}

/*
    2、 list是immutable类型的数组，直接修改的话会把immutable类型的数组转为普通类型的数组，所以要在actionCreators里面
        把 data 也转为immutable类型的数组
*/