import React from 'react'

const Header = () => {
  return (
    <div className='h-16 bg-blue-300 flex items-center justify-between'>
        <h2>logo</h2>
        <div className='flex gap-2'>
            <h4>About</h4>
            <h4>Carrer</h4>
            <h4>Blog</h4>
            <h4>Account</h4>
        </div>
    </div>
  )
}

export default Header