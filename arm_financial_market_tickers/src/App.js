import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { LandingPage } from './pages/landingPage/LandingPage';
import NewsPage from './pages/newsPage/NewsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route
          exact
          path='/:newsFilter'
          component={NewsPage}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
