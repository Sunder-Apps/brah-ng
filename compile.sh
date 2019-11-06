#!/bin/bash
ng build --prod --base-href ./
cp docs/index.html 404.html
echo 'www.brahctopus.com' > CNAME