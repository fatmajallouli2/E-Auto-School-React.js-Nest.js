import React from 'react'
import '../../quiz1.css'

export default AnswerResult

function AnswerResult ({ children, ...restProps }) {
  return (
    <p className='answer-result' {...restProps}>
      {children}
    </p>
  )
}
