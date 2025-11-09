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
      // Fallback demo code if API fails
      setGeneratedCode(generateDemoCode(prompt));
    } finally {
      setIsGenerating(false);
    }
  };

  const generateDemoCode = (userPrompt: string) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated App</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8">
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-2xl shadow-xl p-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Your App: ${prompt}</h1>
      <p class="text-gray-600 mb-6">This is a demo app generated based on your prompt!</p>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white">
          <h2 class="text-2xl font-bold mb-2">Feature 1</h2>
          <p>Amazing functionality that does exactly what you need.</p>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
          <h2 class="text-2xl font-bold mb-2">Feature 2</h2>
          <p>Powerful tools at your fingertips.</p>
        </div>
      </div>

      <div class="bg-gray-50 rounded-lg p-6">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Interactive Demo</h3>
        <button
          onclick="alert('Button clicked! Your app is working.')"
          class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition"
        >
          Try Me!
        </button>
      </div>

      <div class="mt-8 text-center text-gray-500">
        <p>Built with AI • Powered by Emergent</p>
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              Emergent
            </Link>
            <div className="flex items-center gap-4">
              {generatedCode && (
                <button
                  onClick={handleExport}
                  className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  <span>📥</span>
                  Export
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-120px)]">
          {/* Left Panel - Input */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Describe Your App
            </h2>
            <p className="text-gray-600 mb-6">
              Tell us what you want to build, and our AI will create it for you.
            </p>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., Create a todo list app with a clean design, ability to add, remove, and mark tasks as complete..."
              className="flex-1 w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
            />

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⚙️</span>
                  Generating...
                </span>
              ) : (
                "Generate App"
              )}
            </button>

            {generatedCode && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Generated Code
                </h3>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-auto max-h-48 text-xs font-mono">
                  {generatedCode}
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Preview */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Preview</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setPreviewMode("desktop")}
                  className={`p-2 rounded ${
                    previewMode === "desktop"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                  title="Desktop"
                >
                  💻
                </button>
                <button
                  onClick={() => setPreviewMode("tablet")}
                  className={`p-2 rounded ${
                    previewMode === "tablet"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                  title="Tablet"
                >
                  📱
                </button>
                <button
                  onClick={() => setPreviewMode("mobile")}
                  className={`p-2 rounded ${
                    previewMode === "mobile"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                  title="Mobile"
                >
                  📱
                </button>
              </div>
            </div>

            <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              {generatedCode ? (
                <iframe
                  srcDoc={generatedCode}
                  className="bg-white h-full transition-all duration-300"
                  style={{ width: getPreviewWidth() }}
                  title="App Preview"
                  sandbox="allow-scripts"
                />
              ) : (
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-lg">Your app preview will appear here</p>
                  <p className="text-sm mt-2">
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
