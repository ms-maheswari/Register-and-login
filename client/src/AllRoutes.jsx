import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Auth from "./pages/Auth/Auth";
// import Questions from "./pages/Questions/Questions";
// import AskQuestion from "./pages/AskQuestion/AskQuestion";
// import DisplayQuestion from "./pages/Questions/DisplayQuestion";
// import Tags from "./pages/Tags/Tags";
// import Users from "./pages/Users/Users";
// import UserProfile from "./pages/UserProfile/UserProfile";
// import CommunityHome from "./pages/Community/CommunityHome";
// import PostPage from "./pages/PostPage/PostPage";
// import Chatbot from "./components/Chatbot/Chatbot";
// import Plan from './pages/Plans/Plan'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      
    </Routes>
  );
};

export default AllRoutes;
