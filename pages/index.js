import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Digital Silence</title>
        <meta name="description" content="A calm, distraction-free blog experience." />
        <meta property="og:title" content="Digital Silence" />
        <meta property="og:description" content="A calm, distraction-free blog experience." />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to Digital Silence</h1>
        <p>Your peaceful space for mindful digital experiences.</p>
      </main>
      <Footer />
    </>
  );
}