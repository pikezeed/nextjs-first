import styles from './layout.module.css';
import Head from 'next/head';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
      </Head>
    </div>
  );
}
