import Todos from "./Todos"
import Progresses from "./Progresses"
import Completed from "./CompletedTodos"
import { useContext } from "react"
import Context from "../context/createContext"

function Lists(){
  const {switchTheme} = useContext(Context)
    return (
        <div className={switchTheme ? "flex flex-col items-center mt-12  h-screen w-full lg:mt-20 xl:flex-row xl:p-5 xl:mt-0 xl:justify-between " : "flex flex-col mt-12 items-center h-screen w-full lg:mt-20 xl:flex-row xl:p-5 xl:mt-0 xl:justify-between" }>
        <Todos />
        <Progresses />
        <Completed />
      </div>
    )
}

export default Lists