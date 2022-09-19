import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";
import Weather from './components/Weather'

function App() {
  return (
    <div className='min-h-screen font-sans'>
      <Router>   
      <Routes>
        <Route path="/" element={<Weather></Weather>}></Route>
        {/* <Route path="/climate" element={}></Route> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
