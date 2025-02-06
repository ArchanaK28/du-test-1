import React from 'react'
import { Shield, Clock, Signal } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Know what you pay & what you get",
      description: "We're transparent about your plan terms, fees and cancellation. Read the fine print."
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-500" />,
      title: "Worry-free contract",
      description: "If you're not satisfied with your new plan, cancel with no obligation within 30 days."
    },
    {
      icon: <Signal className="w-12 h-12 text-blue-500" />,
      title: "The network you can trust",
      description: "du's 4G and 5G mobile networks are unparalleled in coverage and uptime."
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">3 reasons why</h2>
          <p className="text-xl">It is a bright idea to choose du.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
