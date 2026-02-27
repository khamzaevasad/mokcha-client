#!bin/bash

#PRODUCTION
git reset --hard
git checkout main
git pull origin main

npm i yarn -g
yarn
yarn build


pm2 start "yarn run start:prod" --name=MOKCHA-REACT