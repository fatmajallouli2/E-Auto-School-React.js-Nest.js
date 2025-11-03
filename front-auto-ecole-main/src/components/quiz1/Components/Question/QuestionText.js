import React, { useContext } from 'react'
import '../../quiz1.css'
import QuestionsData from '../../Data/questions.json'
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default QuestionText

function QuestionText ({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)

  return (
    
    <p className='question-text' {...restProps}>
      {decodeURIComponent(QuestionsData[currentQuestion - 1].question)}
      {children}
    </p>

  )
}
