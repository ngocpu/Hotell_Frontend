import React from 'react'
import { Link } from 'react-router-dom'

export const Admin = () => {
  return (
    <div className='w-full text-neutral-800 dark:text-white pt-16 flex flex-col gap-5'>
        <h1>admin</h1>
        <Link to={"/existing-rooms"}>manege room</Link>
        <Link to={"/existing-bookings"}>Manage Bookings</Link>
    </div>
  )
}
