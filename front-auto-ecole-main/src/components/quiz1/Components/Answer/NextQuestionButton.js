import React from 'react'
import '../../quiz1.css'

export default NextQuestionButton

function NextQuestionButton ({ children, ...restProps }) {
  return (
    <button className='next-question-button' {...restProps}>
      {children}
    </button>
  )
}
