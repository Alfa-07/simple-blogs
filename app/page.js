import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Simple Blog</h1>
      <p>Read some of my latest posts!</p>
    
      <Link href="/blog" className={styles.link}>
        Go to Blog
      </Link>
    </div>
  );
}
