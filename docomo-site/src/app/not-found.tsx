import Link from 'next/link';
import Meta from '@/components/seo/Meta';

export default function NotFound() {
  return (
    <>
      <Meta 
        title="Page Not Found" 
        description="The page you're looking for doesn't exist or has been moved." 
      />
      <div className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-6">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <p className="text-xl text-[--muted] mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/" className="btn btn-primary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}