import styled from '@64labs/ess'

const ImageContainer = styled(
  'Image',
  'div',
  {
    ess: {
      pt: '100%',
      position: 'relative',
      overflow: 'hidden',
      '& > *': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        maxWidth: '100%'
      }
    }
  },
  'ImageVariants'
)

const Image = ({ src, aspectRatio = 1, ...props }) => {
  return (
    <ImageContainer ess={{ pt: `${aspectRatio * 100}%` }} {...props}>
      <img src={src} />
    </ImageContainer>
  )
}

export default Image
