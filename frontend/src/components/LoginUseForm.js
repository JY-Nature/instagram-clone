import {useState} from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';


const useForm = (validate) => {
	const [user, setUser] = useState({
		email: "",
		password: ""
	})
	
	const [errors, SetErrors] = useState({})
	
	const handleChange = e => {
		const {name, value} = e.target
		setUser({
			...user,
			[name]: value
		})
	};
	
	const handleSubmit = e => {
		e.preventDefault()
	}
	const history = useHistory();
	const handleClick = () => {
		
		const data = {
			email: user.email,
			password: user.password
		};
		console.log(data)
		axios.post('https://reqres.in/api/login', data)
		.then(
			res => {
			console.log(res.data)
			localStorage.setItem('access_token', res.data);
			if(localStorage.getItem('access_token')){
				history.push("/")
			} else {
				history.push("/accounts/login")
			}
			
		}).catch(() => {
			// SetErrors("잘못된 비밀번호입니다. 다시 확인하세요.");
			console.log(errors)
		})
			SetErrors(validate(user))
		}
	
		
		

		return { handleChange, user, handleSubmit, errors, handleClick}
	};
	
	



export default useForm;