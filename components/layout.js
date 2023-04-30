import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

const name = "Falk Köppe";
const siteTitle = "Falk Köppe";

function Layout({ home, children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          content="Learn how to build a personal website using Next.js"
        />

        <meta name="robots" content="all" key="robots" />
        <meta
          name="description"
          content="Falk Köppe is a software engineer and technical project manager with expertise in full stack development, productivity, and education."
          key="description"
        />

        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:url"
          content="https://nextjs-blog-murphyslaw.vercel.app"
          key="og:url"
        />
        <meta property="og:type" content="website" key="og:type" />
        <meta
          property="og:description"
          content="Falk Köppe is a software engineer and technical project manager with expertise in full stack development, productivity, and education."
          key="og:description"
        />
        <meta
          property="og:image"
          content="/images/falk-koeppe-logo.svg"
          key="og:image"
        />
        <meta
          property="og:image:type"
          content="image/svg+xml"
          key="og:image:type"
        />

        <meta name="og:title" content={siteTitle} key="og:title" />
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/falk-koeppe-profile.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt="Profile"
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/falk-koeppe-profile.png"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt="Profile"
              />
            </Link>

            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

export { Layout as default, siteTitle };
