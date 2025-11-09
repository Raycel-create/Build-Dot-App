# Emergent - AI-Powered App Builder

A full-featured clone of emergent.sh built with Next.js, TypeScript, and AI capabilities. Build applications using natural language - no coding required!

![Emergent](https://img.shields.io/badge/Built%20with-Next.js-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-cyan)

## Features

- 🤖 **AI-Powered Generation**: Describe your app in plain English and watch AI create it
- ⚡ **Lightning Fast**: Built on Next.js 14+ with App Router for optimal performance
- 🎨 **Beautiful Design**: Modern, responsive UI with Tailwind CSS
- 📱 **Responsive Preview**: Test your apps on desktop, tablet, and mobile views
- 💾 **Export Functionality**: Download your generated apps as standalone HTML files
- 🔧 **Fully Customizable**: Fine-tune generated code or let AI handle everything

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **AI**: Vercel AI SDK with OpenAI GPT-4
- **Runtime**: Edge Functions for fast API responses

## Getting Started

### Prerequisites

- Node.js 18+ installed
- (Optional) OpenAI API key for AI generation

### Installation

1. Clone the repository and navigate to the directory:
```bash
cd test_app
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Configure your OpenAI API key:
```bash
cp .env.example .env.local
# Edit .env.local and add your OPENAI_API_KEY
```

**Note**: The app works in demo mode without an API key!

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
test_app/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts          # AI generation API endpoint
│   ├── builder/
│   │   └── page.tsx              # Main app builder interface
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles
├── components/                   # Reusable components (future)
├── lib/                         # Utility functions (future)
├── public/                      # Static assets
├── .env.example                 # Environment variables template
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## Usage

### Creating an App

1. Navigate to the builder at `/builder` or click "Get Started" on the homepage
2. Describe your app in the text area (e.g., "Create a todo list with a clean design")
3. Click "Generate App"
4. View the live preview in the right panel
5. Switch between desktop, tablet, and mobile views
6. Export your app as an HTML file

### Demo Mode

Without an OpenAI API key, the app runs in demo mode and generates beautiful template apps based on your prompt. To enable full AI generation:

1. Get an API key from [OpenAI](https://platform.openai.com/api-keys)
2. Add it to `.env.local`:
```
OPENAI_API_KEY=your_key_here
```
3. Restart the dev server

## Features in Detail

### Landing Page
- Beautiful gradient hero section
- Feature showcase grid
- Call-to-action sections
- Responsive navigation

### App Builder
- Split-pane interface (input/preview)
- Real-time code generation
- Device preview modes (desktop/tablet/mobile)
- Code viewer with syntax highlighting
- One-click export functionality

### AI Integration
- Uses OpenAI GPT-4 Turbo for code generation
- Generates complete, self-contained HTML apps
- Includes Tailwind CSS for styling
- Creates interactive, functional applications

## Customization

### Changing AI Models

Edit `app/api/generate/route.ts`:

```typescript
const { text } = await generateText({
  model: openai("gpt-4-turbo"), // Change model here
  // ... rest of config
});
```

### Styling

All styles use Tailwind CSS. Customize colors in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    },
  },
}
```

## Roadmap

- [ ] User authentication and project saving
- [ ] Multiple AI model support (Claude, Gemini)
- [ ] Component library integration
- [ ] Real-time collaboration
- [ ] Template marketplace
- [ ] Direct deployment to Vercel/Netlify
- [ ] Database integration options

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC License

## Acknowledgments

- Inspired by [emergent.sh](https://emergent.sh)
- Built with [Next.js](https://nextjs.org)
- Powered by [Vercel AI SDK](https://sdk.vercel.ai)

---

**Built with ❤️ and AI**
