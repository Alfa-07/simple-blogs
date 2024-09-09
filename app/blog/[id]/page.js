import { useRouter } from 'next/router';
import styles from '../../../styles/Post.module.css';

const blogPosts = {
  1: { title: 'First Blog Post', content: 'This is the content of the first post.' },
  2: { title: 'Second Blog Post', content: 'This is the content of the second post.' },
  3: { title: 'Third Blog Post', content: 'This is the content of the third post.' },
};

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const post = blogPosts[id];

  if (!post) return <p>Post not found!</p>;

  return (
    <div className={styles.postContainer}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
