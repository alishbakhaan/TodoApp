import React, { useContext } from 'react'
import Counter from './Counter'
import { userContext } from '../context/userContext'

const Button = () => {
    const {setCount} = useContext(userContext);
  return (
    <div className='flex justify-center my-2'>
        <button className='bg-blue-500 p-4 text-xl' onClick={() => setCount((count) => count+1)}> 
        <span className='inline-flex'> I'm a button <Counter/></span>
        
        </button>
    </div>
  )
}

export default Button