#!/bin/sh
if [ ! -f /data/ipfs/config ]; then
    ipfs init
    ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin  '["*"]'
    ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "POST", "GET"]'
fi
ipfs daemon --migrate=true