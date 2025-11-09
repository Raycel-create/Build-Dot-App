import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090a] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/5">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold tracking-tight">emergent</div>
            <div className="flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link
                href="/builder"
                className="bg-[#055ffa] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#044dd9] transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
            Build apps with AI.
            <br />
            <span className="text-gray-500">No coding required.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into beautiful, functional applications using natural language.
            Our AI handles the complexity while you focus on creativity.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Link
              href="/builder"
              className="bg-[#055ffa] text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-[#044dd9] transition-all shadow-lg shadow-blue-500/20"
            >
              Start Building →
            </Link>
            <Link
              href="#demo"
              className="bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white/10 transition-all border border-white/10"
            >
              Watch Demo
            </Link>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
            <div className="aspect-video bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-gray-400 text-sm">Your AI-generated apps appear here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Everything you need to build
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features that make app creation effortless
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="group bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
            <div className="w-12 h-12 bg-[#055ffa]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#055ffa]/20 transition-colors">
              <svg className="w-6 h-6 text-[#055ffa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">AI-Powered Generation</h3>
            <p className="text-gray-400 leading-relaxed">
              Describe your vision in plain English. Our AI translates your words into production-ready applications.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Beautiful by Default</h3>
            <p className="text-gray-400 leading-relaxed">
              Every application comes with stunning, responsive design. No designers required.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
              <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant Preview</h3>
            <p className="text-gray-400 leading-relaxed">
              See your application come to life in real-time. Test across devices instantly.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Export Anywhere</h3>
            <p className="text-gray-400 leading-relaxed">
              Download clean, production-ready code. Deploy to any platform with one click.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="group bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
              <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Fully Customizable</h3>
            <p className="text-gray-400 leading-relaxed">
              Fine-tune every detail or let AI handle it all. You're in complete control.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="group bg-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.04]">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-400 leading-relaxed">
              Build complete applications in minutes. What used to take weeks now takes seconds.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#055ffa]/10 to-purple-500/10 backdrop-blur-sm p-16 rounded-3xl border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to build the future?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join thousands of creators already building with AI
          </p>
          <Link
            href="/builder"
            className="inline-block bg-[#055ffa] text-white px-10 py-4 rounded-xl text-lg font-medium hover:bg-[#044dd9] transition-all shadow-lg shadow-blue-500/20"
          >
            Start Building for Free →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © 2024 Emergent. Built with Next.js and AI.
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="https://github.com/Raycel-create/Build-Dot-App" className="text-sm text-gray-500 hover:text-white transition-colors">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
