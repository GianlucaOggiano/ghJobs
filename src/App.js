import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { Home, Job } from './pages';

const App = () => {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/jobs/:id' component={Job} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
