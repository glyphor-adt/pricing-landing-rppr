import React from 'react'

const Hero = () => {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Supercharge Your Productivity with AI-Powered Workflows</h1>
          <p className="text-xl text-gray-200 leading-relaxed mb-8 animate-fade-in delay-100">Automate repetitive tasks, collaborate seamlessly, and unlock unprecedented levels of efficiency with our intelligent platform.</p>
          <div className="flex justify-center space-x-4 animate-fade-in delay-200">
            <a href="/signup" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300">Start Free Trial</a>
            <a href="/pricing" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg transition-all duration-300" aria-label="View pricing">View Pricing</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
