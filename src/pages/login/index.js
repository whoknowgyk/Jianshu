import React , { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
    render() {

        const login = this.props.loginStatus;

        if (!login){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => {this.account = input}}/>
                        <Input placeholder='密码' type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={()=>this.props.login(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
        else {
            return <Redirect to='/'/>
        }


    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.get('login').get('login')
});

const mapDispatchToProps = (dispatch) => ({
    login(accountElement,passwordElement){
        dispatch(actionCreators.login(accountElement.value,passwordElement.value));
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);