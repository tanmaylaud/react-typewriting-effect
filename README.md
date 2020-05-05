# react-typewriter-effect

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-typewriter-effect.svg)](https://www.npmjs.com/package/react-typewriter-effect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-typewriter-effect
```

## Usage

```tsx
import React from 'react'

import { Typewriter } from 'react-typewriter-effect'
import 'react-typewriter-effect/dist/index.css'

const App = () => {
  return <Typewriter string='This is an example of typewriting 😄' speed={80} />
}

export default App
```

```tsx
import React from 'react'

import { Typewriter } from 'react-typewriter-effect'
import 'react-typewriter-effect/dist/index.css'

const App = () => {
  return (
    <Typewriter
      string='In this example, the cursor will stop blinking after ther string is completely rendered'
      speed={80}
      stopBlinkinOnComplete
    />
  )
}

export default App
```

## License

MIT © [tanmaylaud](https://github.com/tanmaylaud)
