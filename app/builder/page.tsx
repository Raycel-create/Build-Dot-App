"use client";

import { useState } from "react";
import Link from "next/link";

export default function Builder() {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewMode, setPreviewMode] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setGeneratedCode(data.code || "");
    } catch (error) {
      console.error("Error generating app:", error);
      setGeneratedCode(generateDemoCode(prompt));
    } finally {
      setIsGenerating(false);
    }
  };

  const generateDemoCode = (userPrompt: string) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${prompt.slice(0, 50)}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#08090a] min-h-screen p-8">
  <div class="max-w-6xl mx-auto">
    <div class="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-emerald-500 to-green-600 p-8 text-white">
        <h1 class="text-4xl font-bold mb-2">${prompt}</h1>
        <p class="text-emerald-100">AI-Generated Application by Build.App</p>
      </div>

      <!-- Content -->
      <div class="p-8">
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-xl p-6 text-white border border-white/10 hover:border-emerald-500/30 transition">
            <div class="text-3xl mb-3">✨</div>
            <h2 class="text-2xl font-bold mb-2">Powerful Features</h2>
            <p class="text-gray-300">Built with cutting-edge AI technology for superior performance.</p>
          </div>

          <div class="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-6 text-white border border-white/10 hover:border-emerald-500/30 transition">
            <div class="text-3xl mb-3">🚀</div>
            <h2 class="text-2xl font-bold mb-2">Lightning Fast</h2>
            <p class="text-gray-300">Optimized for speed and reliability across all devices.</p>
          </div>
        </div>

        <!-- Interactive Section -->
        <div class="bg-white/[0.02] border border-white/10 rounded-xl p-6 mb-6">
          <h3 class="text-2xl font-bold text-white mb-4">Try It Out</h3>
          <div class="flex gap-4">
            <button
              onclick="handleAction('primary')"
              class="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition"
            >
              Primary Action
            </button>
            <button
              onclick="handleAction('secondary')"
              class="flex-1 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Secondary Action
            </button>
          </div>
          <div id="output" class="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg hidden">
            <p class="text-emerald-400"></p>
          </div>
        </div>

        <!-- Stats Section -->}
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="text-center p-4 bg-emerald-500/10 border border-white/10 rounded-lg">
            <div class="text-3xl font-bold text-emerald-500">100+</div>
            <div class="text-sm text-gray-400">Active Users</div>
          </div>
          <div class="text-center p-4 bg-green-500/10 border border-white/10 rounded-lg">
            <div class="text-3xl font-bold text-green-400">99.9%</div>
            <div class="text-sm text-gray-400">Uptime</div>
          </div>
          <div class="text-center p-4 bg-teal-500/10 border border-white/10 rounded-lg">
            <div class="text-3xl font-bold text-teal-400">24/7</div>
            <div class="text-sm text-gray-400">Support</div>
          </div>
        </div>

        <!-- Footer -->
        <div class="text-center text-gray-500 pt-6 border-t border-white/10">
          <p>🤖 Built with AI • Powered by Build.App</p>
        </div>
      </div>
    </div>
  </div>

  <script>
    function handleAction(type) {
      const output = document.getElementById('output');
      output.classList.remove('hidden');
      if (type === 'primary') {
        output.querySelector('p').textContent = '✅ Primary action completed successfully!';
      } else {
        output.querySelector('p').textContent = '⚡ Secondary action triggered!';
      }
      setTimeout(() => output.classList.add('hidden'), 3000);
    }
  </script>
</body>
</html>`;
  };

  const handleExport = () => {
    const blob = new Blob([generatedCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-app.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  const getPreviewWidth = () => {
    switch (previewMode) {
      case "mobile":
        return "375px";
      case "tablet":
        return "768px";
      default:
        return "100%";
    }
  };

  return (
    <div className="min-h-screen bg-[#08090a] text-white">
      {/* Header */}
      <header className="border-b border-white/5 sticky top-0 z-10 bg-[#08090a]/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">Build<span className="text-emerald-500">.App</span></span>
            </Link>
            <div className="flex items-center gap-4">
              {generatedCode && (
                <button
                  onClick={handleExport}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/10 transition text-sm"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Export
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-120px)]">
          {/* Left Panel - Input */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2 tracking-tight">
                Describe your app
              </h2>
              <p className="text-gray-400 text-sm">
                Tell us what you want to build in plain English
              </p>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Create a modern todo list app with a dark theme and green accents. Include the ability to add, remove, and mark tasks as complete. Make it responsive and beautiful..."
              className="flex-1 w-full p-4 bg-white/[0.02] border border-white/10 rounded-xl resize-none focus:outline-none focus:border-emerald-500 transition text-white placeholder-gray-500 mb-4"
            />

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-xl font-medium hover:from-emerald-600 hover:to-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-emerald-500 shadow-lg shadow-emerald-500/20"
            >
              {isGenerating ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generating...
                </span>
              ) : (
                "Generate App →"
              )}
            </button>

            {generatedCode && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="font-semibold mb-3 text-sm text-gray-400">
                  Generated Code
                </h3>
                <div className="bg-[#08090a] border border-white/10 p-4 rounded-xl overflow-auto max-h-48 text-xs font-mono text-gray-300">
                  {generatedCode}
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Preview */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Preview</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setPreviewMode("desktop")}
                  className={`p-2.5 rounded-lg text-sm transition ${
                    previewMode === "desktop"
                      ? "bg-emerald-500 text-white"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                  title="Desktop"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setPreviewMode("tablet")}
                  className={`p-2.5 rounded-lg text-sm transition ${
                    previewMode === "tablet"
                      ? "bg-emerald-500 text-white"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                  title="Tablet"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setPreviewMode("mobile")}
                  className={`p-2.5 rounded-lg text-sm transition ${
                    previewMode === "mobile"
                      ? "bg-emerald-500 text-white"
                      : "bg-white/5 text-gray-400 hover:bg-white/10"
                  }`}
                  title="Mobile"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 bg-[#08090a] border border-white/10 rounded-xl overflow-hidden flex items-center justify-center">
              {generatedCode ? (
                <iframe
                  srcDoc={generatedCode}
                  className="bg-white h-full transition-all duration-300"
                  style={{ width: getPreviewWidth() }}
                  title="App Preview"
                  sandbox="allow-scripts"
                />
              ) : (
                <div className="text-center text-gray-500 p-8">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <p className="text-base font-medium text-gray-400 mb-2">No preview yet</p>
                  <p className="text-sm text-gray-500">
                    Describe your app and click Generate
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
