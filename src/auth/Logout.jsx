import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

export const Logout = () => {
  const auth = useContext(AuthContext)
	const navigate = useNavigate()

	const handleLogout = () => {
		auth.handleLogOut()
		navigate("/", { state: { message: " You have been logged out!" } })
	}

  return (
    <button onClick={handleLogout} className='md:px-8 py-2 border  rounded-xl  font-semibold transition-all bg-[#AC6433] text-white dark:text-[#AC6433] dark:bg-white hover:bg-white hover:text-[#AC6433] hover:border-[#AC6433] hover:translate-y-[-2px]'>Đăng xuất </button>
  )
}
