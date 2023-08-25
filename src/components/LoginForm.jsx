import React, { useState } from 'react'
import Input from './common/Input';
import Joi from 'joi-browser';

const LoginForm = () => {
    // Refs.
    // const username = React.createRef();

    // State
    const [account, setAccount] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    const validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(account, schema, options);
        if (!error) return null

        const errorNew = {};

        for (let item of error.details) errorNew[item.path[0]] = item.message;
        return errorNew;

        // if (account.username.trim() === "") {
        //     error.username = "Username is required"
        // }

        // if (account.password.trim() === "") {
        //     error.password = "Password is required."
        // }
        // return Object.keys(error).length === 0 ? null : error;
    }

    const validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schemas = { [name]: schema[name] };
        const {error} = Joi.validate(obj, schemas);
        return error ? error.details[0].message : null;
    }

    const handleChange = ({ currentTarget: input }) => {
        const cloneError = { ...errors };
        const errorMessage = validateProperty(input);
        if (errorMessage) cloneError[input.name] = errorMessage;
        else delete cloneError[input.name];

        const acc = { ...account };
        acc[input.name] = input.value;
        setAccount(acc);
        setErrors(cloneError);
        console.log(errors);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const a = validate();
        setErrors(a || {});
        if (a) return;
        // call the server 
        console.log("Submitted !");
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input name="username" label="Username" value={account.username} error={errors.username} onChange={handleChange} />
                <Input name="password" label="Password" value={account.password} error={errors.password} onChange={handleChange} />

                <button disabled={validate()} className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default LoginForm