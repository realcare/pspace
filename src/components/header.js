import React, { Component } from 'react';
import styled from 'styled-components';
import Svg from './svgs';
import SignIn from './SignIn'

const HeaderBox = styled.div`
  align-items: center;
  justify-content: space-around;
  padding: 1% 5% 0% 5%;
  color: #ffffff;
  position: fixed;
  top: 0;
  display: flex;
  width: 100%;
`;

const CompanyLogoBox = styled.div`
  flex: 1;
`;

const NavBox = styled.div`
  display: flex;
  align-items: center;

  flex: 1;
`;
const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  flex: 4;
`;

const NavLi = styled.li`
  cursor: pointer;
  border-bottom: 2px solid transparent;
  padding: 0px 5px 5px 5px;
  color: #cccccc;
  &:hover {
    border-bottom: 2px solid #ffffff;
    color: #ffffff;
  }
  &:last-child {
    margin-right: 8%;
  }
`;

const Login = styled.div`
  cursor: pointer;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  p {
    margin-left: 5px;
  }
`;



class Header extends Component {

constructor(props) {
  super(props);
  this.state= {
    isLoginOpen : false,
  }
}

openLogin = () => {
  this.setState({ isLoginOpen : true});
}

closeLogin = () => {
  this.setState({ isLoginOpen : false});
}

  render() {
    return (
      <>
        <HeaderBox>
          <CompanyLogoBox>
            <Svg
              name="logoWhite"
              secondName="logoWhiteSecond"
              width="150px"
              height="100px"
              color="#9E9E9F"
              secondColor="#ffffff"
              viewBox="0 0 122 34"
            />
          </CompanyLogoBox>
          <NavBox>
            <NavUl>
              <NavLi>평행공간 소개</NavLi>
              <NavLi>VR 투어</NavLi>
              <NavLi>문의하기</NavLi>
              <NavLi>중개매물</NavLi>
            </NavUl>
            <Login onClick={this.openLogin}>
              <Svg
                name="login"
                width="30px"
                height="25px"
                color="none"
                stroke="#ffffff"
                viewBox="0 0 20 20"
              />
              <p>로그인</p>
            </Login>
          </NavBox>
        </HeaderBox>
       <SignIn isLoginModalOpen={this.state.isLoginOpen} loginModalClose={this.closeLogin} />  
      </>
    );
  }
}

export default Header;
