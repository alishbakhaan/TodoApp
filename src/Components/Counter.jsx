import React, { useContext } from 'react'
import { userContext } from '../context/userContext'

const Counter = () => {
    const {count} = useContext(userContext);
  return (
    <div>{count}</div>
  )
}

export default Counter