import React, {Component} from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import Svg from './svgs'

const LoginModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100vh;
`;

const LoginBox = styled.div`
    width: 50vw;
    height: 80vh;
    border: 1px solid #DDDDDD;
    border-radius: 30px;
  
`;



const LoginForm = styled.form`
 width: 50vw;
 height: 50vh;

 display:flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
  input {
    margin-bottom: 1%;
    border: none;
    border-bottom: 0.5px solid #DDDDDD;
  }
`;

const LoginId = styled.input.attrs({
    type: 'email',
    name: 'email',
    placeholder: '이메일 주소',
})`
width: 80%;
padding: 1%;

`;

const LoginPw = styled.input.attrs({
    type: 'password',
    name: 'password',
    placeholder: '비밀번호'
})`
width: 80%;
padding: 1%;
`;

class SignIn extends Component {
    state = {
        email : '',
        password: '',
    }

    loginHandler = (e) => {
        const {name , value} = e.target;
        this.setState({[name] : value});
    }

    render() {
        const {isLoginModalOpen, loginModalClose} = this.props;
        return (
            <>
            {isLoginModalOpen ? (
                <LoginModal>
                    <LoginBox>
                        <Svg
                            name="logoWhite"
                            secondName="logoWhiteSecond"
                            width="200px"
                            height="150
                            px"
                            color="#9E9E9F"
                            secondColor="#0E2745"
                            viewBox="0 0 122 34"
                        />
                        <LoginForm>
                            <LoginId onChange={this.loginHandler} />
                            <LoginPw onChange={this.loginHandler} /> 
                            <button type="submit">Login</button>
                        </LoginForm>
                    </LoginBox>
                    <button onClick={loginModalClose}>test 취소</button>
                </LoginModal>
                ) : null}
            </>
            
        )
        
    }
} 

export default SignIn