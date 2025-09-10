import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


function Pnf() {
  return (
    <>
    <Header/>
     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6">
      <h1 className="text-9xl font-extrabold text-violet-700">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-3 max-w-md">
        Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>

      <div className="mt-6">
        <Link
          to="/"
          className="bg-violet-700 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-violet-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
    </>
  )
}

export default Pnf