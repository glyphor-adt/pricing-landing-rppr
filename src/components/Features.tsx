import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: 'Automated Task Management',
      description: 'Eliminate manual effort and streamline your workflows with intelligent automation.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Protect your data with advanced encryption and robust security protocols.',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Collaboration',
      description: 'Collaborate seamlessly with your team and clients in a secure, real-time environment.',
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Unlock the Power of AI</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <feature.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
