import React from 'react'

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      features: ['Basic task management', 'Up to 5 users', 'Limited support'],
    },
    {
      name: 'Pro',
      price: '$19/month',
      features: ['Advanced task management', 'Unlimited users', 'Priority support', 'Collaboration tools'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99/month',
      features: ['Custom workflows', 'Dedicated support', 'Advanced security', 'Integration options'],
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Choose the Perfect Plan for Your Needs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-xl p-6 ${plan.popular ? 'border-2 border-primary' : ''}`}>
              {plan.popular && <div className="bg-primary text-white py-1 px-3 rounded-full absolute top-4 right-4 text-sm">Most Popular</div>}
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 py-1">{feature}</li>
                ))}
              </ul>
              <a href="/signup" className="bg-primary hover:bg-blue-700 px-8 py-4 rounded-xl text-lg text-white shadow-xl transition-all duration-300 block text-center">Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
