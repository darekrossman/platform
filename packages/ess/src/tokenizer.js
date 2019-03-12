import * as sys from "styled-system"
import { splitProps, tokenizeStyleProp } from "./utils"

const tokenizer = (styles, theme) => () => {
  const interpolatedStyles = Object.keys(styles).reduce((a, b) => {
    return {
      ...a,
      [b]:
        Array.isArray(styles[b]) || typeof styles[b] === "string" || typeof styles[b] === "number"
          ? styles[b]
          : tokenizer(styles[b], theme)()
    }
  }, {})

  const [sProps, otherProps] = splitProps(interpolatedStyles)

  const props = { ...sProps, theme }

  return [
    otherProps,
    sys.space(props),
    sys.color(props),
    sys.width(props),
    sys.fontSize(props),
    sys.fontFamily(props),
    sys.textAlign(props),
    sys.lineHeight(props),
    sys.fontWeight(props),
    sys.fontStyle(props),
    sys.letterSpacing(props),
    sys.display(props),
    sys.maxWidth(props),
    sys.minWidth(props),
    sys.height(props),
    sys.maxHeight(props),
    sys.minHeight(props),
    sys.size(props),
    sys.verticalAlign(props),
    sys.alignItems(props),
    sys.justifyContent(props),
    sys.flexWrap(props),
    sys.flexDirection(props),
    sys.flex(props),
    sys.alignContent(props),
    sys.justifyItems(props),
    sys.justifySelf(props),
    sys.alignSelf(props),
    sys.order(props),
    sys.flexBasis(props),
    sys.borderRadius(props),
    sys.borders(props),
    sys.borderColor(props),
    sys.boxShadow(props),
    sys.opacity(props),
    sys.overflow(props),
    sys.position(props),
    sys.zIndex(props),
    sys.top(props),
    sys.right(props),
    sys.bottom(props),
    sys.left(props),
    sys.gridGap(props),
    sys.gridRowGap(props),
    sys.gridColumnGap(props),
    sys.gridColumn(props),
    sys.gridRow(props),
    sys.gridArea(props),
    sys.gridAutoFlow(props),
    sys.gridAutoRows(props),
    sys.gridAutoColumns(props),
    sys.gridTemplateRows(props),
    sys.gridTemplateColumns(props),
    sys.gridTemplateAreas(props),
    tokenizeStyleProp("transform", "transform")(props),
    tokenizeStyleProp("transition", "transition", "transitions")(props),
    tokenizeStyleProp("blend", "mix-blend-mode")(props),
    tokenizeStyleProp("filter", "filter")(props),
    tokenizeStyleProp("borderImage", "border-image")(props),
    tokenizeStyleProp("listStyle", "list-style")(props)
  ]
}

export default tokenizer
