#!/bin/bash
ng build --prod
cp docs/index.html 404.html
echo 'www.brahctopus.com' > CNAME