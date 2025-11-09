import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export async function POST(req: NextRequest) {
  try {
    const { prompt, model = "gpt-4" } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      console.log("No OpenAI API key - using demo mode");
      return NextResponse.json({
        code: generateDemoApp(prompt),
        message: "Demo mode - Add OPENAI_API_KEY to environment variables for real AI generation"
      });
    }

    // Advanced system prompt for generating complete applications
    const systemPrompt = `You are an expert full-stack developer and application architect. Your job is to generate COMPLETE, PRODUCTION-READY, FULLY FUNCTIONAL applications based on user descriptions.

CRITICAL REQUIREMENTS:
1. Generate a SINGLE, COMPLETE HTML file with ALL code embedded
2. The application must be 100% functional and interactive
3. Include ALL necessary features, not just placeholders
4. Use modern, clean, professional design
5. Make it responsive (mobile, tablet, desktop)
6. Include proper error handling
7. Add smooth animations and transitions
8. Use Tailwind CSS via CDN for styling
9. Write semantic, accessible HTML
10. Include comprehensive JavaScript functionality

STRUCTURE:
- Complete <!DOCTYPE html> document
- All CSS embedded in <style> tags or inline Tailwind classes
- All JavaScript embedded in <script> tags
- Working form submissions, data storage (localStorage), API calls if needed
- Professional UI/UX with attention to detail

STYLE GUIDELINES:
- Modern, clean design with plenty of white space
- Use emerald/green color scheme (#10b981, #059669)
- Dark theme: background #08090a, text white
- Smooth hover effects and transitions
- Professional typography (system fonts or Google Fonts CDN)
- Micro-interactions and delightful details

FUNCTIONALITY:
- All buttons, forms, and interactions must WORK
- Implement proper state management in vanilla JS
- Add data persistence with localStorage when appropriate
- Include proper validation and error messages
- Make it feel like a real production app

DO NOT:
- Use placeholders or "TODO" comments
- Reference external files (except CDN libraries)
- Leave features incomplete
- Generate broken or non-functional code

Generate the COMPLETE application code now:`;

    const userPrompt = `Build a complete, fully functional application: ${prompt}

Requirements:
- Make it production-ready and professional
- Include ALL features needed for this type of app
- Ensure everything works perfectly
- Use best practices for performance and UX
- Add helpful error messages and loading states
- Include example data or demo content if applicable

Generate the COMPLETE HTML code now (single file with embedded styles and scripts):`;

    try {
      const completion = await openai.chat.completions.create({
        model: model === "gpt-4" ? "gpt-4-turbo-preview" : "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
        max_tokens: 4000,
      });

      let code = completion.choices[0]?.message?.content || "";

      // Extract code if wrapped in markdown code blocks
      const codeBlockMatch = code.match(/```html\n([\s\S]*?)\n```/);
      if (codeBlockMatch) {
        code = codeBlockMatch[1];
      } else {
        // Try other code block formats
        const anyCodeBlock = code.match(/```\n([\s\S]*?)\n```/);
        if (anyCodeBlock) {
          code = anyCodeBlock[1];
        }
      }

      // Ensure code starts with DOCTYPE
      if (!code.trim().toLowerCase().startsWith("<!doctype")) {
        code = generateDemoApp(prompt);
      }

      return NextResponse.json({
        code,
        model: model,
        success: true
      });

    } catch (apiError: any) {
      console.error("OpenAI API Error:", apiError.message);

      // Fallback to demo if API fails
      return NextResponse.json({
        code: generateDemoApp(prompt),
        message: `API error - using demo mode: ${apiError.message}`,
        success: false
      });
    }

  } catch (error) {
    console.error("Error generating app:", error);
    return NextResponse.json(
      {
        error: "Failed to generate app",
        details: error instanceof Error ? error.message : "Unknown error",
        code: generateDemoApp("Error occurred")
      },
      { status: 500 }
    );
  }
}

