#!/bin/bash

# Navigate to the frontend directory
cd "$(dirname "$0")/frontend" || exit

echo "🚀 Ensuring dependencies are up to date..."
if [ ! -d "node_modules" ]; then
  npm install
fi

echo "🚀 Starting Cyclosa (Next.js)..."
npm run dev
