import React, { useRef } from 'react'

const Counter = () => {

    const countRef = useRef(0)

    const increaseCount=()=>{
        countRef.current+=1

        console.log(`현재의 카운트 : ${countRef.current}`)
    }
    return (
        <div>
            <p>
                현재의 카운트: {countRef.current}
                <button onClick={increaseCount}>+1씩 증가</button>
            </p>
        </div>
    )
}

export default Counter