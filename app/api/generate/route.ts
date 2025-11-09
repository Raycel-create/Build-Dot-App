import { NextRequest, NextResponse } from "next/server";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is configured
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      // Return a demo response if no API key
      return NextResponse.json({
        code: generateDemoApp(prompt),
        message: "Demo mode - configure OPENAI_API_KEY for AI generation"
      });
    }

    const systemPrompt = `You are an expert web developer. Generate a complete, self-contained HTML application based on the user's description.

Requirements:
- Create a single HTML file with embedded CSS and JavaScript
- Use Tailwind CSS via CDN for styling
- Make it responsive and beautiful
- Include interactive functionality where appropriate
- Use modern, clean design patterns
- The app should be fully functional
- Use semantic HTML
- Add smooth transitions and animations
- Only return the HTML code, nothing else`;

    const { text } = await generateText({
      model: openai("gpt-4-turbo"),
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
    });

    // Extract code if wrapped in markdown code blocks
    let code = text;
    const codeBlockMatch = text.match(/```html\n([\s\S]*?)\n```/);
    if (codeBlockMatch) {
      code = codeBlockMatch[1];
    }

    return NextResponse.json({ code });
  } catch (error) {
    console.error("Error generating app:", error);
    return NextResponse.json(
      { error: "Failed to generate app", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

function generateDemoApp(prompt: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${prompt.slice(0, 50)}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen p-8">
  <div class="max-w-5xl mx-auto">
    <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
        <h1 class="text-4xl font-bold mb-2">${prompt}</h1>
        <p class="text-purple-100">AI-Generated Application</p>
      </div>

      <!-- Content -->
      <div class="p-8">
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white transform hover:scale-105 transition">
            <div class="text-3xl mb-3">✨</div>
            <h2 class="text-2xl font-bold mb-2">Feature One</h2>
            <p class="text-purple-100">Powerful functionality tailored to your needs.</p>
          </div>

          <div class="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white transform hover:scale-105 transition">
            <div class="text-3xl mb-3">🚀</div>
            <h2 class="text-2xl font-bold mb-2">Feature Two</h2>
            <p class="text-blue-100">Lightning-fast performance and reliability.</p>
          </div>
        </div>

        <!-- Interactive Section -->
        <div class="bg-gray-50 rounded-xl p-6 mb-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-4">Interactive Demo</h3>
          <div class="flex gap-4">
            <button
              onclick="handleClick()"
              class="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105"
            >
              Action Button
            </button>
            <button
              onclick="handleSecondClick()"
              class="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition transform hover:scale-105"
            >
              Secondary Action
            </button>
          </div>
          <div id="output" class="mt-4 p-4 bg-white rounded-lg border-2 border-gray-200 hidden">
            <p class="text-gray-700"></p>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="text-center p-4 bg-purple-50 rounded-lg">
            <div class="text-3xl font-bold text-purple-600">100+</div>
            <div class="text-sm text-gray-600">Users</div>
          </div>
          <div class="text-center p-4 bg-blue-50 rounded-lg">
            <div class="text-3xl font-bold text-blue-600">50+</div>
            <div class="text-sm text-gray-600">Features</div>
          </div>
          <div class="text-center p-4 bg-pink-50 rounded-lg">
            <div class="text-3xl font-bold text-pink-600">24/7</div>
            <div class="text-sm text-gray-600">Support</div>
          </div>
        </div>

        <!-- Footer -->
        <div class="text-center text-gray-500 pt-6 border-t border-gray-200">
          <p>🤖 Built with AI • Powered by Emergent</p>
          <p class="text-sm mt-2">Configure OPENAI_API_KEY for real AI generation</p>
        </div>
      </div>
    </div>
  </div>

  <script>
    function handleClick() {
      const output = document.getElementById('output');
      output.classList.remove('hidden');
      output.querySelector('p').textContent = '✅ Action completed successfully! Your app is working.';
      setTimeout(() => output.classList.add('hidden'), 3000);
    }

    function handleSecondClick() {
      const output = document.getElementById('output');
      output.classList.remove('hidden');
      output.querySelector('p').textContent = '⚡ Secondary action triggered! Everything is functioning perfectly.';
      setTimeout(() => output.classList.add('hidden'), 3000);
    }
  </script>
</body>
</html>`;
}
