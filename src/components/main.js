import React, { Component } from 'react';
import Header from './header';
import styled from 'styled-components';
import Svg from './svgs';
import Form from './questionForm';
import Footer from './footer';


const MainContainer = styled.div`
  background: linear-gradient(180deg, #002e58 0%, #001222 100%), #00274a;
`;

const SecondArticle = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SecondArticleText = styled.h1`
  color: white;
  font-size: 4.5rem;
  font-weight: bold;
`;

const MainSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

const MainListBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const MainTitle = styled.h1`
  font-size: 1rem;
  margin-top: 1.5%;
  font-weight: normal;
`;
const SvgsBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
  h1 {
    margin: 10% 0% 3% 0%;
    font-size: 1.2rem;
    font-weight: 800;
  }
  p {
    font-weight: 300;
    font-size: 1rem;
  }
`;

class Main extends Component {
handleCreate = (data) => {
  console.log(data);
}
  render() {
    return (
      <>
        <MainContainer>
          <Header />
          <MainSection>
            <Svg
              name="logoWhite"
              secondName="logoWhiteSecond"
              width="250px"
              height="100px"
              color="#9E9E9F"
              secondColor="#ffffff"
              viewBox="0 0 122 34"
            />
            <MainTitle>
              부동산 공간정보를 위한 실내측위 기술 기반 부동산 VR 투어
            </MainTitle>
          </MainSection>
          <SecondArticle>
            <SecondArticleText>VR</SecondArticleText>
            <SecondArticleText>+</SecondArticleText>
            <SecondArticleText>3D</SecondArticleText>
          </SecondArticle>
          <MainListBox>
            <SvgsBox>
              <Svg
                name="mainList1"
                width="140px"
                height="200px"
                stroke="#ffffff"
                viewBox="0 0 190 230"
              />
              <h1>시간별 채광</h1>
              <p>시간대에 따른 일조량 확인</p>
            </SvgsBox>
            <SvgsBox>
              <Svg
                name="mainList2"
                width="140px"
                height="200px"
                stroke="#ffffff"
                viewBox="0 0 140 200"
              />
              <h1>공간의 실측</h1>
              <p>실제 공간의 크기 측정</p>
            </SvgsBox>
            <SvgsBox>
              <Svg
                name="mainList3"
                width="140px"
                height="200px"
                color="#ffffff"
                stroke="none"
                viewBox="0 0 160 170"
              />
              <h1>공간의 크기 비교</h1>
              <p>실측에 근거한 인테리어</p>
            </SvgsBox>
          </MainListBox>
          <MainSection>
            <Svg
              name="house"
              width="600px"
              height="500px"
              color="#ffffff"
              stroke="none"
              viewBox="0 0 790 620"
            />
          </MainSection>
          <MainSection>
            <Svg viewBox="0 0 1300 907" width="1300" height="907" name="firstCircle" stroke="#CCCCCC" strokeWidth="2" secondStrokeWidth="0.5" secondName="secondCircle" secondStroke="#FFFFFF" />
            <Svg viewBox="0 0 210 210" width="210" height="210" name="clock" stroke="#ffffff" fill="#ffffff"/>
          </MainSection>
          <MainSection>
            <Form onCreate={this.handleCreate} />
          </MainSection>
          <Footer />
        </MainContainer>
      </>
    );
  }
}

export default Main;
