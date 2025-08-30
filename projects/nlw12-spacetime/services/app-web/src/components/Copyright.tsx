'use client'

export function Copyright() {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Made with 💜 by{' '}
      <a
        href="https://github.com/andersonbosa"
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-100"
      >
        @andersonbosa
      </a>{' '}
      in NLW#12 offered by{' '}
      <a
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-gray-100"
        href="https://rocketseat.com.br"
      >
        Rocketseat
      </a>
    </div>
  )
}
