import React from 'react'
import '../../quiz1.css'

export default AnswerButton

function AnswerButton ({ children, ...restProps }) {
  return (
    <button {...restProps}>
      {children}
    </button>
  )
}
