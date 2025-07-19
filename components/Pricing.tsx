import React from "react";

const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect to get started",
    features: ["Upload up to 3 PDFs", "Basic AI Q&A", "Limited memory"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "₹499/mo",
    description: "Advanced features for power users",
    features: [
      "Unlimited PDFs",
      "Fast AI responses",
      "Full memory support",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for your business",
    features: [
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "Deployment assistance",
    ],
    cta: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-100 dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent mb-16">
          Pricing Plans
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Choose a plan that fits your needs
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border shadow-sm ${
                plan.highlighted
                  ? "bg-white border-blue-500 shadow-lg dark:bg-gray-800"
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {plan.price}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {plan.description}
              </p>
              <ul className="text-left mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-200">
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
