import { useContext } from "react"
import Context from "../context/createContext"

function Progresses() {

    const {todos, setTodos, progresses, setProgresses, completedTodos, setCompletedTodos, switchTheme} = useContext(Context)

    function doneHandle(progress, id){
        const newCompletedTodos = [...completedTodos]
        newCompletedTodos.push({
          name: progress.name,
          id: progress.id,
          isConfirmed: false
        })
        setCompletedTodos(newCompletedTodos)
      
        const newProgresses = progresses.filter((p) => p.id !== id)
        setProgresses(newProgresses)

        localStorage.setItem('progresses', JSON.stringify(newProgresses))
        localStorage.setItem('completedTodos', JSON.stringify(newCompletedTodos))
      }
      
      function sendBackHandle(progress, id){
        const newProgresses = progresses.filter((p) => p.id !== id)
        const newTodos = [...todos, {
          name: progress.name,
          id: progress.id,
          isConfirmed: false
        }]
        setProgresses(newProgresses)
        setTodos(newTodos)

        localStorage.setItem('todos', JSON.stringify(newTodos));
        localStorage.setItem('progresses', JSON.stringify(newProgresses));
      }

    return (
        <div className={switchTheme ? "bg-slate-500 p-5 mb-3 overflow-auto darkTheme darkThemeThumb h-1/4 w-full text-white rounded-xl xl:w-1/4 xl:h-5/6 xl:p-10 xl:mb-10" : "bg-white p-5 mb-3 h-1/4 w-full overflow-auto lightTheme lightThemeThumb rounded-xl xl:w-1/4 xl:h-5/6 xl:p-10 xl:mb-10"}>
        <h1 className={switchTheme ? "text-center text-2xl font-mono font-bold text-white mb-2 xl:text-4xl xl:mb-5" : "text-center text-2xl font-mono font-bold text-gray-400 mb-2 xl:text-4xl xl:mb-5"}>IN PROGRESS</h1>
        <ul>
          {progresses?.map((progress) => (
            <li className="p-2 lg:p-3 xl:p-3" key={progress.id}>
              {progress.name}
              <button className="bg-red-500 w-16 h-6 ms-2 float-right text-white rounded-xl hover:bg-red-600 lg:h-8 xl:h-8" key={progress.id} onClick={() => sendBackHandle(progress, progress.id)}>Cancel</button>
              <button className={switchTheme ? "bg-slate-600 w-16 h-6 float-right text-white rounded-xl hover:bg-slate-700 lg:h-8 xl:h-8" : "bg-slate-200 w-16 h-6 float-right text-gray-700 rounded-xl hover:bg-slate-400 hover:text-white lg:h-8 xl:h-8"}  onClick={() => doneHandle(progress, progress.id)}>Done</button>
              
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Progresses