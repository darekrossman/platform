import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useLazyImage } from '@64labs/hooks'
import Box from './Box'

const Image = (
  {
    src,
    ess,
    imageProps,
    fluid,
    width = '100%',
    height = '100%',
    springConfig = () => ({}),
    ...props
  },
  ref
) => {
  const { viewRef, imageRef, inView, loaded } = useLazyImage(null, [src])

  const ready = loaded && inView

  const _springConfig = {
    opacity: ready ? 1 : 0,
    width: fluid ? '100%' : width,
    config: {
      tension: 500,
      friction: 50,
    },
  }

  const style = useSpring({
    ..._springConfig,
    ...springConfig(ready),
  })

  const aspectRatio = (height / width) * 100

  return (
    <animated.div style={style}>
      <Box
        ref={viewRef}
        ess={{
          pt: `${aspectRatio}%`,
          position: 'relative',
          overflow: 'hidden',
          '& > *': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            maxWidth: '100%',
          },
          ...ess,
        }}
        {...props}
      >
        <img ref={imageRef} src={inView ? src : undefined} {...imageProps} />
      </Box>
    </animated.div>
  )
}

export default Image
