const attendance = [];

module.exports = {
  log(req, res) {
    attendance.push(req.body);
    res.json({ success: true });
  },
  list(req, res) {
    res.json(attendance);
  }
};

