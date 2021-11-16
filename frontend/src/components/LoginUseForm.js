import {useState} from 'react'

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

		SetErrors(validate(user))
	}
	return {handleChange, user, handleSubmit, errors}
}

export default useForm;