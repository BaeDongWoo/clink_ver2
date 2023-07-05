import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import pig from '../assets/pig.png';
import '../styles/Login.scss';

const handleSubmit = (event) => {
  event.preventDefault();
};
// function loginHandler(){
//     console.log("idpwd전송");
// }
const Login = () => {
  return (
    <div className="LoginContainer">
      <div className="LoginImage">
        <img src={pig} alt="logo" width="100px" height="100px" />
      </div>
      <div className="LoginTitle">
        <h2>로그인</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="LoginForm">
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="아이디"
          />
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            placeholder="비밀번호"
          />
        </div>
      </form>
      <div className="joinNfindBox">
        <button className="LoginJoinBtn">회원가입</button>
        <button className="LoginFindBtn">아이디/비밀번호 찾기</button>
      </div>
      <div className="LoginButtonBox">
        <Button variant="primary" className="LoginSubmitBtn" type="submit">
          로그인하기
        </Button>{' '}
      </div>
    </div>
  );
};

export default Login;
