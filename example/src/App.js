import React from 'react'

import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

const App = () => {
  return (
    <div>
      <h3>
        <Typewriter
          string='This is an example of typewriting 😄 with delay of 80ms'
          delay={80}
        />
      </h3>
      <br />
      <br />
      <br />
      <h2>
        <Typewriter
          string='This is an example of typewriting 😄 with delay of 20ms'
          delay={20}
        />
      </h2>
      <br />
      <h1>
        <Typewriter
          string='The cursor can be customised to be any string'
          delay={100}
          cursor='_'
        />
      </h1>
      <br />
    </div>
  )
}

export default App
