const payroll = {
  2: { salary: 50000, bonus: 5000 }
};

module.exports = (req, res) => {
  res.json(payroll[req.params.id]);
};

