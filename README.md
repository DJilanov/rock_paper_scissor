## Description

Rock Paper Scissors NG2 app

## How to install dependencies

Just get npm and type npm install

## How to run

Just type npm run start for JIT compilation and host on localhost:4200 or npm run start-aot for AOT compilation 

## How to deploy

Just type npm run build-prod and deploy the dist folder

## How to test

Just type npm run e2e for e2e tests and npm run test for unit testing

## Known issues

1. If you are using windows and doesn't have Visual Studio, you are most likely recieving:
    MSBUILD : error MSB3428: Could not load the Visual C++ component "VCBuild.exe" 

This error is comning from the SASS module and it is easy fixable by doing this using administrator:
    npm install --global --production windows-build-tools