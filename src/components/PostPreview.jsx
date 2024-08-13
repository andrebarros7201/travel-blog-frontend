import styles from "../styles/posts.module.css";

export default function PostPreview({ post }) {
  return (
    <article className={styles["post-preview"]}>
      <h2>{post.title}</h2>
      <button>View Post</button>
    </article>
  );
}
