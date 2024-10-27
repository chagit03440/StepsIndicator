import React from 'react'
import Step from './Step'
const Steps = ({steps,step}) => {
  return (
    <div className='steps'>
    {Array.from({ length: steps }, (_, i) => i + 1).map((num) => (
      <Step key={num} text={num} isActive={num <= step} />
    ))}
  </div>
  )
}

export default Steps
