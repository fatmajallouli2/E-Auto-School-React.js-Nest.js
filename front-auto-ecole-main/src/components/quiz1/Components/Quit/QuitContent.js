import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

import { Link as RouterLink } from 'react-router-dom';

function QuitContent({setStep, score}) {
    function repeterQuiz()
    {setStep(1)}
    
    return (
    <div>
    
            
        <div className="quit-content">
            
        {score<50?
        <div className="msg">You've completed the Quiz!<br/> and sorry 😐<br/> You got only <p className="score-affiche">{score} %</p></div>:
        <div className="msg">You've completed the Quiz!<br/>and congrats! 🎉<br/> You got<p className="score-affiche">{score} %</p>{score}</div> }
        <div className="row">
        <div className="col-xs-6 col-md-6 col-xl-6">
       <button  id ="repeter"className="restart" onClick={repeterQuiz}>Repeat</button>
       </div> 
       <div className="col-xs-6 col-md-6 col-xl-6" >
       
            <IconButton id="quitter" component={RouterLink} to='/DashboardAdmin' color="error">
              < ExitToAppIcon />
            </IconButton>
          
       </div> 
        
        </div>
       
        
        
            
        </div>
        
        </div>
    )
}
 
export default QuitContent

