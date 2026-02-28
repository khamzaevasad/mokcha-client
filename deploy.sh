#!/bin/bash
set -e

APP_NAME="MOKCHA-REACT"
PORT=4173
BRANCH="main"

echo "▶ Deploy started (branch: $BRANCH)"

git checkout $BRANCH

git reset --hard
git pull origin $BRANCH

echo "▶ Node version:"
node -v

echo "▶ Install dependencies"
rm -rf node_modules
yarn install

echo "▶ Build project"
yarn build

echo "▶ Restart PM2"
pm2 delete $APP_NAME || true
pm2 start "npx vite preview --host --port $PORT" --name $APP_NAME

pm2 save

echo "✅ Deploy finished successfully (main)"