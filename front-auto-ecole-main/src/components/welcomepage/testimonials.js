import React from 'react'

export const Testimonials = (props) => {
  return (
    <div id='testimonials'>

       {/* Container Bootstrap pour centrer et limiter la largeur du contenu */}
      <div className='container'>

        {/* Titre centré */}
        <div className='section-title text-center'>
          <h2>What our clients say</h2>
        </div>


        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>

                    {/* Image du client */}
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>

                    {/* Contenu du témoignage */}
                    <div className='testimonial-content'>
                      <p>"{d.text}"</p>

                       {/* Nom du client */}
                      <div className='testimonial-meta'> - {d.name} </div>
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
