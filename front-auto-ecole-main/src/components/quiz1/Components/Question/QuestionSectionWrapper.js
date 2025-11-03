import React from 'react'
import '../../quiz1.css'

export default QuestionSectionWrapper

function QuestionSectionWrapper ({ children, ...restProps }) {
  return (
    <div className='question-section-wrapper' {...restProps}>
      {children}
    </div>
  )
}
