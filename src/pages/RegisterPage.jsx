// import React from 'react'

import { Link } from "react-router-dom"

const RegisterPage = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Register</h1>
        <form action="" className="max-w-md mx-auto">
            <input type="text" placeholder="John Doe" />
            <input type="email" placeholder="you@email.com" />
            <input type="password" placeholder="password" />
            <button className="primary">Register</button>
            <div className="text-center py-2 text-gray-500">
                Already an account ?
                <Link to='/login' className="underline text-black">Login Now</Link>
            </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
