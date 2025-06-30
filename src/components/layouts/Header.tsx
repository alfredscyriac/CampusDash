'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold transition-colors" style={{ color: '#ff5757' }}>
          CampusDash
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/restaurants" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            Restaurants
          </Link>
          <Link href="/become-dasher" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            Become a Dasher
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
            About
          </Link>
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/login" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Sign In
          </Link>
          {/* Sign Up Button - Updated to use #ff5757 */}
          <Link 
            href="/signup" 
            className="text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            style={{ backgroundColor: '#ff5757' }}
          >
            Sign Up
          </Link>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-4">
            <Link 
              href="/restaurants" 
              className="block text-gray-700 hover:text-red-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Restaurants
            </Link>
            <Link 
              href="/become-dasher" 
              className="block text-gray-700 hover:text-red-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a Dasher
            </Link>
            <Link 
              href="/about" 
              className="block text-gray-700 hover:text-red-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <hr className="border-gray-200" />
            <Link 
              href="/login" 
              className="block text-gray-700 hover:text-gray-900 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            {/* Mobile Sign Up Button - Updated to use #ff5757 */}
            <Link 
              href="/signup" 
              className="block text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 text-center"
              style={{ backgroundColor: '#ff5757' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}