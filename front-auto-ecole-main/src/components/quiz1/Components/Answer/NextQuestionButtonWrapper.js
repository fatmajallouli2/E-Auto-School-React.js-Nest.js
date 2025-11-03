import React from 'react'
import '../../quiz1.css'

export default NextQuestionButtonWrapper

function NextQuestionButtonWrapper ({ children, ...restProps }) {
  return (
    <div className='next-question-button-wrapper' {...restProps}>
      {children}
    </div>
  )
}
