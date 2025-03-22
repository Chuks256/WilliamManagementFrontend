
import Landingpage from "../Landingpage.jsx";
import Signinpage from "./pages/signinpage.jsx";
import Signuppage from "./pages/signuppage.jsx";
import Dashboard from "./pages/dashboard.jsx"
import { Routes,Route,BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/"  element={<Landingpage/>} />
      <Route path="/Signin"  element={<Signinpage/>} />
      <Route path="/Signup"  element={<Signuppage/>} /> 
      <Route path="/user/dashboard"  element={<Dashboard/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
