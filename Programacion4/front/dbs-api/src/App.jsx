import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import NavBar from "./components/nav-bar";
import Spinner from "./components/spinner";

const HomePage = lazy(() => import("./pages/home"));
const ListOfCharactersPage = lazy(() =>
  import("./pages/characters/list-of-characters")
);
const CharacterDetailPage = lazy(() =>
  import("./pages/characters/character-detail")
);
const ListOfPlanetsPage = lazy(() => import("./pages/planets/list-of-planets"));
const PlanetDetailPage = lazy(() => import("./pages/planets/planet-detail"));

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/characters">
            <ListOfCharactersPage />
          </Route>
          <Route path="/characters/:id">
            <CharacterDetailPage />
          </Route>
          <Route path="/planets">
            <ListOfPlanetsPage />
          </Route>
          <Route path="/planets/:id">
            <PlanetDetailPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
