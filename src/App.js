import Home from "./components/Home";
import ContextProvider from "./context/context"

function App() {
  

    return (
    <ContextProvider>
      <Home />
      
    </ContextProvider>
  );


  }



export default App;
