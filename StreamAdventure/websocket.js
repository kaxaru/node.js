var webSocket = require('websocket-stream');
webSocket('ws://localhost:8000').end('hello\n');
