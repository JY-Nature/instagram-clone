export default function validateInfo( info ) {
	let errors = {}

	if(!info.name) {
		errors.name = "name required"
	}

	if(!info.email) {
		errors.email = "email required"
	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(info.email)){
		errors.email="Email address is invalid!"
	}

	if(!info.username){
		errors.username  = 'username is required'
	} 

	if(!info.password){
		errors.password  = 'Password is required'
	} else if (info.password.length < 6) {
		errors.password = '비밀번호는 6자 이상입니다.'
	}

	return errors;

}