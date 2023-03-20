import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Admin from "./layouts/Admin.js";
import Student from "./layouts/Student.js"
import Auth from "./layouts/Auth.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <BrowserRouter>
    <Routes>
      <Route path="/admin" render={props => <Admin {...props} />} />
			<Route path="/student" render={props => <Student {...props} />} />
      <Route path="/auth" render={props => <Auth {...props} />} />
      <Navigate from="/" to="/auth/login" />
    </Routes>
  </BrowserRouter>,
        
      </header>
    </div>
  );
}

export default App;
