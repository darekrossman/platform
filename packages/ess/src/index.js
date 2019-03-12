import { useEffect, useMemo, useContext, useState } from 'react'
import { ThemeContext, jsx } from '@emotion/core'
import deepEqual from 'deep-equal'
import tokenizer from './tokenizer'
import { getVariantESS, splitProps } from './utils'

const useTheme = () => useContext(ThemeContext)

export const ess = (
  label,
  element,
  defaultProps = {},
  sysKeys,
  variantNamespace = `${label}Variants`
) => {
  const {
    variant: defaultVariant,
    className: defaultClassName,
    ess: defaultESS,
    ...defaults
  } = defaultProps

  return ({
    ess = {},
    as = element,
    variant = defaultVariant,
    className,
    ...rest
  }) => {
    const theme = useTheme()

    const [componentPropsESS, forwardProps] = sysKeys
      ? splitProps({ ...defaults, ...rest }, sysKeys)
      : [{}, rest]

    const _className =
      `ess_${label}` +
      (defaultClassName ? ` ${defaultClassName}` : '') +
      (className ? ` ${className}` : '')

    const variantESS = getVariantESS(variantNamespace, variant, theme)

    const __ess = useESS({
      ...theme[label],
      ...defaultESS,
      ...variantESS,
      ...componentPropsESS,
      ...ess,
    })

    return jsx(as, {
      ...forwardProps,
      css: __ess,
      className: _className,
    })
  }
}

export const useThemeVariants = (key, variant) => {
  const theme = useTheme()
  return getVariantESS(key, variant, theme)
}

export const useESS = (cssObj = {}) => {
  const theme = useTheme()
  const [state, setState] = useState(cssObj)
  useEffect(() => {
    if (!deepEqual(state, cssObj)) {
      setState(cssObj)
    }
  }, [cssObj])
  return useMemo(tokenizer(state, theme), [state])
}

export const tokens = {
  space: [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'mb',
    'width',
    'height',
  ],
  color: ['color', 'bg'],
  typography: [
    'fontSize',
    'fontFamily',
    'textAlign',
    'lineHeight',
    'fontWeight',
    'fontStyle',
    'letterSpacing',
    'textTransform',
  ],
}
