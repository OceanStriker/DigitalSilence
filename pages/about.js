import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Digital Silence</title>
        <meta name="description" content="Learn more about the mission of Digital Silence." />
      </Head>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>About Us</h1>
        <p>Digital Silence is dedicated to providing a minimalist space for those looking to unplug and think deeply.</p>
      </main>
      <Footer />
    </>
  );
}