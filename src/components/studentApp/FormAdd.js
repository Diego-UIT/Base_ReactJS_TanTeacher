import React, { useState } from 'react'

const FormAdd = ({add}) => {

    const [name, setName] = useState('')

    const random = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) 
    }

    const generateID = () => {
        return random() + random() + '-' + random() + '-' + random() + '-' + random() +
        '-' + random() + random() + random()+ random() + random() + random()
    }

    const onHandleAdd = (e) => {
        e.preventDefault()
        add({id: generateID(), name: name, checked: false})
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
