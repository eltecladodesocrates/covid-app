import React, { useState } from 'react'

const App = () => {
  // Get all the dat in the store and then play with it in the app

  const [country, setCountry] = useState('usa')

  fetch(`https://covid19.mathdro.id/api/countries/india`)
  .then( res => res.json())
  .then( res => console.log(res.confirmed.value))

  console.log(country)

  return (
    <div>
      <h1>Covid App</h1>
      <input value={country} onChange={ e => setCountry(e.target.value)}/>
    </div>
  )
}

export default App;
