import { style } from 'styled-system'

const sysProps = [
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
  'bg',
  'width',
  'color',
  'fontSize',
  'fontFamily',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'fontStyle',
  'letterSpacing',
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  'size',
  'verticalAlign',
  'alignItems',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'alignContent',
  'justifyItems',
  'justifySelf',
  'alignSelf',
  'order',
  'flexBasis',
  'borderRadius',
  'border',
  'borderColor',
  'borderTop',
  'borderRight',
  'borderBottom',
  'borderLeft',
  'boxShadow',
  'opacity',
  'o',
  'overflow',
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
  'transform',
  'transition',
  'blend',
  'filter',
  'borderImage',
  'gridGap',
  'gridRowGap',
  'gridColumnGap',
  'gridColumn',
  'gridRow',
  'gridArea',
  'gridAutoFlow',
  'gridAutoRows',
  'gridAutoColumns',
  'gridTemplateRows',
  'gridTemplateColumns',
  'gridTemplateAreas',
]

export const splitProps = (props, from) => {
  let sys = {}
  let other = {}

  Object.keys(props).forEach(b => {
    if ((from || sysProps).includes(b)) {
      sys[b] = props[b]
    } else {
      other[b] = props[b]
    }
  })

  return [sys, other]
}

export const getVariantESS = (namespace, variant, theme) => {
  if (!variant) return {}
  const variants = theme[namespace]
  return Array.isArray(variant)
    ? variant.reduce((a, b) => {
        return { ...a, ...variants[b] }
      }, {})
    : variants[variant]
}

export const tokenizeStyleProp = (
  prop,
  cssProperty,
  key,
  transformValue,
  scale
) => style({ prop, cssProperty, key, transformValue, scale })
