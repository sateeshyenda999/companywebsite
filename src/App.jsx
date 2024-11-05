// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import Login from "./Login.jsx";
import Registration from "./Registration.jsx";
import Header from './Header.jsx';
import Home from './Home.jsx';
import { ThemeProvider } from './Themecontext.jsx' 
import Contact from './Contact.jsx';
import Careers from './Careers.jsx';
import About from './About.jsx';
import Register from './Registration.jsx';
import Services from './services.jsx';
import Mobiledevelopment from './Servicesinfo/Mobiledevlopment.jsx';
import Webdevelopment from './Servicesinfo/Webdevelopment.jsx';
import Backenddevelopment from './Servicesinfo/Backenddevelopment.jsx';
import Infrastructure from './Servicesinfo/Infrastructure.jsx';
import Sap from './Servicesinfo/Sap.jsx';
import Qualitysolutions from './Servicesinfo/Qualitysolutions.jsx';

const App = () => {
    return (
      <ThemeProvider>

        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/careers" element={<Careers/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/mobiledevelopment" element={<Mobiledevelopment/>}/>
                <Route path="/webdevelopment" element={<Webdevelopment/>}/>
                <Route path="/backenddevelopment" element={<Backenddevelopment/>}/>
                <Route path="/infrastructure" element={<Infrastructure/>}/>
                <Route path="/qualitysolutions" element={<Qualitysolutions/>}/>
                <Route path="/sapsolutions" element={<Sap/>}/>
                
                
                
            </Routes>
        </Router>
      
      
        </ThemeProvider>
    );
};

export default App;
