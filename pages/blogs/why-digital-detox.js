import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Why Digital Detox Matters - Digital Silence</title>
        <meta name="description" content="Discover the importance of stepping away from screens and recharging your mind." />
        <meta property="og:title" content="Why Digital Detox Matters" />
        <meta property="og:description" content="Discover the importance of stepping away from screens and recharging your mind." />
      </Head>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Why Digital Detox Matters</h1>
        <p>In an always-online world, it's crucial to take breaks from digital overload. A digital detox helps reset your mind and fosters a more mindful, intentional life...</p>
      </main>
      <Footer />
    </>
  );
}