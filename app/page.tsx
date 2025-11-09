"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showAIModal, setShowAIModal] = useState(false);

  const aiHelpers = [
    { id: "grok", name: "Grok", icon: "⚡", description: "Creative & innovative ideas" },
    { id: "claude", name: "Claude", icon: "🧠", description: "Thoughtful & detailed advice" },
    { id: "chatgpt", name: "ChatGPT", icon: "🤖", description: "Versatile & practical guidance" },
    { id: "deepseek", name: "DeepSeek", icon: "🔍", description: "Technical & thorough analysis" },
    { id: "emergent", name: "Emergent", icon: "✨", description: "Specialized app building expert" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030014] to-[#050520] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/5 bg-[#030014]/50 backdrop-blur-xl sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[#00ff9d] to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-black font-bold text-sm">E</span>
              </div>
              <span className="font-semibold text-lg">Emergent Advisor Hub</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm text-gray-400 hover:text-white transition">Features</Link>
              <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition">Pricing</Link>
              <Link href="/consultation" className="text-sm text-gray-400 hover:text-white transition">Consultation</Link>
              <Link href="/builder" className="bg-gradient-to-r from-[#00ff9d] to-emerald-500 text-black px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition">
                Start Building
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-emerald-300">AI-Powered Application Builder</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
            Build applications
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
              with just words
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into production-ready applications using AI.
            No code, no complexity—just describe what you want to build.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              href="/builder"
              className="group bg-gradient-to-r from-[#00ff9d] to-emerald-500 text-black px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2"
            >
              Start Building Free
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/consultation"
              className="bg-white/5 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all border border-white/10"
            >
              Get AI Consultation
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent mb-2">10K+</div>
              <div className="text-sm text-gray-500">Apps Built</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-sm text-gray-500">AI Models</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent mb-2">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Advisors Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 tracking-tight">
              Not sure what to build?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Chat with our AI advisors to refine your ideas before you start building.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl p-10 border border-white/5 shadow-2xl shadow-emerald-500/5">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {aiHelpers.map((ai) => (
                <button
                  key={ai.id}
                  onClick={() => setShowAIModal(true)}
                  className="group bg-white/5 hover:bg-white/10 rounded-2xl p-6 transition-all border border-white/5 hover:border-emerald-500/30 text-center"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{ai.icon}</div>
                  <div className="text-sm font-semibold text-gray-200">{ai.name}</div>
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl p-6 text-center border border-emerald-500/20">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-emerald-300 font-semibold">5 free messages every 24 hours</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                After your free messages, unlock 25 more for just $15
              </p>
              <button
                onClick={() => setShowAIModal(true)}
                className="text-sm text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Click here to start chatting →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">
            Everything you need
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to make application development effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Multi-AI Support",
              description: "Powered by GPT-4, Claude, DeepSeek, and more. Choose the best AI for your project.",
              gradient: "from-emerald-400 to-green-300"
            },
            {
              title: "Smart Consultation",
              description: "AI consultants help you define and refine your ideas before building.",
              gradient: "from-purple-400 to-pink-300"
            },
            {
              title: "Instant Generation",
              description: "From idea to working app in seconds. Preview, iterate, and export.",
              gradient: "from-cyan-400 to-blue-300"
            },
            {
              title: "Clean Code Export",
              description: "Get production-ready, well-structured code. No lock-in, full ownership.",
              gradient: "from-yellow-400 to-orange-300"
            },
            {
              title: "Responsive Design",
              description: "Works beautifully on desktop, tablet, and mobile. Automatically.",
              gradient: "from-pink-400 to-rose-300"
            },
            {
              title: "Secure & Reliable",
              description: "Built on cutting-edge infrastructure. Deploy globally with zero config.",
              gradient: "from-indigo-400 to-purple-300"
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="group bg-white/5 hover:bg-white/8 rounded-2xl p-8 transition-all border border-white/5 hover:border-white/10"
            >
              <div className={`inline-block text-sm font-bold px-3 py-1 rounded-lg bg-gradient-to-r ${feature.gradient} text-black mb-4`}>
                FEATURE
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl p-16 text-center border border-emerald-500/20 shadow-2xl shadow-emerald-500/5">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of developers, founders, and creators building the future with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/builder"
              className="bg-gradient-to-r from-[#00ff9d] to-emerald-500 text-black px-12 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/40 transition-all"
            >
              Start Building Free
            </Link>
            <Link
              href="/consultation"
              className="bg-white/5 text-white px-12 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-all border border-white/10"
            >
              Get Expert Help
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 mt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00ff9d] to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-black font-bold text-sm">E</span>
                </div>
                <span className="font-semibold">Emergent Hub</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Build applications with AI.
                <br />No coding required.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-3">
                <li><Link href="/builder" className="text-sm text-gray-500 hover:text-emerald-400 transition">Builder</Link></li>
                <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-emerald-400 transition">Pricing</Link></li>
                <li><Link href="/consultation" className="text-sm text-gray-500 hover:text-emerald-400 transition">AI Consultation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition">About</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition">Terms</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition">Privacy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Connect</h4>
              <ul className="space-y-3">
                <li><Link href="https://github.com/Raycel-create/Build-Dot-App" className="text-sm text-gray-500 hover:text-emerald-400 transition">GitHub</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition">Twitter</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition">Discord</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center">
            <div className="text-sm text-gray-500">
              © 2025 Emergent Advisor Hub. Built with Next.js, Supabase, and AI.
            </div>
          </div>
        </div>
      </footer>

      {/* AI Modal Notification */}
      {showAIModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={() => setShowAIModal(false)}>
          <div className="bg-gradient-to-br from-[#030014] to-[#050520] border border-emerald-500/30 rounded-2xl p-8 max-w-md shadow-2xl shadow-emerald-500/20" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-4">💡 AI Advisor</h3>
            <p className="text-gray-400 mb-6">
              The AI Advisor floating widget (💡 button at bottom-right) is already available on all pages! Click it to start chatting with our AI advisors.
            </p>
            <button
              onClick={() => setShowAIModal(false)}
              className="w-full bg-gradient-to-r from-[#00ff9d] to-emerald-500 text-black px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
