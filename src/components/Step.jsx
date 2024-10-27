import React from 'react'

const Step = ({text, isActive}) => {
  return (
    <label className={`circle ${isActive ? 'active' : ''}`}>
       {isActive ? "✓" : text}
    </label>
  )
}

export default Step
