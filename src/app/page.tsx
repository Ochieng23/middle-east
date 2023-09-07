import Link from "next/link";
import Layout from "../app/Components/layout";
import { getServerSession } from "next-auth";

const Home = async () => {
  const session = await getServerSession();

  return (
    <Layout>
      <div>
        getServerSession Result
        {session?.user?.name ? (
          <div>{session?.user?.name}</div>
        ) : (
          <div>Not logged in</div>
        )}
      </div>
      <main className="px-4 py-4 text-center">
        <section className="bg-white-200 p-8 rounded-lg">
          <h1 className="text-3xl font-semibold">
            Welcome to Dissertation Help
          </h1>
          <p className="text-lg mt-4">
            Get professional assistance from experienced tutors for your
            research papers.
          </p>
          <Link
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            href="/contact"
          >
            Get Started
          </Link>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
