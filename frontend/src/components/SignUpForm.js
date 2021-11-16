import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './SignUpForm.css'
import validate from './SignUpValidate';
import useForm from './SignUpUseForm';

const SignUpForm = () => {
  
	const { handleChange, info, handleSubmit, errors } = useForm(validate);

  	// const [error, setError] = useState({})
	
	return (
		<form onSubmit={handleSubmit}>
      
			<div className="main">
			
				<div className="form-outer">
					
					<div className="form">
						<div className="form-inner">
							<input type="useremail" name="useremail" id="useremail" placeholder="휴대폰 번호 또는 이메일 주소" 
							onChange={handleChange} value={info.useremail}/>
							<p>{errors.useremail && <p>{errors.useremail}</p>}</p>
							<br />
							<input type="userName" name="userName" id="userName" placeholder="성명" 
							onChange={handleChange} value={info.userName}/>
							<p>{errors.userName && <p>{errors.userName}</p>}</p>
							<br />
							<input type="usernick" name="usernick" id="usernick" placeholder="사용자 이름" 
							onChange={handleChange} value={info.usernick}/>
							<p>{errors.usernick && <p>{errors.usernick}</p>}</p>
							<br />
							<input type="password" name="userpassword" id="userpassword" placeholder="비밀번호" 
							onChange={handleChange} value={info.userpassword}/>
							<p>{errors.userpassword && <p>{errors.userpassword}</p>}</p>
							<br />
							
							<button type="submit" id="btn" >가입</button>
						
						</div>
					</div>
					<div className="login">
						<p>계정이 있으신가요? <Link id="login" to="/accounts/login">로그인</Link></p>
					</div>
					

				</div>
			</div>
			{/* <div className="footer">

			</div> */}
		</form>
	);
};

export default SignUpForm;