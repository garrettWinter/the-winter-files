// import logo from './logo.svg';
import './App.css';

// import Home from './pages/Home';

import Header from './components/header';
import PageBody from './components/pageBody'
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <div><Header/></div>
      <div><br></br><PageBody/></div>
      <div><br></br><Footer/></div>
    </div>
  );
}

export default App;
