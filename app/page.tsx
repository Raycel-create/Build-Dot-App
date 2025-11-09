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
    <div className="min-h-screen bg-[#030014] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/[0.08] sticky top-0 z-50 bg-[#030014]/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[#00ff9d] via-purple-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-[#00ff9d]/20">
                <span className="text-black font-bold text-base">E</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Emergent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-cyan-400">Advisor Hub</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/consultation" className="text-sm text-gray-400 hover:text-white transition-colors">
                Consultation
              </Link>
              <Link
                href="/builder"
                className="relative group bg-gradient-to-r from-[#00ff9d] to-cyan-400 text-black px-5 py-2.5 rounded-xl text-sm font-semibold hover:shadow-xl hover:shadow-[#00ff9d]/30 transition-all overflow-hidden"
              >
                <span className="relative z-10">Start Building</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">AI-Powered Application Builder</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
            Think better.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] via-purple-400 to-cyan-400">
              Build faster.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into production-ready applications using AI.
            No code, no complexity—just describe what you want to build.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              href="/builder"
              className="group relative bg-gradient-to-r from-[#00ff9d] to-cyan-400 text-black px-10 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#00ff9d]/40 transition-all"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Building Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/consultation"
              className="bg-white/[0.05] backdrop-blur-sm text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-white/[0.08] transition-all border border-white/[0.08] hover:border-white/20"
            >
              Get AI Consultation
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] transition-all">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-cyan-400 mb-2">10K+</div>
                <div className="text-sm text-gray-400">Apps Built</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] transition-all">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">50+</div>
                <div className="text-sm text-gray-400">AI Models</div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] transition-all">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Advisors Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Not sure what to build?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Chat with our AI advisors to refine your ideas before you start building.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/10 via-purple-500/10 to-cyan-400/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-10">
              {/* AI Helper Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {aiHelpers.map((ai) => (
                  <button
                    key={ai.id}
                    onClick={() => setSelectedAI(ai.id)}
                    className="group relative bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] hover:border-white/20 rounded-2xl p-6 transition-all text-center"
                  >
                    <div className={`w-14 h-14 mx-auto mb-3 bg-gradient-to-r ${ai.color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-lg`}>
                      {ai.icon}
                    </div>
                    <div className="text-sm font-semibold text-gray-200">{ai.name}</div>
                  </button>
                ))}
              </div>

              {/* Credits Info */}
              <div className="bg-gradient-to-r from-[#00ff9d]/5 to-cyan-400/5 backdrop-blur-sm border border-[#00ff9d]/20 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-[#00ff9d] rounded-full animate-pulse"></span>
                  <span className="text-[#00ff9d] font-semibold">5 free messages every 24 hours</span>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  After your free messages, unlock 25 more for just $15
                </p>
                <p className="text-xs text-gray-500">Click the 💡 floating button to start chatting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Everything you need.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">Nothing you don't.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to make application development effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              title: "Multi-AI Support",
              description: "Powered by GPT-4, Claude, DeepSeek, and more. Choose the best AI for your project.",
              gradient: "from-[#00ff9d] to-cyan-400"
            },
            {
              title: "Smart Consultation",
              description: "Not sure what to build? Our AI consultants help you define and refine your ideas.",
              gradient: "from-purple-400 to-pink-400"
            },
            {
              title: "Instant Generation",
              description: "From idea to working app in seconds. Preview, iterate, and export instantly.",
              gradient: "from-cyan-400 to-blue-400"
            },
            {
              title: "Clean Code Export",
              description: "Get production-ready, well-structured code. No lock-in, full ownership.",
              gradient: "from-[#00ff9d] to-green-400"
            },
            {
              title: "Responsive Design",
              description: "Every app works beautifully on desktop, tablet, and mobile. Automatically.",
              gradient: "from-purple-500 to-indigo-400"
            },
            {
              title: "Secure & Reliable",
              description: "Built on cutting-edge infrastructure. Deploy globally with zero configuration.",
              gradient: "from-pink-400 to-purple-500"
            }
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-opacity`}></div>
              <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] hover:border-white/20 rounded-3xl p-8 transition-all h-full">
                <div className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${feature.gradient} text-black text-xs font-bold mb-4`}>
                  FEATURE
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/20 via-purple-500/20 to-cyan-400/20 rounded-[40px] blur-3xl"></div>
          <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-[40px] p-16 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] via-purple-400 to-cyan-400">
                something amazing?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join thousands of developers, founders, and creators building the future with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/builder"
                className="bg-gradient-to-r from-[#00ff9d] to-cyan-400 text-black px-12 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-[#00ff9d]/40 transition-all"
              >
                Start Building Free
              </Link>
              <Link
                href="/consultation"
                className="bg-white/[0.05] backdrop-blur-sm text-white px-12 py-5 rounded-2xl text-lg font-semibold hover:bg-white/[0.08] transition-all border border-white/[0.08] hover:border-white/20"
              >
                Get Expert Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] mt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-[#00ff9d] via-purple-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-[#00ff9d]/20">
                  <span className="text-black font-bold text-base">E</span>
                </div>
                <span className="text-base font-semibold">
                  Emergent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9d] to-cyan-400">Hub</span>
                </span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Build applications with AI.
                <br />No coding required.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Product</h4>
              <ul className="space-y-3">
                <li><Link href="/builder" className="text-sm text-gray-500 hover:text-[#00ff9d] transition-colors">Builder</Link></li>
                <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-[#00ff9d] transition-colors">Pricing</Link></li>
                <li><Link href="/consultation" className="text-sm text-gray-500 hover:text-[#00ff9d] transition-colors">AI Consultation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Company</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d] transition-colors">About</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d] transition-colors">Terms</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d] transition-colors">Privacy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm text-gray-300">Connect</h4>
              <ul className="space-y-3">
                <li><Link href="https://github.com/Raycel-create/Build-Dot-App" className="text-sm text-gray-500 hover:text-[#00ff9d] transition-colors">GitHub</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d] transition-colors">Twitter</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d] transition-colors">Discord</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.08] text-center">
            <div className="text-sm text-gray-500">
              © 2025 Emergent Advisor Hub. Built with Next.js, Supabase, and AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
