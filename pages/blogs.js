import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Blogs - Digital Silence</title>
        <meta name="description" content="Read mindful articles on digital wellbeing." />
      </Head>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Blog Posts</h1>
        <ul>
          <li><Link href="/blogs/why-digital-detox">Why Digital Detox Matters</Link></li>
        </ul>
      </main>
      <Footer />
    </>
  );
}