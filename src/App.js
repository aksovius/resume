import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer'
import Education from './components/Education';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Hobby from './components/Hobby';
import SideNav from './components/SideNav';



function App() {
  return (

   <div>
      <Navbar/>
      <SideNav/>
      <Home/>
      <About/>
      <Education/>
      <Experience />
      <Publications/>
      <Hobby/>
      <Footer />
    </div>
  );
}

export default App;
