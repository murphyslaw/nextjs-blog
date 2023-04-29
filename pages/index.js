import Head from "next/head";
import Link from "next/link";
import { clsx } from "clsx";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";

function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm <strong>Falk</strong>. I'm a software engineer and
          technical project manager. You can contact me on{" "}
          <a href="https://www.linkedin.com/in/falk-koeppe/">LinkedIn</a>.
        </p>

        <p>
          (This is a sample webiste - you'll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={clsx(utilStyles.headingMd, utilStyles.padding1px)}>
        <h2 className={utilStyles.headingLg}>Blog</h2>

        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className={utilStyles.listItem}>
              <Link href={`/posts/${id}`}>{title}</Link>

              <br />

              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

export { Home as default, getStaticProps };
