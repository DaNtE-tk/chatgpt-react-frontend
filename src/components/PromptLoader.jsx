import React, {useState, useEffect} from 'react'

function Loader() {
    const [dots, setDots] = useState(1)
    const [increasing, setIncreasing] = useState(true)


    useEffect(() =>{
        const interval = setInterval(()=>{
            if(increasing){
                if(dots<3){
                    setDots(prevDots=>prevDots+1);
                }else{
                    setIncreasing(false)
                }  
            }else{
                if(dots>1){
                    setDots(prevDots=>prevDots-1)
                }else{
                    setIncreasing(true)
                }
            }
        },300)

        return ()=> clearInterval(interval)
    },[dots,increasing])

    const dotArray = Array.from({length:dots},(_,index) => <span key={index}>.</span>)

  return (
    <div className='loader'>
        {dotArray}
    </div>
  )
}

export default Loader