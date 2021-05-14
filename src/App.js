import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';


const HatsPage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={HomePage}/>
        <Route path='/hats' render={HatsPage}/>

      </Switch>
    </div>
  );
}

export default App;
