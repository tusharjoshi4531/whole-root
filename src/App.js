import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import ClassPage from "./components/ClassPage";

// Events

const checkLogin = (loginCredentials) => {

  console.log(loginCredentials)

  return true
}

const getSignupDetails = (signupDetails) => {

  console.log(signupDetails)

  return true
}

const events = {

  checkLogin: checkLogin,
  getSignupDetails: getSignupDetails
}

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage events={events}/>}/>
          <Route path="/Class" element={<ClassPage />}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
