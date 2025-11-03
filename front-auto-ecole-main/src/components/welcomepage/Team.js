import React from 'react'

export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='team'>
                  <div className='thumbnail'>
                    {' '}
                    {/* Image du membre */}
                    <img src={d.img} alt='...' className='team-img' /> 
                    <div className='caption'>
                      {/* nom du membre */}
                      <h4>{d.name}</h4>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
