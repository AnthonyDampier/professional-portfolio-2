import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import ProfessionalResources from './Pages/ProfessionalResources/ProfessionalResources';
import Network from './Pages/Network/Network';
import AboutMe from './Pages/AboutMe/AboutMe';  
import ContactMe from './Pages/ContactMe/ContactMe';

// Components
import NavBar from './Components/NavigationBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        {/* <DraggableBox userInfo={userInfo} userFinancialInfo={userFinancialInfo} userMortgageInfo={userMortgageInfo} userVehicleInfo={userVehicleInfo}/> */}
        {/* <NavBar /> */}
          <Routes>
            {/* Home */}
            <Route path="/" exact 
              element={
                <Home />
              }>
            </Route>
            {/* Projects */}
            <Route path="/Projects" exact 
              element={
                <Projects />
              }>
            </Route>
            {/* Professional Resources */}
            <Route path="/ProfessionalResources" exact 
              element={
                <ProfessionalResources />
              }>
            </Route>
            {/* Network */}
            <Route path="/Network" exact 
              element={
                <Network />
              }>
            </Route>
            {/* About */}
            <Route path="/About" exact 
              element={
                <AboutMe />
              }>
            </Route>
            {/* ContactMe */}
            <Route path="/Contact" exact 
              element={
                <ContactMe />
              }>
            </Route>
          </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
