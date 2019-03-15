import { useEffect, useCallback, useRef, useState } from 'react'

export const useIntersectionObserver = (options = {}) => {
  const targetRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !inView) {
          setInView(true)
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
        ...options,
      }
    )
    observer.observe(targetRef.current)
    return () => {
      if (typeof observer.unobserve === 'function') {
        observer.unobserve(targetRef.current)
      }
    }
  }, [])

  return [targetRef, inView]
}

export const useImageLoadState = args => {
  const imageRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const loadCallback = useCallback(() => setLoaded(true))

  useEffect(() => {
    if (imageRef.current.complete) {
      setLoaded(true)
    } else {
      setLoaded(false)
      imageRef.current.addEventListener('load', loadCallback)
      return () => imageRef.current.removeEventListener('load', loadCallback)
    }
  }, [...args])

  return [imageRef, loaded]
}

export const useLazyImage = (opts = {}, args) => {
  const [viewRef, inView] = useIntersectionObserver(opts)
  const [imageRef, loaded] = useImageLoadState([inView, ...args])

  return { viewRef, inView, imageRef, loaded }
}
