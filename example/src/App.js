import React, { useState } from 'react'

import { Typewriter } from 'react-typewriting-effect'

const App = () => {
  const [key, setKey] = useState(0)
  return (
    <div key={key} style={{ backgroundColor: 'black', color: 'white' }}>
      <h3>
        <Typewriter
          string='This is an example of typewriting 😄 with delay of 80ms'
          delay={80}
          cursorClassName='cursor'
        />
      </h3>
      <br />
      <br />
      <br />
      <h2>
        <Typewriter
          string='This is an example of typewriting 😄 with delay of 20ms'
          delay={20}
          cursorClassName='cursor'
        />
      </h2>
      <br />
      <h1>
        <Typewriter
          string='The cursor can be customised to be any string'
          delay={100}
          cursor='_'
          cursorClassName='cursor'
        />
      </h1>
      <br />
      <br />
      <br />
      <button
        style={{ color: 'green', fontSize: '1em', backgroundColor: 'white' }}
        onClick={() => setKey(key + 1)}
      >
        Refresh
      </button>
    </div>
  )
}

export default App
