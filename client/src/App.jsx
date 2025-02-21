import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import FoodDonation from "./pages/FoodDonation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./dashboard/Layout";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./dashboard/Profile";
import Food from "./dashboard/Food";
import About from "./pages/about"; // Import the About component
import Contact from "./pages/contact"; // Import the Contact component
import OurWork from "./pages/ourwork"; // Import the OurWork component

function App() {
  const token = localStorage.getItem("token");

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {!pathname.includes("/login") &&
        !pathname.includes("/signup") &&
        !pathname.includes("/dashboard") && <Navbar token={token} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation" element={<FoodDonation />} />
        <Route path="/about" element={<About />} /> {/* Add the About route */}
        <Route path="/contact" element={<Contact />} /> {/* Add the Contact route */}
        <Route path="/ourwork" element={<OurWork />} /> {/* Add the OurWork route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {token ? (
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<FoodDonation />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/food" element={<Food />} />
            <Route path="/dashboard/about" element={<About />} />
          </Route>
        ) : (
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </>
  );
}

export default App;
