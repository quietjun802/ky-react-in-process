import React, { useRef } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)

const focusInput=()=>{
    inputRef.current.focus()
}

    return (
        <div>
            <input type="text" ref={inputRef} placeholer='글릭하면 포커스됨'/>
            <button onClick={focusInput}>포커스</button>
        </div>
    )
}

export default FocusInput