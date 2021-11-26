<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom"
=======
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"
>>>>>>> d0e496291e4521cbd1183917293b963f801d5553
import useForm from './LoginUseForm';
import validate from './LoginValidate'
import img from '../assets/images/logo2x.png'
import './LoginForm.css';


const LoginForm = () => {
<<<<<<< HEAD
  // const adminUser = {
  //   email: "test@test.com",
  //   password: "test123"
  // }
=======
  const history = useHistory();
>>>>>>> d0e496291e4521cbd1183917293b963f801d5553

  // const [error, setError] = useState("");

<<<<<<< HEAD
=======
  const login = () => {
    console.log('hh');
    if(adminUser.email !== user.email && adminUser.password !== user.password){
      setError("잘못된 비밀번호입니다. 다시 확인하세요.");
    } else if(adminUser.email !== user.email || adminUser.password !== user.password){
      setError("잘못된 비밀번호입니다. 다시 확인하세요.");
    } else {
      history.replace("/");
    }
  }
>>>>>>> d0e496291e4521cbd1183917293b963f801d5553

  const { handleChange, user, handleSubmit, errors, handleClick} = useForm(validate)
  // const btnChange = () => {

  //   const [ isActive, setisActive ] = useState(false)
  // }

    // if(user.email.includes("@") && user.password.length >= 6){
    //  setisActive(true)
      
    // } else {
    //   setisActive(false)
    // }
    // if(errors){
    //   setError("잘못된 비밀번호를 입력")
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
                    <img src={img} alt="logo" className="logo" />
                    
                    <input type="email" name="email" id="email" placeholder="전화번호, 사용자 이름 또는 이메일" 
                    onChange={handleChange} value={user.email}/>
                    {errors.email && <p>{errors.email}</p>}
                    
                    <input type="password" name="password" id="password" placeholder="비밀번호" 
                    onChange={handleChange} value={user.password}/>
                    {errors.password && <p>{errors.password}</p>}
                    
                   
                    <button  
                    type="submit" id="btn" onClick={handleClick}
                   >로그인</button>
                    {/* {(error !== "") ? <p style={{position: 'relative', right: "17px", color:'red'}}>{error}</p> : ""} */}
                    {/* className={isActive ? "changeBtn" : "disable"} */}
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
