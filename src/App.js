import './App.css';
import Header from './Header'
import Homepage from './Homepage'
import About from './About';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  );
}

export default App;
