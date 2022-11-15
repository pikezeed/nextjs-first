import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function index() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://next.js/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <h1 classname="title">
        Read
        <Link href="/posts/first-post">this page!</Link>
      </h1>
    </Layout>
  );
}
