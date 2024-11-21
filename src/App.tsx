import React, {FunctionComponent} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
  
const App: FunctionComponent = () => {

 return (

<Router>
    <div>
        <nav>
            {/* la barre de navigation */}
            <div className="nav-wrapper teal">
                <Link to="/" className="brand-logo center">Pokédex</Link>
            </div>
        </nav>
        {/* les routes */}

        <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemons" component={PokemonList} />
            <Route path="/pokemons/:id" component={PokemonDetail} />
            <Route component={PageNotFound} />
        </Switch>
    </div>
</Router>
 )
}
  
export default App;