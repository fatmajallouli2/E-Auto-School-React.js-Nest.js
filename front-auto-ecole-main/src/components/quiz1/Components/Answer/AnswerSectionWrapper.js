import React from 'react'
import '../../quiz1.css'

export default AnswerSectionWrapper

function AnswerSectionWrapper ({ children, ...restProps }) {
  return (
    <div className='answer-section-wrapper' {...restProps}>
      {children}
    </div>
  )
}
