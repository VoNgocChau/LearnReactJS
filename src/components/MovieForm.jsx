import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const MovieForm = () => {
    const {id} = useParams();

    const navigate = useNavigate()
    return (
        <div>
            <h2>Movie Form {id}</h2>
            <button onClick={() => navigate("/movies")}>save</button>
        </div>
    )
}
