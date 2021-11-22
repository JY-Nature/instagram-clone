import React from 'react';
// import Axios from 'axios';
// import { response } from 'express';
import { Layout, LoginForm } from '../../components';
// import { Link } from 'react-router-dom'

const LoginPage = (props) => {


  // 로그아웃 -> email 초기화
  // const Logout = () => {
  //   console.log("Logout");
  //   setUser({
  //     email: ""
  //   });
  // }


  return (
    <Layout>
      <div>
        <LoginForm />
      </div>
    </Layout>
  );
}

export default LoginPage;
