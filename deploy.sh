#!bin/bash

#PRODUCTION
git reset--hard
git checkout main
git pull origin master

npm i yarn -g
yarn
npm run build

pm2 start "yarn run start:prod" --name=MOKCHA-REACT