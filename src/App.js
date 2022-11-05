import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Categories from './components/Categories';
import Books from './components/Books';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/books" element={ <Books /> } />
        <Route path="/categories" element={ <Categories /> } />
      </Routes>
    </div> 
  );
}

export default App

