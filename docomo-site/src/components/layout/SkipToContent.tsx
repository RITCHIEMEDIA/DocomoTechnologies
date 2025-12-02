export default function SkipToContent() {
  return (
    <a
      href="#content"
      className="fixed top-0 left-0 z-[9999] bg-[--color-brand] text-white px-4 py-2 m-4 rounded-md transform -translate-y-full transition-transform focus:translate-y-0"
    >
      Skip to Content
    </a>
  );
}