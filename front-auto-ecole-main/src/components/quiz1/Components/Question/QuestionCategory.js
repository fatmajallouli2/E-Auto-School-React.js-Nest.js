import React, { useContext } from 'react'
import '../../quiz1.css'
import QuestionsData from '../../Data/questions.json'
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'

export default QuestionCategory

function QuestionCategory ({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)

  return (
    <p className='question-category' {...restProps}>Catégorie :
      {decodeURIComponent(QuestionsData[currentQuestion - 1].category)}
      {children}
    </p>
  )
}
