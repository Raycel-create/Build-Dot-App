import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090a] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/5 sticky top-0 z-50 bg-[#08090a]/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Build<span className="text-emerald-500">.App</span></span>
            </div>
            <div className="flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/consultation" className="text-sm text-gray-400 hover:text-white transition-colors">
                AI Consultation
              </Link>
              <Link
                href="/builder"
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-emerald-500/20"
              >
                Start Building
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-emerald-400">AI-Powered Application Builder</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-[1.1]">
            Build applications
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600">
              with just words.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into production-ready applications using AI.
            No code, no complexity—just describe what you want to build.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/builder"
              className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-emerald-600 hover:to-green-700 transition-all shadow-2xl shadow-emerald-500/30 flex items-center gap-2"
            >
              Start Building Free
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/consultation"
              className="bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-all border border-white/10"
            >
              Get AI Consultation
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-1">10K+</div>
              <div className="text-sm text-gray-500">Apps Built</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-1">50+</div>
              <div className="text-sm text-gray-500">AI Models</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-1">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-24 max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-green-600/10"></div>
            <div className="relative aspect-video bg-[#0a0b0c] flex items-center justify-center p-12">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-2xl flex items-center justify-center border border-emerald-500/30">
                  <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-lg">Your AI-generated applications preview here</p>
                <p className="text-gray-600 text-sm mt-2">Real-time generation • Multi-platform • Production-ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Everything you need.
            <br />
            <span className="text-gray-600">Nothing you don't.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed to make application development effortless and enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Multi-AI Support",
              description: "Powered by GPT-4, Claude, DeepSeek, and more. Choose the best AI for your project.",
              color: "emerald"
            },
            {
              icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
              title: "Smart Consultation",
              description: "Not sure what to build? Our AI consultants help you define and refine your ideas.",
              color: "green"
            },
            {
              icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
              title: "Instant Generation",
              description: "From idea to working app in seconds. Preview, iterate, and export instantly.",
              color: "teal"
            },
            {
              icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              title: "Clean Code Export",
              description: "Get production-ready, well-structured code. No lock-in, full ownership.",
              color: "cyan"
            },
            {
              icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
              title: "Responsive Design",
              description: "Every app works beautifully on desktop, tablet, and mobile. Automatically.",
              color: "emerald"
            },
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Lightning Fast",
              description: "Built on cutting-edge infrastructure. Deploy globally with zero configuration.",
              color: "green"
            }
          ].map((feature, i) => (
            <div key={i} className="group bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-white/[0.04]">
              <div className={`w-12 h-12 bg-${feature.color}-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-${feature.color}-500/20 transition-colors`}>
                <svg className={`w-6 h-6 text-${feature.color}-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Pricing that scales
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
              with your ambition.
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Start free. Upgrade when you're ready. No hidden fees, no surprises.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-emerald-500/20"
          >
            View Pricing Plans
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm p-16 rounded-3xl border border-emerald-500/20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of developers, founders, and creators building the future with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/builder"
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-10 py-4 rounded-xl text-lg font-medium hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg shadow-emerald-500/20"
            >
              Start Building Free
            </Link>
            <Link
              href="/consultation"
              className="bg-white/5 backdrop-blur-sm text-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-all border border-white/10"
            >
              Get Expert Help
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-lg font-bold">Build<span className="text-emerald-500">.App</span></span>
              </div>
              <p className="text-sm text-gray-500">
                Build applications with AI.
                <br />No coding required.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/builder" className="text-sm text-gray-500 hover:text-white transition-colors">Builder</Link></li>
                <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/consultation" className="text-sm text-gray-500 hover:text-white transition-colors">AI Consultation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="https://github.com/Raycel-create/Build-Dot-App" className="text-sm text-gray-500 hover:text-white transition-colors">GitHub</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2024 Build.App. Built with Next.js, AI, and ❤️
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="https://github.com/Raycel-create/Build-Dot-App" className="text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
