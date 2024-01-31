import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="text-center h-screen">
      <h2 className="text-3xl">Page not found.</h2>
      <p>We could not find the page you are looking for.</p>
      <p>
        Go back to all <Link href="/">tickets</Link>.
      </p>
    </main>
  );
}
