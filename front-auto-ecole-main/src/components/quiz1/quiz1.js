import React, {useState} from 'react'
import QuitCompound from './Compounds/QuitCompound'
import QuizCompound from './Compounds/QuizCompound'
import StartCompound from './Compounds/StartCompound'
import '../../App.css'
import './quiz1.css'
function Quiz1 () {
  const[step,setStep]=useState(1)
  const [score, setScore]=useState(0)
  return (
    <div> 
    {step === 1 && <StartCompound  setStep={setStep} />}
    {step===2 && <QuizCompound  score={score} setScore={setScore} setStep={setStep}/>}
    {step ===3 && <QuitCompound score={score} setStep={setStep}/>}
    
    </div>
  )
}

export default Quiz1
