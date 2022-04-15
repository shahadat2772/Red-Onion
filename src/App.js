import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Breakfast from "./Pages/Home/Foods/Breakfast/Breakfast";
import Lunch from "./Pages/Home/Foods/Lunch/Lunch";
import Dinner from "./Pages/Home/Foods/Dinner/Dinner";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Login from "./Pages/Login/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
          <Route path="/lunch" element={<Lunch></Lunch>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path="/home" element={<Home></Home>}>
          <Route
            path="/home/breakfast"
            element={<Breakfast></Breakfast>}
          ></Route>
          <Route path="/home/lunch" element={<Lunch></Lunch>}></Route>
          <Route path="/home/dinner" element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
