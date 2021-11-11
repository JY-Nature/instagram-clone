import React, { useState } from "react";
import './LoginForm.css';

// 로그인 폼 + 에러
const LoginForm = ({ Login, error }) => {
	// details -> 로그인 정보 저장
	const [details, setDetails] = useState({ email: "", password: "" });
	// 새로고침 방지
	const submitHandler = e => {
		e.preventDefault();
		Login(details);
	}
	
	return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        {/* 에러 메시지 표시 */}
        <div className="form">
        {/* 이메일 비밀번호 입력 폼 + 상태 관리 details에 추가 */}
          <div className="form-group">
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            <br />
            <label htmlFor="password"></label>
            <input style={{placeholder:"비밀번호"}} type="password" name="password" id="password" placeholder="비밀번호" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            <br />
            {/* 로그인 */}	
            <button type="submit" id="btn">로그인</button>
            {(error !== "") ? ( <div className="error">{error}</div> ) : ""}	
          </div>
        </div>
        <div className="logup">
          
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
