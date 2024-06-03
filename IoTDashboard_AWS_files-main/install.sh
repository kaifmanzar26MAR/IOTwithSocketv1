#!/usr/bin/env bash
# stop script on error
set -e

# Check to see if root CA file exists, download if not
if [ ! -f ./root-CA.crt ]; then
  printf "\nDownloading AWS IoT Root CA certificate from AWS...\n"
  curl https://www.amazontrust.com/repository/AmazonRootCA1.pem > root-CA.crt
fi

CWD=`pwd`

# install AWS Device SDK for NodeJS if not already installed + pubsub sample
if [ ! -d ./aws-iot-device-sdk-js-v2 ]; then
  printf "\nInstalling AWS SDK...\n"
  git clone https://github.com/aws/aws-iot-device-sdk-js-v2.git --recursive
  cd aws-iot-device-sdk-js-v2
  npm install
  # samples require their own install
  cd samples/node/pub_sub
  npm install
  cd $CWD
fi
