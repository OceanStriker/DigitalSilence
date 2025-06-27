import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Digital Silence</div>
      <div className={styles.links}>
        <Link href="/home"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/blogs"><a>Blogs</a></Link>
      </div>
    </nav>
  );
}