import { Box } from '@64labs/ui'

export default ({ level = 'default', ...props }) => {
  const color = {
    warn: ['yellow.100', 'yellow.400'],
    info: ['blue.50', 'blue.100'],
    error: ['red.50', 'red.100'],
    success: ['green.50', 'green.100'],
    default: ['grey.100', 'grey.300'],
  }[level] || ['grey.100', 'grey.300']

  return (
    <Box
      ess={{
        p: 3,
        mx: -3,
        bg: `palette.${color[0]}`,
        borderLeft: '4px solid',
        borderColor: `palette.${color[1]}`,
      }}
      mb={4}
      {...props}
    />
  )
}
