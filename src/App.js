import "./App.css";
import "./component/style.css";
import Navbar from "./component/navbar";
import { Routes, Route } from "react-router-dom";
import Banner from "./component/banner";
import Blogdetail from "./component/blogdetail";
// import PersonList from "./component/PersonalList";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Banner/>} />
        <Route path="/readmore/:id" element={<Blogdetail />} />
      </Routes>
      {/* <PersonList/> */}
    </div>
  );
}

export default App;
