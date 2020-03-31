import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper,TopicItem} from '../style';

class Topic extends PureComponent{
    render() {
        const { list } = this.props;
        return (
            <div>
                <TopicWrapper>

                     {
                        list.map((item) => {
                            return (
                                <TopicItem href="#" key={item.get('id')}>
                                    <img
                                    className="topic-img"
                                    src={item.get('imgUrl')}
                                    alt="" />
                                    {item.get('title')}
                                </TopicItem>
                            )
                        })
                    }
                    
                </TopicWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','topicList'])
})

export default connect(mapState) (Topic);
