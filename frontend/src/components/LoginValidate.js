export default function validateInfo( user ){
	let errors = {}

	if(!user.email){
		errors.email ="email required"
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(user.email)){
		errors.email="Email address is invalid!"
	}

	if(!user.password){
		errors.password = "password required"
	}

	return errors;
}