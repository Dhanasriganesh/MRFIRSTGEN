import { useState } from 'react'

const FALLBACK = '/images/hero-home.jpg'

export default function SafeImage({ src, alt, className = '', fallback = FALLBACK, ...props }) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (imgSrc !== fallback) setImgSrc(fallback)
      }}
      {...props}
    />
  )
}
