import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Product</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-300">Features</a></li>
              <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-300">Integrations</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul>
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h4>
            <input type="email" placeholder="Your email address" className="bg-gray-800 text-white px-4 py-2 rounded-md mb-2 w-full md:w-auto" />
            <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-md">Subscribe</button>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
