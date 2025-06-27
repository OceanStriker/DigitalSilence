export default function Landing() {
  return (
    <main style={{
      height: 'calc(100vh - 60px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e0f2fe',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: '2rem',
      textAlign: 'center',
      color: '#1e293b'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Digital Silence</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
        A calm, distraction-free blog experience. Explore thoughtful articles and find peace in reading.
      </p>
      <a href="/home" style={{
        marginTop: '2rem',
        padding: '0.75rem 2rem',
        backgroundColor: '#0284c7',
        color: 'white',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '1.1rem'
      }}>
        Enter Site
      </a>
    </main>
  );
}