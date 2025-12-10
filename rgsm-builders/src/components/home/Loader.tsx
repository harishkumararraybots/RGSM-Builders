export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <img
        src="/img-22.png" // your logo in public/logo.png
        alt="Loading..."
        className="w- h-32 animate-pulse"
      />
    </div>
  );
}
