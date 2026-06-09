export function EcoLoopLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M16 3C9 3 4 8 4 15c0 5.5 3.8 9.8 9 11.4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M16 29c7 0 12-5 12-12 0-5.5-3.8-9.8-9-11.4"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M16 10c-3 0-5.2 2-5.6 5-.1.8.9 1.2 1.4.6L13 14l1.8 2.4c.4.5 1.2.4 1.5-.2L19 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
