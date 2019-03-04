import { useEffect, useMemo, useContext, useState } from 'react'
import { ThemeContext } from '@emotion/core'
import deepEqual from 'deep-equal'
import tokenizer from './tokenizer'
import { getVariantESS } from './utils'

const useTheme = () => useContext(ThemeContext)

export const useESS = (themeKey, _cssObj = {}) => {
  const theme = useTheme()
  let cssObj = typeof themeKey === 'string' ? { ...(theme[themeKey] || {}), ..._cssObj } : themeKey
  const [state, setState] = useState(cssObj)
  useEffect(() => {
    if (!deepEqual(state, cssObj)) {
      setState(cssObj)
    }
  }, [cssObj])
  return useMemo(tokenizer(state, theme), [state])
}

export default (
  label,
  element,
  defaults = {},
  variantNamespace = `${label}Variants`
) => ({ ess = {}, as = element, variant, className, ...props }) => {
  const theme = useTheme()
  const Component = as
  const _className = `ess_${label}` + (className ? ` ${className}` : '')
  const variantESS = getVariantESS(variantNamespace, variant, theme)
  const __ess = useESS(label, { ...variantESS, ...defaults, ...ess })
  return <Component css={__ess} className={_className} {...props} />
}
