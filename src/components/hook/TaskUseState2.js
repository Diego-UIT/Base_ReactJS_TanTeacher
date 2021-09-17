import React, {useState, useEffect, useRef} from 'react'

const TaskUseState2 = () => {

    const [people, setPeople] = useState({
        name: "Tan Teacher",
        old: 30
    })

    const [name, setName] = useState('')
    const [check, setCheck] = useState(false)
    const flag = useRef(false)

    const decrease = () => {
        setPeople({...people, name: name, old: people.old - 1})
    }

    const increase = () => {
        setPeople({...people, name: name, old: people.old + 1})
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    // useEffect(() => {
    //     if (check === true) {
    //         increase()
    //     } else {
    //         setCheck(true)
    //     }
    // },[name])
    console.log('cat')

    useEffect(() => {
        if (flag.current) {
            increase()
        } else {
            flag.current = true
        }
    },[name])

    return (
        <div className="container mt-5">
            <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    value = {name}
                    onChange = {onChangeName}
                    placeholder="Name" />
                <label>Name</label>
            </div>
            <button 
                className="btn btn-primary mx-3"
                onClick = {decrease}>-</button>
            <span 
                style={{color: 'blue', fontWeight: "700"}}>{people.name} - ({people.old})</span>
            <button 
                className="btn btn-primary mx-3"
                onClick = {increase}>+</button>
        </div>
    )
}

export default TaskUseState2

// useEffect: những hàm trong ruột xủa nó sẽ được gọi ở lần render đầu tiên
// Khi truyền tham số [name], thì mỗi lần name thay đổi, ruột hàm đó sẽ tự động gọi

// Nguyên tắc rerender
// + bấm f5
// + state thay đổi

// Nhận xét, sau khi nhấn f5 load lại trang: Console in ra 2 dòng "cat"
// => Giải thích: 
// + dòng 1 do nhấn f5
// + dòng 2 do state: check thay đổi

// giá trị useRef thay đổi k gây ra reload lại component như useState. 



