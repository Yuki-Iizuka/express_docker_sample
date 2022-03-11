module.exports = class App {
  constructor(port=3000, host='0.0.0.0') {
    this.port = port;
    this.host = host;
  }

  start() {
    const express = require('express');
    const app = express();

    // ルーティング
    const router = require('./router');
    app.use('/', router);

    // 起動
    app.listen(this.port, this.host);
    console.log(`Running on http://${this.host}:${this.port}`);
  }
}
