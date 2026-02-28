#!/bin/bash
set -e

APP_NAME="MOKCHA-REACT"
PORT=4173

echo "▶ Checkout main"
git checkout main

echo "▶ Reset and pull"
git reset --hard
git pull origin main

echo "▶ Node version"
node -v

echo "▶ Install dependencies"
rm -rf node_modules
yarn install

echo "▶ Build project"
yarn build

echo "▶ Restart PM2 (vite preview on port $PORT)"
pm2 delete $APP_NAME || true
pm2 start "npx vite preview --host --port $PORT" --name $APP_NAME

pm2 save

echo "✅ Deploy finished successfully"