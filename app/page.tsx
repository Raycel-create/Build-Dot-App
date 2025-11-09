import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Emergent</div>
          <div className="flex items-center gap-6">
            <Link href="#features" className="text-gray-300 hover:text-white transition">
              Features
            </Link>
            <Link
              href="/builder"
              className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Build Apps with AI
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            No Coding Required
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Create powerful applications using natural language.
          Our AI understands your vision and brings it to life instantly.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/builder"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition shadow-xl"
          >
            Start Building
          </Link>
          <Link
            href="#features"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition border border-white/20"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-white mb-3">AI-Powered</h3>
            <p className="text-gray-300">
              Describe your app in plain English and watch our AI transform your ideas into reality.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-3">Lightning Fast</h3>
            <p className="text-gray-300">
              Build complete applications in minutes, not months. Get instant previews as you create.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-white mb-3">Beautiful Design</h3>
            <p className="text-gray-300">
              Every app comes with stunning, responsive design that works perfectly on all devices.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold text-white mb-3">Fully Customizable</h3>
            <p className="text-gray-300">
              Fine-tune every detail or let AI handle it. Full control when you need it.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold text-white mb-3">Responsive</h3>
            <p className="text-gray-300">
              Your apps automatically adapt to desktop, tablet, and mobile with pixel-perfect precision.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-purple-500/50 transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-white mb-3">One-Click Deploy</h3>
            <p className="text-gray-300">
              Export your code or deploy instantly to the web. Share your creation with the world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-12 rounded-2xl border border-purple-500/30">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators building the future with AI
          </p>
          <Link
            href="/builder"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition shadow-xl"
          >
            Start Building For Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-white/10">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Emergent. Built with Next.js and AI.</p>
        </div>
      </footer>
    </div>
  );
}
