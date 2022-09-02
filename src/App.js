import { useEffect } from 'react'
import './App.css';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Header from './Header';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Aos from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    Aos.init({ duration: 1000})
  }, [])
  
  return (
        
        <div className="app">

             <Navbar />

            {/* Header */}
             <Header />

            {/* Portfolio */}
              <Portfolio />
            {/* About */}
              <AboutMe />

            {/* Contact */}
              <Contact />

         </div>
  );
}

export default App;
