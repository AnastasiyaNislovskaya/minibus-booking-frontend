import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Schedule from "./components/Schedule";
import BookedTickets from "./components/BookedTickets";
import Login from "./components/Login";
import AddUser from "./components/AddUser";
import AdminBoard from "./components/AdminBoard";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Forbidden from "./components/Forbidden";

export default function App() {
    return (
        <Router>
            <NavBar />
            <div className="container mt-3">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/contacts" element={<Contacts />} />
                    <Route exact path="/schedule" element={<Schedule />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/tickets" element={<BookedTickets />} />
                    <Route exact path="/admin" element={<AdminBoard />} />
                    <Route exact path="/forbidden" element={<Forbidden />} />
                    <Route exact path="/create_user" element={<AddUser />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}
