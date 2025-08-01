import NavBar from './components/nav-bar';
import { Route, Switch} from 'wouter';
import Home from './pages/home'
import Socios from './pages/socios'
import DetallesSocio from './pages/detallesSocio';
import Page404 from './pages/page-404';
/*
routing
 - Página principal con bienvenida y un navbar
 - Página de socios, muestra la lista de socios.
 Si el socio tiene estado ="ACT", la card se "pinta"
 de un colo diferente al resto
 (Solo mostrar los datos relevantes en la Card)
-Pagia de socio, mostrar toda la info y calcular el IMC.
*/
function App() {

  return (
    <>
      <NavBar/>
            <Switch>
              <Route  path="/" component={Home}/>
              <Route  path="/socios" component={Socios}/>
              <Route  path="/socio/:id" component={DetallesSocio}/>
              <Route  component={Page404}/>
            </Switch>
    </>
  )
}

export default App
