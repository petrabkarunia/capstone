import './App.css';
import Header from './Header'
import Homepage from './Homepage'
import About from './About';
import {Routes, Route} from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/reservations" element={<BookingPage />}/>
        <Route path="/confirmed-booking" element={<ConfirmedBooking />}/>
      </Routes>
    </>
  );
}

export default App;
