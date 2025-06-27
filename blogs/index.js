import Link from 'next/link'
import Head from 'next/head'

export default function Blogs() {
  return (
    <>
      <Head>
        <title>Blogs - Digital Silence</title>
        <meta name="description" content="Read articles on focus, mindfulness, and digital wellbeing." />
      </Head>
      <main>
        <h1>Blogs</h1>
        <ul>
          <li>
            <Link href="/blogs/how-to-maintain-focus">
              How to Maintain Focus in a Distracted World
            </Link>
          </li>
        </ul>
      </main>
    </>
  )
}