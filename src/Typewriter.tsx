import React, { useEffect, useState } from 'react'

export interface TypewriterProps {
  string: string
  speed?: number
  stopBlinkinOnComplete?: any
  className: string
  onComplete: () => null
}

export function Typewriter({
  string,
  speed = 100,
  stopBlinkinOnComplete = false,
  className,
  onComplete = () => null
}: TypewriterProps) {
  const [text, setText] = useState('')
  const [pointer, setPointer] = useState(-1)
  const [isBlinking, setBlinking] = useState(true)

  useEffect(() => {
    if (pointer < string.length) {
      setTimeout(() => {
        setText(text + string.charAt(pointer))
        setPointer(pointer + 1)
      }, speed)
    } else {
      if (stopBlinkinOnComplete) setBlinking(false)
      onComplete()
    }
  }, [pointer])

  return (
    <span className={className}>
      {text}
      {isBlinking ? <span className='blinking-cursor'>|</span> : null}
    </span>
  )
}
