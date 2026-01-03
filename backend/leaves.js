const leaves = [];

module.exports = {
  apply(req, res) {
    leaves.push({ ...req.body, status: "Pending" });
    res.json({ success: true });
  },
  approve(req, res) {
    leaves[req.params.i].status = "Approved";
    res.json({ success: true });
  },
  list(req, res) {
    res.json(leaves);
  }
};

