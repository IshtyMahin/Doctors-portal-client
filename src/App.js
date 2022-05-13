import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointmet/Appointment";
import ContactUs from "./Pages/Contact Us/ContactUs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="Appointment" element={<Appointment />}></Route>
        <Route path="reviews" element={<Reviews />}></Route>
        <Route path="contact" element={<ContactUs />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
