import { useState } from 'react';


const Form = submitCallback =>
{
	const [ state, setstate ] = useState( {} )
	const handleSubmit = e =>
	{
		e.preventDefault();
		submitCallback()
	}
	const handleChange = e =>
	{
		e.persist();
		setstate( state => ( { ...state, [ e.target.name ]: e.target.value } ) )
	}
	return [ state, handleChange, handleSubmit ];
}

export default Form