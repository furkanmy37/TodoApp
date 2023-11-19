import { useContext } from "react"
import Context from "../context/createContext"

function Completed() {

    const {progresses, setProgresses, completedTodos, setCompletedTodos, switchTheme} = useContext(Context)

    const confirmHandle = (completed, index) => {
        const updateCompletedTodos = [...completedTodos]
        updateCompletedTodos[index].isConfirmed = true
      
        setCompletedTodos(updateCompletedTodos)

        localStorage.setItem('completedTodos', JSON.stringify(updateCompletedTodos))
      }
      
      const failedHandle = (completed, id) =>  {
        const newCompletedTodos = completedTodos.filter((c) => c.id !== id)
        const newProgresses = [...progresses, {
          name: completed.name,
          id: completed.id,
          isConfirmed: false
        }]
        setCompletedTodos(newCompletedTodos)
        setProgresses(newProgresses)

        localStorage.setItem('completedTodos', JSON.stringify(newCompletedTodos))
        localStorage.setItem('progresses', JSON.stringify(newProgresses))
      }
      
    
    return(
        <div className={switchTheme ? "bg-slate-500 p-5 mb-3 overflow-auto darkTheme darkThemeThumb h-1/4 w-full  text-white rounded-xl xl:w-1/4 xl:h-5/6 xl:p-10 xl:mb-10" : "bg-white p-5 mb-3 h-1/4 w-full overflow-auto lightTheme lightThemeThumb rounded-xl xl:w-1/4 xl:h-5/6 xl:p-10 xl:mb-10"}>
        <h1 className={switchTheme ? "text-center text-2xl font-mono font-bold text-white mb-2 xl:text-4xl xl:mb-5" : "text-center text-2xl font-mono font-bold text-gray-400 mb-2 xl:text-4xl xl:mb-5"}>DONE!</h1>
        <ul>
        
          {completedTodos?.map((completed, index) => (
            <li className="p-2 lg:p-3 xl:p-3" key={completed.id}>
              <span className={completed.isConfirmed ? 'line-through' : ''}>{completed.name}
              </span>
              <button className={completed.isConfirmed ? 'hidden' : 'bg-red-500 w-16 h-6 ms-2 float-right text-white rounded-xl hover:bg-red-600 lg:h-8  xl:h-8'} onClick={() => failedHandle(completed, completed.id)}>Failed</button>
              <button className={completed.isConfirmed ? 'hidden' :'bg-green-500 w-16 h-6 float-right text-white rounded-xl hover:bg-green-600 lg:h-8 xl:h-8'} onClick={() => confirmHandle(completed, index)}>Confirm</button>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Completed