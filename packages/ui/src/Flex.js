import { ess, tokens } from '@64labs/ess'

const tokenProps = [
  ...tokens.space,
  ...tokens.color,
  'position',
  'display',
  'zIndex',
]

const Flex = ess(
  'Flex',
  'div',
  {
    ess: { display: 'flex' },
  },
  tokenProps,
  'BoxVariants'
)

export default Flex
