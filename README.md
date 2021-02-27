# monkeytype-rpc
Discord Rich Presence implementation for monkeytype.

## Installation
1. Download the repository, either by downloading the ZIP and extracting it or by cloning it using git.
2. Make sure you have [nodejs](https://nodejs.org/en/) 14 installed and then cd into the directory.
3. `npm i`
4. `npm start`
5. Open https://monkeytype.com/ in your browser and paste the contents of web.js into your developer console.
6. You will have to do step 5 every time you refresh the tab.

## Shitty Implementation
I don't think that this is a proper way to do this because it relies on the website not updating the document IDs.

You also have to rerun the web code for it to connect to the websocket every time you reload the tab.

I might redo this if there's a better way to do this. 