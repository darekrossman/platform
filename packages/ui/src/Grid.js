import { ess } from '@64labs/ess'

const Grid = ess(
  'Grid',
  'div',
  {
    ess: { display: 'grid' },
  },
  'BoxVariants'
)

export default Grid
