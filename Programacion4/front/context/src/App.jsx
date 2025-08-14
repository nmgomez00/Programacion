import BisAbuelo from "./components/bis-abuelo"
import CountProvider from "./contexts/count-provider"

function App() {

  return (
    <>
     <h1 className="h-70">hola</h1>
     <CountProvider>
      <BisAbuelo/>
     </CountProvider>
    </>
  )
}

export default App
