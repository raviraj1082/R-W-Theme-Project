import React, { useState } from 'react';

const Counter = () => {

    const[count, setCount] = useState(0);
    const incNum = () =>{
        setCount(count + 1)
    }
    const decNum = () =>{
        count > 0 ?  setCount(count - 1) : setCount(count)  
    }

    return (
        <>  
            <div className='text-center'>
                <h2>{count}</h2>
                <button className="btn btn-primary" onClick={() => incNum()}style={{marginRight:"8px"}}>Plus</button>
                <button className="btn btn-primary " onClick={() => decNum()} style={{marginLeft:"5px"}}>Minus</button>
            </div>
        </>
    );
}

export default Counter;
