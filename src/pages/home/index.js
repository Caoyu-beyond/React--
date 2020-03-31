import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { HomeWrapper,HomeLeft,HomeRight,BackTop } from './style';
import {actionCreators} from './store';

class Home extends PureComponent{

    handleScrollTop() {
        window.scrollTo(0,0)
    }

    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img 
                            className='banner-img' 
                            src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
                            alt="" />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                    {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>返回<br/>顶部</BackTop> : null}
                </HomeWrapper>
            </div>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWilUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(e) {
        if(document.documentElement.scrollTop>200) {
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState,mapDispatch) (Home);
