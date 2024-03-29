import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

type Props = {
  color?: 'inherit' | 'disabled' | 'action' | 'primary' | 'secondary' | 'error'
}

export default function RealEstate({ color, ...rest }: Props): JSX.Element {
  return (
    <SvgIcon color={color} {...rest} viewBox="0 0 14 20">
      {/* eslint-disable-next-line max-len */}
      <path d="M0 0V18H6V14.5H8V18H14V0H0ZM2 2H4V4H2V2ZM6 2H8V4H6V2ZM10 2H12V4H10V2ZM2 6H4V8H2V6ZM6 6H8V8H6V6ZM10 6H12V8H10V6ZM2 10H4V12H2V10ZM6 10H8V12H6V10ZM10 10H12V12H10V10ZM2 14H4V16H2V14ZM10 14H12V16H10V14Z" />
    </SvgIcon>
  )
}
