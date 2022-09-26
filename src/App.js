import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TweetBox from "./components/pages/TweetBox.js";
import SignUp from "./components/pages/SignUp.js";
import LogIn from "./components/pages/LogIn.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<TweetBox />} />
          <Route exact path="/LogIn" element={<LogIn />} />
          <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
