import { useContext, useEffect, useState } from "react";
import { PostContext } from "../App.jsx";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      await fetch("http://localhost:5000/api/post")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    };
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      {posts.posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </main>
  );
}
