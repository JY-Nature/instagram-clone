import {useState} from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'

const useForm = (validate) => {
	const [info, setInfo] = useState({
		email: "",
		username: "",
		name: "",
		password: ""
	})

	const [errors, setErrors] = useState({})

	const handleChange = e => {
		const {name, value} = e.target  
		setInfo({
			  ...info,
			  [name]:value
		  })
	  };
	  const handleSubmit = e => {
		e.preventDefault()
	  }
	  const history = useHistory();
	  const handleClick = () => {

		const data = {
			email: info.email,
			password: info.password,
			username: info.username,
			name: info.name
		  };

		  console.log(data)
		  
			axios.post('https://reqres.in/api/register', data)
			.then(
				res => { 
					console.log(res) 
					
					history.push("/")
				}
			).catch(
				err => { 
					console.log(err) 
				}
			)
			
			
			setErrors(validate(info))
		}

		return { handleChange, info, handleSubmit ,errors, handleClick }
		}




export default useForm;