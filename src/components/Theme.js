import { useContext } from "react"
import Context from "../context/createContext"

function Theme(){
 const {switchTheme,setSwitchTheme} = useContext(Context)
    const switchThemeHandle = () => setSwitchTheme((value) => !value)

return (
    <div className={switchTheme ? " pt-2 ps-2" : " pt-2 ps-2"}>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" checked={switchTheme} className="sr-only peer" onChange={(switchThemeHandle)}/>
      <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <button className={switchTheme ? "ml-3 text-sm font-medium text-white dark:text-gray-300" : "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"} onClick={() => switchThemeHandle()}>{switchTheme ? 'Dark' : 'Light'}</button>
    </label>
    </div>
)
}

export default Theme