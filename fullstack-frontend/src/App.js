import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import ThemeProvider from "./component/ThemeProvider";


function App() {

  return (
    <ThemeProvider>
      {/* <div className={`App ${theme === 'dark' ? 'dark-theme' : ''}`}> */}
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/addUser" element={<AddUser />} />
            <Route exact path="/editUser/:id" element={<EditUser />} />
            <Route exact path="/viewUser/:id" element={<ViewUser />} />
          </Routes>
        </Router>
      {/* </div> */}
    </ThemeProvider>


  );
}

export default App;
