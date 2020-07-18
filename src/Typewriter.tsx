import React, { useEffect, useState } from 'react'

export interface TypewriterProps {
  string: string
  delay?: number
  stopBlinkinOnComplete?: any
  className?: string
  onComplete: () => void
  cursor?: string
  cursorClassName?: string
}

export function Typewriter({
  string,
  delay = 100,
  stopBlinkinOnComplete = false,
  className,
  onComplete = () => {},
  cursor = '|',
  cursorClassName = undefined
}: TypewriterProps) {
  const [text, setText] = useState('')
  const [pointer, setPointer] = useState(-1)
  const [isBlinking, setBlinking] = useState(true)

  useEffect(() => {
    if (pointer < string.length) {
      setTimeout(() => {
        setText(text + string.charAt(pointer))
        setPointer(pointer + 1)
      }, delay)
    } else {
      if (stopBlinkinOnComplete) setBlinking(false)
      onComplete()
    }
  }, [pointer])

  return (
    <span className={className}>
      {text}
      {isBlinking ? (
        <span className={cursorClassName || 'blinkingCursor'}>{cursor}</span>
      ) : null}
    </span>
  )
}
