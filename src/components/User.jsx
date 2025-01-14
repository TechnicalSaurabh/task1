import React from 'react'

const User = (props) => {
  return (
    <div className='bg-cyan text-white'>
      {props.elem.fullName}
    </div>
  )
}

export default User
