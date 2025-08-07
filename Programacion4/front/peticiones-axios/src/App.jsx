import Page404 from "./pages/page-404";
import Home from "./pages/home";
import { Switch, Route } from "wouter";
import CharacterDetails from "./pages/characters/character-details";
import NavBar from "./components/nav-bar";
import ListOfCharacters from "./pages/characters/list-of-characters";
import ListOfPlanets from "./pages/planets/list-of-planets";
import PlanetDetails from "./pages/planets/planet-details";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/characters">
          <ListOfCharacters />
        </Route>
        <Route path="/characters/:id">
          <CharacterDetails />
        </Route>
        <Route path="/planets">
          <ListOfPlanets />
        </Route>
        <Route path="/planets/:id">
          <PlanetDetails />
        </Route>

        <Route path="/:rest*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
