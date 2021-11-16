import {useState, useEffect} from 'react'

const useForm = (validate) => {
	const [info, setInfo] = useState({
		useremail: "",
		userName: "",
		usernick: "",
		userpassword: ""
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

		setErrors(validate(info))
	}

	  return { handleChange, info, handleSubmit, errors }
}

export default useForm;