import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Simple Blog</h1>
      <nav>
        <ul className={styles.navList}>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/blog"><a>Blog</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}
