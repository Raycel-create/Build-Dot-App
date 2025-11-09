import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030014]">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00ff9d] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">E</span>
            </div>
            <span className="text-white font-semibold">Emergent Advisor Hub</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="text-sm text-gray-400 hover:text-white">Pricing</Link>
            <Link href="/builder" className="bg-[#00ff9d] text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#00cc7d]">
              Start Building
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Build applications with AI
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Transform your ideas into production-ready applications. No code, no complexity—just describe what you want to build.
          </p>
          <Link
            href="/builder"
            className="inline-block bg-[#00ff9d] text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#00cc7d] transition"
          >
            Start Building Free →
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#00ff9d] mb-1">10K+</div>
            <div className="text-sm text-gray-400">Apps Built</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">50+</div>
            <div className="text-sm text-gray-400">AI Models</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">99.9%</div>
            <div className="text-sm text-gray-400">Uptime</div>
          </div>
        </div>

        {/* AI Advisor Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-3">
              Not sure what application?
            </h2>
            <p className="text-gray-400">
              Let us help so you won't waste credits
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">🤖</div>
              <div className="text-sm font-semibold text-white">ChatGPT</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">🧠</div>
              <div className="text-sm font-semibold text-white">Claude</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-sm font-semibold text-white">Grok</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">🔍</div>
              <div className="text-sm font-semibold text-white">DeepSeek</div>
            </div>
          </div>

          <div className="bg-[#00ff9d]/10 border border-[#00ff9d]/20 rounded-xl p-4 text-center">
            <p className="text-[#00ff9d] font-semibold mb-1">
              5 free messages every 24 hours
            </p>
            <p className="text-sm text-gray-400">
              Then 15 credits for 25 more messages
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Everything you need
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Multi-AI Support</h3>
              <p className="text-sm text-gray-400">
                Powered by GPT-4, Claude, DeepSeek, and more.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Instant Generation</h3>
              <p className="text-sm text-gray-400">
                From idea to working app in seconds.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Clean Code</h3>
              <p className="text-sm text-gray-400">
                Production-ready, well-structured code.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Responsive Design</h3>
              <p className="text-sm text-gray-400">
                Works on desktop, tablet, and mobile.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Smart Consultation</h3>
              <p className="text-sm text-gray-400">
                AI consultants help refine your ideas.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Secure & Reliable</h3>
              <p className="text-sm text-gray-400">
                Built on cutting-edge infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of developers building with AI
          </p>
          <Link
            href="/builder"
            className="inline-block bg-[#00ff9d] text-black px-10 py-4 rounded-xl text-lg font-semibold hover:bg-[#00cc7d] transition"
          >
            Start Building Free
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-semibold text-white mb-3">Emergent Hub</div>
              <p className="text-sm text-gray-500">Build applications with AI. No coding required.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/builder" className="text-sm text-gray-500 hover:text-[#00ff9d]">Builder</Link></li>
                <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-[#00ff9d]">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d]">About</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d]">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 text-sm">Connect</h4>
              <ul className="space-y-2">
                <li><Link href="https://github.com/Raycel-create/Build-Dot-App" className="text-sm text-gray-500 hover:text-[#00ff9d]">GitHub</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-[#00ff9d]">Twitter</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            © 2025 Emergent Advisor Hub. Built with Next.js, Supabase, and AI.
          </div>
        </div>
      </footer>
    </div>
  );
}
