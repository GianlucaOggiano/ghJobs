import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { Home } from './pages';

const App = () => {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
