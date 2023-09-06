// pages/index.tsx

import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Essay Help - Home</title>
        <meta
          name="description"
          content="Get professional essay help from experienced tutors."
        />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |
          <Link href="/about">
            <a>About</a>
          </Link>{" "}
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to Essay Help</h1>
          <p>
            Get professional assistance from experienced tutors for your essays.
          </p>
          <Link href="/contact">
            <a className="cta-button">Get Started</a>
          </Link>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Essay Help</p>
      </footer>

      <style jsx>{`
        /* Add your CSS styles here for styling the components */
        header {
          background-color: #333;
          color: white;
          padding: 1rem;
          text-align: center;
        }
        nav {
          margin: 0;
          padding: 0;
        }
        nav a {
          color: white;
          margin: 0 1rem;
          text-decoration: none;
        }
        main {
          padding: 2rem;
          text-align: center;
        }
        .hero {
          background-color: #f4f4f4;
          padding: 2rem;
          border-radius: 8px;
        }
        h1 {
          font-size: 2.5rem;
        }
        .cta-button {
          display: inline-block;
          padding: 0.5rem 1rem;
          margin-top: 1rem;
          background-color: #0070f3;
          color: white;
          text-decoration: none;
          border-radius: 4px;
        }
        footer {
          text-align: center;
          padding: 1rem 0;
          background-color: #333;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Home;
