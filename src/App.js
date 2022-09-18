import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route
} from "react-router-dom";
import Climate from './components/Climate'

function App() {
  return (
    <div className='min-h-screen font-sans'>
      <Router>   
      <Routes>
        <Route path="/" element={<Climate></Climate>}></Route>
        {/* <Route path="/climate" element={}></Route> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
