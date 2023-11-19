import { useContext } from "react"
import Context from "../context/createContext"

function Todos(){

    const {todos, setTodos, progresses, setProgresses, switchTheme} = useContext(Context)

    function deleteHandle(id){
        const newTodos = todos.filter((t) => t.id !== id)
        setTodos(newTodos)

        localStorage.setItem('todos', JSON.stringify(newTodos));
      }

      function startHandle(todo, id){
        const newProgresses = [...progresses]
        newProgresses.push({
          name: todo.name,
          id: todo.id,
          isConfirmed: false
        }) 
        setProgresses(newProgresses)
        
        const newTodos = todos.filter((t) => t.id !== id)
        setTodos(newTodos)

        localStorage.setItem('todos', JSON.stringify(newTodos));
        localStorage.setItem('progresses', JSON.stringify(newProgresses))
      }

    return (
        <div className={switchTheme ? "bg-slate-500 p-5 overflow-auto mb-3 darkTheme darkThemeThumb h-1/4 w-full text-white rounded-xl xl:w-1/4 xl:h-5/6 xl:p-10 xl:mb-10" : "bg-white p-5 mb-3 h-1/4 w-full overflow-auto lightTheme lightThemeThumb rounded-xl xl:w-1/4 xl:h-5/6 xl:p-10 xl:mb-10"}>
        <h1 className={switchTheme ? "text-center text-2xl font-mono font-bold text-white mb-2 xl:text-4xl xl:mb-5" : "text-center text-2xl font-mono font-bold text-gray-400 mb-2 xl:text-4xl xl:mb-5"}>TODO</h1>
      <ul>
        {todos?.map((todo) => (
          <li className="p-2 lg:p-3 xl:p-3" key={todo.id}>
          {todo.name} 
          <button className="bg-red-500 w-16 h-6 ms-2 float-right text-white rounded-xl hover:bg-red-600 lg:h-8 xl:h-8" key={todo.id} onClick={() => deleteHandle(todo.id)}>Delete</button>
          <button className={switchTheme ? "bg-slate-600 w-16 h-6 float-right text-white rounded-xl hover:bg-slate-700 lg:h-8 xl:h-8" : "bg-slate-200 w-16 h-6 float-right text-gray-700 rounded-xl hover:bg-slate-400 hover:text-white lg:h-8 xl:h-8"} onClick={() => startHandle(todo, todo.id)}>Start</button>
          </li>
        ))}
      </ul>
        </div>
    )
}

export default Todos