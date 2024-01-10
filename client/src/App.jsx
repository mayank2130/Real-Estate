import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUP from "./pages/SignUp";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListings from "./pages/UpdateListings";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUP />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/update-listing/:listingId" element={<UpdateListings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
