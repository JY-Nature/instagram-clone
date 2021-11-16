export default function validateInfo( info ) {
	let errors = {}

	if(!info.userName.trim()) {
		errors.userName = "UserName required"
	}

	if(!info.useremail) {
		errors.useremail = "Useremail required"
	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(info.useremail)){
		errors.useremail="Email address is invalid!"
	}

	if(!info.usernick){
		errors.usernick  = 'usernick is required'
	} 

	if(!info.userpassword){
		errors.userpassword  = 'Password is required'
	} else if (info.userpassword.length < 6) {
		errors.userpassword = '비밀번호는 6자 이상입니다.'
	}

	return errors;

}