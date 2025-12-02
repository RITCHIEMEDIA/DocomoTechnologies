export default function Loading() {
  return (
    <div className="pt-32 pb-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[--color-brand]"></div>
          </div>
          <p className="text-xl text-[--muted] mt-6">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}