"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedAI, setSelectedAI] = useState<string | null>(null);

  const aiHelpers = [
    { id: "grok", name: "Grok", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { id: "claude", name: "Claude", icon: "🧠", color: "from-purple-500 to-pink-500" },
    { id: "chatgpt", name: "ChatGPT", icon: "🤖", color: "from-blue-500 to-cyan-500" },
    { id: "deepseek", name: "DeepSeek", icon: "🔍", color: "from-indigo-500 to-blue-500" },
    { id: "emergent", name: "Emergent", icon: "✨", color: "from-[#00ff9d] to-green-500" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/5 sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00ff9d] to-green-500 rounded-lg flex items-center justify-center shadow-lg shadow-[#00ff9d]/30">
                <span className="text-black font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Emergent <span className="text-[#00ff9d]">Advisor Hub</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
                Pricing
              </Link>
              <Link href="/consultation" className="text-sm text-gray-400 hover:text-[#00ff9d] transition-colors">
                AI Consultation
              </Link>
              <Link
                href="/builder"
                className="bg-gradient-to-r from-[#00ff9d] to-green-500 text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-[#00ff9d]/50 transition-all"
              >
                Start Building
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Card */}
          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-10 text-center shadow-2xl mb-6">
            {/* Small Icon */}
            <div className="relative w-16 h-16 mx-auto mb-6">
              <div className="absolute inset-0 bg-[#00ff9d] rounded-full blur-xl opacity-30"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-[#00ff9d] to-green-500 rounded-full flex items-center justify-center shadow-lg shadow-[#00ff9d]/40">
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Build applications
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-green-400"> with just words</span>
            </h1>

            <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your ideas into production-ready applications using AI.
              No code, no complexity—just describe what you want to build.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <Link
                href="/builder"
                className="bg-gradient-to-r from-[#00ff9d] to-green-500 text-black px-8 py-3 rounded-xl text-base font-semibold hover:shadow-xl hover:shadow-[#00ff9d]/40 transition-all"
              >
                Start Building Free →
              </Link>
              <Link
                href="/consultation"
                className="bg-white/5 backdrop-blur-sm text-white px-8 py-3 rounded-xl text-base font-semibold hover:bg-white/10 transition-all border border-white/20 hover:border-[#00ff9d]/50"
              >
                Get AI Consultation
              </Link>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:border-[#00ff9d]/30 transition-all">
              <div className="text-3xl font-bold text-[#00ff9d] mb-1">10K+</div>
              <div className="text-xs text-gray-400">Apps Built</div>
            </div>
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:border-[#00ff9d]/30 transition-all">
              <div className="text-3xl font-bold text-[#00ff9d] mb-1">50+</div>
              <div className="text-xs text-gray-400">AI Models</div>
            </div>
            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center hover:border-[#00ff9d]/30 transition-all">
              <div className="text-3xl font-bold text-[#00ff9d] mb-1">99.9%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help Deciding Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#00ff9d]/5 to-transparent border border-[#00ff9d]/20 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Not yet sure what application? 🤔
              </h2>
              <p className="text-sm text-gray-400 max-w-2xl mx-auto">
                Let us help you so you won't waste credentials. Chat with our AI advisors to refine your ideas.
              </p>
            </div>

            {/* AI Helper Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
              {aiHelpers.map((ai) => (
                <button
                  key={ai.id}
                  onClick={() => setSelectedAI(ai.id)}
                  className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#00ff9d]/30 rounded-xl p-4 transition-all text-center"
                >
                  <div className={`w-12 h-12 mx-auto mb-2 bg-gradient-to-r ${ai.color} rounded-lg flex items-center justify-center text-2xl group-hover:scale-105 transition-transform shadow-md`}>
                    {ai.icon}
                  </div>
                  <div className="text-xs font-semibold">{ai.name}</div>
                </button>
              ))}
            </div>

            {/* Credits Info Box */}
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse"></span>
                <span className="text-[#00ff9d] font-semibold text-sm">5 free messages every 24 hours</span>
              </div>
              <p className="text-xs text-gray-400">
                After your free messages, unlock 25 more for just 15 credits ($15)
              </p>
              <p className="text-xs text-gray-500 mt-3">Click the floating 💡 button at bottom-right to start chatting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Everything you need.
            <br />
            <span className="text-gray-600">Nothing you don't.</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to make application development effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {[
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Multi-AI Support",
              description: "Powered by GPT-4, Claude, DeepSeek, and more. Choose the best AI for your project."
            },
            {
              icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
              title: "Smart Consultation",
              description: "Not sure what to build? Our AI consultants help you define and refine your ideas."
            },
            {
              icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
              title: "Instant Generation",
              description: "From idea to working app in seconds. Preview, iterate, and export instantly."
            },
            {
              icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              title: "Clean Code Export",
              description: "Get production-ready, well-structured code. No lock-in, full ownership."
            },
            {
              icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
              title: "Responsive Design",
              description: "Every app works beautifully on desktop, tablet, and mobile. Automatically."
            },
            {
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              title: "Secure & Reliable",
              description: "Built on cutting-edge infrastructure. Deploy globally with zero configuration."
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#00ff9d]/30 transition-all"
            >
              <div className="w-12 h-12 bg-[#00ff9d]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00ff9d]/20 transition-colors">
                <svg className="w-6 h-6 text-[#00ff9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-gradient-to-br from-[#00ff9d]/10 to-transparent backdrop-blur-sm p-12 rounded-2xl border border-[#00ff9d]/20 shadow-xl shadow-[#00ff9d]/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Ready to build something amazing?
            </h2>
            <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers, founders, and creators building the future with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/builder"
                className="bg-gradient-to-r from-[#00ff9d] to-green-500 text-black px-10 py-3 rounded-xl text-base font-semibold hover:shadow-xl hover:shadow-[#00ff9d]/40 transition-all"
              >
                Start Building Free
              </Link>
              <Link
                href="/consultation"
                className="bg-white/5 backdrop-blur-sm text-white px-10 py-3 rounded-xl text-base font-semibold hover:bg-white/10 transition-all border border-white/20 hover:border-[#00ff9d]/50"
              >
                Get Expert Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-12">
        <div className="container mx-auto px-6 py-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00ff9d] to-green-500 rounded-lg flex items-center justify-center shadow-md shadow-[#00ff9d]/30">
                  <span className="text-black font-bold text-base">E</span>
                </div>
                <span className="text-base font-bold">
                  Emergent <span className="text-[#00ff9d]">Hub</span>
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Build applications with AI.
                <br />No coding required.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-xs text-gray-400">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/builder" className="text-xs text-gray-500 hover:text-[#00ff9d] transition-colors">Builder</Link></li>
                <li><Link href="/pricing" className="text-xs text-gray-500 hover:text-[#00ff9d] transition-colors">Pricing</Link></li>
                <li><Link href="/consultation" className="text-xs text-gray-500 hover:text-[#00ff9d] transition-colors">AI Consultation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-xs text-gray-400">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-xs text-gray-500 hover:text-[#00ff9d] transition-colors">About</Link></li>
                <li><Link href="#" className="text-xs text-gray-500 hover:text-[#00ff9d] transition-colors">Terms</Link></li>
                <li><Link href="#" className="text-xs text-gray-500 hover:text-[#00ff9d] transition-colors">Privacy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-xs text-gray-400">Connect</h4>
              <ul className="space-y-2">
                <li><Link href="https://github.com/Raycel-create/Build-Dot-App" className="text-xs text-gray-500 hover:text-[#00ff9d] transition-colors">GitHub</Link></li>
                <li><Link href="#" className="text-xs text-gray-500 hover:text-[#00ff9d] transition-colors">Twitter</Link></li>
                <li><Link href="#" className="text-xs text-gray-500 hover:text-[#00ff9d] transition-colors">Discord</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 text-center">
            <div className="text-xs text-gray-500">
              © 2025 Emergent Advisor Hub. Built with Next.js, Supabase, and AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
