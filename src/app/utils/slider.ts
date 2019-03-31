const countArrowOffset = (
  inputValue: number, 
  maxValue: number,
  sliderWidth: number,
  type: 'left' | 'right'
): string => {
  const circleThumbDiameter = 25 //px

  const circleThumbRadius = circleThumbDiameter / maxValue
  const circleThumbPosition = inputValue * sliderWidth / maxValue

  const arrowOffsetRelative = (type === 'left' ? 
    circleThumbRadius - circleThumbDiameter : 
    circleThumbRadius + circleThumbDiameter
  )
  const arrowOffsetAbsolute = circleThumbRadius * inputValue

  return `${arrowOffsetRelative + circleThumbPosition - arrowOffsetAbsolute}px`
}

export { countArrowOffset }