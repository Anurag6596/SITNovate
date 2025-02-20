import Payments from "./Pages/Payments";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Router, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import BookingForm from "./Pages/BookingForm";
import { Contact } from "./Pages/Contact";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Header />
          <Navbar />
          <div className="flex-grow"></div>
          <Routes>
            <Routes path="/" element={<Home />} />
            <Routes path="/login" element={<Login />} />
            <Routes path="/register" element={<Register />} />
            <Routes path="/book/:tarinId" element={<BookingForm />} />
            <Routes path="/payment" element={<Payments />} />
            <Routes path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
