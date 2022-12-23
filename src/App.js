import store from './store';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import Cards from './components/Cards';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';





function App() {
  return (
    <Provider store={store}>
  <BrowserRouter>
  <Header />
   <Switch>
     <Route exact path="/">
      <Home/>
     </Route>
     <Route exact path="/product">
      <Cards/>
     </Route>
     <Route exact path="/about">
      <About/>
     </Route>
     <Route exact path="/contact">
      <Contact/>
     </Route>
     <Route exact path="/cart/:id">
      <CardsDetails/>
     </Route>
   </Switch>
  </BrowserRouter>
  </Provider>
  );
}

export default App;