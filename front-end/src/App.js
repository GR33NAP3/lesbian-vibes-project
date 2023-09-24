import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navbar";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Explore from "./Components/Explore";
import SignUp from "./Components/SignUp";
import Matches from "./Components/Matches";
import "./styles.scss"



function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/matches" element={<Matches />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
