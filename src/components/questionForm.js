import React, { Component } from 'react';
import styled from 'styled-components';

const QuestionForm = styled.form.attrs({

})`
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    padding: 1rem 2rem;
    background-color: #ffffff;
    color: #00274a;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 800;
    margin-top: 2rem;
    border:none;
  }
  input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
	 transition: background-color 5000s ease-in-out 0s;
	 -webkit-transition: background-color 9999s ease-out;
     -webkit-text-fill-color: #ffffff !important;
   }
`;
const InputQuestionName = styled.input.attrs({
  type: 'text',
  name: 'questionName',
  placeholder: '성함을 입력해주세요',
  id: 'questionName',
})`
  width: 40vw;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid #ffffff;
  padding: 1rem;
  color: #ffffff;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const InputQuestionEmail = styled.input.attrs({
  type: 'email',
  name: 'questionEmail',
  id: 'questionEmail',
  placeholder: '이메일 주소를 입력해주세요.',
})`
  width: 40vw;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid #ffffff;
  padding: 1rem;
  color: #ffffff;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const QuestionTextarea = styled.textarea.attrs({
  placeholder: '문의내용을 입력해주세요',
  name : "questContents",
})`
  width: 40%;
  height: 20vh;
  background-color: inherit;
  padding: 1rem;
  border: none;
  border-bottom: 2px solid #ffffff;
  color: #ffffff;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const QuestCategory = styled.select`
  width: 40%;
  padding: 0.5rem 1rem;
  background-color: inherit;
  color: #ffffff;
  border: none;
  border-bottom: 2px solid #ffffff;
  &:focus {
    outline: none;
  }
  option {
    color: #AAAAAA;
    text-align: center;
    padding: 0.3rem 0px;
  }
`;

const PhoneNumBox = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-between;
  align-items: center;

  input {
    width: 100%;
    padding: 1rem;
    border: none;
    border-bottom: 2px solid #ffffff;
    background-color: inherit;
    text-align: center;
    color: #ffffff;
    &:focus {
      outline: none;
    }
  }
  select {
    width: 50%;
    padding: 1.3% 2%;
  font-size: 1.3rem;
    background-color: inherit;
    border: none;
    border-bottom: 2px solid #ffffff;
    color: #ffffff;
    &:focus {
      outline: none;
    }
    option {
      color: #AAAAAA;
    }
  }
  span {
    padding: 0rem 1rem;
    font-size: 3rem;
    font-weight: 300;
  }
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
margin-top: 2px;
margin-right: 1rem;
  background-color: #f52448;
  border-radius: 50%;
`;

const QuestionTitle = styled.div`
  display : flex;
  align-items: center;
  width: 40vw;
  color: #ffffff;
  margin-top: 1%;
  text-align: left;
  &:last-of-type {
    margin-bottom: 0.7%;
  }
`;

const DoQuestion = styled.h1`
  padding-bottom: 2%;
`;
class Form extends Component {
  state = {
    questionName: '',
    firstTel : '010',
    thirdTel : '',
    questionEmail: '',
    questionTitle: '카테고리 선택',
    questContents : '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      questionName: '',
      firstTel : '010',
      secondTel : '',
      thirdTel : '',
      questionEmail: '',
      questionTitle: '카테고리 선택',
      questContents : '',
    })
  }
  render() {
    return (
      <>
       <DoQuestion>문의하기</DoQuestion>
        <QuestionForm onSubmit={this.handleSubmit}>
          <QuestionTitle> <Circle /> <span>성함</span></QuestionTitle>
        
          <InputQuestionName value={this.state.questionName} onChange={this.handleChange} />

          <QuestionTitle> <Circle /> <span>연락처</span></QuestionTitle>
          <PhoneNumBox>
            <select value={this.state.furstTel} name ="firstTel" onChange={this.handleChange}>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="012">012</option>
              <option value="013">013</option>
              <option value="014">014</option>
            </select>
            <span>-</span>
            <input type="text" name="secondTel" value={this.state.secondTel} onChange={this.handleChange} maxLength="4" />
            <span>-</span>
            <input type="text" name="thirdTel" value={this.state.thirdTel} onChange={this.handleChange} maxLength="4" />
          </PhoneNumBox>
          <QuestionTitle> <Circle /> <span>이메일</span></QuestionTitle>
          <InputQuestionEmail value={this.state.questionEmail}  onChange={this.handleChange}  />
          <QuestionTitle> <Circle /> <span>문의내용</span></QuestionTitle>
          <QuestCategory value={this.state.questionTitle} name ="questionTitle" onChange={this.handleChange}>
            <option value="카테고리 선택" >카테고리 선택</option>
            <option value="예약문의" >예약문의</option>
            <option value="매물문의" >매물문의</option>
            <option value="회원문의" >회원문의</option>
            <option value="기타문의" >기타문의</option>
          </QuestCategory>
          <QuestionTextarea value={this.state.questContents}  onChange={this.handleChange}/>
          <button type="submit">제출하기</button>
        </QuestionForm>
      </>
    );
  }
}

export default Form;
