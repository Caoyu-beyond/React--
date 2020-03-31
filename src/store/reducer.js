
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer }  from '../common/header/store';
import  homeReducer  from '../pages/home/store/reducer';
import  detailReducer  from '../pages/detail/store/reducer';
import  loginReducer  from '../pages/login/store/reducer';

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})