function generateDemoApp(prompt: string): string {
  // Extract key features from prompt
  const isTaskManager = /todo|task|checklist|reminder/i.test(prompt);
  const isChat = /chat|message|conversation/i.test(prompt);
  const isEcommerce = /shop|store|product|cart|ecommerce/i.test(prompt);
  const isDashboard = /dashboard|analytics|stats|metrics/i.test(prompt);

  if (isTaskManager) {
    return generateTaskManagerApp(prompt);
  } else if (isChat) {
    return generateChatApp(prompt);
  } else if (isEcommerce) {
    return generateEcommerceApp(prompt);
  } else if (isDashboard) {
    return generateDashboardApp(prompt);
  }

  // Default app template
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${prompt.slice(0, 60)}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
  </style>
</head>
<body class="bg-[#08090a] min-h-screen text-white">
  <div class="container mx-auto px-4 py-8 max-w-6xl">
    <!-- Header -->
    <header class="mb-12">
      <nav class="flex items-center justify-between py-4 border-b border-white/10">
        <div class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold">A</span>
          </div>
          <h1 class="text-2xl font-bold">${prompt.slice(0, 30)}</h1>
        </div>
        <div class="flex gap-4">
          <button class="text-gray-400 hover:text-white transition">Features</button>
          <button class="bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-green-700 transition">
            Get Started
          </button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="text-center mb-20">
      <h2 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        ${prompt}
        <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
          Made Simple
        </span>
      </h2>
      <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
        A complete solution built with AI. This is a demo - configure your OpenAI API key for full functionality.
      </p>
      <button onclick="handleGetStarted()" class="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition shadow-lg shadow-emerald-500/20">
        Try It Now →
      </button>
    </section>

    <!-- Features Grid -->
    <section class="grid md:grid-cols-3 gap-6 mb-20">
      <div class="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition">
        <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
          <span class="text-2xl">⚡</span>
        </div>
        <h3 class="text-xl font-semibold mb-2">Lightning Fast</h3>
        <p class="text-gray-400">Optimized for speed and performance</p>
      </div>

      <div class="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition">
        <div class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
          <span class="text-2xl">🎨</span>
        </div>
        <h3 class="text-xl font-semibold mb-2">Beautiful Design</h3>
        <p class="text-gray-400">Modern, clean interface</p>
      </div>

      <div class="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition">
        <div class="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-4">
          <span class="text-2xl">🔒</span>
        </div>
        <h3 class="text-xl font-semibold mb-2">Secure & Reliable</h3>
        <p class="text-gray-400">Built with best practices</p>
      </div>
    </section>

    <!-- Interactive Demo -->
    <section class="bg-gradient-to-br from-emerald-500/10 to-green-600/10 border border-emerald-500/20 rounded-3xl p-12">
      <h2 class="text-3xl font-bold mb-8 text-center">Try the Demo</h2>
      <div class="max-w-2xl mx-auto">
        <div class="bg-white/5 rounded-xl p-6 mb-4">
          <input
            type="text"
            id="demoInput"
            placeholder="Enter something..."
            class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition"
          />
        </div>
        <button
          onclick="handleDemoAction()"
          class="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-700 transition"
        >
          Execute Action
        </button>
        <div id="demoOutput" class="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg hidden">
          <p class="text-emerald-400"></p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="mt-20 pt-8 border-t border-white/10 text-center text-gray-500">
      <p>🤖 Built with AI • Powered by Build.App</p>
      <p class="text-sm mt-2">Add your OpenAI API key for full AI-powered generation</p>
    </footer>
  </div>

  <script>
    function handleGetStarted() {
      const output = document.getElementById('demoOutput');
      output.classList.remove('hidden');
      output.querySelector('p').textContent = '✅ Great! This demo is working. Add your OpenAI API key to generate custom apps!';
      setTimeout(() => output.classList.add('hidden'), 5000);
    }

    function handleDemoAction() {
      const input = document.getElementById('demoInput');
      const output = document.getElementById('demoOutput');
      const value = input.value;

      if (!value.trim()) {
        output.classList.remove('hidden');
        output.querySelector('p').textContent = '⚠️ Please enter something first!';
        output.querySelector('p').className = 'text-yellow-400';
        setTimeout(() => output.classList.add('hidden'), 3000);
        return;
      }

      output.classList.remove('hidden');
      output.querySelector('p').textContent = \`✅ Action completed: "\${value}"\`;
      output.querySelector('p').className = 'text-emerald-400';
      input.value = '';

      setTimeout(() => output.classList.add('hidden'), 3000);
    }

    // Add keyboard support
    document.getElementById('demoInput')?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleDemoAction();
    });
  </script>
</body>
</html>`;
}

// Specialized demo app generators
function generateTaskManagerApp(prompt: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Manager - ${prompt.slice(0, 30)}</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#08090a] min-h-screen text-white p-8">
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-8 text-center">
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">Task Manager</span>
    </h1>

    <div class="bg-white/[0.02] border border-white/10 rounded-2xl p-6 mb-6">
      <div class="flex gap-2">
        <input
          type="text"
          id="taskInput"
          placeholder="What needs to be done?"
          class="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500"
        />
        <button
          onclick="addTask()"
          class="bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700"
        >
          Add
        </button>
      </div>
    </div>

    <div id="taskList" class="space-y-2"></div>
  </div>

  <script>
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    function renderTasks() {
      const list = document.getElementById('taskList');
      list.innerHTML = tasks.map((task, i) => \`
        <div class="bg-white/[0.02] border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:border-emerald-500/30 transition">
          <input type="checkbox" \${task.done ? 'checked' : ''} onchange="toggleTask(\${i})" class="w-5 h-5">
          <span class="\${task.done ? 'line-through text-gray-500' : ''} flex-1">\${task.text}</span>
          <button onclick="deleteTask(\${i})" class="text-red-400 hover:text-red-300">Delete</button>
        </div>
      \`).join('');
    }

    function addTask() {
      const input = document.getElementById('taskInput');
      if (input.value.trim()) {
        tasks.push({ text: input.value, done: false });
        input.value = '';
        saveTasks();
      }
    }

    function toggleTask(i) {
      tasks[i].done = !tasks[i].done;
      saveTasks();
    }

    function deleteTask(i) {
      tasks.splice(i, 1);
      saveTasks();
    }

    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks();
    }

    document.getElementById('taskInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });

    renderTasks();
  </script>
</body>
</html>`;
}

function generateChatApp(prompt: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat App</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#08090a] min-h-screen text-white">
  <div class="max-w-4xl mx-auto p-4 h-screen flex flex-col">
    <header class="py-4 border-b border-white/10 mb-4">
      <h1 class="text-2xl font-bold text-emerald-400">Chat App</h1>
    </header>
    <div id="messages" class="flex-1 overflow-y-auto space-y-4 mb-4"></div>
    <div class="flex gap-2">
      <input type="text" id="messageInput" placeholder="Type a message..." class="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500"/>
      <button onclick="sendMessage()" class="bg-gradient-to-r from-emerald-500 to-green-600 px-6 rounded-lg">Send</button>
    </div>
  </div>
  <script>
    let messages = [];
    function sendMessage() {
      const input = document.getElementById('messageInput');
      if (input.value.trim()) {
        messages.push({ text: input.value, time: new Date().toLocaleTimeString(), user: 'You' });
        input.value = '';
        renderMessages();
      }
    }
    function renderMessages() {
      document.getElementById('messages').innerHTML = messages.map(m =>
        \`<div class="bg-white/5 rounded-lg p-4"><strong>\${m.user}:</strong> \${m.text} <span class="text-xs text-gray-500 ml-2">\${m.time}</span></div>\`
      ).join('');
    }
    document.getElementById('messageInput').addEventListener('keypress', e => e.key === 'Enter' && sendMessage());
  </script>
</body>
</html>`;
}

function generateEcommerceApp(prompt: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shop</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#08090a] text-white">
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-8 text-emerald-400">Shop</h1>
    <div id="products" class="grid md:grid-cols-3 gap-6"></div>
    <div id="cart" class="fixed bottom-4 right-4 bg-emerald-600 text-white px-6 py-3 rounded-full cursor-pointer">Cart: 0</div>
  </div>
  <script>
    const products = [
      {name: 'Product 1', price: 29.99},
      {name: 'Product 2', price: 49.99},
      {name: 'Product 3', price: 19.99}
    ];
    let cart = 0;
    document.getElementById('products').innerHTML = products.map((p, i) =>
      \`<div class="bg-white/5 rounded-xl p-6"><h3 class="font-bold text-xl mb-2">\${p.name}</h3><p class="text-emerald-400 mb-4">$\${p.price}</p><button onclick="cart++; updateCart()" class="bg-emerald-600 w-full py-2 rounded-lg">Add to Cart</button></div>\`
    ).join('');
    function updateCart() {
      document.getElementById('cart').textContent = 'Cart: ' + cart;
    }
  </script>
</body>
</html>`;
}

function generateDashboardApp(prompt: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#08090a] text-white p-8">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold mb-8">Analytics Dashboard</h1>
    <div class="grid md:grid-cols-4 gap-6 mb-8">
      ${[
        { label: 'Users', value: '10,234', change: '+12%' },
        { label: 'Revenue', value: '$45,231', change: '+8%' },
        { label: 'Orders', value: '523', change: '+23%' },
        { label: 'Growth', value: '34%', change: '+5%' }
      ].map(stat => `
        <div class="bg-white/5 border border-white/10 rounded-xl p-6">
          <p class="text-gray-400 text-sm mb-2">${stat.label}</p>
          <p class="text-3xl font-bold mb-1">${stat.value}</p>
          <p class="text-emerald-400 text-sm">${stat.change} from last month</p>
        </div>
      `).join('')}
    </div>
  </div>
</body>
</html>`;
}
