import React from 'react'
import { Menu, Search, ShoppingCart, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 cursor-pointer" />
            <span className="text-2xl font-bold">du</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Mobile Plans</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Devices</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Internet & TV</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Smart Home</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 cursor-pointer" />
            <ShoppingCart className="h-5 w-5 cursor-pointer" />
            <User className="h-5 w-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header