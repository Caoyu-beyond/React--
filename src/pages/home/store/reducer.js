import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultState = fromJS({
    page:1, //hot当前页数
    totalPage:1,  //hot总页数
    topicList:[],
    detailList:[],
    recommendList:[],
    writersList:[],
    homeListPage:1,
    showScroll:false
});

const changeHomeData = (state,action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        detailList: fromJS(action.detailList),
        recommendList: fromJS(action.recommendList),
        writersList: fromJS(action.writersList),
    })
};

const addHomeist = (state,action) => {
    return state.merge({
        "detailList": state.get('detailList').concat(action.list),
        "homeListPage": action.page
    })
};

const changeList = (state,action) => {
    return state.merge({
        list: action.data,
        totalPage: action.totalPage
    })
};   

export default ( state = defaultState,action ) => {
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case constants.ADD_HOME_LIST:
            return addHomeist(state,action);
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);    
        case constants.CHANGE_LIST:
            return changeList(state,action);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state; 
    }
}
