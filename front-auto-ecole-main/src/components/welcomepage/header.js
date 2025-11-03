import React from 'react'

  // Déclarer un composant Header qui prend des "props" en paramètre de son pere Welcome Composant
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {/* Affiche le titre reçu via props.data.title si disponible */}
                  {/* Sinon affiche "Loading" si les données ne sont pas encore chargées */}
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                
                {/* Un lien/bouton qui redirige vers la section 'features' sur la même page */}
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
