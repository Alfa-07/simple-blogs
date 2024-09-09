import Link from 'next/link';
import styles from '../../styles/Blog.module.css';

const blogPosts = [
  { id: '1', title: 'First Blog Post' },
  { id: '2', title: 'Second Blog Post' },
  { id: '3', title: 'Third Blog Post' },
];

export default function Blog() {
  return (
    <div className={styles.blogContainer}>
      <h1>Blog</h1>
      <ul className={styles.postList}>
        {blogPosts.map((post) => (
          <li key={post.id} className={styles.postItem}>
            <Link href={`/blog/${post.id}`} className={styles.link}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
