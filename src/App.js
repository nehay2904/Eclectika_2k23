import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Ecectika_Gallery from './components/Main_Gallery/Gallery';
import Our_Events from './components/Our_Events/Our_Events';
import Sponsor from './components/Sponsors/Sponsor';
import Overall_Team from './components/Team/Overall_Team';
import MultiActionAreaCard from './materialUI/CardComponent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import OverAll_Design from './OverAll_Design';
import Overall_Events from './components/Events_Section/Overall_Events';
import Main_Team from './components/Team/Main_Team';



function App() {
  return (
    <div>
    
    <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< OverAll_Design />}></Route>
                 <Route  path='events' element={< Overall_Events/>}></Route>
                 <Route  path='team' element={< Main_Team/>}></Route>
                 
          </Routes>
          </div>
       </Router>
   </div>
  );
}

export default App;
