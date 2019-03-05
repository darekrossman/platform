import React from "react"
import Box from "./Box"

const Image = ({ src, ess, imageProps, aspectRatio = 1, ...props }) => {
  return (
    <Box
      ess={{
        pt: `-${aspectRatio * 100}%`,
        position: "relative",
        overflow: "hidden",
        "& > *": {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
          maxWidth: "100%"
        },
        ...ess
      }}
      {...props}
    >
      <img src={src} {...imageProps} />
    </Box>
  )
}

export default Image
