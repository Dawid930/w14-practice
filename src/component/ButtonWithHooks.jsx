//rfce arra katt

import React, { useState } from 'react'

function ButtonWithHooks() {
    const [key1, setKey1] = useState('This is the default state of a function component')
    const [key2, setKey2] = useState(0)
  return (
    <div>{key1}
    <button onClick={() => setKey1('Function component clicked')}>Click me to update</button>
    <button onClick={() => setKey2(1)}>{key2}</button>
    </div>
  )
}

export default ButtonWithHooks