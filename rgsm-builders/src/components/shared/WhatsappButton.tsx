

export function WhatsappButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-14 h-14 md:w-16 md:h-16
        rounded-full bg-green-500
        shadow-lg md:shadow-xl
        hover:shadow-2xl
        transition-all duration-300
        hover:scale-105
      "
      aria-label="Chat with us on WhatsApp"
    >   
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 md:w-8 md:h-8 fill-white"
      >
        <path d="M16 .8A15.2 15.2 0 0 0 .8 16a15 15 0 0 0 2.2 7.9L.7 31.3 7.4 29a15.3 15.3 0 0 0 8.6 2.6A15.2 15.2 0 0 0 16 .8Zm0 27.6a12 12 0 0 1-6.1-1.7l-.4-.2-3.7 1.2 1.2-3.6-.2-.4a12 12 0 1 1 9.1 4.7Zm7-9.1c-.4-.2-2.3-1.1-2.6-1.2s-.6-.2-.9.2-1 1.2-1.2 1.4-.4.3-.7.1a9.7 9.7 0 0 1-4.8-4c-.3-.4 0-.6.2-.8l.6-.7c.2-.3.3-.5.5-.9a.8.8 0 0 0 0-.7c-.1-.2-.9-2.3-1.2-3.1s-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.2 1.3 3.8 1.5 4.1a18.6 18.6 0 0 0 7.7 7.7 8.7 8.7 0 0 0 3.2 1.2c1.3.1 2.4-.1 3.3-.9s1-2.1.7-2.3-.5-.3-.9-.5Z" />
      </svg>
    </button>
  );
}
