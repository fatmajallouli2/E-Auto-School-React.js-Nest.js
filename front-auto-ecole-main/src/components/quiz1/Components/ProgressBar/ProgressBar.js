import React, { Fragment, useContext } from 'react'
import '../../quiz1.css'
import QuestionsData from '../../Data/questions.json'
import { CurrentQuestionContext } from '../../Context/CurrentQuestionContext'
import QuestionNumber from '../Question/QuestionNumber'

export default ProgressBar

function ProgressBar ({ children, ...restProps }) {
  const [currentQuestion] = useContext(CurrentQuestionContext)
  const totalQuestions = QuestionsData.length
  const widthPercentage = (currentQuestion / totalQuestions) * 100

  return (
    <Fragment>
  <div className="progressBar">
    <div className="progressBarChange" style={{width: `${widthPercentage}%`}}{...restProps}><QuestionNumber />{children}</div>
 </div>
 </Fragment>
    
  )
}
