import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Pages
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import ProfessionalResources from './Pages/ProfessionalResources/ProfessionalResources';
import Network from './Pages/Network/Network';
import Resume from './Pages/Resume/Resume';  
import ContactMe from './Pages/ContactMe/ContactMe';

// Components
import NavBar from './Components/NavigationBar/NavBar';

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="App">
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
            {/* Resume */}
            <Route path="/Resume" exact 
              element={
                <Resume />
              }>
            </Route>
          </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
