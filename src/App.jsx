import './App.css'
import Layout from './layouts/Layout'
import { BrowserRouter } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Juri from './components/Juri';
import Testimonial from './components/Testimonial';
import Sponsorship from './components/Sponsorship';
import Footer from './components/Footer';
import FlowEvent from './components/FlowEvent';
import Champions from './components/Champions';


function App() {
  return (
    <BrowserRouter basename="/"> 
      <Navbar />
      <Layout /> 
      <FlowEvent />
      <Champions />
      <Juri />
      <Testimonial />
      <Sponsorship />
      <Footer />
    </BrowserRouter>
  );
}

export default App
