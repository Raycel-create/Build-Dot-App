import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Standard",
      price: "$15",
      period: "/month",
      description: "Perfect for individuals and small projects",
      features: [
        "100 AI generations per month",
        "Access to GPT-4 & Claude",
        "Basic templates",
        "Export to HTML/React",
        "Email support",
        "1 project",
        "Community access"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$180",
      period: "/month",
      description: "For professionals building serious applications",
      features: [
        "Unlimited AI generations",
        "All AI models (GPT-4, Claude, DeepSeek, Grok)",
        "Premium templates & components",
        "Export to any framework",
        "Priority support (24/7)",
        "Unlimited projects",
        "Advanced customization",
        "API access",
        "Team collaboration (up to 5 members)",
        "Custom branding removal"
      ],
      cta: "Go Pro",
      popular: true
    },
    {
      name: "Gold",
      price: "$250",
      period: "/month",
      description: "Enterprise-grade with white-glove service",
      features: [
        "Everything in Pro",
        "Dedicated account manager",
        "Custom AI model training",
        "Unlimited team members",
        "Advanced security & compliance",
        "SLA guarantee (99.9% uptime)",
        "Custom integrations",
        "On-premise deployment option",
        "Quarterly strategy sessions",
        "Direct Slack/Discord support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#08090a] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Build<span className="text-emerald-500">.App</span></span>
            </Link>
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="container mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Pricing that scales
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
            with your ambition.
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Start free. Scale as you grow. No hidden fees, cancel anytime.
        </p>
        <p className="text-sm text-emerald-500">
          ✨ All plans deploy better, faster applications than competitors
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border transition-all ${
                plan.popular
                  ? "border-emerald-500/50 shadow-2xl shadow-emerald-500/20 scale-105"
                  : "border-white/5 hover:border-emerald-500/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
              </div>

              <Link
                href="/builder"
                className={`block w-full text-center py-4 rounded-xl font-medium transition-all mb-8 ${
                  plan.popular
                    ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 shadow-lg shadow-emerald-500/20"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.cta}
              </Link>

              <div className="space-y-4">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Why are your prices lower than competitors?",
                a: "We believe in fair pricing and better technology. Our advanced AI infrastructure is more efficient, allowing us to pass savings to you while delivering superior results."
              },
              {
                q: "What makes your applications better?",
                a: "Our multi-AI approach uses the best model for each task, resulting in higher quality code, better designs, and faster load times. Plus, our apps are optimized for SEO and performance out of the box."
              },
              {
                q: "Can I upgrade or downgrade anytime?",
                a: "Absolutely! Change your plan anytime. Upgrades are instant, and downgrades take effect at the end of your billing cycle."
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 14-day money-back guarantee on all paid plans. No questions asked."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm p-16 rounded-3xl border border-emerald-500/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get AI consultation to find the perfect plan for your needs.
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-xl text-lg font-medium hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-emerald-500/20"
          >
            Talk to AI Consultant
          </Link>
        </div>
      </section>
    </div>
  );
}
