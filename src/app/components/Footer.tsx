import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
              <li><a href="#" className="hover:text-gray-300">Terms & conditions</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Mobile Plans</a></li>
              <li><a href="#" className="hover:text-gray-300">Internet & TV</a></li>
              <li><a href="#" className="hover:text-gray-300">Smart Home</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Call us: 800 123</li>
              <li>Email: support@du.ae</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-8">
          © Copyright 2024 EITC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer