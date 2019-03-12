import { ess, tokens } from '@64labs/ess'

const tokenProps = [...tokens.space, ...tokens.color]

const Box = ess('Box', 'div', {}, tokenProps)

export default Box
