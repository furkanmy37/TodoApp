import { useState, useEffect } from 'react';
import Context from './createContext';


const ContextProvider = ({children}) =>{
    const [todos, setTodos] = useState([])
    const [todo, setTodo]  = useState("")
    const [progresses, setProgresses] = useState([])
    const [completedTodos, setCompletedTodos] = useState([])
    const [switchTheme, setSwitchTheme] = useState(false)

    useEffect(() => {
        const storedTheme = JSON.parse(localStorage.getItem('switchTheme'));
        if (storedTheme) {
         setSwitchTheme(storedTheme);
          
        }

        const storedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));
        if (storedCompletedTodos) {
         setCompletedTodos(storedCompletedTodos);
        }

        const storedProgresses = JSON.parse(localStorage.getItem('progresses'));
        if (storedProgresses) {
         setProgresses(storedProgresses);
        }

        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
         setTodos(storedTodos);
        }

      }, []);
      
      useEffect(() => {
        localStorage.setItem('switchTheme', JSON.stringify(switchTheme));
      }, [switchTheme]);
    
      

    
    const contextValue = {
        todos, setTodos,todo, setTodo,progresses, setProgresses,completedTodos, setCompletedTodos,switchTheme, setSwitchTheme,
    }

    return (
        <Context.Provider value={contextValue}>
          {children}
        </Context.Provider>
    ) 
}


export default ContextProvider;