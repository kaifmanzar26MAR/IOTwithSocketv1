#!/usr/bin/env bash
# requires: Nodejs/NPM, PowerShell
# Permission to run PS scripts (for this session only):
# Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process

# exit if cmdlet gives error
$ErrorActionPreference = "Stop"

# Check to see if root CA file exists, download if not
If (!(Test-Path ".\root-CA.crt")) {
    "`nDownloading AWS IoT Root CA certificate from AWS..."
    Invoke-WebRequest -Uri https://www.amazontrust.com/repository/AmazonRootCA1.pem -OutFile root-CA.crt
}

# install AWS Device SDK for NodeJS if not already installed
If (!(Test-Path ".\aws-iot-device-sdk-js-v2")) {
    "`nInstalling AWS SDK..."
    # git clone https://github.com/aws/aws-iot-device-sdk-js-v2.git --recursive
    cd aws-iot-device-sdk-js-v2
    npm install
    # install samples
    cd samples/node/pub_sub
    npm install
    cd ../../../../
}

"`nRunning pub/sub sample application..."
node aws-iot-device-sdk-js-v2\samples\node\pub_sub\pub_sub_dist\index.js --endpoint a2s63c9ds97dfk-ats.iot.ap-south-1.amazonaws.com --ca_file root-CA.crt --key iot_gateway.private.key --cert iot_gateway.cert.pem --client_id sdk-java --topic sdk/test/js

