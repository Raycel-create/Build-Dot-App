"use client";

import { useState } from "react";
import Link from "next/link";

type AIModel = "gpt4" | "claude" | "deepseek" | "grok";

export default function Consultation() {
  const [selectedModel, setSelectedModel] = useState<AIModel>("claude");
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questionsLeft, setQuestionsLeft] = useState(3); // Free: 3 questions
  const [hasCredits, setHasCredits] = useState(false);

  const aiModels = [
    { id: "gpt4" as AIModel, name: "GPT-4", icon: "🤖", description: "Best for general tasks" },
    { id: "claude" as AIModel, name: "Claude Sonnet 4", icon: "🧠", description: "Best for coding & analysis" },
    { id: "deepseek" as AIModel, name: "DeepSeek", icon: "🔍", description: "Best for technical depth" },
    { id: "grok" as AIModel, name: "Grok", icon: "⚡", description: "Best for creative ideas" }
  ];

  const handleAsk = async () => {
    if (!input.trim() || (questionsLeft <= 0 && !hasCredits)) return;

    setIsLoading(true);
    const userMessage = input;
    setInput("");

    // Add user message
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);

    // Simulate AI response (in production, this would call your API)
    setTimeout(() => {
      const response = generateMockResponse(selectedModel, userMessage);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setQuestionsLeft(prev => Math.max(0, prev - 1));
      setIsLoading(false);
    }, 1500);
  };

  const generateMockResponse = (model: AIModel, question: string): string => {
    const responses = {
      gpt4: `Based on your question about "${question.slice(0, 50)}...", I'd recommend building a modern web application using Next.js with TypeScript. This stack offers excellent performance, SEO benefits, and developer experience. For your specific use case, you'll want to focus on...`,
      claude: `Analyzing your question: "${question.slice(0, 50)}..."\n\nHere's my technical recommendation:\n1. Architecture: Use a component-based approach\n2. Tech Stack: React/Next.js for frontend, Node.js/Express for backend\n3. Database: PostgreSQL for structured data\n4. Deployment: Vercel or AWS\n\nWould you like me to elaborate on any of these points?`,
      deepseek: `Deep analysis of "${question.slice(0, 50)}...":\n\nTechnical considerations:\n• Scalability: Design for 10x growth\n• Performance: Aim for <100ms response times\n• Security: Implement OAuth2, rate limiting\n• Cost: Optimize for serverless architecture\n\nI can provide detailed implementation guidance for each aspect.`,
      grok: `Hey! Great question about "${question.slice(0, 50)}..."! 🚀\n\nHere's a creative approach:\n\nInstead of the traditional route, consider building this as a PWA (Progressive Web App). It's 2024—users want native-like experiences without app store friction.\n\nYou could start with a simple MVP and iterate based on user feedback. Want to explore this direction?`
    };

    return responses[model];
  };

  return (
    <div className="min-h-screen bg-[#08090a] text-white">
      {/* Navigation */}
      <nav className="border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Build<span className="text-emerald-500">.App</span></span>
            </Link>
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              AI Consultation
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Not sure what to build yet? Let our AI experts help you.
            </p>
            {!hasCredits && (
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
                <span className="text-sm text-emerald-400">
                  {questionsLeft} free questions remaining
                </span>
              </div>
            )}
          </div>

          {/* AI Model Selection */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Choose Your AI Consultant</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {aiModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`p-4 rounded-xl border transition-all ${
                    selectedModel === model.id
                      ? "bg-emerald-500/10 border-emerald-500/50"
                      : "bg-white/[0.02] border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="text-3xl mb-2">{model.icon}</div>
                  <div className="font-semibold text-sm mb-1">{model.name}</div>
                  <div className="text-xs text-gray-500">{model.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Messages */}
            <div className="lg:col-span-2">
              <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 p-6 min-h-[500px] flex flex-col">
                <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                  {messages.length === 0 ? (
                    <div className="text-center text-gray-500 py-12">
                      <div className="text-5xl mb-4">💡</div>
                      <p className="text-lg">Ask anything about your project idea!</p>
                      <p className="text-sm mt-2">
                        Get guidance on tech stack, features, architecture, and more.
                      </p>
                    </div>
                  ) : (
                    messages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] p-4 rounded-2xl ${
                            msg.role === "user"
                              ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                              : "bg-white/5 border border-white/10"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAsk()}
                    placeholder={
                      questionsLeft > 0 || hasCredits
                        ? "Ask your question..."
                        : "Buy credits to continue..."
                    }
                    disabled={questionsLeft <= 0 && !hasCredits}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-500 transition disabled:opacity-50"
                  />
                  <button
                    onClick={handleAsk}
                    disabled={!input.trim() || isLoading || (questionsLeft <= 0 && !hasCredits)}
                    className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Ask
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Credits Box */}
              {questionsLeft <= 0 && !hasCredits && (
                <div className="bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
                  <h3 className="text-lg font-semibold mb-2">Out of Free Questions</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    Get 20 more questions with expert suggestions for just $15
                  </p>
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-green-700 transition">
                    Buy 15 Credits - $15
                  </button>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    20 questions • Expert suggestions • Valid for 30 days
                  </p>
                </div>
              )}

              {/* Info Box */}
              <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <span className="text-emerald-500">💡</span>
                  How It Works
                </h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">→</span>
                    <span>Free: 3 questions to explore your ideas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">→</span>
                    <span>Choose any AI model for different perspectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">→</span>
                    <span>Get strategic advice, not complete code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">→</span>
                    <span>Buy credits for extended consultation</span>
                  </li>
                </ul>
              </div>

              {/* Example Questions */}
              <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                <h3 className="font-semibold mb-4">Example Questions</h3>
                <div className="space-y-2 text-sm">
                  {[
                    "What tech stack should I use for a social app?",
                    "How do I monetize a SaaS product?",
                    "Should I build mobile or web first?",
                    "What features are essential for MVP?"
                  ].map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(q)}
                      className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition text-gray-400 hover:text-white"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ready to Build CTA */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-green-600/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 text-center">
                <p className="text-sm mb-4">Ready to start building?</p>
                <Link
                  href="/builder"
                  className="block w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-green-700 transition"
                >
                  Go to Builder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
