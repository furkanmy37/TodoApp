
import Theme from "./Theme"
import AddTodo from "./AddTodo"
import Lists from "./Lists"
import { useContext } from "react"
import Context from "../context/createContext"

function Home(){
    const {switchTheme} = useContext(Context)


    return (
     <div className={switchTheme ? "bg-gray-900 darkTheme darkThemeThumb h-full" : "bg-slate-200 lightTheme lightThemeThumb h-full"}>
        <Theme />
        <AddTodo />
        <Lists />
    </div>
    
    )
}

export default Home