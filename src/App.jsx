import { createContext, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";

export const PostContext = createContext(null);

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      await fetch("http://localhost:5000/api/post")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.log(err));
    };
    fetchPosts();
  }, []);

  return (
    <>
      <PostContext.Provider value={{ posts }}>
        <Navbar />
        <Outlet />
      </PostContext.Provider>
    </>
  );
}

export default App;
