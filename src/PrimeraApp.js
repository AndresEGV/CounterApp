import React  from 'react'
import PropTypes from 'prop-types'


/**
 * Functional Component
 * @param saludo: Es la prop que se recibe desde el index como parametro en el funcional component 
 * 
 *  */
const PrimeraApp = ({saludo, subtitulo}) => {


    return(
        <>
           <h1> {saludo}</h1>
            {/* <pre> { JSON.stringify(saludo, null , 3) } </pre> */}
            <p>{subtitulo}</p>
        </>
         );
      
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps ={
    subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp;