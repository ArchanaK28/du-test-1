import React from 'react'
import { Check } from 'lucide-react'

const PostpaidPlans = () => {
  const plans = [
    {
      name: "Power Plan 125",
      price: 125,
      popular: false,
      flexiMinutes: "100",
      nationalData: "4",
      benefits: [
        "4 GB free data on WiFi UAE",
        "No activation fee. Save AED 125"
      ],
      limitedOffer: false
    },
    {
      name: "Power Plan 200",
      price: 200,
      popular: true,
      flexiMinutes: "400",
      nationalData: "26",
      benefits: [
        "The Entertainer on us for 12 months",
        "Carry over data to next month",
        "15 GB free data on WiFi UAE",
        "No activation fee. Save AED 125"
      ],
      limitedOffer: true,
    },
    {
      name: "Power Plan 300",
      price: 300,
      popular: false,
      flexiMinutes: "1020",
      nationalData: "50",
      benefits: [
        "The Entertainer on us for 12 months",
        "Free Internet Calling Pack",
        "Amazon Prime on us",
        "Carry over data to next month",
        "25 GB free data on WiFi UAE",
        "No activation fee. Save AED 125"
      ],
      limitedOffer: true,
    },
    {
      name: "Power Plan 500",
      price: 500,
      popular: false,
      flexiMinutes: "1500",
      nationalData: "100",
      benefits: [
        "The Entertainer on us for 12 months",
        "Roaming 2 GB",
        "Free Internet Calling Pack",
        "Amazon Prime on us",
        "Carry over data to next month",
        "100 GB free data on WiFi UAE",
        "No activation fee. Save AED 125"
      ],
      limitedOffer: true
    },
    {
      name: "Power Plan 1000",
      price: 1000,
      popular: false,
      flexiMinutes: "Unlimited",
      nationalData: "Unlimited",
      benefits: [
        "The Entertainer on us for 12 months",
        "Roaming 5 GB",
        "Free Internet Calling Pack",
        "Carry over data to next month",
        "Amazon Prime on us",
        "120 GB free data on WiFi UAE",
        "No activation fee. Save AED 125"
      ],
      limitedOffer: true
    }   
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Postpaid Plans</h1>
          <p className="text-gray-600">Get The Entertainer on us, when you buy a Power Plan online.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-6 bg-white rounded-2xl shadow-md border overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                ${plan.popular ? 'border-blue-800 shadow-lg' : 'border-blue-200'}`}
            >
              {/* Limited Time Offer - which is coming in top of the section */}
              {plan.limitedOffer && (
                <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white text-center text-sm font-bold py-3">
                  Limited Time Offer!
                </div>
              )}

              <div className={`text-center ${plan.limitedOffer ? 'mt-6' : 'mt-0'}`}>
              <br />
                <h2 className="text-xl font-bold mb-4">{plan.name}</h2>
                <div className="text-3xl font-bold mb-2">
                  AED {plan.price}
                  <span className="text-sm font-normal text-gray-600">/month</span>
                </div>
                <p className="text-sm text-gray-600">For 12 months + 5% VAT</p>
                <br />
            {/* Most popular Highlights only given to 200 Plan */}
              {plan.popular && (
                <div className="">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    Most popular
                  </span>
                </div>
              )}
              <br />
            </div>

              <div className="space-y-4 mb-6 mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Flexi minutes</span>
                  <span className="font-semibold">{plan.flexiMinutes}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Double national data</span>
                  <span className="font-semibold">{plan.nationalData} GB</span>
                </div>
              </div>

              <div className="space-y-3 mb-12">
                {plan.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
                {/* Select button Css */}
              <div className="flex flex-col items-center">
                <button className="absolute bottom-0 mb-3 w-3/5 bg-blue-500 text-white py-2 rounded-lg hover:bg-pink-500 transition-all duration-300">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PostpaidPlans