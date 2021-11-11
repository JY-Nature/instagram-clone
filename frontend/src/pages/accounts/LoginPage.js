import React, { useState } from 'react';
import { Layout, LoginForm } from '../../components';

const LoginPage = (props) => {
  // 로그인 되는 사용자 임시 설정
  const adminUser = {
    email: "test@test.com",
    password: "test123"
  }

  // 상태 관리
  const [user, setUser] = useState({ email: "" })
  // 오류 관리
  const [error, setError] = useState("");

  // 로그인 시도
  const Login = details => {
    console.log(details);

    // 로그인 이메일 패스워드 일치 시 로그인
    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        email: details.email
      })
      // 불일치 시 오류 메시지
    } else{
      console.log("잘못된 비밀번호입니다. 다시 확인하세요.");
      setError("잘못된 비밀번호입니다. 다시 확인하세요.");
    }
  }

  // 로그아웃 -> email 초기화
  const Logout = () => {
    console.log("Logout");
    setUser({
      email: ""
    });
  }

  return (
    <Layout>
      {/* 사용자 이메일이 null이 아니면 환영 페이지 + 로그아웃 버튼 */}
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.email}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        // null이면 에러표시
        <LoginForm Login={Login} error={error}/>
      )}
    </Layout>
  );
}

export default LoginPage;
