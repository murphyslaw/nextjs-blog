import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { clsx } from "clsx";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";

function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  const siteTitle = "Falk Köppe";

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hello, I&apos;m <strong>Falk</strong>. I&apos;m a software engineer
          and technical project manager with expertise in full stack
          development, productivity, and education. You can contact me on{" "}
          <a href="https://www.linkedin.com/in/falk-koeppe/">LinkedIn</a>.
        </p>

        <p>
          (This is a sample website - you&apos;ll be building a site like this
          in <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
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

const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

export { Home as default, getStaticProps };
