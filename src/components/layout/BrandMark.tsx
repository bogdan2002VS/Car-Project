export function BrandMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <rect width="512" height="512" rx="112" className="fill-ink-950 dark:fill-ink-900" />
      <path
        d="M88 296C196 300 252 212 424 146C320 244 262 296 150 322C124 328 100 316 88 296Z"
        fill="#A30015"
      />
      <path
        d="M96 366C214 368 282 298 420 250C330 332 256 378 156 390C130 393 106 384 96 366Z"
        fill="#C71530"
      />
      <circle cx="392" cy="170" r="14" fill="#FCEAEC" />
    </svg>
  )
}
