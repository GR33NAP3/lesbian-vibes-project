import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Components/Navbar"
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Explore from "./Components/Explore";
import SignUp from "./Components/SignUp";
import "./styles.scss"


function App() {
  return (

    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;