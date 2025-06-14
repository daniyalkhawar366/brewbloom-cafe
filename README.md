# BrewBloom Café Website

A modern, responsive website for BrewBloom Café built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design
- ✨ Smooth animations and transitions
- 🌙 Dark/Light mode support
- 📱 Mobile-first approach
- 🎯 SEO optimized
- ⚡ Fast performance

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide Icons
- **Fonts:** Google Fonts (Poppins, Lora, Dancing Script)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd brewbloom-cafe
   ```

2. Install dependencies:
   ```bash
   # Make the install script executable
   chmod +x install-deps.sh
   
   # Run the installation script
   ./install-deps.sh
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── ui/            # UI components
│   └── navbar.tsx     # Navigation component
├── lib/               # Utility functions
└── public/            # Static assets
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 