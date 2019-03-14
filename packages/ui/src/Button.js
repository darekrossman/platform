import { ess, tokens } from '@64labs/ess'

const tokenProps = [...tokens.space, ...tokens.color, ...tokens.typography]

const Button = ess('Button', 'button', { variant: 'primary' }, tokenProps)

export default Button
