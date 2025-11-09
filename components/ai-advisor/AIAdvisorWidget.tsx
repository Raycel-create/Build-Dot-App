"use client";

import { useState, useEffect } from "react";
import { getCreditUsage, useMessage, addPaidCredits, getCreditsInfo, CreditUsage } from "@/lib/utils/credits";

type AIModel = "grok" | "claude" | "chatgpt" | "deepseek" | "emergent";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIAdvisorWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAI, setSelectedAI] = useState<AIModel | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [credits, setCredits] = useState<CreditUsage | null>(null);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    setCredits(getCreditUsage());
  }, []);

  const aiModels = [
    {
      id: "grok" as AIModel,
      name: "Grok",
      icon: "⚡",
      description: "Creative & innovative ideas",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: "claude" as AIModel,
      name: "Claude",
      icon: "🧠",
      description: "Thoughtful & detailed advice",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "chatgpt" as AIModel,
      name: "ChatGPT",
      icon: "🤖",
      description: "Versatile & practical guidance",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "deepseek" as AIModel,
      name: "DeepSeek",
      icon: "🔍",
      description: "Technical & thorough analysis",
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: "emergent" as AIModel,
      name: "Emergent Advisor",
      icon: "✨",
      description: "Specialized app building expert",
      color: "from-emerald-500 to-green-600"
    }
  ];

  const handleSendMessage = async () => {
    if (!input.trim() || !selectedAI || !credits) return;

    // Check credits
    const result = useMessage();
    if (!result.success) {
      setShowPayment(true);
      return;
    }

    setCredits(result.usage);

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (in production, call your API)
    setTimeout(() => {
      const aiResponse = generateAIResponse(selectedAI, input);
      const assistantMessage: Message = {
        role: "assistant",
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (model: AIModel, question: string): string => {
    const responses = {
      grok: `Great question! For "${question.slice(0, 50)}...", I'd suggest thinking outside the box. Consider building something that combines multiple functionalities - users love apps that solve more than one problem. What if you added social features or gamification? Let's explore what makes your idea unique!`,
      claude: `Let me help you think through "${question.slice(0, 50)}...". First, let's clarify your target audience and core value proposition. A successful app needs: 1) A clear problem it solves, 2) A simple user experience, 3) A unique advantage over existing solutions. What specific pain point are you addressing?`,
      chatgpt: `For your idea about "${question.slice(0, 50)}...", here's my advice: Start with an MVP (Minimum Viable Product) that focuses on one core feature done exceptionally well. Don't try to build everything at once. What's the ONE thing users absolutely need from this app?`,
      deepseek: `Analyzing "${question.slice(0, 50)}...":\n\nKey considerations:\n• Market research: Who are your competitors?\n• Technical feasibility: What's the complexity level?\n• Monetization: How will you generate revenue?\n• Scalability: Can it grow with demand?\n\nLet's dive deeper into the technical architecture you'll need.`,
      emergent: `Welcome! I'm the Emergent Advisor, specialized in app building. For "${question.slice(0, 50)}...", I recommend:\n\n1. Define your app's core purpose in one sentence\n2. List 3-5 essential features (not nice-to-haves)\n3. Consider your tech stack based on requirements\n4. Plan your MVP timeline\n\nOnce you have clarity, use our Builder to generate the actual app. What's your main goal with this application?`
    };

    return responses[model];
  };

  const handleBuyCredits = () => {
    // In production, integrate with Stripe or your payment processor
    const newCredits = addPaidCredits();
    setCredits(newCredits);
    setShowPayment(false);
    alert("✅ Successfully added 25 messages! You can now continue chatting.");
  };

  const creditsInfo = getCreditsInfo();

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all hover:scale-110 group"
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">💡</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium">
            Need Help?
          </span>
        </div>
        {credits && (credits.freeMessagesLeft > 0 || credits.paidCredits > 0) && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {credits.freeMessagesLeft + credits.paidCredits}
          </div>
        )}
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-[#0a0b0c] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-600/10 border-b border-white/10 p-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-white">AI Advisor</h2>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setSelectedAI(null);
                    setMessages([]);
                  }}
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Not sure what application to build? Let us help you so you won't waste credentials.
              </p>

              {/* Credits Display */}
              {credits && (
                <div className="flex gap-4 text-sm">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2">
                    <span className="text-emerald-400 font-semibold">{credits.freeMessagesLeft}</span>
                    <span className="text-gray-400 ml-1">free messages left today</span>
                  </div>
                  {credits.paidCredits > 0 && (
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-4 py-2">
                      <span className="text-blue-400 font-semibold">{credits.paidCredits}</span>
                      <span className="text-gray-400 ml-1">paid messages</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto" style={{ maxHeight: "calc(90vh - 200px)" }}>
              {!selectedAI ? (
                /* AI Selection */
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Choose an AI assistant to guide you:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {aiModels.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => setSelectedAI(model.id)}
                        className="group bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-emerald-500/50 rounded-2xl p-6 text-left transition-all"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${model.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                          {model.icon}
                        </div>
                        <h4 className="text-white font-semibold text-lg mb-2">{model.name}</h4>
                        <p className="text-gray-400 text-sm">{model.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Chat Interface */
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                    <div className={`w-10 h-10 bg-gradient-to-r ${aiModels.find(m => m.id === selectedAI)?.color} rounded-lg flex items-center justify-center text-xl`}>
                      {aiModels.find(m => m.id === selectedAI)?.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{aiModels.find(m => m.id === selectedAI)?.name}</h4>
                      <p className="text-gray-500 text-xs">{aiModels.find(m => m.id === selectedAI)?.description}</p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedAI(null);
                        setMessages([]);
                      }}
                      className="ml-auto text-gray-400 hover:text-white text-sm"
                    >
                      Change AI
                    </button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 space-y-4 mb-4 overflow-y-auto max-h-96">
                    {messages.length === 0 && (
                      <div className="text-center text-gray-500 py-8">
                        <p className="text-lg mb-2">👋 Hi! I'm here to help you brainstorm your app idea.</p>
                        <p className="text-sm">Ask me anything about features, target audience, or app concepts!</p>
                      </div>
                    )}
                    {messages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] rounded-2xl p-4 ${
                          msg.role === "user"
                            ? "bg-gradient-to-r from-emerald-500 to-green-600 text-white"
                            : "bg-white/5 border border-white/10 text-gray-200"
                        }`}>
                          <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                          <p className="text-xs opacity-60 mt-2">
                            {msg.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
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
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Ask for advice about your app idea..."
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition text-sm"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!input.trim() || isLoading}
                      className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-green-700 transition disabled:opacity-50"
                    >
                      Send
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-[#0a0b0c] border border-white/10 rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-4">Out of Messages</h3>
            <p className="text-gray-400 mb-6">
              You've used your {creditsInfo.FREE_MESSAGES_PER_DAY} free messages today.
              Unlock {creditsInfo.PAID_CREDITS_MESSAGES} more questions for just ${creditsInfo.PAID_CREDITS_COST}!
            </p>
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-600/10 border border-emerald-500/20 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold">25 Messages</span>
                <span className="text-2xl font-bold text-emerald-400">${creditsInfo.PAID_CREDITS_COST}</span>
              </div>
              <p className="text-gray-400 text-sm">Valid for 30 days</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPayment(false)}
                className="flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-xl hover:bg-white/10 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleBuyCredits}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
