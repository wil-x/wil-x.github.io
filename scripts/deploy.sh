#!/usr/bin/env sh

set -e

npm run build

cd app/.vuepress/dist

echo 'wilx.fun' > CNAME

git init
git add -A
git commit -m 'DEOLOY :rocket:'
git push -f git@github.com:wil-x/wil-x.github.io.git master

cd -

rm -rf app/.vuepress/dist/.git
