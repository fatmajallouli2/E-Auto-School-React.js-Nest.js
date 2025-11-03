import React from 'react'
import '../../quiz1.css'
export default UserScore

function UserScore ({ children, ...restProps }) {
  return (
    <p className='user-score' {...restProps}>
      {children}
    </p>
  )
}
