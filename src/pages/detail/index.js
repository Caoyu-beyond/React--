import React,{Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, DetailTitle, Content } from './style';
import { actionCreators } from './store'

class Detail extends Component{
    render() {
        const { title,content } = this.props;
        
        return (
            <DetailWrapper>
                <DetailTitle>
                    {title}
                </DetailTitle>
                <Content  dangerouslySetInnerHTML={{__html:content}} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapState,mapDispatch) (withRouter(Detail));
