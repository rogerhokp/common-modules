#!/bin/sh
rm -rf lib
mkdir lib
./node_modules/.bin/babel src -d lib