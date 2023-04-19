import React from 'react'
import { useSelector } from 'react-redux'

export default function CountDisplay() {
  const count = useSelector(state=> state.number);
  return (
    <div>
        <p>i'll just display the count : {count}</p>
    </div>
  )
}
