import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Switch} from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFaund from './pages/NotFaund';
import Category from './pages/Category';
import Recipe from './pages/Resipe';

function App() {
  return (
    <div>
      <Header />
      <main className='container content'>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/Category/:name" component={Category} />
          <Route path="/meal/:id" component={Recipe} />
          <Route component={NotFaund} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
