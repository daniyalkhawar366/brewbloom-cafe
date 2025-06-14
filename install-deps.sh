#!/bin/bash

# Install Next.js and React dependencies
npm install next@latest react@latest react-dom@latest

# Install UI and styling dependencies
npm install @radix-ui/react-avatar @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-slot @radix-ui/react-tabs @radix-ui/react-toggle-group
npm install class-variance-authority clsx tailwind-merge tailwindcss-animate
npm install lucide-react

# Install animation dependencies
npm install framer-motion

# Install development dependencies
npm install -D @types/node @types/react @types/react-dom
npm install -D autoprefixer postcss tailwindcss
npm install -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D eslint eslint-config-next

# Initialize Tailwind CSS
npx tailwindcss init -p 