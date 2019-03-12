import { ess, tokens } from '@64labs/ess'

const tokenProps = [...tokens.space, ...tokens.color, ...tokens.typography]

const Text = ess('Text', 'p', { variant: 'p' }, tokenProps)

export default Text
