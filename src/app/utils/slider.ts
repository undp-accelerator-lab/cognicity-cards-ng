const countArrowOffset = (
  inputValue: number, 
  sliderWidth: number, 
  type: 'left' | 'right'
): string => {
  const circleThumbDiameter = 25 //px

  const circleThumbRadius = circleThumbDiameter / 2
  const circleThumbPosition = inputValue * sliderWidth / 2

  const arrowOffsetRelative = (type === 'left' ? 
    circleThumbRadius - circleThumbDiameter : 
    circleThumbRadius + circleThumbDiameter
  )
  const arrowOffsetAbsolute = circleThumbRadius * inputValue

  return `${arrowOffsetRelative + circleThumbPosition - arrowOffsetAbsolute}px`
}

export { countArrowOffset }