import React, {useState,useRef} from 'react'

const InputTracker = () => {
    const renderCount =useRef(0)
    cons[text, setText]=useState('')

    renderCount.current+=1

    const handleChange=()=>{
        setText(e.target.value)
    }
  return (
    <div>
        <input type="text" value={text} onChange={handleChange}/>
        <p>렌더링 횟수: {renderCount.current}</p>
    </div>
  )
}

export default InputTracker