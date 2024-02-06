import "./App.css";
import "./component/style.css";
import Navbar from "./component/navbar";
import { Routes, Route } from "react-router-dom";
import Banner from "./component/banner";
import Blogdetail from "./component/blogdetail";
import FormHandle from "./component/FormHandle";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Banner/>} />
        <Route path="/readmore/:id" element={<Blogdetail/>}/>
        <Route path="/FormHandle" element={<FormHandle/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
