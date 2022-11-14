import Link from 'next/link';

export default function index() {
  return (
    <>
      <h1 classname="title">
        Read
        <Link href="/posts/first-post">this page!</Link>
      </h1>
    </>
  );
}
