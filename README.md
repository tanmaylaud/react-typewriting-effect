# react-typewriting-effect

> The simplest typewriter effect component in React. ( Requires react >=16.8.0 )

[![NPM](https://img.shields.io/npm/v/react-typewriting-effect.svg)](https://www.npmjs.com/package/react-typewriting-effect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![](preview.gif)

## Updates in v1.0.4

- cursor option to add custom cursor text
- cursor css can be customised using cursorClassName

## Install

```bash
npm install --save react-typewriting-effect
```

## Usage

```tsx
import React from 'react'

import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

const App = () => {
  return <Typewriter string='This is an example of typewriting 😄' delay={80} />
}

export default App
```

```tsx
import React from 'react'

import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

const App = () => {
  return (
    <Typewriter
      string='In this example, the cursor will stop blinking after ther string is completely rendered'
      delay={80}
      stopBlinkinOnComplete
    />
  )
}

export default App
```

```tsx
import React from 'react'

import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

const App = () => {
  return (
    <Typewriter
      string='In this example, the cursor will be _ and speed will be 50'
      delay={50}
      cursor='_'
    />
  )
}

export default App
```

You can view demo [here](https://tanmaylaud.github.io/react-typewriting-effect/)

## Options

| Name                    | Type            | Default value | Description                                         |
| ----------------------- | --------------- | ------------- | --------------------------------------------------- |
| string                  | String          |               | String to type out                                  |
| delay (speed in v1.0.3) | number          | 100           | The delay between each key when typing.             |
| onComplete              | Lambda/Function | () => {}      | Function to execute when string is completely typed |
| stopBlinkinOnComplete   | Boolean         | false         | Whether to blink cursor after string is typed       |
| className               | String          | ''            | Field to set classes for the HTML Element           |
| cursor                  | String          | '             | '                                                   | Cursor string |
| cursorClassName         | String          | undefined     | Field to set classes for the cursor                 |

## License

MIT © [tanmaylaud](https://github.com/tanmaylaud)
