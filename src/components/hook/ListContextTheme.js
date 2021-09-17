import React, {useState, useContext} from 'react'
const ThemeContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}

export function ListContextTheme({children}) {
    const [list, setList] = useState(['Cat', 'Dog'])
    
    const add = (student) => {
        setList([...list, student])
    }

    return (
        <ThemeContext.Provider value = {[list, add]}>
            {children}
        </ThemeContext.Provider>
    )
}
