import { forwardRef } from 'react'

import TypoGraphy from './TypoGraphy'

const StyledTypography = forwardRef(
  (
    {
      color,
      fontWeight,
      textTransform,
      verticalAlign,
      textGradient,
      opacity,
      children,
      ...rest
    }: Props,
    ref
  ) => {
    return (
      <TypoGraphy
        {...rest}
        ref={ref}
        ownerState={{
          color,
          textTransform,
          verticalAlign,
          fontWeight,
          opacity,
          textGradient,
          darkMode: false
        }}>
        {children}
      </TypoGraphy>
    )
  }
)

type Props = {
  color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'light'
    | 'dark'
    | 'text'
    | 'white'
  fontWeight: false | 'light' | 'regular' | 'medium' | 'bold'
  textTransform: 'none'
  capitalize
  uppercase
  lowercase
  verticalAlign:
    | 'unset'
    | 'baseline'
    | 'sub'
    | 'super'
    | 'text-top'
    | 'text-bottom'
    | 'middle'
    | 'top'
    | 'bottom'
  textGradient: boolean
  children: Node
  opacity: number
}

export default StyledTypography
