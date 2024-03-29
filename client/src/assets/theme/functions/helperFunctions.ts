/* eslint-disable default-param-last */
import chroma from 'chroma-js'

export function hexToRgb(color: string): string {
  return chroma(color).rgb().join(', ')
}

export function pxToRem(number: number, baseNumber = 16): string {
  return `${number / baseNumber}rem`
}

export function rgba(color: string, opacity: number): string {
  return `rgba(${hexToRgb(color)}, ${opacity})`
}

// FIX Me and remove eslint
export function boxShadow(
  offset: number[] = [],
  radius: number[] = [],
  color: string,
  opacity: number,
  inset = ''
): string {
  const [x, y] = offset
  const [blur, spread] = radius

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function gradientChartLine(chart: any, color: string, opacity = 0.2) {
  const ctx = chart.getContext('2d')
  const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50)
  const primaryColor = rgba(color, opacity).toString()

  gradientStroke.addColorStop(1, primaryColor)
  gradientStroke.addColorStop(0.2, 'rgba(72, 72, 176, 0.0)')
  gradientStroke.addColorStop(0, 'rgba(203, 12, 159, 0)')

  return gradientStroke
}

export function linearGradient(color: string, colorState: string | number, angle = 195): string {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`
}

export const functions = {
  linearGradient,
  pxToRem,
  hexToRgb,
  gradientChartLine,
  boxShadow,
  rgba,
}

export type ThemeFunctions = typeof functions
