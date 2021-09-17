import React, {createContext, useState, useEffect} from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const listTheme = createContext()

const ListContext = (props) => {
    const [app, setApp] = useState({
        list: [
            {
                id : 1,
                name: "Nguyen Van A",
                checked: true
            },
            {
                id : 2,
                name: "Nguyen Van B",
                checked: false
            },
            {
                id : 3,
                name: "Nguyen Van C",
                checked: false
            },
        ],
        checkAll: false,
        status: 'ALL',
        searchKey: ''
    })

    const random = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) 
    }

    const generateID = () => {
        return random() + random() + '-' + random() + '-' + random() + '-' + random() +
        '-' + random() + random() + random()+ random() + random() + random()
    }

    const add = (name) => {
        // ...app.list: keep all students old
        setApp({...app, list: [...app.list, {id: generateID(), name, checked: false}]})
        toast.success('Add successfully!')
    }

    const markCheck = (id) => {
        // ...student: keep value id, name
        const temp = app.list.map(student => (student.id === id) ? {...student, checked: !student.checked} : student)
        setApp({temp, list: temp})
    }

    const updateName = (id, name) => {
        const temp = app.list.map(student => (student.id === id) ? {...student, name: name} : student)
        setApp({temp, list: temp})
    }

    const remove = (id) => {
        const temp = app.list.filter(student => (student.id !== id))
        setApp({temp, list: temp})
        toast.success('Remove successfully!')
    }

    const getList = () => {
        if (app.searchKey) {
            return app.list.filter(student => {
                return student.name.toLowerCase().includes(app.searchKey.toLowerCase())
            })
        }
        switch(app.status) {
            case 'ALL':
                return app.list
            case 'FILTER NO CHECKED':
                return app.list.filter(student => (student.checked === false))
            case 'FILTER CHECKED':
                return app.list.filter(student => (student.checked === true))
            default:
                return app.list
        }
    }

    const setStatus = (newStatus) => {
        setApp({...app, status: newStatus})
    }

    const setSearchKey = (newSearchKey) => {
        setApp({...app, searchKey: newSearchKey})
    }

    const removeChecked = () => {
        const temp = app.list.filter(student => (student.checked === false))
        setApp({temp, list: temp})
    }

    const markCheckAll = () => {
        const temp = app.list.map(student => ({...student, checked: !app.checkAll}))
        setApp({...app, list: temp, checkAll: !app.checkAll})
    }

    const reCheckAll = () => {
        let newCheckAll = true

        if (app.list.length === 0) {
            newCheckAll = false
        } else {
            app.list.map(student=> {
                if (student.checked === false) {
                    newCheckAll = false
                }
            })
        }
        setCheckAll(newCheckAll)
    }

    const setCheckAll = (newCheckAll) => {
        setApp({...app, checkAll: newCheckAll})
    }

    useEffect(() => {
        reCheckAll()
    }, [app.list])

    return (
        <listTheme.Provider value = {[
            app, add, markCheck, updateName, remove, getList, setStatus, removeChecked, markCheckAll, setSearchKey]}>
            {props.children}
        </listTheme.Provider>
    )
}

export default ListContext
