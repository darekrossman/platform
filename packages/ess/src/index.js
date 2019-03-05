import React, { useEffect, useMemo, useContext, useState } from "react"
import { ThemeContext, jsx } from "@emotion/core"
import deepEqual from "deep-equal"
import tokenizer from "./tokenizer"
import { getVariantESS } from "./utils"

const useTheme = () => useContext(ThemeContext)

export default (label, element, defaultProps = {}, variantNamespace = `${label}Variants`) => {
  const { variant: defaultVariant, className: defaultClassName, ...defaults } = defaultProps
  return ({ ess = {}, as = element, variant = defaultVariant, className, ...props }) => {
    const theme = useTheme()
    const _className =
      `ess_${label}` +
      (defaultClassName ? ` ${defaultClassName}` : "") +
      (className ? ` ${className}` : "")
    const variantESS = getVariantESS(variantNamespace, variant, theme)
    const __ess = useESS({ ...variantESS, ...ess })

    return jsx(as, {
      ...defaults,
      ...props,
      css: __ess,
      className: _className
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
