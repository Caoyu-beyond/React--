import React,{PureComponent} from 'react';
import { fromJS } from 'immutable'
import { connect } from 'react-redux';
import { constants } from '../store';
import { WriterWrapper,WriterInfo,Writers,SearchInfoSwitch,WriterCont,WriterItem } from '../style'

class Writer extends PureComponent{

    getListArea() {
        const { list,page } = this.props; 
        const  newList = list.toJS();
        const pageList = [];

        for(let i = ( page-1 ) *5 ; i < page * 5; i++){
            if( newList.length ) {
                pageList.push(
                    <WriterItem key={newList[i].id}>
                        <a href="https://www.jianshu.com" className="avatar">
                            <img src={newList[i].imgUrl} alt="" />
                        </a>
                        <a href="https://www.jianshu.com" className="follow">
                            <i>+</i> 关注
                        </a>
                        <h2 className="name">{newList[i].title}</h2>
                        <p className="num">写了{newList[i].num}k字 · {newList[i].likes}k喜欢</p>
                    </WriterItem>
                )
            }
        }
        return (
            <div>
                {pageList}
            </div>
        )
    }

    render() {
        const { list,page ,totalPage ,mouseChangePage,handleChangePage } = this.props; 
        return (
            <div>
                <WriterWrapper>
                    <img 
                        src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" 
                        className="ewm_img"
                        alt="" />
                    <WriterInfo>
                        <h2 className="ewm_title">下载简书手机App</h2>
                        <p className="description">随时随地发现和创作内容</p>
                    </WriterInfo>
                </WriterWrapper>
                <Writers onMouseEnter={() => {mouseChangePage(list)}}>
                    推荐作者
                    <SearchInfoSwitch onClick={() => {handleChangePage(page,totalPage,this.spinIcon)}}>
                        <i  ref={ (icon) => { this.spinIcon = icon } }  className="iconfont spin">&#xe851;</i>
                            换一批
                    </SearchInfoSwitch>
                </Writers>
                <WriterCont>
                    {this.getListArea() }
                    <a href="https://www.jianshu.com" className="find-more">
                        查看全部
                    </a>
                </WriterCont>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home','writersList']),
        page: state.getIn(['home','page']),
        totalPage: state.getIn(['home','totalPage'])
    }
    
}

const mapDispathToProps = (dispatch) => {
    return {

        mouseChangePage(list) {
            const changeList = (data) => ({
                type: constants.CHANGE_LIST,
                data: fromJS(data),
                totalPage: Math.ceil(data.size / 5)
            });
            dispatch(changeList(list)) 
        },

        handleChangePage(page,totalPage,spin) {
            
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if( originAngle) {
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = parseInt(-25);
            };
            spin.style.transform = 'rotate('+ (originAngle+360) +'deg)';

            const changePage = (page) => ({
                type: constants.CHANGE_PAGE,
                page
            });
            if( page < totalPage ) {
                dispatch(changePage( page+1 ))
            }else{
                dispatch(changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps) (Writer);
