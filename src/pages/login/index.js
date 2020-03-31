import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper,LoginBox,Input,Button } from './style';
import { actionCreators } from './store';

class Detail extends Component{
    render() {
        const { loginState } = this.props;
        if(!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input type='text' placeholder="账号" ref={(input) => {this.account = input}} />
                        <Input type='password' placeholder="密码" ref={(input) => {this.password = input}} />
                        <Button onClick={() => {this.props.handleLogin(this.account,this.password)}} >登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/" />
        }
        
    }

}

const mapState = (state) => ({
    loginState: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    handleLogin(account,password) {
        //console.log(account.value,password.value);
        dispatch(actionCreators.login(account.value,password.value));
    }
})

export default connect(mapState,mapDispatch) (Detail);
