import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  LisRooms,
  Login,
  Payment,
  Resgiter,
  RoomsAvailable,
} from "./views";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripe = loadStripe(
  "pk_test_51PF8dlRxL6TFHzWZwNs6xgLKhAy9h38XbsiDhLCBnrXyfTNSKpVybbxiPgLo7uRnGKiOFYMfXIUoDGqdSaDfxckB00JgwCT3vR"
);

function App() {
  return (
    
      <main className="dark:bg-[#131312] bg-[#fefdf9]">
        <React.Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Resgiter />} />
            <Route path="/all-rooms" element={<LisRooms />} />
            <Route path="/rooms" element={<RoomsAvailable />} />
            <Route path="/payment/:id" element={<Payment />} />
          </Routes>
        </React.Fragment>
      </main>
  );
}

export default App;
