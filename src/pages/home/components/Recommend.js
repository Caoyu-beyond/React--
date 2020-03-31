import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper,RecommendItem } from '../style';

class Recommend extends PureComponent{
    render() {
        const {list} = this.props; 
        return (
            <div>
                <RecommendWrapper>
                    {
                        list.map( (item) => {
                            return (
                                <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} alt='120' />
                            )
                        } )
                    }
                    
                </RecommendWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','recommendList'])
})

export default connect(mapState,null) (Recommend);
