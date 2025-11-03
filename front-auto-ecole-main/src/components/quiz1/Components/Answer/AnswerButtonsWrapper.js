import React from 'react'
import '../../quiz1.css'

export default AnswerButtonsWrapper

function AnswerButtonsWrapper ({ children, ...restProps }) {
  return (
    <div className='answer-buttons-wrapper' {...restProps}>
      {children}
    </div>
  )
}
