import React, { Component } from 'react';
import styled from 'styled-components';
import Svg from './svgs';

const FooterBox = styled.div`
  display: flex;
  padding: 5% 5% 3% 5%;
  justify-content: space-between;
  align-items: center;
`;
const FooterArticle = styled.div`
  flex: 1;
  &:last-child {
    text-align: right;
  }
`;
const FooterArticleInfo = styled.div`
  color: white;
  line-height: 1.5rem;

  p {
    font-size: 14px;
    &:first-child {
      font-weight: 700;
    }
    span {
      padding-left: 1.5rem;
      font-weight: normal;
      font-size: 14px;
    }
  }
`;
const FooterArticleInfoSecond = styled.div`
  display: inline-block;
  ul {
    display: flex;
    margin-bottom: 12%;

    li {
      padding: 0rem 0.7rem;
      color: #ffffff;
      border-right: 1px solid #ffffff;
      &:last-child {
        border-right: none;
        padding-right: 0rem;
      }
    }
  }
  p {
    font-size: 14px;
    color: #ffffff;
    &:first-of-type {
      margin-bottom: 7%;
    }
    &:last-of-type {
      margin-top: 2.5%;
    }
  }
`;
class Footer extends Component {
  render() {
    return (
      <>
        <FooterBox>
          <FooterArticle>
            <Svg
              name="logoWhite"
              secondName="logoWhiteSecond"
              width="200px"
              height="100px"
              color="#9E9E9F"
              secondColor="#ffffff"
              viewBox="0 0 122 34"
            />
            <FooterArticleInfo>
              <p>
                (주)평행공간 <span>대표 : 이지은</span>
              </p>
              <p>서울 강남구 테헤란로 302 위워크타워 15층</p>
              <p>TEL : 02-0000-0000 | FAX : 02-0000-0000</p>
            </FooterArticleInfo>
          </FooterArticle>
          <FooterArticle>
            <FooterArticleInfoSecond>
              <ul>
                <li>회사소개</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>매물관리규정</li>
              </ul>
              <p>통신판매업신고번호 : 제0000-서울 강남-00000호</p>
              <p>프로모션/사업 제휴문의 : @naver.com</p>
              <p>허위매물 신고 : @naver.com</p>
            </FooterArticleInfoSecond>
          </FooterArticle>
        </FooterBox>
      </>
    );
  }
}

export default Footer;
