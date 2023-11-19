import { useContext } from "react"
import Context from "../context/createContext"

function AddTodo(){

  const {switchTheme, todos, setTodos, todo, setTodo} = useContext(Context)

  const submitHandle = e => {
    e.preventDefault()
    const newTodos = [...todos, {
      name: todo,
      id: new Date().getTime(),
      isConfirmed: false

    }]
    setTodos(newTodos)
    setTodo("")

    localStorage.setItem('todos', JSON.stringify(newTodos));
  }
    return (
      <form className={switchTheme ? "flex w-full justify-center lg:p-5 xl:p-5" : "flex w-full justify-center lg:p-5 xl:p-5"} onSubmit={submitHandle}>
        <input className={switchTheme ? "border-2 ps-1 me-2 w-96 text-sm font-mono border-slate-400 bg-slate-500 text-white rounded-xl outline-none focus:border-slate-400" : "border-2 ps-1 me-2 w-96 text-sm font-mono text-gray-700 rounded-xl outline-none focus:border-gray-400" }type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
        <button className={switchTheme ? "bg-slate-500 w-16 h-8 text-white rounded-xl hover:bg-slate-700": "bg-slate-300 w-16 h-8 text-gray-700 rounded-xl hover:bg-slate-400 hover:text-white"} disabled={!todo} type="submit">Add</button>
      </form>
    )

    
}

export default AddTodo