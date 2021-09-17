import React, { useState } from 'react'

const FormAdd = (props) => {

    const {add} = props
    const [name, setName] = useState('')

    const onHandleAdd = (e) => {
        e.preventDefault()
        add(name)
        setName('')
    }
    return (
        <div>
            <form 
                className="d-flex mb-4"
                onSubmit = { onHandleAdd }>
                <input 
                    className="form-control me-2" 
                    type="text"
                    placeholder="Add your name..."
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}/>
                <button className="btn btn-outline-primary" type="submit">Save</button>
            </form>
        </div>
    )
}

export default FormAdd
