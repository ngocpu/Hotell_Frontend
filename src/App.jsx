import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Navbar } from "./components/Navbar";
import { Login } from "./auth/Login";
import { AuthProvider } from "./auth/AuthProvider";
import { Admin } from "./components/Admin";
import { EditRoom } from "./components/EditRoom";
import { ExistingRooms } from "./components/ExistingRooms";
import { AddRoom } from "./components/AddRoom";
import { Register } from "./auth/Register";

function App() {
  return (
    <main className="dark:bg-[#131312] bg-[#fefdf9]">
        <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-room/:roomId" element={<EditRoom />} />
						<Route path="/existing-rooms" element={<ExistingRooms />} />
						<Route path="/add-room" element={<AddRoom />} />

						{/* <Route
							path="/book-room/:roomId"
							element={
								<RequireAuth>
									<Checkout />
								</RequireAuth>
							}
						/> */}

						<Route path="/admin" element={<Admin />} />
						{/* <Route path="/booking-success" element={<BookingSuccess />} />
						<Route path="/existing-bookings" element={<Bookings />} />
						<Route path="/find-booking" element={<FindBooking />} /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rooms" element="ListRoom" />
          <Route path="/profile" element="Profile" />
        </Routes>
      </>
    </main>
  );
}

export default App;
