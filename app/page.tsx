"use client";

import Link from "next/link";

export default function Home() {
  const aiHelpers = [
    { id: "grok", name: "Grok", icon: "⚡" },
    { id: "claude", name: "Claude", icon: "🧠" },
    { id: "chatgpt", name: "ChatGPT", icon: "🤖" },
    { id: "deepseek", name: "DeepSeek", icon: "🔍" },
    { id: "emergent", name: "Emergent", icon: "✨" }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-[#030014]">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#00ff9d] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">E</span>
              </div>
              <span className="font-semibold">Emergent Advisor Hub</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm text-gray-400 hover:text-white">Features</Link>
              <Link href="/pricing" className="text-sm text-gray-400 hover:text-white">Pricing</Link>
              <Link href="/consultation" className="text-sm text-gray-400 hover:text-white">Consultation</Link>
              <Link href="/builder" className="bg-[#00ff9d] text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#00cc7d]">
                Start Building
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Build applications with AI
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Transform your ideas into production-ready applications using AI.
            No code, no complexity—just describe what you want to build.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/builder"
              className="bg-[#00ff9d] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#00cc7d]"
            >
              Start Building Free
            </Link>
            <Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 border border-white/10"
            >
              Get AI Consultation
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-[#00ff9d]">10K+</div>
              <div className="text-sm text-gray-400">Apps Built</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-sm text-gray-400">AI Models</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Advisors Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Not sure what to build?</h2>
            <p className="text-lg text-gray-400">
              Chat with our AI advisors to refine your ideas before you start building.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {aiHelpers.map((ai) => (
                <div
                  key={ai.id}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10"
                >
                  <div className="text-3xl mb-2">{ai.icon}</div>
                  <div className="text-sm font-semibold">{ai.name}</div>
                </div>
              ))}
            </div>

            <div className="bg-[#00ff9d]/10 border border-[#00ff9d]/20 rounded-lg p-4 text-center">
              <div className="text-[#00ff9d] font-semibold mb-1">
                5 free messages every 24 hours
              </div>
              <p className="text-sm text-gray-400">
                After your free messages, unlock 25 more for just $15
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Everything you need</h2>
          <p className="text-lg text-gray-400">
            Powerful features designed to make application development effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Multi-AI Support", description: "Powered by GPT-4, Claude, DeepSeek, and more." },
            { title: "Smart Consultation", description: "AI consultants help you define and refine your ideas." },
            { title: "Instant Generation", description: "From idea to working app in seconds." },
            { title: "Clean Code Export", description: "Get production-ready, well-structured code." },
            { title: "Responsive Design", description: "Works beautifully on desktop, tablet, and mobile." },
            { title: "Secure & Reliable", description: "Built on cutting-edge infrastructure." }
          ].map((feature, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Join thousands of developers building the future with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/builder"
              className="bg-[#00ff9d] text-black px-10 py-4 rounded-lg font-semibold hover:bg-[#00cc7d]"
            >
              Start Building Free
            </Link>
            <Link
              href="/consultation"
              className="bg-white/10 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/20 border border-white/10"
            >
              Get Expert Help
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-[#00ff9d] rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">E</span>
                </div>
                <span className="font-semibold">Emergent Hub</span>
              </div>
              <p className="text-sm text-gray-500">
                Build applications with AI.
                <br />No coding required.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/builder" className="text-sm text-gray-500 hover:text-[#00ff9d]">Builder</Link></li>
                <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-[#00ff9d]">Pricing</Link></li>
                <li><Link href="/consultation" className="text-sm text-gray-500 hover:text-[#00ff9d]">AI Consultation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d]">About</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d]">Terms</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d]">Privacy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-sm">Connect</h4>
              <ul className="space-y-2">
                <li><Link href="https://github.com/Raycel-create/Build-Dot-App" className="text-sm text-gray-500 hover:text-[#00ff9d]">GitHub</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d]">Twitter</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d]">Discord</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <div className="text-sm text-gray-500">
              © 2025 Emergent Advisor Hub. Built with Next.js, Supabase, and AI.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
