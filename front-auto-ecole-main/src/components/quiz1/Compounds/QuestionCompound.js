import React from 'react'
import QuestionCategory from '../Components/Question/QuestionCategory'
import QuestionDifficulty from '../Components/Question/QuestionDifficulty'
import ScoreBarCompound from './ScoreBarCompound'
import QuestionSectionWrapper from '../Components/Question/QuestionSectionWrapper'
import QuestionText from '../Components/Question/QuestionText'
export default QuestionCompound

function QuestionCompound ({ children, score , setScore }) {
  return (
    <div>
      <QuestionSectionWrapper>
        <div className="row">
          <div className="col-xs-6 col-md-6">
        <QuestionCategory />
        <QuestionDifficulty />
          </div>
          <div className="col-xs-6 col-md-6 score">
          
          <ScoreBarCompound score={score}setScore={setScore}  />
          
          </div>
        </div>
        <QuestionText />
      </QuestionSectionWrapper>
      {children}
    </div>
  )
}
