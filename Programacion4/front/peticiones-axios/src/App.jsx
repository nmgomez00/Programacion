import Page404 from "./pages/page-404";
import Home from "./pages/home";
import { Switch, Route } from "wouter";
import CharacterDetails from "./pages/characters/character-details";
import NavBar from "./components/nav-bar";
import ListOfCharacters from "./pages/characters/list-of-characters";
function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Home}>
          <Home />
        </Route>
        <Route path="/characters" component={Home}>
          <ListOfCharacters />
        </Route>
        <Route path="/characters:id" component={Home}>
          <CharacterDetails />
        </Route>

        <Route component={Page404} />
      </Switch>
    </>
  );
}

export default App;
