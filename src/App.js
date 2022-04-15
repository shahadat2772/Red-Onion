import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Breakfast from "./Pages/Home/Foods/Breakfast/Breakfast";
import Lunch from "./Pages/Home/Foods/Lunch/Lunch";
import Dinner from "./Pages/Home/Foods/Dinner/Dinner";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
          <Route path="/lunch" element={<Lunch></Lunch>}></Route>
          <Route path="/dinner" element={<Dinner></Dinner>}></Route>
          <Route></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
