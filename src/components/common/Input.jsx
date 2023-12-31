import React from 'react'

const Input = ({ name, label, value, onChange, error }) => {
    return (
        <div className="form-group mb-3">
            <label htmlFor={name}>{label}</label>
            <input autoFocus value={value} name={name} onChange={onChange}
                id={name} type="text" className="form-control" />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Input