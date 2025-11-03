import React from 'react'

function StartText({setStep}) {
    function changeStep()
    {setStep(2)}
    return (
       
        
        <div className="start_btn"onClick={changeStep}><button>Start</button></div>
        
        
        
       
    )
}

export default StartText
