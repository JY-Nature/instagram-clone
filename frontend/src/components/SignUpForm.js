import React from 'react';
import { Link } from 'react-router-dom'
import img from '../assets/images/logo2x.png'
import './SignUpForm.css'
import validate from './SignUpValidate';
import useForm from './SignUpUseForm';

const SignUpForm = () => {
  
	const { handleChange, info, handleSubmit, errors, handleClick } = useForm(validate);

	// const { error, setError } = useState("")

	

	
	  
		
	
	return (
		<form onSubmit={handleSubmit}>
      
			<div className="main">
			
				<div className="form-outer">
					
					<div className="signform">
						<div className="form-inner">
							<img src={img} alt="logo" className="logo" />
							<div className="text">
								<p> 친구들의 사진과 동영상을 보려면</p>
								<p>가입하세요</p>
							</div>
							<input type="email" name="email" id="email" placeholder="휴대폰 번호 또는 이메일 주소" 
							onChange={handleChange} value={info.email}/>
							<p>{errors.email && <p>{errors.email}</p>}</p>
							
							<input type="name" name="name" id="name" placeholder="성명" 
							onChange={handleChange} value={info.name}/>
							<p>{errors.name && <p>{errors.name}</p>}</p>
							
							<input type="username" name="username" id="username" placeholder="사용자 이름" 
							onChange={handleChange} value={info.username}/>
							<p>{errors.username && <p>{errors.username}</p>}</p>
							
							<input type="password" name="password" id="password" placeholder="비밀번호" 
							onChange={handleChange} value={info.password}/>
							<p>{errors.password && <p>{errors.password}</p>}</p>
							
							
							<button type="submit" id="btn" onClick={handleClick} >가입</button>
							{/* {(error !== "") ? <p style={{position: 'relative', right: "13px", color:'red'}}>{error}</p> : ""} */}
						</div>
					</div>
					<div className="login">
						<p>계정이 있으신가요? <Link id="login" to="/accounts/login">로그인</Link></p>
					</div>
					

				</div>
			</div>
			
		</form>
	);
};

export default SignUpForm;