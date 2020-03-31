import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { ListItem,ListInfo,MoreListBtn } from '../style';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent{
    render() {
        const {list,page,getMoreList} = this.props;
        return (
            <div>
                {
                    list.map( (item,index) => {
                        return (
                            <Link key={index} to={'/detail/page='+ item.get('id')}>
                                <ListItem>
                                    <img
                                        className="pic" 
                                        src={item.get('imgUrl')}
                                        alt="" />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('text')} </p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    } )
                }
                <MoreListBtn onClick={() => {getMoreList(page)}}>
                    阅读更多
                </MoreListBtn>
            </div>
        )
    }
}

const mapState = (state) => ({
    list : state.getIn(['home','detailList']),
    page : state.getIn(['home','homeListPage'])
})

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState,mapDispatch) (List);
