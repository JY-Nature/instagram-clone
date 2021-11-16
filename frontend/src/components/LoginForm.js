import React, { useState } from "react";
import { Link } from "react-router-dom"
import useForm from './LoginUseForm';
import validate from './LoginValidate'
import './LoginForm.css';



const LoginForm = () => {

  const adminUser = {
    email: "test@test.com",
    password: "test123"
  }

  const [error, setError] = useState("");

  const login = () => {
    if(adminUser.email !== user.email && adminUser.password !== user.password){
      setError("잘못된 비밀번호입니다. 다시 확인하세요.");
    } else if(adminUser.email !== user.email || adminUser.password !== user.password){
      setError("잘못된 비밀번호입니다. 다시 확인하세요.");
    } else {
      <Link to="/" />
    }
  }

  const { handleChange, user, handleSubmit, errors  } = useForm(validate)

  const validation = user.email.includes('@') && user.password.length > 6;
	
  // const onClickLoginBtn = () => {
  //   fetch("http://localhost:3000/accounts/login", {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: user.email,
  //       password: user.password,
  //     }),
  //   })
  //   .then(response => response.json())
  //   .then(result => {
  //     if (result.messages === 'SUCCESS') {
  //       this.props.history.push('/');
  //       localStorage.setItem('access-token', result.ACCESS_TOCKEN);
  //     }
  //   })
  // }

	return (
   <form onSubmit={handleSubmit}>
    <div className="main">
        {/* 에러 메시지 표시 */}
        <div className="form-outer">
          {/* <div className="photo">
          </div> */}
          {/* 이메일 비밀번호 입력 폼 + 상태 관리 details에 추가 */}
            
              <div className="form">
                <div className="form-inner">
                    <input type="email" name="email" id="email" placeholder="전화번호, 사용자 이름 또는 이메일" 
                    onChange={handleChange} value={user.email}/>
                    {errors.email && <p>{errors.email}</p>}
                    <br />
                    <input type="password" name="password" id="password" placeholder="비밀번호" 
                    onChange={handleChange} value={user.password}/>
                    {errors.password && <p>{errors.password}</p>}
                    <br />
                    {/* 로그인 */}	
                    <button className={`loginBtn ${validation ? '#0095F6BackgroundColor' : null}`} 
                    type="submit" id="btn" onClick={login}>로그인</button>
                    {/* onClick={onClickLoginBtn} */}
                    {(error !== "") ? <p style={{position: 'relative', right: "13px", color:'red'}}>{error}</p> : ""}
                   
                  </div>
                </div>
                <div className="signup">
                  <p>계정이 없으신가요? <Link id="signup" to="/accounts/emailsignup">가입하기</Link></p>
                </div>
            

        </div>
      </div>
      {/* <div className="footer">

      </div> */}
    </form>
  );
}

export default LoginForm;
