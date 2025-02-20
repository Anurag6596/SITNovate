import React from "react";
import Payments from "./Pages/Payments";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Routes,Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import BookingForm from "./Pages/BookingForm";
import { Contact } from "./Pages/Contact";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <>
        <div className="min-h-screen w-[98vw] p-2 bg-gray-100 flex flex-col">
          <Header />
          <Navbar />
          <div className="flex-grow"></div>
      <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book/:tarinId" element={<BookingForm />} />
            <Route path="/payment" element={<Payments />} />
            <Route path="/contact" element={<Contact />} />
      </Routes>
        </div>
        <Footer />
    </>
  );
};

export default App;
