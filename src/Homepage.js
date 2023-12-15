import './App.css';
import Hero from './Hero'
import Highlights from './Highlights';
import Footer from './Footer'
import Testimonials from './Testimonials';
import About from './About';

function Homepage() {
    return (
      <>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
        <Footer/>
      </>
    );
}

export default Homepage;