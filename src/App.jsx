import React, { useState } from 'react';
import './App.css'
import Button from './components/Button';
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <h1>hello React!</h1>
      <Input/>
      <Button text={'메일'} color={'red'}/>
      <Button text={'카페'} color={'blue'}/>
      <Button text={'블로그'} color={'orange'}/>
      <Button text={'기본값 설정'}/>
      <Button text={'자식요소 설정'} color={'pink'}>
        <sttrong>중요</sttrong>
      </Button>
    </div>
  )
}

export default App
