export function FloatingSocialBar() {
  return (
    <div className="fixed top-1/3 right-4 z-50 flex flex-col gap-4">
      {[
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 
              24H12.82v-9.294H9.692V11.01h3.128V8.41c0-3.1 
              1.894-4.788 4.659-4.788 1.325 0 2.464.099 
              2.794.143v3.24h-1.918c-1.505 
              0-1.796.715-1.796 1.764v2.31h3.587l-.467 
              3.696h-3.12V24h6.116C23.407 24 24 
              23.407 24 22.674V1.326C24 .593 23.407 
              0 22.675 0z"/>
            </svg>
          ),
          link: "https://www.facebook.com/share/1Be6odwUL8/",
          color: "bg-blue-600",
          glow: "shadow-blue-400/70",
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.5 2A5.5 5.5 0 0 0 2 7.5v9A5.5 5.5 0 0 0 
              7.5 22h9a5.5 5.5 0 0 0 5.5-5.5v-9A5.5 
              5.5 0 0 0 16.5 2h-9zm0 2h9A3.5 3.5 0 0 1 
              20 7.5v9A3.5 3.5 0 0 1 16.5 
              20h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 
              1 7.5 4zm9.75 1.25a1.25 1.25 0 1 0 
              0 2.5 1.25 1.25 0 0 0 0-2.5zM12 
              7a5 5 0 1 0 0 10 5 5 0 0 
              0 0-10zm0 2a3 3 0 1 1 
              0 6 3 3 0 0 1 0-6z"/>
            </svg>
          ),
          link: "https://www.instagram.com/rgsmbuilders?igsh=MTNyOXZ0Ynd2NjRoZw==",
          color: "bg-gradient-to-br from-pink-500 to-purple-500",
          glow: "shadow-pink-400/70",
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 
              6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 
              4.98 3.5zM0 8h5v16H0V8zm7.5 
              0h4.78v2.17h.07c.67-1.27 
              2.3-2.61 4.73-2.61C22.07 
              7.56 24 10.2 24 
              14.4V24h-5v-8.38c0-2-.04-4.58-2.94-4.58-2.94 
              0-3.39 2.17-3.39 4.42V24h-5V8z"/>
            </svg>
          ),
          link: "https://www.linkedin.com/company/rgsm-builders/",
          color: "bg-blue-700",
          glow: "shadow-blue-300/70",
        },
      ].map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            w-9 h-9 ${item.color} text-white rounded-full 
            flex items-center justify-center shadow-lg 
            animate-floating

            /* Glow + Pulse Shine */
            ${item.glow} shadow-md 
            hover:shadow-2xl hover:${item.glow} 

            /* Shine Animation */
            relative overflow-hidden
            before:absolute before:inset-0 before:bg-white/20 
            before:opacity-0 hover:before:opacity-100 
            before:transition-opacity before:duration-500 
            before:blur-lg

            /* Hover Transformations */
            transition-transform duration-300 ease-out
            hover:scale-125 hover:rotate-12
          `}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
