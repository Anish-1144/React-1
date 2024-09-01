import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
const {userId} = useParams()

  return (
    <>
    <div className='bg-slate-500 text-white'>user:{userId}</div>
    
    </>
  )
}

export default User
