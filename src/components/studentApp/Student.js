import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Student = ({student, remove, markCheck, updateName, markCheck1}) => {

    const [name, setName] = useState(student.name)

    const styleInput = {
        textDecoration: student.checked ? 'line-through' : 'none'
    }

    return (
        <div className="student">
            <input 
                type="checkbox" 
                checked={student.checked}
                onChange = { () => markCheck(student.id) }
                onChange = { () => markCheck1(student.id) } 
                />
            <input 
                type="text" 
                value={name}
                onChange={ (e) => setName(e.target.value)}
                style = { styleInput }
                onKeyPress={ (e) => {
                    if (e.key === 'Enter' && name) {
                        updateName(student.id, name)
                    }
                }}/>
            <AiOutlineCloseCircle 
                className="btnRemove"
                onClick={ () => remove(student.id) }/>
        </div>
    )
}

export default Student

// -re- render:
// + f5
// + state của nó thay đổi