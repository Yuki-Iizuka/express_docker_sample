module.exports = class StatusHandler {
  static get(_req, res) {
    res.json({ status: 'ok' });
  }
}
